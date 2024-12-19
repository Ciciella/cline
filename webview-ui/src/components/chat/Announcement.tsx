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
			<ul style={{ margin: "0 0 8px", paddingLeft: "12px" }}>
				<li>
					<b>自动批准菜单:</b> 现在您可以指定哪些工具需要批准，设置最大数量的自动批准API请求，并为AI Code完成任务时启用系统通知。
				</li>
				<li>
					<b>大文件差异编辑:</b> AI Code现在使用高效的搜索和替换方法来修改大文件，以实现更快、更可靠的编辑（不再有"
					<code>{"// 代码删除"}</code>"）。
				</li>
				<li>
					<b>.aicoderules:</b> 添加根级别的<code>.aicoderules</code>文件，以指定项目的自定义指令。
				</li>
			</ul>
			<p style={{ margin: "5px 0px", fontWeight: "bold" }}>v2.2 更新:</p>
			<ul style={{ margin: "0 0 8px", paddingLeft: "12px" }}>
				<li>
					通过点击菜单栏中的新 <span className="codicon codicon-server" style={{ fontSize: "10px" }}></span> 图标，添加和配置
					<VSCodeLink href="https://github.com/modelcontextprotocol/servers" style={{ display: "inline" }}>
						MCP服务器
					</VSCodeLink>
					。
				</li>
				<li>
					AI Code还可以创建自定义工具–只需说"添加一个工具，用于...",然后观察他创建MCP服务器并在扩展中安装，准备好在未来任务中使用。
				</li>
				<li>
					通过问AI Code"添加一个获取最新npm文档的工具"
					{/* ，或
					<VSCodeLink href="https://x.com/sdrzn/status/1867271665086074969" style={{ display: "inline" }}>
						查看MCP在行动的演示。
					</VSCodeLink> */}
				</li>
			</ul>
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
