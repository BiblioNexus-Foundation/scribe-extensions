import JSZip from "jszip";
import moment from "moment";
import { FileSystem, Uri, window, workspace } from "vscode";
import { CodexResource, ConfigResourceValues } from "../../types/codexResource";
import {
  ScriptureTSV,
  TnResourceType,
  TranslationNotePostMessages,
} from "./types";
import { extractBookChapterVerse, tsvStringToScriptureTSV } from "./utils";
import { getNonce, getUri } from "../../utilities";

export class TnResource implements CodexResource<TnResourceType> {
  id = "codex.tn";
  displayLabel = "Translation Notes";

  downloadResource: CodexResource<TnResourceType>["downloadResource"] = async (
    fullResource,
    { resourceFolderUri, fs }
  ) => {
    const downloadProjectName = `${fullResource?.name}`;
    const downloadResourceFolder = Uri.joinPath(
      resourceFolderUri,
      downloadProjectName
    );

    await fs.createDirectory(downloadResourceFolder);

    const res = await fetch(fullResource?.zipball_url);
    const blob = await res.arrayBuffer();

    const zipUri = Uri.joinPath(resourceFolderUri, `${fullResource?.name}.zip`);

    await fs.writeFile(zipUri, Buffer.from(blob));

    const fileContents = blob;
    const result = await JSZip.loadAsync(fileContents);
    const keys = Object.keys(result.files);

    for (const key of keys) {
      const item = result.files[key];
      if (item.dir) {
        await fs.createDirectory(
          Uri.joinPath(downloadResourceFolder, item.name)
        );
      } else {
        const bufferContent = Buffer.from(await item.async("arraybuffer"));
        const path = [...item?.name?.split("/")];
        path.shift();
        const fileUri = Uri.joinPath(downloadResourceFolder, path.join("/"));
        await fs.writeFile(fileUri, bufferContent);
      }
    }

    const metadataRes = await fetch(fullResource.metadata_json_url);
    const data = (await metadataRes.json()) as Record<string, any>;
    data.agOffline = true;
    data.meta = fullResource;
    data.lastUpdatedAg = moment().format();
    await fs.writeFile(
      Uri.joinPath(downloadResourceFolder, "metadata.json"),
      Buffer.from(JSON.stringify(data))
    );
    await fs.delete(zipUri);

    const resourceReturn = {
      resource: fullResource,
      folder: downloadResourceFolder,
      type: this.id,
    };

    const localPath: string = resourceReturn?.folder.path;

    const downloadedResource: ConfigResourceValues = {
      name: resourceReturn?.resource.name ?? "",
      id: String(resourceReturn?.resource.id) ?? "",
      localPath: localPath,
      type: resourceReturn?.type ?? "",
      remoteUrl: resourceReturn?.resource.url ?? "",
      version: resourceReturn?.resource.release.tag_name,
    };

    return downloadedResource;
  };

  getResources = async () => {
    return Promise.resolve();
  };

  getResourceById = async () => {
    return Promise.resolve();
  };

  getResourceDisplayData = async () => {
    return Promise.resolve();
  };

  openResource: CodexResource<TnResource>["openResource"] = async (
    resource,
    helpers
  ) => {
    helpers.renderInWebview({
      handler: (webviewPanel) => {},
      getWebviewContent: (webview, extensionUri) => {
        const scriptUri = getUri(webview, extensionUri, [
          "ui",
          "build",
          "assets",
          "views",
          "TranslationNotes.js",
        ]);
        const stylesUri = getUri(webview, extensionUri, [
          "ui",
          "build",
          "assets",
          "index.css",
        ]);
        const codiconFontUri = getUri(webview, extensionUri, [
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
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; font-src ${webview.cspSource}; style-src 'unsafe-inline' ${webview.cspSource} 'nonce-${nonce}'; script-src 'nonce-${nonce}';">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" type="text/css" href="${stylesUri}">
          <title>Translation Notes</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>
      </html>
    `;
      },
      onWebviewVisible: async (webviewPanel) => {
        if (!workspace?.workspaceFolders?.[0]) {
          return;
        }
        const verseRefStore = await helpers.stateStore?.getStoreState(
          "verseRef"
        );

        const resourceUri = Uri.joinPath(
          workspace?.workspaceFolders?.[0].uri,
          resource.localPath
        );

        const updateWebview = async (verseRef: string) => {
          webviewPanel.webview.postMessage({
            command: "update",
            data: await getDocumentAsScriptureTSV(
              verseRef ?? "GEN 1:1",
              resourceUri,
              workspace.fs
            ),
          } as TranslationNotePostMessages);
        };

        updateWebview(verseRefStore?.verseRef ?? "GEN 1:1");

        const disposeFunction = helpers.stateStore.storeListener(
          "verseRef",
          async (value) => {
            if (value) {
              await updateWebview(value.verseRef);
              webviewPanel.webview.postMessage({
                command: "changeRef",
                data: {
                  verseRef: value.verseRef,
                  uri: value.uri,
                },
              } as TranslationNotePostMessages);
            }
          }
        );
        webviewPanel.onDidDispose(() => {
          disposeFunction();
        });

        const messageEventHandlers = (message: any) => {
          const { command, text } = message;

          const commandToFunctionMapping: Record<
            string,
            (text: string) => void
          > = {
            ["loaded"]: () =>
              updateWebview(verseRefStore?.verseRef ?? "GEN 1:1"),
          };

          commandToFunctionMapping[command](text);
        };

        webviewPanel.webview.onDidReceiveMessage(
          messageEventHandlers,
          undefined
        );
      },
    });
  };
  getTableDisplayData = async () => {
    const resourceUrl = `https://git.door43.org/api/v1/catalog/search?subject=TSV Translation Notes&metadataType=rc`;

    const response = await fetch(resourceUrl);

    const responseJson = (await response.json()) as any;

    if (responseJson?.data) {
      return responseJson.data.map((resource: any) => ({
        id: resource.id.toString(),
        name: resource.name,
        owner: {
          name: resource.repo.owner.full_name,
          url: resource.repo.owner.website,
          avatarUrl: resource.repo.owner.avatar_url,
        },
        version: {
          tag: resource.release.tag_name,
          releaseDate: new Date(resource.released),
        },
        fullResource: resource,
        resourceType: this.id,
      }));
    }

    return [];
  };
}

const getDocumentAsScriptureTSV = async (
  verseRef: string,
  resourceUri: Uri,
  fs: FileSystem
): Promise<ScriptureTSV> => {
  const { bookID } = extractBookChapterVerse(verseRef);

  const docUri = Uri.joinPath(resourceUri, `tn_${bookID}.tsv`);

  const doc = await fs.readFile(docUri);

  const text = doc.toString();

  if (text.trim().length === 0) {
    return {};
  }

  try {
    return tsvStringToScriptureTSV(text);
  } catch {
    throw new Error(
      "Could not get document as json. Content is not valid scripture TSV"
    );
  }
};
