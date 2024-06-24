import * as vscode from 'vscode';

export class USFMDocument implements vscode.CustomDocument {
  private _text: string;
  private readonly _uri: vscode.Uri;
  private readonly _onDidDispose = new vscode.EventEmitter<void>();
  public readonly onDidDispose = this._onDidDispose.event;

  constructor(uri: vscode.Uri) {
      this._uri = uri;
      this._text = "";
  }

  get uri(): vscode.Uri {
      return this._uri;
  }

  get text(): string {
      return this._text;
  }

  set text(newText: string) {
      this._text = newText;
  }

  dispose(): void {
      this._onDidDispose.fire();
      this._onDidDispose.dispose();
  }
}

