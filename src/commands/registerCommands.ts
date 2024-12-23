import * as vscode from 'vscode';
import { ChatPanel } from '../chat/ChatPanel';

// 假设这是现有的 AI 接口函数
async function callAI(prompt: string): Promise<string> {
  // 调用 AI 接口的逻辑
  // 返回 AI 生成的代码
  return "AI 生成的代码";
}

// 假设这是现有的自动获取文件函数
async function getFileContent(filePath: string): Promise<string> {
  // 获取文件内容的逻辑
  return "文件内容";
}

// 假设这是现有的编辑对比文件函数
async function compareAndEditFile(originalContent: string, newContent: string): Promise<string> {
  // 对比并编辑文件的逻辑
  return "编辑后的文件内容";
}

export function registerCommands(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.openChat', () => {
      ChatPanel.createOrShow(context.extensionUri);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('extension.editSelectedText', async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selectedText = editor.document.getText(editor.selection);
        const userPrompt = await vscode.window.showInputBox({ prompt: "输入您的需求" });
        if (userPrompt) {
          vscode.window.showInformationMessage('AI 正在处理您的请求...');
          try {
            const aiResult = await callAI(userPrompt);
            const originalContent = await getFileContent(editor.document.uri.fsPath);
            const editedContent = await compareAndEditFile(originalContent, aiResult);
            editor.edit((editBuilder) => {
              editBuilder.replace(editor.selection, editedContent);
            });
            vscode.window.showInformationMessage('代码已成功更新');
          } catch (error) {
            vscode.window.showErrorMessage('AI 处理请求时出错');
          }
        }
      }
    })
  );
}