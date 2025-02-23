# 更新日志

## [3.4.0]

-   引入 MCP 市场！您现在可以直接在扩展中发现和安装最佳的 MCP 服务器，新的服务器会定期添加
-   在计划模式中添加 mermaid 图表支持！您现在可以在聊天中查看 mermaid 代码块的可视化表示，并点击它们以查看扩展视图
-   在编辑文件和运行命令后使用更多可视化检查点指示器
-   在每个任务开始时创建一个检查点，以便轻松恢复到初始状态
-   添加“终端”上下文提及，以引用活动终端的内容
-   添加“Git 提交”上下文提及，以引用当前工作更改或特定提交（感谢 @mrubens！）
-   在从计划模式切换到执行模式时，发送当前文本框内容作为额外反馈，或在点击“批准”按钮时
-   为 OpenAI 兼容性添加高级配置选项（上下文窗口、最大输出、定价等）
-   添加阿里巴巴 Qwen 2.5 编码模型、VL 模型和 DeepSeek-R1/V3 支持
-   改进对 AWS Bedrock 配置文件的支持
-   修复 Mistral 提供商对非代码模型的支持
-   添加禁用浏览器工具的高级设置
-   添加设置 Chromium 可执行路径的高级设置

## [3.3.2]

-   修复 OpenRouter 请求周期性不返回成本/令牌统计的错误，导致上下文窗口限制错误
-   使检查点更可见，并跟踪恢复的检查点

## [3.3.0]

-   添加.clineignore以阻止AI Code访问指定的文件模式
-   为计划/执行切换添加键盘快捷键和提示信息
-   修复新文件不会出现在文件下拉菜单中的错误
-   添加对限速请求的自动重试功能（感谢@ViezeVingertjes！）
-   在高级设置中添加了o3-mini的推理努力支持
-   添加了使用AWS CLI创建配置文件以实现对AWS bedrock的长期连接支持
-   添加了Requesty API提供商
-   添加了Together API提供商
-   添加了阿里巴巴Qwen API提供商（感谢@aicccode！）

## [3.2.13]

-   添加了新的Gemini模型gemini-2.0-flash-lite-preview-02-05和gemini-2.0-flash-001
-   添加了所有可用的Mistral API模型（感谢@ViezeVingertjes！）
-   添加了LiteLLM API提供商支持（感谢@him0！）

## [3.2.12]

- 修复 Windows 用户的命令链接问题
- 修复 OpenAI 提供商的 reasoning_content 错误

## [3.2.11]

- 添加 OpenAI o3-mini 模型

## [3.2.10]

# Start of Selection
-   改进对 DeepSeek-R1（deepseek-reasoner）模型在 OpenRouter、OpenAI 兼容和 DeepSeek 直接的支持（感谢 @Szpadel！）
-   显示支持的模型的推理令牌
-   修复在计划/执行模式之间切换模型时的问题
# End of Selection

## [3.2.6]

- 在计划和执行模式之间切换时保存最后使用的 API/模型，适用于喜欢为每种模式使用不同模型的用户
- 在任务标题中新增上下文窗口进度条，以了解上下文增加时的成本增加/生成质量下降情况
- 添加高级设置，可以从请求中移除 MCP 提示以节省令牌，为不使用 git 的用户启用/禁用检查点（更多功能即将推出！）
- 添加 Gemini 2.0 Flash Thinking 实验性模型

## [3.2.5]

- 在计划模式中使用黄色文本框轮廓，以更好地区分执行模式

## [3.2.3]

- 添加 DeepSeek-R1（deepseek-reasoner）模型支持，并正确处理参数

## [3.2.0]

-   添加计划/执行模式切换，让你在让 AI Code 开始工作之前规划任务
-   通过聊天字段下方的新弹出菜单轻松切换 API 提供商和模型
-   添加 VS Code LM API 提供商，以运行其他 VS Code 扩展提供的模型（例如 GitHub Copilot）。感谢 @julesmons、@RaySinner 和 @MrUbens 的贡献！
-   添加 MCP 服务器的开/关切换，以在不使用时禁用它们。感谢 @MrUbens！
-   为 MCP 服务器中的单个工具添加自动批准选项。感谢 @MrUbens！

## [3.1.9]

-   添加 Mistral API 提供商，支持 codestral-latest 模型

