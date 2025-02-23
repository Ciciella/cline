import * as vscode from "vscode"
import { AiCodeAuthService } from "../services/aicode-auth"

export class AuthCommandHandler {
	constructor(private authService: AiCodeAuthService) {}

	registerCommands(context: vscode.ExtensionContext) {
		// 注册登录命令
		context.subscriptions.push(
			vscode.commands.registerCommand("aiCode.aiCodeLoginButtonClicked", async () => {
				try {
					await this.authService.initiateLogin()
				} catch (error) {
					vscode.window.showErrorMessage("登录失败")
				}
			}),
		)

		// 注册登出命令
		context.subscriptions.push(
			vscode.commands.registerCommand("aiCode.aiCodeLogoutButtonClickedUI", async () => {
				try {
					await this.authService.logout()
					vscode.window.showInformationMessage("已成功登出")
				} catch (error) {
					vscode.window.showErrorMessage("登出失败")
				}
			}),
		)
	}
}
