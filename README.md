# AI Code 代码编程助手 🤖

<p align="center">
  <img src="assets/docs/demo2.gif" width="100%" />
</p>


<div align="center">
<table>
<tbody>
<td align="center">
<a href="https://github.com/Ciciella/AIcoder/discussions/1"><strong>功能请求</strong></a>
</td>
</tbody>
</table>
</div>

认识AI code，一个可以使用你的**CLI**和**编辑器**的AI助手。

AI code可以逐步处理复杂的软件开发任务。通过允许他创建和编辑文件、探索大型项目以及执行终端命令（在你授权后），他可以以超越代码补全或技术支持的方式协助你。虽然自主AI脚本传统上在沙盒环境中运行，但此扩展提供了一个人机交互的GUI来批准每个文件更改和终端命令，提供了一种安全且可访问的方式来探索代理AI的潜力。

1. 输入你的任务并添加图像，将模型转换为功能性应用程序或通过截图修复错误。
2. AI code首先通过分析你的文件结构和源代码ASTs、运行正则表达式搜索以及读取相关文件来了解现有项目。通过仔细管理添加到上下文中的信息，AI code可以在不压倒上下文窗口的情况下为大型复杂项目提供有价值的帮助。
3. 一旦AI code获得所需信息，他可以：
    - 创建和编辑文件+在此过程中监控linter/编译器错误，让他主动修复诸如缺少导入和语法错误等问题。
    - 直接在你的终端中执行命令并在工作时监控其输出，让他例如在编辑文件后对开发服务器问题做出反应。
    - 对于Web开发任务，AI code可以在无头浏览器中启动网站以捕获截图和控制台日志，允许他修复运行时错误和视觉错误。
4. 当任务完成时，AI code会通过一个终端命令如`open -a "Google Chrome" index.html`向你展示结果，你可以通过点击按钮来运行。

> [!提示]
> 使用`CMD/CTRL + Shift + P`快捷键打开命令面板并输入“AI Code: Open In New Tab”以在编辑器中以选项卡形式打开扩展。这让你可以与文件资源管理器并排使用AI code，更清楚地看到他如何改变你的工作空间。

---

### API提供商
国产模型和openAI兼容的api key 均可使用

<img width="340" src="https://gitee.com/nulifendou99/ai-code/raw/master/assets/docs/shiyongjieshao.png">

### 支持模型列表：

<img width="340" src="https://gitee.com/nulifendou99/ai-code/raw/master/assets/docs/moxingjieshao.png">


### 使用任何API和模型

AI code支持OpenRouter、Anthropic、OpenAI、Google Gemini、AWS Bedrock、Azure和GCP Vertex等API提供商。你还可以配置任何兼容OpenAI的API，或通过Ollama使用本地模型。如果你使用OpenRouter，扩展会获取他们的最新模型列表，让你在新模型可用时立即使用。

扩展还会跟踪整个任务循环和单个请求的总令牌和API使用成本，让你在每一步都了解支出。


### 在终端中运行命令