## [3.1.7]

-   添加了更改视口大小和无头模式的功能，当 AI Code 请求启动浏览器时

## [3.1.6]

-   修复了 AI Code 无法从工具结果中读取 "@/" 导入路径别名的错误

## [3.1.4]

-   修复了全局启用 git 提交签名的用户无法使用检查点的问题

## [3.1.2]

-   修复在创建检查点时 LFS 文件未被忽略的问题

## [3.1.0]

- 添加检查点：每当 AI Code 使用工具时，工作区的快照会自动创建
  - 比较更改：悬停在任何工具使用上以查看快照和当前工作区状态之间的差异
  - 恢复选项：选择仅恢复任务状态、仅恢复工作区文件或两者都恢复
- 新的“查看新更改”按钮在任务完成后出现，提供所有工作区更改的概述
- 任务标题现在显示磁盘空间使用情况，并带有删除按钮以帮助管理快照存储

## [3.0.12]

- 修复 DeepSeek API 成本报告（输入价格为 0，因为它要么是缓存读取，要么是写入，与 Anthropic 报告缓存使用情况的方式不同）

## [3.0.11]

- 强调编辑器在文件编辑响应中完成的自动格式化，以实现更可靠的差异编辑

## [3.0.10]

- 将 DeepSeek 提供商添加到 API 提供商选项中
- 修复 DeepSeek v3 的上下文窗口限制错误

## [3.0.9]

- 修复了 DeepSeek v3 在差异编辑中错误地转义 HTML 实体的错误

## [3.0.8]

- 通过在系统提示中添加“自动格式化考虑”来缓解 DeepSeek v3 差异编辑错误，鼓励模型使用更新的文件内容作为搜索块的参考点

## [3.0.7]

- 恢复使用批处理文件监视器以修复在一次创建许多文件时的崩溃问题

## [3.0.6]

- 修复了在 `@` 上下文提及菜单中某些文件丢失的错误
- 在其他区域添加对 Bedrock 的支持
- 改进差异编辑
- 为不使用提示缓存的模型添加 OpenRouter 的中间出变换（防止上下文窗口限制错误，但不能应用于像 Claude 这样的模型，因为它会不断破坏缓存）

## [3.0.4]

- 修复了双子模型在文本内容末尾添加代码块伪影的错误
- 修复了在浅色主题下上下文提及菜单的视觉问题

## [3.0.2]

- 添加块锚点匹配以实现更可靠的差异编辑（如果有3行以上，则使用第一行和最后一行作为锚点进行搜索）
- 在系统提示中添加指令以使用完整行进行差异编辑，以便与回退策略正常工作
- 改进了差异编辑错误处理
- 添加了新的双子模型

## [3.0.0]

- AI Code现在使用基于搜索和替换的差异方法来编辑大文件，以防止代码删除问题。
- 增加了对更全面的自动批准配置的支持，允许您指定哪些工具需要批准，哪些不需要。
- 增加了启用系统通知的功能，当AI Code需要批准或完成任务时通知您。
- 增加了对根级别`.clinerules`文件的支持，该文件可用于为项目指定自定义指令。

## [2.2.0]
- 添加对模型上下文协议（MCP）的支持，允许AI Code使用自定义工具，如web搜索工具或GitHub工具
- 通过菜单栏中的服务器图标添加MCP服务器管理选项卡
- 添加AI Code根据用户请求动态创建新MCP服务器的能力（例如，"添加一个获取最新npm文档的工具"）

## [2.1.6]

- 添加LM Studio作为API提供商选项（确保启动LM Studio服务器，以便与扩展一起使用！）

## [2.1.5]

- 为OpenRouter上的新Claude模型ID添加提示缓存支持（例如`anthropic/claude-3.5-sonnet-20240620`）

## [2.1.4]

- AWS Bedrock修复（添加缺失的区域，支持跨区域推理，并为新模型不可用的区域提供较旧的Sonnet模型）

## [2.1.3]

- 增加对 Claude 3.5 Haiku 的支持，比具有类似智能的 Sonnet 便宜 66%

## [2.1.2]

- 修复各种 bug
- 更新 README，添加新的浏览器功能说明

## [2.1.1]

- 添加更严格的提示，防止 AI Code 在浏览器会话期间在未关闭浏览器的情况下编辑文件

## [2.1.0]

