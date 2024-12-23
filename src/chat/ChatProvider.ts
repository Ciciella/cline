import * as vscode from 'vscode';
import { ChatPanel } from './ChatPanel';

export class ChatProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = 'chatView';

  constructor(private readonly _extensionUri: vscode.Uri) {}

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    ChatPanel.createOrShow(this._extensionUri);
  }
}