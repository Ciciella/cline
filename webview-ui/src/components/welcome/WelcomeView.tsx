import { VSCodeButton, VSCodeLink, VSCodeTextField } from "@vscode/webview-ui-toolkit/react"
import { useEffect, useState, useCallback } from "react"
import { useExtensionState } from "../../context/ExtensionStateContext"
import { validateApiConfiguration } from "../../utils/validate"
import { vscode } from "../../utils/vscode"
import ApiOptions from "../settings/ApiOptions"
import { useEvent } from "react-use"
import { ExtensionMessage } from "../../../../src/shared/ExtensionMessage"
import { FormattedMessage } from "react-intl"

const WelcomeView = () => {
	const { apiConfiguration } = useExtensionState()

	const [apiErrorMessage, setApiErrorMessage] = useState<string | undefined>(undefined)
	const [email, setEmail] = useState("")
	const [isSubscribed, setIsSubscribed] = useState(false)

	const disableLetsGoButton = apiErrorMessage != null

	const handleSubmit = () => {
		vscode.postMessage({ type: "apiConfiguration", apiConfiguration })
	}

	const handleSubscribe = () => {
		if (email) {
			vscode.postMessage({ type: "subscribeEmail", text: email })
		}
	}

	useEffect(() => {
		setApiErrorMessage(validateApiConfiguration(apiConfiguration))
	}, [apiConfiguration])

	// Add message handler for subscription confirmation
	const handleMessage = useCallback((e: MessageEvent) => {
		const message: ExtensionMessage = e.data
		if (message.type === "emailSubscribed") {
			setIsSubscribed(true)
			setEmail("")
		}
	}, [])

	useEvent("message", handleMessage)

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			}}>
			<div
				style={{
					height: "100%",
					padding: "0 20px",
					overflow: "auto",
				}}>
				<h2>
					<FormattedMessage id="welcome.title" defaultMessage="Hi, I'm AI Code" />
				</h2>
				<p>
					<FormattedMessage
						id="welcome.capabilities"
						defaultMessage="I can do all kinds of tasks thanks to the latest breakthroughs in"
					/>{" "}
					<VSCodeLink
						href="https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf"
						style={{ display: "inline" }}>
						<FormattedMessage
							id="welcome.capabilities.link"
							defaultMessage="Claude 3.5 Sonnet's agentic coding capabilities"
						/>
					</VSCodeLink>{" "}
					<FormattedMessage
						id="welcome.tools"
						defaultMessage="以及使用工具来创建和编辑文件，探索复杂的项目，使用浏览器和执行终端命令（当然，需要您的许可）。我甚至可以使用MCP来创建新的工具并扩展我自己的工具功能。"
					/>
				</p>

				<b>
					<FormattedMessage
						id="welcome.apiProvider"
						defaultMessage="To get started, this extension needs an API provider for Claude 3.5 Sonnet."
					/>
				</b>

				<div
					style={{
						marginTop: "15px",
						padding: isSubscribed ? "5px 15px 5px 15px" : "12px",
						background: "var(--vscode-textBlockQuote-background)",
						borderRadius: "6px",
						fontSize: "0.9em",
					}}>
					{isSubscribed ? (
						<p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
							<span style={{ color: "var(--vscode-testing-iconPassed)", fontSize: "1.5em" }}>✓</span>
							感谢订阅！我们会及时通知您新功能的更新。
						</p>
					) : (
						<>
							<p style={{ margin: 0, marginBottom: "8px" }}>
								虽然Cline目前需要您提供自己的API密钥，但我们正在开发具有更多功能的官方账户系统。订阅我们的邮件列表以获取最新更新！
							</p>
							<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
								<VSCodeTextField
									type="email"
									value={email}
									onInput={(e: any) => setEmail(e.target.value)}
									placeholder="请输入您的邮箱"
									style={{ flex: 1 }}
								/>
								<VSCodeButton appearance="secondary" onClick={handleSubscribe} disabled={!email}>
									订阅
								</VSCodeButton>
							</div>
						</>
					)}
				</div>

				<div style={{ marginTop: "15px" }}>
					<ApiOptions showModelOptions={false} />
					<VSCodeButton onClick={handleSubmit} disabled={disableLetsGoButton} style={{ marginTop: "3px" }}>
						<FormattedMessage id="welcome.letsGo" defaultMessage="Let's go!" />
					</VSCodeButton>
				</div>
			</div>
		</div>
	)
}

export default WelcomeView