- AI Code 现在使用 Anthropic 的新"计算机使用"功能来启动浏览器、点击、输入和滚动。这使他在运行时调试、端到端测试，甚至一般网络使用方面有了更多自主权。试试问"查看科罗拉多州的天气"来体验这个功能！（适用于 Claude 3.5 Sonnet v2）

## [2.0.19]

- 修复 OpenRouter 上 Claude 3.5 Sonnet v1 的模型信息

## [2.0.18]

- 为 GCP Vertex 和 AWS Bedrock 添加对 Claude 3.5 Sonnet v1 和 v2 的支持（适用于新模型尚未启用或在您所在地区不可用的情况）

## [2.0.17]

- 更新 Anthropic 模型 ID

## [2.0.16]

- 调整系统提示

## [2.0.15]

-   修复修改 AI Code 的编辑会导致他尝试重新应用编辑的 bug
- 修复较弱的模型在使用 write_to_file 工具之前显示文件内容的 bug
- 修复使用原生 OpenAI 时的 o1-mini 和 o1-preview 错误

## [2.0.14]

- 在流可能挂起时优雅地取消请求

## [2.0.13]

- 检测代码遗漏并显示带有故障排除链接的警告

## [2.0.12]

- 在文件编辑流式动画期间保持光标不受干扰

## [2.0.11]

- 调整 read_file 相关的提示，以防止不必要的重复读取文件

## [2.0.10]

- 进一步调整系统提示以防止懒惰编码

## [2.0.9]

- 更新系统提示以试图防止 AI Code 懒惰编码（`// rest of code here...`）

## [2.0.8]

- 修复 OpenAI 的 o1-mini 和 o1-preview
- 修复在项目索引等慢速环境中有时无法打开差异编辑器的问题

## [2.0.7]

- 修复各种 bug

## [2.0.6]

- 更新 URL 为 https://github.com/Ciciella/AIcoder

## [2.0.5]

- 修复在 write_to_file 期间切换标签页时 AI Code 的编辑会流入活动标签页的 bug
- 在任务继续提示中添加说明，说明中断的 write_to_file 会将文件恢复到原始内容，避免不必要的重新读取
- 修复流在中途失败时非第一块的错误处理

## [2.0.0]

- 新名字！认识 AI Code，一个可以使用您的 CLI 和编辑器的 AI 助手
- 响应现在以黄色文本装饰动画流式显示，以跟踪 AI Code 编辑文件的进度
- 新的取消按钮，让您在 AI Code 走错方向时给予反馈，让您对任务有更多控制
- 重新设计的工具调用提示，导致完成任务的请求减少约 40%，并提高了与其他模型的性能
- 使用 OpenRouter 搜索和使用任何模型

## [1.9.7]

- 仅在文件编辑后自动包含错误诊断，删除警告以防止 Claude 在具有严格 linting 规则的项目中分心

## [1.9.6]

- 添加对新 Google Gemini 模型 `gemini-1.5-flash-002` 和 `gemini-1.5-pro-002` 的支持
- 更新系统提示，以便在终端输出未流式返回时更加宽容
- 调整系统提示以防止过度使用 inspect_site 工具
- 增加全局行高以提高可读性

## [1.9.0]

- Claude 现在可以使用浏览器！此更新添加了一个新的 `inspect_site` 工具，该工具捕获网站（包括 localhost）的屏幕截图和控制台日志，使 Claude 能够自行解决其上的问题。
- 通过仅发送 Claude 新错误来改进自动 linter/compiler 调试，而不是报告所有工作区问题。

## [1.8.0]

- 您现在可以使用 '@' 在 textarea 中添加上下文！
    - @url: 粘贴一个 URL 以供扩展获取并转换为 markdown，当您想给 Claude 最新的文档时非常有用！
    - @problems: 添加工作区错误和警告，以便 Claude 可以修复它们，不再需要来回调试
    - @file: 添加文件的内容，这样您就不必浪费 API 请求来批准读取文件（+ 输入以搜索文件）
    - @folder: 一次添加文件夹的所有文件，以进一步加快工作流程

## [1.7.0]

- 添加问题监控，以保持 Claude 了解 linter/compiler/build 问题，让他能够主动修复自己的错误（添加缺少的导入、修复类型错误等）

## [1.6.5]

