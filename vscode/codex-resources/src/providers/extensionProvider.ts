import { Uri, window, workspace } from "vscode";
import {
  CodexResource,
  ConfigResourceValues,
  GetWebviewContent,
  RenderWebviewHandler,
} from "../types/codexResource";
import { initializeStateStore } from "../utilities/stateStore";
import { ResourceWebviewProvider } from "./ResourceWebviewProvider/provider";

import EventEmitter from "node:events";

const registeredResourcesEventsEmitter = new EventEmitter();
export class ExtensionProvider {
  static instance: ExtensionProvider;
  static registeredResources: {
    [key: string]: CodexResource<any>; //TODO: Fix this any
  };

  static listenForResourcesRegistration = (
    listener: (resources: {
      [key: string]: CodexResource<any>; //TODO: Fix this any
    }) => void
  ) => {
    registeredResourcesEventsEmitter.on("registerResource", () => {
      listener(ExtensionProvider.registeredResources);
    });
  };

  static async openResource(resource: ConfigResourceValues, extensionUri: Uri) {
    const stateStore = await initializeStateStore();

    const resourceHandler =
      ExtensionProvider.registeredResources[resource.type];

    const renderInWebview = ({
      handler,
      getWebviewContent,
      onWebviewVisible,
    }: {
      handler: RenderWebviewHandler;
      getWebviewContent: GetWebviewContent;
      onWebviewVisible?: RenderWebviewHandler;
    }) => {
      const webviewProvider = ResourceWebviewProvider.createOrShow(
        extensionUri,
        {
          viewType: resourceHandler.id,
          title: resourceHandler.displayLabel,
        },
        {
          getWebviewContent,
          onWebviewVisible,
        }
      );

      if (!webviewProvider) {
        throw new Error("Webview not found");
      }
      handler(webviewProvider.panel);
    };

    const currentWorkingFolderUri = workspace.workspaceFolders?.[0].uri;

    resourceHandler.openResource(resource, {
      renderInWebview,
      stateStore: stateStore,
      fs: workspace.fs,
      currentResourceUri: resource.localPath.startsWith("/.project")
        ? Uri.joinPath(currentWorkingFolderUri!, resource.localPath)
        : Uri.from({ path: resource.localPath, scheme: "file" }),
    });
  }

  constructor() {
    if (!ExtensionProvider.instance) {
      ExtensionProvider.instance = this;
    }
    ExtensionProvider.registeredResources = {};
  }

  registerResource(resource: CodexResource<any>) {
    ExtensionProvider.registeredResources[resource.id] = resource;
    registeredResourcesEventsEmitter.emit("registerResource");
  }

  getRegisteredResourceHandler(id: string) {
    return ExtensionProvider.registeredResources[id];
  }

  static getInstance() {
    if (!ExtensionProvider.instance) {
      ExtensionProvider.instance = new ExtensionProvider();
    }
    return ExtensionProvider.instance;
  }
}
