import * as vscode from "vscode";
import { RenderWebviewHandler } from "../../types/codexResource";

type WebviewCreateOptions = {
  viewType: string;
  title: string;
};

type GetWebviewContent = (
  webview: vscode.Webview,
  extensionUri: vscode.Uri
) => string;

export class ResourceWebviewProvider {
  /**
   * Track the currently panel. Only allow a single panel to exist at a time.
   */
  public static currentPanel: ResourceWebviewProvider | undefined;

  public readonly panel: vscode.WebviewPanel;
  private _disposables: vscode.Disposable[] = [];

  public static createOrShow(
    extensionUri: vscode.Uri,
    options: WebviewCreateOptions,
    webviewHandlers: {
      getWebviewContent: GetWebviewContent;
      onWebviewVisible?: RenderWebviewHandler;
    }
  ) {
    const column = vscode.ViewColumn.Beside;

    // If we already have a panel, show it.
    if (
      ResourceWebviewProvider.currentPanel &&
      ResourceWebviewProvider.currentPanel.panel.viewType === options.viewType
    ) {
      ResourceWebviewProvider.currentPanel.panel.reveal(column);
      return ResourceWebviewProvider.currentPanel;
    }

    // Otherwise, create a new panel.

    const panel = vscode.window.createWebviewPanel(
      options.viewType,
      options.title,
      column ?? vscode.ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [extensionUri],
      }
    );

    ResourceWebviewProvider.currentPanel = new ResourceWebviewProvider(
      panel,
      extensionUri,
      webviewHandlers
    );
    return ResourceWebviewProvider.currentPanel;
  }

  public static revive(
    panel: vscode.WebviewPanel,
    extensionUri: vscode.Uri,
    webviewHandlers: {
      getWebviewContent: GetWebviewContent;
    }
  ) {
    ResourceWebviewProvider.currentPanel = new ResourceWebviewProvider(
      panel,
      extensionUri,
      webviewHandlers
    );
  }

  private constructor(
    panel: vscode.WebviewPanel,
    private readonly extensionUri: vscode.Uri,
    private readonly webviewHandlers: {
      getWebviewContent: GetWebviewContent;
      onWebviewVisible?: RenderWebviewHandler;
    }
  ) {
    this.panel = panel;

    // Set the webview's initial html content
    this._update();

    this.panel.webview.html = this.webviewHandlers.getWebviewContent(
      this.panel.webview,
      this.extensionUri
    );
    // Listen for when the panel is disposed
    // This happens when the user closes the panel or when the panel is closed programmatically
    this.panel.onDidDispose(() => this.dispose(), null, this._disposables);

    // Update the content based on view changes
    this.panel.onDidChangeViewState(
      (e) => {
        this._update();
      },
      null,
      this._disposables
    );
  }

  public dispose() {
    ResourceWebviewProvider.currentPanel = undefined;

    // Clean up our resources
    this.panel.dispose();

    while (this._disposables.length) {
      const x = this._disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }

  private _update() {
    this.webviewHandlers.onWebviewVisible?.(this.panel);
  }
}
