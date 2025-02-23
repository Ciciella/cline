import { useState, useEffect } from "react"
import { LoginForm } from "./LoginForm"
import { vscode } from "../../utils/vscode"

declare global {
	interface Window {
		vscode: {
			postMessage: (message: any) => void
		}
	}
}

interface AuthViewProps {
	onClose: () => void
}

export const AuthView = ({ onClose }: AuthViewProps) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [isLoggingOut, setIsLoggingOut] = useState(false)
	const [userInfo, setUserInfo] = useState<{
		id?: number
		username?: string
		display_name?: string
		email?: string
		role?: number
		status?: number
		quota?: number
		used_quota?: number
		request_count?: number
	} | null>(null)

	useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			const message = event.data
			if (message.type === "auth") {
				switch (message.action) {
					case "loginSuccess":
						setIsAuthenticated(true)
						setUserInfo(message.data)
						vscode.postMessage({
							type: "auth",
							text: "登录成功！",
						})
						break
					case "logoutSuccess":
						setIsAuthenticated(false)
						setUserInfo(null)
						setIsLoggingOut(false)
						vscode.postMessage({
							type: "auth",
							text: "已成功退出登录",
						})
						onClose()
						break
					case "logoutError":
						setIsLoggingOut(false)
						vscode.postMessage({
							type: "auth",
							text: message.error || "退出登录失败，请重试",
						})
						break
				}
			}
		}

		window.addEventListener("message", handleMessage)
		return () => window.removeEventListener("message", handleMessage)
	}, [])

	const handleLogout = () => {
		if (!isLoggingOut) {
			setIsLoggingOut(true)
			vscode.postMessage({
				type: "accountLogoutClicked",
			})

			// 添加超时保护
			setTimeout(() => {
				if (isLoggingOut) {
					setIsLoggingOut(false)
				}
			}, 5000)
		}
	}

	if (isAuthenticated && userInfo) {
		return (
			<div
				style={{
					backgroundColor: "#2a2a2a",
					padding: "24px",
					maxWidth: "400px",
					margin: "0 auto",
					marginTop: "50px",
					textAlign: "center",
					borderRadius: "12px",
					boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
					transition: "transform 0.2s",
				}}>
				<h2 style={{ color: "#e0e0e0", fontSize: "1.8rem", fontWeight: "500" }}>欢迎回来!</h2>
				<div
					style={{
						marginTop: "20px",
						textAlign: "left",
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "10px",
					}}>
					<p style={{ color: "#e0e0e0" }}>
						<strong>用户名:</strong> {userInfo.username}
					</p>
					<p style={{ color: "#e0e0e0" }}>
						<strong>显示名称:</strong> {userInfo.display_name}
					</p>
					{userInfo.email && (
						<p style={{ color: "#e0e0e0" }}>
							<strong>邮箱:</strong> {userInfo.email}
						</p>
					)}
					<p style={{ color: userInfo.role === 1 ? "#4a9eff" : "#2ecc71" }}>
						<strong>角色等级:</strong> {userInfo.role}
					</p>
					<p style={{ color: userInfo.status === 1 ? "#2ecc71" : "#e74c3c" }}>
						<strong>账户状态:</strong> {userInfo.status === 1 ? "正常" : "禁用"}
					</p>
					<p style={{ color: "#e0e0e0" }}>
						<strong>配额信息:</strong> {userInfo.used_quota}/{userInfo.quota}
					</p>
					<p style={{ color: "#e0e0e0" }}>
						<strong>请求次数:</strong> {userInfo.request_count}
					</p>
				</div>
				<button
					onClick={handleLogout}
					disabled={isLoggingOut}
					style={{
						marginTop: "20px",
						padding: "10px 20px",
						backgroundColor: isLoggingOut ? "#666" : "#e74c3c",
						color: "white",
						border: "none",
						borderRadius: "6px",
						cursor: isLoggingOut ? "not-allowed" : "pointer",
						fontSize: "1rem",
						fontWeight: "500",
						transition: "all 0.3s ease",
						opacity: isLoggingOut ? 0.7 : 1,
					}}
					onMouseOver={(e) => !isLoggingOut && (e.currentTarget.style.backgroundColor = "#c0392b")}
					onMouseOut={(e) => !isLoggingOut && (e.currentTarget.style.backgroundColor = "#e74c3c")}>
					{isLoggingOut ? "正在退出..." : "退出登录"}
				</button>
			</div>
		)
	}

	return <LoginForm onClose={onClose} />
}
