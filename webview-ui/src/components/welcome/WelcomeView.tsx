import { VSCodeButton, VSCodeLink } from "@vscode/webview-ui-toolkit/react"
import { useEffect, useState } from "react"
import { useExtensionState } from "../../context/ExtensionStateContext"
import { validateApiConfiguration } from "../../utils/validate"
import { vscode } from "../../utils/vscode"
import ApiOptions from "../settings/ApiOptions"
import { FormattedMessage } from 'react-intl'

const WelcomeView = () => {
	const { apiConfiguration } = useExtensionState()

	const [apiErrorMessage, setApiErrorMessage] = useState<string | undefined>(undefined)

	const disableLetsGoButton = apiErrorMessage != null

	const handleSubmit = () => {
		vscode.postMessage({ type: "apiConfiguration", apiConfiguration })
	}

	useEffect(() => {
		setApiErrorMessage(validateApiConfiguration(apiConfiguration))
	}, [apiConfiguration])

	return (
		<div style={{ padding: "20px", paddingTop: "40px" }}>
			<h2>
				<FormattedMessage id="welcome.title" defaultMessage="Hi, I'm AI Code" />
			</h2>
			<p>
				<FormattedMessage id="welcome.capabilities" defaultMessage="I can do all kinds of tasks thanks to the latest breakthroughs in" />{" "}
				<VSCodeLink
					href="https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf"
					style={{ display: "inline" }}>
					<FormattedMessage id="welcome.capabilities.link" defaultMessage="Claude 3.5 Sonnet's agentic coding capabilities" />
				</VSCodeLink>{" "}
				<FormattedMessage id="welcome.tools" defaultMessage="�Լ����������Ҵ����ͱ༭�ļ���̽��������Ŀ��ʹ���������ִ���ն������Ȼ��Ҫ������ɣ���" />
			</p>

			<b>
				<FormattedMessage id="welcome.apiProvider" defaultMessage="To get started, this extension needs an API provider for Claude 3.5 Sonnet." />
			</b>

			<div style={{ marginTop: "10px" }}>
				<ApiOptions showModelOptions={false} />
				<VSCodeButton onClick={handleSubmit} disabled={disableLetsGoButton} style={{ marginTop: "3px" }}>
					<FormattedMessage id="welcome.letsGo" defaultMessage="���ڿ�ʼ!" />
				</VSCodeButton>
			</div>
		</div>
	)
}

export default WelcomeView
