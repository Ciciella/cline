# Cline (前称 Claude Dev) – 在 OpenRouter 上排名第 1

<p align="center">
  <img src="https://media.githubusercontent.com/media/cline/cline/main/assets/docs/demo.gif" width="100%" />
</p>

<div align="center">
<table>
<tbody>
<td align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev" target="_blank"><strong>在 VS Marketplace 下载</strong></a>
</td>
<td align="center">
<a href="https://discord.gg/cline" target="_blank"><strong>加入 Discord</strong></a>
</td>
<td align="center">
<a href="https://github.com/cline/cline/wiki" target="_blank"><strong>文档</strong></a>
</td>
<td align="center">
<a href="https://github.com/cline/cline/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop" target="_blank"><strong>功能请求</strong></a>
</td>
</tbody>
</table>
</div>

认识 Cline，一个可以使用你的 **CLI** 和 **编辑器** 的 AI 助手。

得益于 [Claude 3.5 Sonnet 的代理编程能力](https://www-cdn.anthropic.com/fed9cc193a14b84131812372d8d5857f8f304c52/Model_Card_Claude_3_Addendum.pdf)，Cline 可以逐步处理复杂的软件开发任务。通过创建和编辑文件、探索大型项目以及执行终端命令（在您授权后）的工具，他可以在代码补全或技术支持之外为您提供帮助。虽然自主 AI 脚本通常运行在沙盒环境中，但此扩展提供了一个带有每一步文件更改和终端命令审批的人机交互界面，为您提供了一种安全且易于访问的方式来探索代理 AI 的潜力。

1. 输入您的任务并添加图片，将原型转换成功能应用或通过截图修复错误。
2. Cline 通过分析您的文件结构和源代码抽象语法树、运行正则表达式搜索和读取相关文件来加速现有项目的理解。通过仔细管理上下文中的信息添加，Cline 即使对于大型复杂项目也能提供有价值的帮助，而不会使上下文窗口过载。
3. 一旦 Cline 拥有所需的信息，他可以：
    - 创建和编辑文件，并监控代码检查器/编译器错误，让他能够主动修复诸如缺少导入和语法错误等问题。
    - 直接在您的终端中执行命令并监控其输出，让他例如在编辑文件后对开发服务器问题作出反应。
    - 对于 Web 开发任务，Cline 可以在无头浏览器中启动网站以捕获屏幕截图和控制台日志，允许他修复运行时错误和视觉问题。
4. 当任务完成时，Cline 将通过类似 `open -a "Google Chrome" index.html` 的终端命令向您展示结果，您只需点击一下即可运行。

> [!TIP]
> 使用 `CMD/CTRL + Shift + P` 快捷键打开命令面板并输入 `Cline: Open In New Tab` 以在编辑器中作为标签页打开扩展。这可以让您与文件资源管理器并排使用 Cline，并更清楚地看到他是如何改变您的工作区的。

---

<img align="right" width="340" src="https://github.com/user-attachments/assets/3cf21e04-7ce9-4d22-a7b9-ba2c595e88a4">

### 使用任何 API 和模型

Cline 支持像 OpenRouter、Anthropic、OpenAI、Google Gemini、AWS Bedrock、Azure 和 GCP Vertex 这样的 API 提供商。您还可以配置任何兼容 OpenAI 的 API，或通过 Ollama 使用本地模型。如果您使用 OpenRouter，扩展会获取他们最新的模型列表，让您能够立即使用最新模型。

扩展还跟踪整个任务循环和单个请求的总 token 数量和 API 使用成本，让您每一步都了解花费情况。

<!-- 透明像素以在浮动图像后创建换行 -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="370" src="https://github.com/user-attachments/assets/81be79a8-1fdb-4028-9129-5fe055e01e76">

### 在终端中运行命令

得益于 [VSCode v1.93 中的新 shell 集成更新](https://code.visualstudio.com/updates/v1_93#_terminal-shell-integration-api)，Cline 可以直接在您的终端中执行命令并接收输出。这使他能够执行从安装包、运行构建脚本到部署应用程序、管理数据库和执行测试等一系列任务，同时适应您的开发环境和工具链以正确完成任务。

对于长时间运行的进程（如开发服务器），使用“运行时继续”按钮让 Cline 在命令后台运行时继续任务。随着 Cline 工作，他会收到任何新的终端输出通知，让他能够对可能出现的问题作出反应，例如在编辑文件时的编译错误。

<!-- 透明像素以在浮动图像后创建换行 -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="400" src="https://github.com/user-attachments/assets/c5977833-d9b8-491e-90f9-05f9cd38c588">

### 创建和编辑文件

Cline 可以直接在您的编辑器中创建和编辑文件，向您呈现更改的差异视图。您可以在差异视图编辑器中直接编辑或撤销 Cline 的更改，或在聊天中提供反馈直到您满意为止。Cline 还会监控代码检查器/编译器错误（缺少导入、语法错误等），以便他在过程中自行修复出现的问题。

Cline 所做的所有更改都会记录在文件的时间轴中，为您提供一种方便的方式以跟踪和撤销修改（如有需要）。

<!-- 透明像素以在浮动图像后创建换行 -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="left" width="350" src="https://github.com/user-attachments/assets/50019dba-a63d-41f0-ab0f-fd35ebcdd4c5">

### 分析图像和浏览器截图

像 Claude 3.5 Sonnet 这样的模型现在可以理解和分析图像，为多模态工作流程提供了令人兴奋的可能性。直接在聊天中粘贴图像以给 Cline 提供无法用文字解释的上下文，并将原型转换成功能应用、通过截图修复错误等。

Cline 还可以使用无头浏览器检查任何网站（例如本地主机），允许他捕获屏幕截图和控制台日志。这让他能够在无需您手动操作和复制粘贴错误日志的情况下自主修复视觉错误和运行时问题。

<!-- 透明像素以在浮动图像后创建换行 -->

<img width="2000" height="0" src="https://github.com/user-attachments/assets/ee14e6f7-20b8-4391-9091-8e8e25561929"><br>

<img align="right" width="360" src="https://github.com/user-attachments/assets/7fdf41e6-281a-4b4b-ac19-020b838b6970">

### 添加上下文

-   **`@url`:** 粘贴 URL 以让扩展抓取并转换为 Markdown，当您想给 Cline 提供最新文档时非常有用
-   **`@problems`:** 添加工作区错误和警告（“问题”面板）以让 Cline 修复
-   **`@file`:** 添加文件内容，这样您就不必浪费 API 请求来批准读取文件（+ 类型以搜索文件）
-   **`@folder`:** 一次性添加文件夹中的所有文件，以进一步加快您的工作流程

## 技术栈

### webview-ui 视图层

- 多语言使用 react-intl

### 外层api

- 多语言使用 vscode-nls

## 贡献

要为项目贡献代码，请先浏览 [开放问题](https://github.com/cline/cline/issues) 或查看我们的 [功能请求板](https://github.com/cline/cline/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop)。我们也非常欢迎您加入我们的 [Discord](https://discord.gg/cline) 以分享想法并与其他贡献者交流。

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

### 原作者仓库地址

<a href="https://github.com/cline/cline">GitHub</a>

## 许可证

[Apache 2.0 © 2024 Cline Bot Inc.](./LICENSE)





