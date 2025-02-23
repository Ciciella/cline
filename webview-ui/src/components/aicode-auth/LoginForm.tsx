import { VSCodeButton, VSCodeTextField } from "@vscode/webview-ui-toolkit/react"
import { useState, useEffect } from "react"
import { vscode } from "../../utils/vscode"
import type { WebviewMessage } from "../../shared/WebviewMessage"

interface LoginFormProps {
	onClose: () => void
}

// 登录表单组件
const LoginComponent = ({
	username,
	setUsername,
	password,
	setPassword,
	errors,
}: {
	username: string
	setUsername: (value: string) => void
	password: string
	setPassword: (value: string) => void
	errors: { [key: string]: string }
}) => {
	return (
		<>
			<div style={{ marginBottom: "15px" }}>
				<VSCodeTextField
					placeholder="用户名/邮箱"
					value={username}
					onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
					style={{ width: "100%" }}
				/>
				{errors.username && (
					<div style={{ color: "var(--vscode-errorForeground)", fontSize: "12px", marginTop: "4px" }}>
						{errors.username}
					</div>
				)}
			</div>

			<div style={{ marginBottom: "15px" }}>
				<VSCodeTextField
					type="password"
					placeholder="密码"
					value={password}
					onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
					style={{ width: "100%" }}
				/>
				{errors.password && (
					<div style={{ color: "var(--vscode-errorForeground)", fontSize: "12px", marginTop: "4px" }}>
						{errors.password}
					</div>
				)}
			</div>
		</>
	)
}

// 注册表单组件
const RegisterComponent = ({
	email,
	setEmail,
	username,
	setUsername,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	verificationCode,
	setVerificationCode,
	handleSendVerificationCode,
	countdown,
	isSendingCode,
	errors,
}: {
	email: string
	setEmail: (value: string) => void
	username: string
	setUsername: (value: string) => void
	password: string
	setPassword: (value: string) => void
	confirmPassword: string
	setConfirmPassword: (value: string) => void
	verificationCode: string
	setVerificationCode: (value: string) => void
	handleSendVerificationCode: () => void
	countdown: number
	isSendingCode: boolean
	errors: { [key: string]: string }
}) => {
	return (
		<>
			<div style={{ marginBottom: "15px" }}>
				<VSCodeTextField
					placeholder="用户名"
					value={username}
					onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
					style={{ width: "100%" }}
				/>
				{errors.username && (
					<div style={{ color: "var(--vscode-errorForeground)", fontSize: "12px", marginTop: "4px" }}>
						{errors.username}
					</div>
				)}
			</div>
			<div style={{ marginBottom: "15px" }}>
				<VSCodeTextField
					type="email"
					placeholder="邮箱地址"
					value={email}
					onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
					style={{ width: "100%" }}
				/>
				{errors.email && (
					<div style={{ color: "var(--vscode-errorForeground)", fontSize: "12px", marginTop: "4px" }}>
						{errors.email}
					</div>
				)}
			</div>
			<div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
				<VSCodeTextField
					placeholder="验证码"
					value={verificationCode}
					onInput={(e) => setVerificationCode((e.target as HTMLInputElement).value)}
					style={{ flex: 1 }}
				/>
				<VSCodeButton
					onClick={handleSendVerificationCode}
					disabled={countdown > 0 || isSendingCode}
					style={{ width: "130px" }}>
					{countdown > 0 ? `${countdown}秒后重试` : "获取验证码"}
				</VSCodeButton>
			</div>
			{errors.verificationCode && (
				<div
					style={{
						color: "var(--vscode-errorForeground)",
						fontSize: "12px",
						marginTop: "-10px",
						marginBottom: "15px",
					}}>
					{errors.verificationCode}
				</div>
			)}
			<div style={{ marginBottom: "15px" }}>
				<VSCodeTextField
					type="password"
					placeholder="请输入密码(8-20位)"
					value={password}
					onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
					style={{ width: "100%" }}
				/>
				{errors.password && (
					<div style={{ color: "var(--vscode-errorForeground)", fontSize: "12px", marginTop: "4px" }}>
						{errors.password}
					</div>
				)}
			</div>
			<div style={{ marginBottom: "20px" }}>
				<VSCodeTextField
					type="password"
					placeholder="请再次输入密码"
					value={confirmPassword}
					onInput={(e) => setConfirmPassword((e.target as HTMLInputElement).value)}
					style={{ width: "100%" }}
				/>
				{errors.confirmPassword && (
					<div style={{ color: "var(--vscode-errorForeground)", fontSize: "12px", marginTop: "4px" }}>
						{errors.confirmPassword}
					</div>
				)}
			</div>
		</>
	)
}

