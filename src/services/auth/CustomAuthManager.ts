import * as vscode from "vscode"
import { ClineProvider } from "../../core/webview/ClineProvider"

export interface CustomUserInfo {
	displayName: string | null
	email: string | null
	photoURL: string | null
}

export class CustomAuthManager {
	private providerRef: WeakRef<ClineProvider>
	private disposables: vscode.Disposable[] = []

	constructor(provider: ClineProvider) {
		this.providerRef = new WeakRef(provider)
		this.restoreSession()
	}

	private async restoreSession() {
		const provider = this.providerRef.deref()
		if (!provider) {
			return
		}

		const storedToken = await provider.getSecret("authToken")
		if (storedToken) {
			try {
				await this.signInWithToken(storedToken)
			} catch (error) {
				console.error("Failed to restore session, clearing token:", error)
				await provider.setAuthToken(undefined)
				await provider.setUserInfo(undefined)
			}
		}
	}

	async signInWithToken(token: string) {
		const provider = this.providerRef.deref()
		if (!provider) {
			throw new Error("Provider reference lost")
		}

		// 这里可以添加验证token的逻辑
		await provider.setAuthToken(token)

		// 设置用户信息
		const userInfo: CustomUserInfo = {
			displayName: "Custom User", // 可以从token中解析或从API获取
			email: null,
			photoURL: null,
		}
		await provider.setUserInfo(userInfo)
		await provider.postStateToWebview()
	}

	async signOut() {
		const provider = this.providerRef.deref()
		if (!provider) {
			console.error("Provider reference lost")
			throw new Error("Provider reference lost")
		}

		await provider.setAuthToken(undefined)
		await provider.setUserInfo(undefined)
		await provider.postStateToWebview()
		await provider.postMessageToWebview({
			type: "auth",
			action: "logoutSuccess",
		})
	}

	dispose() {
		this.disposables.forEach((d) => d.dispose())
	}
}
