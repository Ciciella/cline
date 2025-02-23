# Cline 工具参考指南

## Cline 能做什么？

Cline 是你的 AI 助手，可以：

- 编辑和创建项目中的文件
- 运行终端命令
- 搜索和分析代码
- 帮助调试和修复问题
- 自动化重复任务
- 与外部工具集成

## 第一步

1. **开始任务**

    - 在聊天中输入你的请求
    - 示例："创建一个名为 Header 的 React 组件"

2. **提供上下文**

    - 使用 @ 提及添加文件、文件夹或 URL
    - 示例："@file:src/components/App.tsx"

3. **审查更改**
    - Cline 会在进行更改前显示差异
    - 你可以编辑或拒绝更改

## 主要功能

1. **文件编辑**

    - 创建新文件
    - 修改现有代码
    - 跨文件搜索和替换

2. **终端命令**

    - 运行 npm 命令
    - 启动开发服务器
    - 安装依赖

3. **代码分析**

    - 查找并修复错误
    - 重构代码
    - 添加文档

4. **浏览器集成**
    - 测试网页
    - 捕获截图
    - 检查控制台日志

## 可用工具

有关最新的实现细节，你可以在 [Cline 仓库](https://github.com/cline/cline/blob/main/src/core/Cline.ts) 查看完整的源代码。

Cline 可以访问以下工具来完成各种任务：

1. **文件操作**

    - `write_to_file`: 创建或覆盖文件
    - `read_file`: 读取文件内容
    - `replace_in_file`: 对文件进行有针对性的编辑
    - `search_files`: 使用正则表达式搜索文件
    - `list_files`: 列出目录内容

2. **终端操作**

    - `execute_command`: 运行 CLI 命令
    - `list_code_definition_names`: 列出代码定义

3. **MCP 工具**

    - `use_mcp_tool`: 使用 MCP 服务器的工具
    - `access_mcp_resource`: 访问 MCP 服务器资源
    - 用户可以创建自定义 MCP 工具，Cline 可以访问这些工具
    - 示例：创建一个天气 API 工具，Cline 可以使用它来获取天气预报

4. **交互工具**
    - `ask_followup_question`: 向用户询问澄清问题
    - `attempt_completion`: 提交最终结果

每个工具都有特定的参数和使用模式。以下是一些示例：

- 创建新文件 (write_to_file):

    ```xml
    <write_to_file>
    <path>src/components/Header.tsx</path>
    <content>
    // Header 组件代码
    </content>
    </write_to_file>
    ```

- 搜索模式 (search_files):

    ```xml
    <search_files>
    <path>src</path>
    <regex>function\s+\w+\(</regex>
    <file_pattern>*.ts</file_pattern>
    </search_files>
    ```

- 运行命令 (execute_command):
    ```xml
    <execute_command>
    <command>npm install axios</command>
    <requires_approval>false</requires_approval>
    </execute_command>
    ```

## 常见任务

1. **创建新组件**

    - "创建一个名为 Footer 的 React 组件"

2. **修复错误**

    - "修复 src/utils/format.ts 中的错误"

3. **重构代码**

    - "重构 Button 组件以使用 TypeScript"

4. **运行命令**
    - "运行 npm install 添加 axios"

## 获取帮助

- [加入 Discord 社区](https://discord.gg/cline)
- 查看文档
- 提供反馈以改进 Cline
