import * as vscode from "vscode";
import USFMParser from "sj-usfm-grammar";
import { getNonce } from "../utilities/getNonce";
import { getUri } from "../utilities/getUri";
import { MessageType } from "./messageTypes";
import {
  getMd5Hash,
  isCacheValid,
  readCache,
  writeCache,
  deleteOldCacheFile,
  getCacheMapFromFile,
  updateCacheMapToFile,
} from "../handlers/cacheUtils";

export class USFMEditorProvider implements vscode.CustomTextEditorProvider {
  private _webview: vscode.Webview | undefined;
  private _context: vscode.ExtensionContext | undefined;
  private _usfmParser: any | undefined;
  private _usfmParserInitialized: Promise<void> | undefined;
  private _usj: any | undefined;

  public static register(context: vscode.ExtensionContext): vscode.Disposable {
    const provider = new USFMEditorProvider(context);
    const providerRegistration = vscode.window.registerCustomEditorProvider(
      USFMEditorProvider.viewType,
      provider
    );
    return providerRegistration;
  }

  private static readonly viewType = "scribe-lexical-vsc.scribeLexicalEditor";

  constructor(private readonly context: vscode.ExtensionContext) {
    this._context = context;
  }

  public async resolveCustomTextEditor(
    document: vscode.TextDocument,
    webviewPanel: vscode.WebviewPanel,
    _token: vscode.CancellationToken
  ): Promise<void> {
    // Setup initial content for the webview
    webviewPanel.webview.options = {
      enableScripts: true,
    };
    webviewPanel.webview.html = this.getHtmlForWebview(
      webviewPanel.webview,
      this.context.extensionUri
    );

    const updateWebview = async () => {
      const filePath = document.uri.fsPath;
      const usfmContent = document.getText();
      const cachedData = await this.handleCache(filePath, usfmContent);
      if (cachedData.error) {
        console.error("Error parsing USFM", cachedData.error);
        vscode.window.showErrorMessage(`USFM Error : ${cachedData.error}`);
        // webviewPanel.dispose();
        return;
      }
      const { usj } = cachedData;
      webviewPanel.webview.postMessage({
        type: "update",
        payload: { usj },
      });
    };

    webviewPanel.onDidChangeViewState((e) => {

      if (e.webviewPanel.active) {
        updateWebview();
      }
    });

    const changeDocumentSubscription = vscode.workspace.onDidChangeTextDocument(
      (e) => {
        if (e.document.uri.toString() === document.uri.toString()) {
          // updateWebview();
        }
      }
    );

    // Make sure we get rid of the listener when our editor is closed.
    webviewPanel.onDidDispose(() => {
      changeDocumentSubscription.dispose();
    });

    // webviewPanel.webview.onDidReceiveMessage(async (e) => {
    //   switch (e.type) {
    //     case MessageType.updateDocument: {
    //       if (e.payload?.usj.content.length > 0) {
    //         const usfm = await this.convertUsjToUsfm(e.payload?.usj);
    //         const filePath = document.uri.fsPath;
    //         await this.handleCache(filePath, usfm);
    //         // writeCache(oldHash, usj);

    //         const edit = new vscode.WorkspaceEdit();
    //         edit.replace(
    //           document.uri,
    //           new vscode.Range(0, 0, document.lineCount, 0),
    //           usfm as string
    //         );
    //         vscode.workspace.applyEdit(edit);
    //       }
    //       return;
    //     }
    //   }
    // });
    webviewPanel.webview.onDidReceiveMessage(async (e) => {
      switch (e.type) {
        case MessageType.updateDocument: {
          if (e.payload?.usj.content.length > 0) {
            const usj = e.payload?.usj;

            // Convert USJ to USFM
            const usfm = await this.convertUsjToUsfm(usj);

            const filePath = document.uri.fsPath;

            // Update the cache with the new USJ content
            await this.updateCache(filePath, usj, usfm);

            // Update the document with the new USFM content
            const edit = new vscode.WorkspaceEdit();
            edit.replace(
              document.uri,
              new vscode.Range(0, 0, document.lineCount, 0),
              usfm as string
            );
            await vscode.workspace.applyEdit(edit);
          }
          return;
        }
      }
    });

    updateWebview();
  }

  /**
   * Get the static html used for the editor webviews.
   */
  private getHtmlForWebview(
    webview: vscode.Webview,
    extensionUri: vscode.Uri
  ): string {
    // Local path to script and css for the webview
    const stylesUri = getUri(webview, extensionUri, [
      "webviews",
      "build",
      "assets",
      "index.css",
    ]);
    // The View JS file from the React build output
    const scriptUri = getUri(webview, extensionUri, [
      "webviews",
      "build",
      "assets",
      "index.js",
    ]);

    const nonce = getNonce();

    return /*html*/ `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';"> -->
            <link rel="stylesheet" type="text/css" href="${stylesUri}">
            <title>Translation Questions Webview</title>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
          </body>
        </html>`;
  }

  private async getUsfmParserInstance(): Promise<any> {
    if (!this._usfmParser) {
      if (!this._usfmParserInitialized) {
        this._usfmParserInitialized = await USFMParser.init();
      }
      await this._usfmParserInitialized;
      this._usfmParser = new USFMParser();
    }
    return this._usfmParser;
  }

  private async convertUsfmToUsj(usfm: string) {
    const usfmParser = await this.getUsfmParserInstance();
    try {
      const usj = usfmParser.usfmToUsj(usfm);
      return { usj };
    } catch (e) {
      return { usj: { content: [] }, error: e };
    }
  }

  private async convertUsjToUsfm(usj: JSON) {
    const usfmParser = await this.getUsfmParserInstance();
    const usfm = usfmParser.usjToUsfm(usj);
    return usfm;
  }

  private async handleCache(
    filePath: string,
    usfmContent: string
  ): Promise<any> {
    const newHash = getMd5Hash(usfmContent);
    // const cacheMap = getCacheMap(this.context);
    const fileCacheMap = getCacheMapFromFile(this.context);
    const oldHash = fileCacheMap[filePath];
    if (oldHash && isCacheValid(oldHash) && oldHash === newHash) {
      // Cache hit with the old hash
      console.log("Cache hit");
      return { usj: await readCache(oldHash) };
    } else {
      // Cache miss or content changed
      console.log("Cache miss or content changed");
      if (oldHash) {
        deleteOldCacheFile(oldHash);
      }
      const { usj, error } = await this.convertUsfmToUsj(usfmContent);
      if (error) {
        console.error("Error parsing USFM", error);
        return { error };
      }
      writeCache(newHash, usj);
      updateCacheMapToFile(this.context, filePath, newHash);
      return { usj };
    }
  }

  private async updateCache(
    filePath: string,
    usj: any,
    usfm: string
  ): Promise<void> {
    const newHash = getMd5Hash(usfm);
    // const cacheMap = getCacheMap(this.context);
    const fileCacheMap = getCacheMapFromFile(this.context);
    const oldHash = fileCacheMap[filePath];

    // Write the new USJ content to the existing cache file if the hash matches
    if (oldHash && isCacheValid(oldHash) && oldHash === newHash) {
      writeCache(oldHash, usj);
    } else {
      // If the hash doesn't match, update the cache map with the new hash and write the new cache
      if (oldHash) {
        deleteOldCacheFile(oldHash);
      }
      writeCache(newHash, usj);
      // updateCacheMap(this.context, filePath, newHash);
      updateCacheMapToFile(this.context, filePath, newHash);
    }
  }
}
