import * as vscode from "vscode";
import { getNonce, getUri } from "../../utilities";
import { ExtensionProvider } from "../extensionProvider";
import {
  addDownloadedResourceToProjectConfig,
  getDownloadedResourcesFromProjectConfig,
} from "../../utilities/projectConfig";
import { MessageType } from "../../types";
import { StateStore, initializeStateStore } from "../../utilities/stateStore";
export class ResourcesProvider implements vscode.WebviewViewProvider {
  private _webviewView: vscode.WebviewView | undefined;
  private _registeredResources: typeof ExtensionProvider.registeredResources;
  private stateStore: StateStore | undefined;
  public static register(context: vscode.ExtensionContext): vscode.Disposable {
    const resourcesProvider = new ResourcesProvider(context);
    const providerRegistration = vscode.window.registerWebviewViewProvider(
      ResourcesProvider.viewType,
      resourcesProvider
    );
    return providerRegistration;
  }

  private static readonly viewType = "codex.resources.all";

  constructor(private readonly context: vscode.ExtensionContext) {
    this._registeredResources = ExtensionProvider.registeredResources;

    initializeStateStore().then((stateStore) => {
      this.stateStore = stateStore;
    });
  }

  public async resolveWebviewView(
    webviewPanel: vscode.WebviewView,
    ctx: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ): Promise<void> {
    webviewPanel.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.context.extensionUri],
    };

    webviewPanel.webview.html = this._getWebviewContent(
      webviewPanel.webview,
      this.context.extensionUri
    );

    // Receive message from the webview.
    webviewPanel.webview.onDidReceiveMessage(async (e) => {
      switch (e.type) {
        case MessageType.INIT_DATA: {
          this._initializeWebviewData();
          break;
        }
        case MessageType.SET_CURRENT_RESOURCE_TYPE:
          webviewPanel.webview.postMessage({
            type: "SET_RESOURCE_TABLE_DATA",
            payload: {
              tableData: await this._getResourceTableData(
                e.payload.resourceType
              ),
            },
          });

          break;

        case MessageType.DOWNLOAD_RESOURCE: {
          vscode.window.showInformationMessage(
            e.payload.fullResource?.name
              ? `Downloading resource ${e.payload.fullResource?.name} ...`
              : "Downloading resource ..."
          );
          await this._downloadResource(
            e.payload.resourceType,
            e.payload.fullResource
          );

          const downloadedResources = await this._getDownloadedResources();

          webviewPanel.webview.postMessage({
            type: "SET_DOWNLOADED_RESOURCES",
            payload: {
              downloadedResources: downloadedResources,
            },
          });
          break;
        }

        case MessageType.OPEN_RESOURCE: {
          await ExtensionProvider.openResource(
            e.payload.resource,
            this.context.extensionUri
          );
          break;
        }

        case MessageType.GET_OFFLINE_RESOURCE_IMPORT_URI: {
          const selectedResourceType = e.payload.selectedResourceType;
          const uri = await this._getOfflineImportUri();

          const resourceType = this._registeredResources[selectedResourceType];
          if (!uri) {
            return;
          }

          if (!resourceType) {
            return;
          }

          const metadata = await resourceType
            ?.getOfflineImportMetadata?.({
              resourceUri: uri,
              fs: vscode.workspace.fs,
            })
            .catch(() => {
              vscode.window.showErrorMessage(
                "Unable to get metadata for the selected resource"
              );
            });
          webviewPanel.webview.postMessage({
            type: MessageType.SET_OFFLINE_RESOURCE_IMPORT_URI,
            payload: {
              path: uri?.path,
              fsPath: uri?.fsPath,
              metadata,
            },
          });
        }
        case MessageType.ADD_OFFLINE_RESOURCE:
          {
            const resource = e.payload;
            const resources = this._registeredResources;
            const resourceHandler = resources[resource.selectedResourceType];

            if (!resourceHandler) {
              vscode.window.showErrorMessage("Resource type not found");
              return;
            }

            const resourceValues = await resourceHandler
              ?.getOfflineConfigResourceValues?.({
                resourceUri: vscode.Uri.file(resource.fsPath),
                fs: vscode.workspace.fs,
              })
              .catch(() => {
                vscode.window.showErrorMessage(
                  "Unable to get resource values for the selected resource"
                );
              });

            if (!resourceValues) {
              vscode.window.showErrorMessage(
                "Resource values not found for the selected resource"
              );
              return;
            }

            await addDownloadedResourceToProjectConfig(resourceValues);

            break;
          }
          break;
        default:
          break;
      }
    });

    this._webviewView = webviewPanel;

    await this._initializeWebviewData();

    ExtensionProvider.listenForResourcesRegistration((resources) => {
      this._registeredResources = resources;

      if (this._webviewView) {
        this._initializeWebviewData();
      }
    });

    webviewPanel.onDidChangeVisibility(() => {
      if (webviewPanel.visible) {
        this._initializeWebviewData();
      }
    });
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
      "ResourcesTable.js",
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
          <title>Resources</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
        </body>
      </html>
    `;
  }
  _getRegisteredResourcesList() {
    const resources = this._registeredResources;
    const resourcesList = Object.entries(resources).map(([key, value]) => {
      return {
        value: key,
        label: value.displayLabel,
      };
    });
    return resourcesList;
  }

  async _getResourceTableData(key: string) {
    const resources = this._registeredResources;
    const data = await resources[key]?.getTableDisplayData();
    return data;
  }

  // TODO: type fullResource
  async _downloadResource(resourceId: string, fullResource: any) {
    try {
      const resources = this._registeredResources;
      const resource = resources[resourceId];

      const fs = vscode.workspace.fs;
      const currentFolderURI = vscode.workspace.workspaceFolders?.[0].uri;

      if (!currentFolderURI) {
        await vscode.window.showErrorMessage(
          "Please open a workspace folder to download resources"
        );
        return;
      }

      const resourceFolderUri = vscode.Uri.joinPath(
        currentFolderURI,
        ".project",
        "resources"
      );

      const downloadedResource = await resource.downloadResource(fullResource, {
        fs,
        resourceFolderUri,
      });

      const updatedDownloadedResourcePath = {
        ...downloadedResource,
        localPath: downloadedResource.localPath.includes(currentFolderURI.path)
          ? downloadedResource.localPath.replace(currentFolderURI.path, "")
          : downloadedResource.localPath,
      };

      addDownloadedResourceToProjectConfig(updatedDownloadedResourcePath);
    } catch (error) {
      await vscode.window.showErrorMessage("Unable to download resource ...");
    }
  }

  async _getDownloadedResources() {
    const downloadedResources = await getDownloadedResourcesFromProjectConfig();

    return downloadedResources ?? [];
  }

  private async _initializeWebviewData() {
    const initialRegisteredResources = this._getRegisteredResourcesList();
    const webviewPanel = this._webviewView;

    if (!webviewPanel) {
      return;
    }

    webviewPanel.webview.postMessage({
      type: "SET_RESOURCES_TYPES",
      payload: { resourcesTypes: initialRegisteredResources },
    });

    webviewPanel.webview.postMessage({
      type: "SET_RESOURCE_TABLE_DATA",
      payload: {
        tableData: await this._getResourceTableData(
          initialRegisteredResources[0].value
        ),
      },
    });

    webviewPanel.webview.postMessage({
      type: "SET_DOWNLOADED_RESOURCES",
      payload: {
        downloadedResources: await this._getDownloadedResources(),
      },
    });
  }

  private async _getOfflineImportUri() {
    const selectedPaths = await vscode.window.showOpenDialog({
      canSelectFiles: false,
      canSelectFolders: true,
      canSelectMany: false,
      title: "Select a directory for your resource",
      openLabel: "Select resource",
    });

    if (!selectedPaths || selectedPaths.length === 0) {
      return null;
    }
    return selectedPaths[0];
  }
}
