import * as vscode from "vscode";
import { MessageType } from "../../types";
import { ExtensionProvider } from "../extensionProvider";
import { getDownloadedResourcesFromProjectConfig } from "../../utilities/projectConfig";
import { getNonce, getUri } from "../../utilities";

export class AddedResourcesProvider implements vscode.WebviewViewProvider {
  private _webviewView: vscode.WebviewView | undefined;
  private _context: vscode.ExtensionContext | undefined;

  public static register(context: vscode.ExtensionContext): vscode.Disposable {
    const provider = new AddedResourcesProvider(context);
    const providerRegistration = vscode.window.registerWebviewViewProvider(
      AddedResourcesProvider.viewType,
      provider
    );
    return providerRegistration;
  }

  private static readonly viewType = "codex.resources.added";

  constructor(private readonly context: vscode.ExtensionContext) {
    this._context = context;
  }

  public async resolveWebviewView(
    webviewPanel: vscode.WebviewView,
    ctx: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ): Promise<void> {
    webviewPanel.webview.options = {
      enableScripts: true,
    };
    webviewPanel.webview.html = this._getWebviewContent(
      webviewPanel.webview,
      this.context.extensionUri
    );

    // Receive message from the webview.
    webviewPanel.webview.onDidReceiveMessage(
      async (e: { type: MessageType; payload: unknown }) => {
        switch (e.type) {
          case MessageType.OPEN_RESOURCE: {
            if (!this._context) {
              console.error("Context not found");
              return;
            }
            await ExtensionProvider.openResource(
              (e.payload as any)?.resource,
              this._context?.extensionUri
            );
            break;
          }

          case MessageType.SYNC_DOWNLOADED_RESOURCES: {
            const downloadedResources =
              await getDownloadedResourcesFromProjectConfig();

            await webviewPanel?.webview.postMessage({
              type: MessageType.SYNC_DOWNLOADED_RESOURCES,
              payload: { downloadedResources },
            });
            break;
          }
          default:
            break;
        }
      }
    );

    this._webviewView = webviewPanel;
  }

  public revive(panel: vscode.WebviewView) {
    this._webviewView = panel;
  }

  private _getWebviewContent(
    webview: vscode.Webview,
    extensionUri: vscode.Uri
  ) {
    // The CSS file from the React build output

    const stylesUri = getUri(webview, extensionUri, [
      "ui",
      "build",
      "assets",
      "index.css",
    ]);
    // The View JS file from the React build output
    const scriptUri = getUri(webview, extensionUri, [
      "ui",
      "build",
      "assets",
      "views",
      "AddedResources.js",
    ]);

    const codiconsUri = getUri(webview, extensionUri, [
      "node_modules",
      "@vscode/codicons",
      "dist",
      "codicon.css",
    ]);

    const nonce = getNonce();

    // Tip: Install the es6-string-html VS Code extension to enable code highlighting below
    return /*html*/ `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <!-- <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';"> -->
          <link rel="stylesheet" type="text/css" href="${stylesUri}">
          <link href="${codiconsUri}" rel="stylesheet" />
          <title>Added Resources</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>
      </html>
    `;
  }
}
