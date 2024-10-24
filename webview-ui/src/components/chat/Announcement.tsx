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
			<p style={{ margin: "5px 0px" }}>
				<FormattedMessage id="announcement.introduction" defaultMessage="New name! Meet Cline, an AI assistant that can use your CLI and Editor." />
			</p>
			<ul style={{ margin: "0 0 8px", paddingLeft: "12px" }}>
				<li>
					<FormattedMessage id="announcement.streamedResponses" defaultMessage="Responses are now streamed + a yellow text decoration animation to keep track of Cline's progress as he edits files." />
				</li>
				<li>
					<FormattedMessage id="announcement.cancelButton" defaultMessage="Cancel button to give Cline feedback if he goes off in the wrong direction, giving you more control over tasks." />
				</li>
				<li>
					<FormattedMessage id="announcement.reimaginedPrompt" defaultMessage="Re-imagined tool calling prompt resulting in ~40% fewer requests to accomplish tasks + better performance with other models." />
				</li>
				<li>
					<FormattedMessage id="announcement.openRouter" defaultMessage="Search and use any model with OpenRouter (search 'free' for no-cost options)." />
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
			<p style={{ margin: "0" }}>
				<VSCodeLink href="https://x.com/sdrzn/status/1843989769828602273" style={{ display: "inline" }}>
					<FormattedMessage id="announcement.demoLink" defaultMessage="See a demo of the changes here." />
				</VSCodeLink>
				{" "}
				<FormattedMessage 
					id="announcement.discordInvite" 
					defaultMessage="I'm excited for you to try this update, and would love to hear how you like it in our Discord. Come say hi!" 
				/>
				{" "}
				<VSCodeLink style={{ display: "inline" }} href="https://discord.gg/cline">
					https://discord.gg/cline
				</VSCodeLink>
			</p>
		</div>
	)
}

export default memo(Announcement)
