import { CodexResource } from "../../types/codexResource";

import { getNonce, getUri } from "../../utilities";
import { BibleResource } from "./types";
import { downloadBibleResource } from "./download";
import { MessageType, VerseRefGlobalState } from "../../types";
import { WebviewPanel } from "vscode";
import { getUSFMDocument } from "./utils";

export class BibleUsfmResource implements CodexResource<BibleResource> {
  id = "codex.bible";
  displayLabel = "Bible";

  downloadResource = downloadBibleResource;

  openResource: CodexResource<BibleResource>["openResource"] = async (
    resource,
    helpers
  ) => {
    const updateUSFMFromFile = async (
      webviewPanel: WebviewPanel,
      verseRefStore: VerseRefGlobalState
    ) => {
      const usfm = await getUSFMDocument(
        resource,
        verseRefStore?.verseRef ?? "GEN 1:1"
      );
      webviewPanel.webview.postMessage({
        type: "update-usfm",
        payload: {
          usfm: usfm?.usfmString ?? "",
          chapter: usfm?.chapter ?? 1,
          verse: usfm?.verse ?? 1,
          bookID: usfm?.bookID ?? "GEN",
        },
      });
    };

    helpers.renderInWebview({
      handler: (webviewPanel) => {
        webviewPanel.webview.onDidReceiveMessage(
          async (e: { type: MessageType; payload: unknown }) => {
            switch (e.type) {
              case MessageType.GET_USFM: {
                break;
              }
              default:
                break;
            }
          }
        );

        (async () => {
          const verseRefStore = await helpers.stateStore?.getStoreState(
            "verseRef"
          );
          const usfm = await getUSFMDocument(
            resource,
            verseRefStore?.verseRef ?? "GEN 1:1"
          );

          webviewPanel.webview.postMessage({
            type: "update-usfm",
            payload: {
              usfm: usfm?.usfmString ?? "",
              chapter: usfm?.chapter ?? 1,
              verse: usfm?.verse ?? 1,
              bookID: usfm?.bookID ?? "GEN",
            },
          });
        })();
      },
      getWebviewContent: (webview, extensionUri) => {
        const stylesUri = getUri(webview, extensionUri, [
          "bible-usfm-ui",
          "build",
          "assets",
          "index.css",
        ]);
        // The View JS file from the React build output
        const scriptUri = getUri(webview, extensionUri, [
          "bible-usfm-ui",
          "build",
          "assets",
          "index.js",
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
          <title>Bible</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>
      </html>
    `;
      },
      onWebviewVisible: async (webviewPanel) => {
        const verseRefStore = await helpers.stateStore?.getStoreState(
          "verseRef"
        );
        verseRefStore && updateUSFMFromFile(webviewPanel, verseRefStore);

        const verseRefListenerDisposeFunction =
          helpers.stateStore?.storeListener("verseRef", async (value) => {
            if (value) {
              updateUSFMFromFile(webviewPanel, value);
            }
          });
        webviewPanel.onDidDispose(() => {
          verseRefListenerDisposeFunction?.();
        });
      },
    });
  };
  getTableDisplayData = async () => {
    const resourceUrl = `https://git.door43.org/api/v1/catalog/search?metadataType=rc&subject=Bible`;

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
