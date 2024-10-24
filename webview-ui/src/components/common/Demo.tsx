
import {
    VSCodeBadge,
    VSCodeButton,
    VSCodeCheckbox,
    VSCodeDataGrid,
    VSCodeDataGridCell,
    VSCodeDataGridRow,
    VSCodeDivider,
    VSCodeDropdown,
    VSCodeLink,
    VSCodeOption,
    VSCodePanels,
    VSCodePanelTab,
    VSCodePanelView,
    VSCodeProgressRing,
    VSCodeRadio,
    VSCodeRadioGroup,
    VSCodeTag,
    VSCodeTextArea,
    VSCodeTextField,
} from "@vscode/webview-ui-toolkit/react"
import { FormattedMessage, useIntl } from 'react-intl';

function Demo() {
	const intl = useIntl();
	// function handleHowdyClick() {
	// 	vscode.postMessage({
	// 		command: "hello",
	// 		text: "Hey there partner! 🤠",
	// 	})
	// }

	const rowData = [
		{
			cell1: "Cell Data",
			cell2: "Cell Data",
			cell3: "Cell Data",
			cell4: "Cell Data",
		},
		{
			cell1: "Cell Data",
			cell2: "Cell Data",
			cell3: "Cell Data",
			cell4: "Cell Data",
		},
		{
			cell1: "Cell Data",
			cell2: "Cell Data",
			cell3: "Cell Data",
			cell4: "Cell Data",
		},
	]

	return (
		<main>
			<h1>Hello World!</h1>
			<VSCodeButton>Howdy!</VSCodeButton>

			<div className="grid gap-3 p-2 place-items-start">
				<VSCodeDataGrid>
					<VSCodeDataGridRow row-type="header">
						<VSCodeDataGridCell cell-type="columnheader" grid-column="1">
							A Custom Header Title
						</VSCodeDataGridCell>
						<VSCodeDataGridCell cell-type="columnheader" grid-column="2">
							Another Custom Title
						</VSCodeDataGridCell>
						<VSCodeDataGridCell cell-type="columnheader" grid-column="3">
							Title Is Custom
						</VSCodeDataGridCell>
						<VSCodeDataGridCell cell-type="columnheader" grid-column="4">
							Custom Title
						</VSCodeDataGridCell>
					</VSCodeDataGridRow>
					{rowData.map((row, index) => (
						<VSCodeDataGridRow key={index}>
							<VSCodeDataGridCell grid-column="1">{row.cell1}</VSCodeDataGridCell>
							<VSCodeDataGridCell grid-column="2">{row.cell2}</VSCodeDataGridCell>
							<VSCodeDataGridCell grid-column="3">{row.cell3}</VSCodeDataGridCell>
							<VSCodeDataGridCell grid-column="4">{row.cell4}</VSCodeDataGridCell>
						</VSCodeDataGridRow>
					))}
				</VSCodeDataGrid>

                <VSCodeTextField>
					<section slot="end" style={{ display: "flex", alignItems: "center" }}>
						<VSCodeButton appearance="icon" aria-label="Match Case">
							<span className="codicon codicon-case-sensitive"></span>
						</VSCodeButton>
						<VSCodeButton appearance="icon" aria-label="Match Whole Word">
							<span className="codicon codicon-whole-word"></span>
						</VSCodeButton>
						<VSCodeButton appearance="icon" aria-label="Use Regular Expression">
							<span className="codicon codicon-regex"></span>
						</VSCodeButton>
					</section>
				</VSCodeTextField>
				<span slot="end" className="codicon codicon-chevron-right"></span>

				<span className="flex gap-3">
					<VSCodeProgressRing />
					<VSCodeTextField />
					<VSCodeButton>
						<FormattedMessage id="demo.addButton" defaultMessage="Add" />
					</VSCodeButton>
					<VSCodeButton appearance="secondary">
						<FormattedMessage id="demo.removeButton" defaultMessage="Remove" />
					</VSCodeButton>
				</span>

				<VSCodeBadge>
					<FormattedMessage id="demo.badge" defaultMessage="Badge" />
				</VSCodeBadge>
				<VSCodeCheckbox>
					<FormattedMessage id="demo.checkbox" defaultMessage="Checkbox" />
				</VSCodeCheckbox>
				<VSCodeDivider />
				<VSCodeDropdown>
					<VSCodeOption>
						<FormattedMessage id="demo.option1" defaultMessage="Option 1" />
					</VSCodeOption>
					<VSCodeOption>
						<FormattedMessage id="demo.option2" defaultMessage="Option 2" />
					</VSCodeOption>
				</VSCodeDropdown>
				<VSCodeLink href="#">
					<FormattedMessage id="demo.link" defaultMessage="Link" />
				</VSCodeLink>
				<VSCodePanels>
					<VSCodePanelTab id="tab-1">
						<FormattedMessage id="demo.tab1" defaultMessage="Tab 1" />
					</VSCodePanelTab>
					<VSCodePanelTab id="tab-2">
						<FormattedMessage id="demo.tab2" defaultMessage="Tab 2" />
					</VSCodePanelTab>
					<VSCodePanelView id="view-1">
						<FormattedMessage id="demo.panelView1" defaultMessage="Panel View 1" />
					</VSCodePanelView>
					<VSCodePanelView id="view-2">
						<FormattedMessage id="demo.panelView2" defaultMessage="Panel View 2" />
					</VSCodePanelView>
				</VSCodePanels>
				<VSCodeRadioGroup>
					<VSCodeRadio>
						<FormattedMessage id="demo.radio1" defaultMessage="Radio 1" />
					</VSCodeRadio>
					<VSCodeRadio>
						<FormattedMessage id="demo.radio2" defaultMessage="Radio 2" />
					</VSCodeRadio>
				</VSCodeRadioGroup>
				<VSCodeTag>
					<FormattedMessage id="demo.tag" defaultMessage="Tag" />
				</VSCodeTag>
				<VSCodeTextArea placeholder={intl.formatMessage({ id: "demo.textAreaPlaceholder", defaultMessage: "Text Area" })} />
			</div>
		</main>
	)
}

export default Demo
