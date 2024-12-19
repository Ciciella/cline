import { VSCodeButton, VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { memo } from "react"
import { FormattedMessage } from "react-intl"
// import VSCodeButtonLink from "./VSCodeButtonLink"
// import { getOpenRouterAuthUrl } from "./ApiOptions"
// import { vscode } from "../utils/vscode"

interface AnnouncementProps {
	version: string
	hideAnnouncement: () => void
}
/*
You must update the latestAnnouncementId in ClineProvider for new announcements to show to users. This new id will be compared with whats in state for the 'last announcement shown', and if it's different then the announcement will render. As soon as an announcement is shown, the id will be updated in state. This ensures that announcements are not shown more than once, even if the user doesn't close it themselves.
*/
const Announcement = ({ version, hideAnnouncement }: AnnouncementProps) => {
	const minorVersion = version.split(".").slice(0, 2).join(".") // 2.0.0 -> 2.0
	return (
		<div
			style={{
				backgroundColor: "var(--vscode-editor-inactiveSelectionBackground)",
				borderRadius: "3px",
				padding: "12px 16px",
				margin: "5px 15px 5px 15px",
				position: "relative",
				flexShrink: 0,
			}}>
			<VSCodeButton
				appearance="icon"
				onClick={hideAnnouncement}
				style={{ position: "absolute", top: "8px", right: "8px" }}>
				<span className="codicon codicon-close"></span>
			</VSCodeButton>
			<h3 style={{ margin: "0 0 8px" }}>
				<FormattedMessage id="announcement.newVersion" defaultMessage="🎉 New in v{minorVersion}" values={{ minorVersion }} />
			</h3>
			<p style={{ margin: "5px 0px", fontWeight: "bold" }}>使用MCP添加自定义工具向渐变!</p>
			<p style={{ margin: "5px 0px" }}>
			模型上下文协议允许像AI Code这样的代理插入和播放自定义工具,{" "}
				<VSCodeLink href="https://github.com/modelcontextprotocol/servers" style={{ display: "inline" }}>
				例如web搜索工具或GitHub工具。
				</VSCodeLink>
			</p>
			<p style={{ margin: "5px 0px" }}>
			单击“新建”，可以添加和配置MCP服务器{" "}
				<span className="codicon codicon-server" style={{ fontSize: "10px" }}></span> 菜单栏中的图标。
			</p>
			<p style={{ margin: "5px 0px" }}>
			为了更进一步，AI Code还能够为自己创建定制工具。只是说
			“添加一个工具……”，并观察他如何构建和安装特定于的新功能{" "}
				<i>你的工作流</i>。例如：
				<ul style={{ margin: "4px 0 6px 20px", padding: 0 }}>
					<li>"...获取Jira票据": 获取票据AC并让AI Code开始工作</li>
					<li>"...管理AWS EC2s": 检查服务器指标并上下调整</li>
					<li>"...拉取PagerDuty事件": 拉取详细信息以帮助AI Code修复错误</li>
				</ul>
				AI Code处理从创建MCP服务器到在扩展中安装它的一切，准备在
未来的任务。服务器被保存到 <code>~/Documents/AI Code/MCP</code> 所以你可以很容易地与其他人分享它们
			</p>
			<p style={{ margin: "5px 0px" }}>
				通过让AI Code "添加一个获取最新npm文档的工具
			</p>
			{/*<ul style={{ margin: "0 0 8px", paddingLeft: "12px" }}>
				 <li>
					OpenRouter now supports prompt caching! They also have much higher rate limits than other providers,
					so I recommend trying them out.
					<br />
					{!apiConfiguration?.openRouterApiKey && (
						<VSCodeButtonLink
							href={getOpenRouterAuthUrl(vscodeUriScheme)}
							style={{
								transform: "scale(0.85)",
								transformOrigin: "left center",
								margin: "4px -30px 2px 0",
							}}>
							Get OpenRouter API Key
						</VSCodeButtonLink>
					)}
					{apiConfiguration?.openRouterApiKey && apiConfiguration?.apiProvider !== "openrouter" && (
						<VSCodeButton
							onClick={() => {
								vscode.postMessage({
									type: "apiConfiguration",
									apiConfiguration: { ...apiConfiguration, apiProvider: "openrouter" },
								})
							}}
							style={{
								transform: "scale(0.85)",
								transformOrigin: "left center",
								margin: "4px -30px 2px 0",
							}}>
							Switch to OpenRouter
						</VSCodeButton>
					)}
				</li> 
				<li>
					<b>Edit Cline's changes before accepting!</b> When he creates or edits a file, you can modify his
					changes directly in the right side of the diff view (+ hover over the 'Revert Block' arrow button in
					the center to undo "<code>{"// rest of code here"}</code>" shenanigans)
				</li>
				<li>
					New <code>search_files</code> tool that lets Cline perform regex searches in your project, letting
					him refactor code, address TODOs and FIXMEs, remove dead code, and more!
				</li>
				<li>
					When Cline runs commands, you can now type directly in the terminal (+ support for Python
					environments)
				</li>
			</ul>*/}
			{/* <p style={{ margin: "0" }}>
				加入
				<VSCodeLink style={{ display: "inline" }} href="https://discord.gg/cline">
					discord.gg/cline
				</VSCodeLink>
				获取更多更新！
			</p> */}
		</div>
	)
}

export default memo(Announcement)
