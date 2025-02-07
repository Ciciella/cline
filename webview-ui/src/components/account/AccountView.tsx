import { VSCodeButton } from "@vscode/webview-ui-toolkit/react"
import { memo } from "react"
import { useExtensionState } from "../../context/ExtensionStateContext"
import { vscode } from "../../utils/vscode"

type AccountViewProps = {
	onDone: () => void
}

const AccountView = ({ onDone }: AccountViewProps) => {
	const { isLoggedIn, userInfo } = useExtensionState()

	const handleLogin = () => {
		vscode.postMessage({ type: "accountLoginClicked" })
	}

	const handleLogout = () => {
		vscode.postMessage({ type: "accountLogoutClicked" })
	}

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				padding: "10px 0px 0px 20px",
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
			}}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "17px",
					paddingRight: 17,
				}}>
				<h3 style={{ color: "var(--vscode-foreground)", margin: 0 }}>账户</h3>
				<VSCodeButton onClick={onDone}>完成</VSCodeButton>
			</div>
			<div
				style={{
					flexGrow: 1,
					overflowY: "scroll",
					paddingRight: 8,
					display: "flex",
					flexDirection: "column",
				}}>
				<div style={{ marginBottom: 5 }}>
					{isLoggedIn ? (
						<>
							{userInfo?.photoURL && (
								<img
									src={userInfo.photoURL}
									alt="头像"
									style={{
										width: 48,
										height: 48,
										borderRadius: "50%",
										marginBottom: 10,
									}}
								/>
							)}
							<div style={{ fontSize: "14px", marginBottom: 10 }}>
								{userInfo?.displayName && <div>姓名: {userInfo.displayName}</div>}
								{userInfo?.email && <div>邮箱: {userInfo.email}</div>}
							</div>
							<VSCodeButton onClick={handleLogout}>退出登录</VSCodeButton>
						</>
					) : (
						<VSCodeButton onClick={handleLogin}>登录 AI Code</VSCodeButton>
					)}
				</div>
			</div>
		</div>
	)
}

export default memo(AccountView)
