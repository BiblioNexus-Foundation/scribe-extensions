import * as vscode from "vscode";
import { ResourceDisplay } from "./shared";
import { StateStore } from "../utilities/stateStore";

export type DownloadResourceUtils = {
  fs: vscode.FileSystem;
  resourceFolderUri: vscode.Uri;
};

export type RenderWebviewHandler = (webview: vscode.WebviewPanel) => void;
export type GetWebviewContent = (
  webview: vscode.Webview,
  extensionUri: vscode.Uri
) => string;

export type CodexResource<FullResource extends {} = {}> = {
  id: string;
  displayLabel: string;

  supportsOfflineImport?: boolean;
  downloadResource: (
    fullResource: FullResource,
    utils: DownloadResourceUtils
  ) => Promise<ConfigResourceValues>;
  getTableDisplayData: () => Promise<ResourceDisplay<FullResource>[]>;
  openResource: (
    resource: ConfigResourceValues,
    helpers: {
      renderInWebview: (fns: {
        handler: RenderWebviewHandler;
        getWebviewContent: GetWebviewContent;
        onWebviewVisible?: RenderWebviewHandler;
      }) => void;
      stateStore: StateStore;
      currentResourceUri: vscode.Uri;
      fs: vscode.FileSystem;
    }
  ) => Promise<void>;
  getOfflineImportMetadata?: (params: {
    resourceUri: vscode.Uri;
    fs: vscode.FileSystem;
  }) => Promise<{
    name: string;
    id: string;
    version: string;
    [x: string]: any;
  }>;
  getOfflineConfigResourceValues?: (params: {
    resourceUri: vscode.Uri;
    fs: vscode.FileSystem;
  }) => Promise<ConfigResourceValues>;
};

export type ConfigResourceValues = {
  name: string;
  id: string;
  localPath: string;
  remoteUrl: string;
  version: string;
  type: string;
  [x: string]: any;
};