- 添加对 OpenAI o1、Azure OpenAI 和 Google Gemini（免费，每分钟最多 15 个请求！）的支持
- 任务标题现在可以折叠，以提供更多空间用于查看对话
- 添加模糊搜索和排序，以使任务历史记录更易于查找特定任务

## [1.6.0]

- 命令现在直接在您的终端中运行，感谢 VSCode 1.93 的新 shell 集成更新！此外，一个新的“Proceed While Running”按钮，让 Claude 在命令运行时继续工作，同时发送新的输出（例如，让他在编辑文件时对服务器错误做出反应）

## [1.5.27]

- Claude 的更改现在出现在文件的时间轴中，允许您轻松查看每个编辑的差异。这特别有助于如果您想恢复到以前的版本。不需要 git—一切都是由 VSCode 的本地历史记录跟踪的！
- 更新系统提示，以防止 Claude 重新读取文件

## [1.5.19]

- 添加对 OpenAI 兼容 API 提供者的支持（例如，Ollama！）

## [1.5.13]

- 新的终端模拟器！当 Claude 运行命令时，您现在可以直接在终端中输入（+ 支持 Python 环境）
- 添加任务历史记录中的搜索

## [1.5.6]

- 您现在可以在接受 Claude 的更改之前对其进行编辑！当他在编辑或创建文件时，您可以直接在差异视图的右侧修改他的更改（+ 悬停以撤消 `// rest of code here` 的 shenanigans）

## [1.5.4]

- 添加对阅读 .pdf 和 .docx 文件的支持（尝试 "turn my business_plan.docx into a company website"）

## [1.5.0]

- 添加新的 `search_files` 工具，让 Claude 可以在项目中执行正则表达式搜索，使他可以重构代码、解决 TODOs 和 FIXMEs、删除死代码等！

## [1.4.0]

- 添加 "Always allow read-only operations" 设置，以便 Claude 可以读取文件并查看目录，而无需批准（默认关闭）
- 实现滑动窗口上下文管理，以保持任务在超过 200k 个令牌时继续进行
- 添加 Google Cloud Vertex AI 支持，并将 Claude 3.5 Sonnet 的最大输出令牌数更新为 8192 个令牌，适用于所有提供者
- 改进系统提示，以防止懒惰编辑（less "//rest of code here"）

## [1.3.0]

- 添加任务历史记录

## [1.2.0]

- 添加对 Prompt Caching 的支持，以显著减少成本和响应时间（目前仅通过 Anthropic API 提供，适用于 Claude 3.5 Sonnet 和 Claude 3.0 Haiku）

## [1.1.1]

- 添加选择其他 Claude 模型的选项（+ GPT-4o、DeepSeek 和 Mistral，如果您使用 OpenRouter）
- 添加将自定义指令添加到系统提示末尾的选项

## [1.1.0]

- 在聊天中粘贴图像以使用 Claude 的视觉功能，并将其转换为完全功能化的应用程序或修复屏幕截图中的错误

## [1.0.9]

- 添加对 OpenRouter 和 AWS Bedrock 的支持

## [1.0.8]

- 在编辑器中显示新文件或编辑文件的差异

## [1.0.7]

- 用更明确的 `list_files_top_level`、`list_files_recursive` 和 `view_source_code_definitions_top_level` 替换 `list_files` 和 `analyze_project`，以仅获取与任务相关的文件的源代码定义

## [1.0.6]

- 通过向 stdin 发送消息并终止长时间运行的进程（例如，服务器）来与 CLI 命令交互
- 将任务导出为 markdown 文件（作为未来任务的上下文）

## [1.0.5]

- Claude 现在知道 vscode 的可见编辑器和打开的标签页

## [1.0.4]

- 在编辑器中打开（使用菜单栏或命令面板中的 `Claude Dev: Open In New Tab`），以更清楚地看到 Claude 如何更新您的工空间
- 新的 `analyze_project` 工具，帮助 Claude 获取项目源代码定义和文件结构的全面概述
- 提供反馈，例如终端命令和文件编辑
- 更新最大输出令牌数为 8192，以防止懒惰编码（`// rest of code here...`）
- 添加重试失败 API 请求的能力（有助于速率限制）
- 生活质量改进，例如 markdown 渲染、内存优化、更好的主题支持

## [0.0.6]

- 初始版本