感谢VSCode v1.93中的新[终端壳集成更新](https://code.visualstudio.com/updates/v1_93#_terminal-shell-integration-api)，AI code可以直接在你的终端中执行命令并接收输出。这使他能够执行从安装软件包和运行构建脚本到部署应用程序、管理数据库和执行测试的广泛任务，同时适应你的开发环境和工具链以正确完成工作。

对于长时间运行的进程如开发服务器，使用“Proceed While Running”按钮让AI code在命令在后台运行时继续任务。当AI code工作时，他会在过程中收到任何新的终端输出通知，让他对可能出现的问题做出反应，例如编辑文件时的编译时错误。


### 创建和编辑文件

AI code可以直接在你的编辑器中创建和编辑文件，向你展示更改的差异视图。你可以直接在差异视图编辑器中编辑或还原AI code的更改，或在聊天中提供反馈，直到你对结果满意。AI code还会监控linter/编译器错误（缺少导入、语法错误等），以便他可以在过程中自行修复出现的问题。

AI code所做的所有更改都记录在你文件的时间轴中，提供了一种简单的方法来跟踪和还原修改（如果需要）。


### 分析图像和浏览器截图

像Claude 3.5 Sonnet这样的模型现在可以理解和分析图像，允许多模式工作流的激动人心的可能性。直接在聊天中粘贴图像，为AI code提供无法用语言解释的上下文，并将模型转换为应用程序，通过截图修复错误等。

AI code还可以使用无头浏览器检查任何网站，例如localhost，允许他捕获截图和控制台日志。这使他能够自主修复视觉错误和运行时问题，而无需你手动操作和复制粘贴错误日志。



<img width="360" src="https://gitee.com/nulifendou99/ai-code/raw/master/assets/docs/gongnengjieshao.png">

### 添加上下文

-   **`@url`:** 粘贴一个URL以供扩展获取并转换为markdown，当你想给AI code最新文档时很有用
-   **`@problems`:** 添加工作区错误和警告（“问题”面板）以供AI code修复
-   **`@file`:** 添加文件内容，这样你就不必浪费API请求批准读取文件（+类型以搜索文件）
-   **`@folder`:** 一次性添加文件夹的文件以加快你的工作流程

### 致谢

我们的项目基于<a href="https://github.com/cline/cline">cline</a>开源技术构建。



# Cline (prev. Claude Dev) – \#1 on OpenRouter

<p align="center">
  <img src="https://media.githubusercontent.com/media/cline/cline/main/assets/docs/demo.gif" width="100%" />
</p>

<div align="center">
<table>
<tbody>
<td align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev" target="_blank"><strong>Download on VS Marketplace</strong></a>
</td>
<td align="center">
<a href="https://discord.gg/cline" target="_blank"><strong>Join the Discord</strong></a>
</td>
<td align="center">
<a href="https://github.com/cline/cline/wiki" target="_blank"><strong>Docs</strong></a>
</td>
<td align="center">
<a href="https://github.com/cline/cline/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop" target="_blank"><strong>Feature Requests</strong></a>
</td>
</tbody>
</table>
</div>

Meet Cline, an AI assistant that can use your **CLI** a**N**d **E**ditor.

Thanks to [Claude 3.5 Sonnet's agentic coding capabilities](https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf), Cline can handle complex software development tasks step-by-step. With tools that let him create & edit files, explore large projects, and execute terminal commands (after you grant permission), he can assist you in ways that go beyond code completion or tech support. While autonomous AI scripts traditionally run in sandboxed environments, this extension provides a human-in-the-loop GUI to approve every file change and terminal command, providing a safe and accessible way to explore the potential of agentic AI.

1. Enter your task and add images to convert mockups into functional apps or fix bugs with screenshots.
2. Cline starts by analyzing your file structure & source code ASTs, running regex searches, and reading relevant files to get up to speed in existing projects. By carefully managing what information is added to context, Cline can provide valuable assistance even for large, complex projects without overwhelming the context window.
3. Once Cline has the information he needs, he can:
    - Create and edit files + monitor linter/compiler errors along the way, letting him proactively fix issues like missing imports and syntax errors on his own.
    - Execute commands directly in your terminal and monitor their output as he works, letting him e.g., react to dev server issues after editing a file.
    - For web development tasks, Cline can launch the site in a headless browser to capture screenshots and console logs, allowing him to fix runtime errors and visual bugs.
4. When a task is completed, Cline will present the result to you with a terminal command like `open -a "Google Chrome" index.html`, which you run with a click of a button.

> [!TIP]
> Use the `CMD/CTRL + Shift + P` shortcut to open the command palette and type "Cline: Open In New Tab" to open the extension as a tab in your editor. This lets you use Cline side-by-side with your file explorer, and see how he changes your workspace more clearly.

---

<img align="right" width="340" src="https://github.com/user-attachments/assets/3cf21e04-7ce9-4d22-a7b9-ba2c595e88a4">

### Use any API and Model

Cline supports API providers like OpenRouter, Anthropic, OpenAI, Google Gemini, AWS Bedrock, Azure, and GCP Vertex. You can also configure any OpenAI compatible API, or use a local model through Ollama. If you're using OpenRouter, the extension fetches their latest model list, allowing you to use the newest models as soon as they're available.

The extension also keeps track of total tokens and API usage cost for the entire task loop and individual requests, keeping you informed of spend every step of the way.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="370" src="https://github.com/user-attachments/assets/81be79a8-1fdb-4028-9129-5fe055e01e76">

### Run Commands in Terminal

Thanks to the new [shell integration updates in VSCode v1.93](https://code.visualstudio.com/updates/v1_93#_terminal-shell-integration-api), Cline can execute commands directly in your terminal and receive the output. This allows him to perform a wide range of tasks, from installing packages and running build scripts to deploying applications, managing databases, and executing tests, all while adapting to your dev environment & toolchain to get the job done right.

For long running processes like dev servers, use the "Proceed While Running" button to let Cline continue in the task while the command runs in the background. As Cline works he’ll be notified of any new terminal output along the way, letting him react to issues that may come up, such as compile-time errors when editing files.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="400" src="https://github.com/user-attachments/assets/c5977833-d9b8-491e-90f9-05f9cd38c588">

### Create and Edit Files

Cline can create and edit files directly in your editor, presenting you a diff view of the changes. You can edit or revert Cline's changes directly in the diff view editor, or provide feedback in chat until you're satisfied with the result. Cline also monitors linter/compiler errors (missing imports, syntax errors, etc.) so he can fix issues that come up along the way on his own.

All changes made by Cline are recorded in your file's Timeline, providing an easy way to track and revert modifications if needed.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="350" src="https://github.com/user-attachments/assets/50019dba-a63d-41f0-ab0f-fd35ebcdd4c5">

### Analyze Images and Browser Screenshots

Models like Claude 3.5 Sonnet can now understand and analyze images, allowing for exciting possibilities of multimodal workflows. Paste images directly in chat to give Cline context that can't be explained in words, and turn mockups into apps, fix bugs with screenshots, and more.

Cline can also use a headless browser to inspect any website, e.g., localhost, allowing him to capture screenshots and console logs. This gives him autonomy to fixing visual bugs and runtime issues without you needing to handhold and copy-pasting error logs yourself.

<!-- Transparent pixel to create line break after floating image -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="360" src="https://github.com/user-attachments/assets/7fdf41e6-281a-4b4b-ac19-020b838b6970">

### Add Context

-   **`@url`:** Paste in a URL for the extension to fetch and convert to markdown, useful when you want to give Cline the latest docs
-   **`@problems`:** Add workspace errors and warnings ('Problems' panel) for Cline to fix
-   **`@file`:** Adds a file's contents so you don't have to waste API requests approving read file (+ type to search files)
-   **`@folder`:** Adds folder's files all at once to speed up your workflow even more

## Contributing

To contribute to the project, start by exploring [open issues](https://github.com/cline/cline/issues) or checking our [feature request board](https://github.com/cline/cline/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop). We'd also love to have you join our [Discord](https://discord.gg/cline) to share ideas and connect with other contributors.

<details>
<summary>Local Development Instructions</summary>

1. Clone the repository:
    ```bash
    git clone https://github.com/cline/cline.git
    ```
2. Open the project in VSCode:
    ```bash
    code cline
    ```
3. Install the necessary dependencies for the extension and webview-gui:
    ```bash
    npm run install:all
    ```
4. Launch by pressing `F5` (or `Run`->`Start Debugging`) to open a new VSCode window with the extension loaded. (You may need to install the [esbuild problem matchers extension](https://marketplace.visualstudio.com/items?itemName=connor4312.esbuild-problem-matchers) if you run into issues building the project.)

</details>

## License

[Apache 2.0 © 2024 Cline Bot Inc.](./LICENSE)



## 技术栈

### webview-ui 视图层

- 多语言使用 react-intl

### 外层api

- 多语言使用 vscode-nls

<details>
<summary>本地开发指南</summary>

1. 克隆仓库：
    ```bash
    git clone https://github.com/cline/cline.git
    ```
2. 在 VSCode 中打开项目：
    ```bash
    code cline
    ```
3. 安装扩展和 webview-gui 所需的依赖：
    ```bash
    npm run install:all
    ```

4. 按 `F5`（或 `Run` -> `Start Debugging`）启动，以在新 VSCode 窗口中加载扩展。（如果在构建项目时遇到问题，您可能需要安装 [esbuild problem matchers 扩展](https://marketplace.visualstudio.com/items?itemName=connor4312.esbuild-problem-matchers)。）

5. 构建
   - 编译项目：
     ```bash
     npm run compile
     ```
   - 打包扩展：
     ```bash
     npm run package
     ```

6. 测试
   - 运行测试：
     ```bash
     npm test
     ```

7. 其他有用的脚本
   - 检查类型：
     ```bash
     npm run check-types
     ```
   - 运行 linter：
     ```bash
     npm run lint
     ```
   - 启动 webview 开发服务器：
     ```bash
     npm run start:webview
     ```

8. 发布
   - 发布到 VS Code Marketplace：
     ```bash
     npm run publish:marketplace
     ```
9. 发布2
  - 发布到 VS Code
    ```bash
     npx @vscode/vsce publish
    ```

</details>