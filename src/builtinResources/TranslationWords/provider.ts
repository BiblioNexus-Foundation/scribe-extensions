import JSZip from "jszip";
import moment from "moment";
import { Uri, window } from "vscode";
import { CodexResource, ConfigResourceValues } from "../../types/codexResource";
import { getNonce, getUri } from "../../utilities";

import { MessageType } from "../../types";
import { TranslationWordsResourceType, TwSearchPayload } from "./types";
import { getAllTranslationWordsOfResource } from "./utils";

export class TWResource implements CodexResource<TranslationWordsResourceType> {
  id = "codex.tw";
  displayLabel = "Translation Words";

  downloadResource: CodexResource<TranslationWordsResourceType>["downloadResource"] =
    async (fullResource, { resourceFolderUri, fs }) => {
      const downloadProjectName = `${fullResource?.name}_${Date.now()}`;
      const downloadResourceFolder = Uri.joinPath(
        resourceFolderUri,
        downloadProjectName
      );

      await fs.createDirectory(downloadResourceFolder);
      const res = await fetch(fullResource?.zipball_url);
      const blob = await res.arrayBuffer();

      const zipUri = Uri.joinPath(
        resourceFolderUri,
        `${downloadProjectName}.zip`
      );

      await fs.writeFile(zipUri, Buffer.from(blob));

      const fileContents = blob;
      console.log("Decompressing Zip");
      const result = await JSZip.loadAsync(fileContents);
      const keys = Object.keys(result.files);

      for (const key of keys) {
        const item = result.files[key];
        if (!item.dir) {
          const bufferContent = Buffer.from(await item.async("arraybuffer"));
          const filePath = [...item?.name?.split("/")];
          filePath.shift();
          const fileUri = Uri.joinPath(
            downloadResourceFolder,
            filePath.join("/")
          );
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

  openResource: CodexResource<TranslationWordsResourceType>["openResource"] =
    async (resource, helpers) => {
      const resourceRootUri = helpers.currentResourceUri;
      helpers.renderInWebview({
        handler: (webviewPanel) => {},
        getWebviewContent: (webview, extensionUri) => {
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
            "TranslationWords.js",
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
          <title>Translation Words Webview</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>
      </html>
    `;
        },
        onWebviewVisible: async (webviewPanel) => {
          const allTranslationWords =
            (await getAllTranslationWordsOfResource(resourceRootUri)) ?? [];
          if (webviewPanel.active) {
            webviewPanel.webview.postMessage({
              type: "update-tw",
              payload: {
                translationWords: allTranslationWords,
              },
            });
          }

          webviewPanel.webview.onDidReceiveMessage(
            async (e: { type: MessageType; payload: unknown }) => {
              switch (e.type) {
                case MessageType.SEARCH_TW: {
                  const query = (e.payload as TwSearchPayload)?.query as string;

                  const category = (e.payload as TwSearchPayload)?.category;

                  if (!query || query.length === 0) {
                    webviewPanel.webview.postMessage({
                      type: "update-tw",
                      payload: {
                        translationWords: allTranslationWords.filter(
                          (word) => category === "all" || word.ref === category
                        ),
                      },
                    });
                    return;
                  }

                  const words = allTranslationWords.filter(
                    (word) =>
                      word.name.toLowerCase().includes(query.toLowerCase()) &&
                      (category === "all" || word.ref === category)
                  );

                  webviewPanel.webview.postMessage({
                    type: "update-tw",
                    payload: { translationWords: words },
                  });

                  return;
                }
                case MessageType.GET_TW_CONTENT: {
                  const translationWord: {
                    path: string;
                  } = (e.payload as Record<string, any>)?.translationWord;

                  if (!translationWord) {
                    return;
                  }

                  const path = translationWord.path;

                  if (!path) {
                    return;
                  }

                  const content = await helpers.fs.readFile(Uri.file(path));

                  webviewPanel.webview.postMessage({
                    type: "update-tw-content",
                    payload: {
                      content: content.toString(),
                    },
                  });
                }
              }
            }
          );
        },
      });
    };
  getTableDisplayData = async () => {
    const resourceUrl = `https://git.door43.org/api/v1/catalog/search?subject=Translation Words&metadataType=rc`;

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
