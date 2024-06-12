import JSZip from "jszip";
import moment from "moment";
import { FileSystem, FileType, Uri, window, workspace } from "vscode";
import { CodexResource, ConfigResourceValues } from "../../types/codexResource";
import { getNonce, getUri } from "../../utilities";
import { TAResourceType } from "./types";
import { MessageType } from "../../types";
import path from "path";

export class TAResource implements CodexResource<TAResourceType> {
  id = "codex.ta";
  displayLabel = "Translation Academy";

  downloadResource: CodexResource<TAResourceType>["downloadResource"] = async (
    fullResource,
    { resourceFolderUri, fs }
  ) => {
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
    const result = await JSZip.loadAsync(fileContents);
    const keys = Object.keys(result.files);

    for (const key of keys) {
      const item = result.files[key];
      if (!item.dir) {
        const bufferContent = Buffer.from(await item.async("arraybuffer"));
        const fileName = [...item?.name?.split("/")];
        fileName.shift();
        const fileUri = Uri.joinPath(
          downloadResourceFolder,
          fileName.join("/")
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

  openResource: CodexResource<TAResourceType>["openResource"] = async (
    resource,
    helpers
  ) => {
    helpers.renderInWebview({
      handler: (webviewPanel) => {},
      getWebviewContent: (webview, extensionUri) => {
        const styleUri = webview.asWebviewUri(
          Uri.joinPath(extensionUri, "ui", "build", "assets", "index.css")
        );

        const scriptUri = webview.asWebviewUri(
          Uri.joinPath(
            extensionUri,
            "ui",
            "build",
            "assets",
            "views",
            "TranslationAcademy.js"
          )
        );

        const nonce = getNonce();
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="${styleUri}" type="text/css" rel="stylesheet" />
                <title>Translation Academy</title>
            </head>
            <body>
                <div id="root"></div>
                <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
            </body>
            </html>
        `;
      },
      onWebviewVisible: async (webviewPanel) => {
        const resourceRootUri = helpers.currentResourceUri;
        webviewPanel.webview.onDidReceiveMessage(async (message) => {
          switch (message.type) {
            case MessageType.GET_TA_FOLDER_CONTENT: {
              const directory = message.payload as string;

              const folderUri = Uri.joinPath(
                helpers.currentResourceUri,
                directory
              );

              const folderContents = await helpers.fs.readDirectory(folderUri);

              webviewPanel?.webview.postMessage({
                type: MessageType.SYNC_TA_FOLDER_CONTENT,
                payload: folderContents
                  .filter(([, type]) => type === FileType.Directory)
                  .map(([name]) => name),
              });
              break;
            }
            case MessageType.GET_TA_CONTENT: {
              const subDirectory = message.payload.subDirectory as string;
              const directory = message.payload.directory as string;
              if (subDirectory === "" || subDirectory === undefined) {
                window.showErrorMessage("Please select a subdirectory");
                return;
              } else if (directory === "" || directory === undefined) {
                window.showErrorMessage("Please select a directory");
                return;
              }

              const folderUri = Uri.joinPath(
                resourceRootUri,
                directory,
                subDirectory
              );

              const mdFile = Uri.joinPath(folderUri, "01.md");

              const fileContents = await helpers.fs.readFile(mdFile);

              const md = fileContents.toString();

              webviewPanel?.webview.postMessage({
                type: MessageType.SYNC_TA_CONTENT,
                payload: md,
              });
              break;
            }
          }
        });

        if (webviewPanel.active) {
          const resourceFolders = await helpers.fs.readDirectory(
            resourceRootUri
          );
          const folderEntries = resourceFolders.filter(
            ([_name, type]) => type === FileType.Directory
          );
          webviewPanel?.webview.postMessage({
            type: MessageType.SYNC_TA_FOLDERS,
            payload: folderEntries.map(([name, _type]) => name),
          });
        }
      },
    });
  };
  getTableDisplayData = async () => {
    const resourceUrl = `https://git.door43.org/api/v1/catalog/search?subject=Translation Academy&subject=tsv Translation Academy&metadataType=rc`;

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