interface ResetPasswordProps {
	email: string
	setEmail: (value: string) => void
	errors: { [key: string]: string }
}

// 重置密码组件
const ResetPasswordComponent: React.FC<ResetPasswordProps> = ({ email, setEmail, errors }) => {
	return (
		<>
			<h2 style={{ marginBottom: "20px", textAlign: "center" }}>重置密码</h2>
			<div style={{ marginBottom: "15px" }}>
				<VSCodeTextField
					type="email"
					placeholder="请输入邮箱地址"
					value={email}
					onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
					style={{ width: "100%" }}
				/>
				{errors.email && (
					<div style={{ color: "var(--vscode-errorForeground)", fontSize: "12px", marginTop: "4px" }}>
						{errors.email}
					</div>
				)}
			</div>
		</>
	)
}

export const LoginForm = ({ onClose }: LoginFormProps) => {
	const [isLogin, setIsLogin] = useState(true)
	const [isReset, setIsReset] = useState(false)
	const [email, setEmail] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [verificationCode, setVerificationCode] = useState("")
	const [isSendingCode, setIsSendingCode] = useState(false)
	const [countdown, setCountdown] = useState(0)
	const [errors, setErrors] = useState<{ [key: string]: string }>({})
	const [isLoading, setIsLoading] = useState(false)

	// 添加消息监听
	useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			console.log("收到消息事件:", event)
			const message = event.data
			console.log("收到消息原始数据:", JSON.stringify(message, null, 2))

			// 检查消息格式
			if (!message || typeof message !== "object") {
				console.log("消息格式无效:", message)
				return
			}

			// 打印消息的所有字段
			console.log("消息字段:", Object.keys(message))
			console.log("消息详情:", {
				type: message.type,
				action: message.action,
				success: message.success,
				message: message.message,
				data: message.data,
				text: message.text,
			})

			if (message.type === "auth") {
				console.log("收到 auth 消息，action:", message.action)
				if (message.action === "verification") {
					console.log("收到验证码响应，success:", message.success)
					if (message.success === true) {
						// 验证码发送成功，只需要设置发送状态
						setIsSendingCode(false)
					} else {
						console.log("验证码发送失败，错误信息:", message.message)
						// 发送失败时重置计时
						setCountdown(0)
						setIsSendingCode(false)
					}
				} else if (message.action === "resetPassword") {
					setIsLoading(false)
					if (message.success) {
						// 重置密码邮件发送成功，返回登录页面
						setIsReset(false)
						setIsLogin(true)
						setEmail("")
					}
				}
			} else {
				console.log("未知消息类型:", message.type)
			}
		}

		window.addEventListener("message", handleMessage)
		return () => window.removeEventListener("message", handleMessage)
	}, [email])

	const validateForm = () => {
		const newErrors: { [key: string]: string } = {}

		if (isReset) {
			if (!email) {
				newErrors.email = "请输入邮箱地址"
			} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
				newErrors.email = "请输入有效的邮箱地址"
			}
			setErrors(newErrors)
			return Object.keys(newErrors).length === 0
		}

		if (!isLogin) {
			if (!email) {
				newErrors.email = "请输入邮箱地址"
			} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
				newErrors.email = "请输入有效的邮箱地址"
			}

			if (!verificationCode) {
				newErrors.verificationCode = "请输入验证码"
			}
		}

		if (!username) {
			newErrors.username = "请输入用户名"
		} else if (username.length > 12) {
			newErrors.username = "用户名不能超过12位"
		}

		if (!password) {
			newErrors.password = "请输入密码"
		} else if (!isLogin && (password.length < 8 || password.length > 20)) {
			newErrors.password = password.length < 8 ? "密码长度不得小于8位！" : "密码长度不得超过20位！"
		}

		if (!isLogin && password !== confirmPassword) {
			newErrors.confirmPassword = "两次输入的密码不一致"
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSendVerificationCode = async () => {
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setErrors({ ...errors, email: "请输入有效的邮箱地址" })
			return
		}

		console.log("开始发送验证码请求")
		console.log("邮箱地址:", email)
		setIsSendingCode(true)
		// 立即开始计时
		setCountdown(60)
		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(timer)
					return 0
				}
				return prev - 1
			})
		}, 1000)

		try {
			// 发送验证码请求
			const message: WebviewMessage = {
				type: "auth",
				action: "verification",
				data: {
					email,
					turnstile: "",
				},
			}
			console.log("准备发送消息:", JSON.stringify(message, null, 2))
			vscode.postMessage(message)
			console.log("消息已发送，等待响应")
		} catch (error) {
			console.error("发送验证码失败:", error)
			// 发送失败时清除计时
			clearInterval(timer)
			setCountdown(0)
			setIsSendingCode(false)
		}
	}

	const handleSubmit = async () => {
		try {
			if (!validateForm()) {
				return
			}

			if (isReset) {
				setIsLoading(true)
				vscode.postMessage({
					type: "auth",
					action: "resetPassword",
					data: {
						email,
						turnstile: "",
					},
				})
				return
			}

			if (isLogin) {
				vscode.postMessage({
					type: "auth",
					action: "login",
					data: { email: username, username: username, password },
				})
			} else {
				vscode.postMessage({
					type: "auth",
					action: "register",
					data: {
						username,
						password,
						password2: confirmPassword,
						email,
						verification_code: verificationCode,
						turnstile: "",
						aff_code: "",
					} as WebviewMessage["data"],
				})
			}
		} catch (error) {
			console.error("认证失败:", error)
		}
	}

	const renderForm = () => {
		if (isReset) {
			return <ResetPasswordComponent email={email} setEmail={setEmail} errors={errors} />
		}

		return (
			<>
				<h2 style={{ marginBottom: "20px", textAlign: "center" }}>{isLogin ? "登录" : "注册"}</h2>

				{isLogin ? (
					<LoginComponent
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword}
						errors={errors}
					/>
				) : (
					<RegisterComponent
						email={email}
						setEmail={setEmail}
						username={username}
						setUsername={setUsername}
						password={password}
						setPassword={setPassword}
						confirmPassword={confirmPassword}
						setConfirmPassword={setConfirmPassword}
						verificationCode={verificationCode}
						setVerificationCode={setVerificationCode}
						handleSendVerificationCode={handleSendVerificationCode}
						countdown={countdown}
						isSendingCode={isSendingCode}
						errors={errors}
					/>
				)}
			</>
		)
	}

	return (
		<div
			style={{
				padding: "20px",
				maxWidth: "400px",
				margin: "0 auto",
			}}>
			{renderForm()}

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginBottom: "15px",
					flexDirection: "row",
				}}>
				<VSCodeButton onClick={handleSubmit} disabled={isLoading} style={{ width: "45%" }}>
					{isLoading ? "发送中..." : isReset ? "发送重置邮件" : isLogin ? "登录" : "注册"}
				</VSCodeButton>
				<VSCodeButton onClick={onClose} disabled={isLoading} style={{ width: "45%" }}>
					取消
				</VSCodeButton>
			</div>

			<div style={{ textAlign: "center" }}>
				{!isReset && (
					<div style={{ marginBottom: "10px" }}>
						<span
							onClick={() => setIsLogin(!isLogin)}
							style={{
								cursor: "pointer",
								color: "var(--vscode-textLink-foreground)",
							}}>
							{isLogin ? "没有账号? 点击注册" : "已有账号? 点击登录"}
						</span>
					</div>
				)}
				<div>
					<span
						onClick={() => {
							setIsReset(!isReset)
							setPassword("")
							setUsername("")
						}}
						style={{
							cursor: "pointer",
							color: "var(--vscode-textLink-foreground)",
						}}>
						{isReset ? "返回登录" : "忘记密码？点击重置"}
					</span>
				</div>
			</div>
		</div>
	)
}
