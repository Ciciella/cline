import * as vscode from 'vscode';

export class ChatPanel {
  public static currentPanel: ChatPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private readonly _extensionUri: vscode.Uri;

  public static createOrShow(extensionUri: vscode.Uri) {
    const column = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;

    if (ChatPanel.currentPanel) {
      ChatPanel.currentPanel._panel.reveal(column);
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      'chatPanel',
      'Chat',
      column || vscode.ViewColumn.One,
      {
        enableScripts: true,
      }
    );

    ChatPanel.currentPanel = new ChatPanel(panel, extensionUri);
  }

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this._panel = panel;
    this._extensionUri = extensionUri;

    this._panel.onDidDispose(() => this.dispose(), null, []);

    this._panel.webview.html = this._getHtmlForWebview(this._panel.webview);
  }

  public dispose() {
    ChatPanel.currentPanel = undefined;
    this._panel.dispose();
  }

  private _getHtmlForWebview(webview: vscode.Webview): string {
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chat</title>
      </head>
      <body>
        <h1>Chat Panel</h1>
        <textarea id="input" rows="4" cols="50"></textarea>
        <button onclick="sendMessage()">Send</button>
        <script>
          const vscode = acquireVsCodeApi();
          function sendMessage() {
            const input = document.getElementById('input').value;
            vscode.postMessage({ command: 'sendMessage', text: input });
          }
        </script>
      </body>
      </html>`;
  }
}