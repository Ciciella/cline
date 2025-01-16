# 🤖 贡献到 Cline

欢迎，人类！我们很高兴您有兴趣为 Cline 做出贡献。无论您是修复错误、添加功能还是改进我们的文档，每一份贡献都让 Cline 变得更智能！

## ✌️ 成为社区的一员

我们有一个很棒的、多样化的、包容的社区，包括人类和友好的 AI 助手。为了保持我们的社区充满活力和欢迎，所有成员必须遵守我们的[行为准则](CODE_OF_CONDUCT.md)。

## 🐛 报告错误或问题

错误报告有助于让 Cline 对每个人都更好！在创建新问题之前，请先[搜索现有问题](https://github.com/cline/cline/issues)以避免重复。当您准备好报告错误时，请前往我们的[问题页面](https://github.com/cline/cline/issues/new/choose)，在那里您会找到一个模板来帮助您填写相关信息。

<blockquote class='warning-note'>
   🔐 <b>重要：</b> 如果您发现安全漏洞，请使用<a href="https://github.com/cline/cline/security/advisories/new">Github 安全工具私下报告</a>。
</blockquote>

## 🎯 决定要做什么

看到可以改进的地方了吗？请随时直接创建一个拉取请求！无论是修正一个错字还是添加一个很酷的新 AI 功能，我们都喜欢惊喜（好的那种，不是“undefined is not a function”那种）。

We also welcome contributions to our [documentation](https://github.com/cline/cline/tree/main/docs)! Whether it's fixing typos, improving existing guides, or creating new educational content - we'd love to build a community-driven repository of resources that helps everyone get the most out of Cline. You can start by diving into `/docs` and looking for areas that need improvement.

If you're planning to work on a bigger feature, please create a [feature request](https://github.com/cline/cline/discussions/categories/feature-requests?discussions_q=is%3Aopen+category%3A%22Feature+Requests%22+sort%3Atop) first so we can discuss whether it aligns with Cline's vision.

## Development Setup

1. **VS Code Extensions**

    - When opening the project, VS Code will prompt you to install recommended extensions
    - These extensions are required for development - please accept all installation prompts
    - If you dismissed the prompts, you can install them manually from the Extensions panel

2. **Local Development**
    - Run `npm install` to install dependencies
    - Run `npm run test` to run tests locally
    - Before submitting PR, run `npm run format:fix` to format your code

## Writing and Submitting Code

任何人都可以为 Cline 贡献代码，但我们要求您遵循以下指南，以确保您的贡献能够顺利集成：

1. **保持拉取请求的专注**
   - 将 PR 限制为单个功能或错误修复
   - 将较大的更改拆分为较小的相关 PR
   - 尽量将 PR 限制为单个提交

2. **代码质量**
   - 运行 `npm run lint` 以确保代码遵循我们的样式指南
   - 运行 `npm run format` 以使用 Prettier 格式化您的代码
   - 在提交之前解决所有 ESLint 警告或错误
   - 遵循 TypeScript 最佳实践并保持类型安全

3. **测试**
   - 为新功能添加测试
   - 运行 `npm test` 以确保所有测试通过
   - 如果您的更改影响现有测试，请更新它们
   - 在适当的地方包括单元测试和集成测试

    - Run `npm run lint` to check code style
    - Run `npm run format` to automatically format code
    - All PRs must pass CI checks which include both linting and formatting
    - Address any ESLint warnings or errors before submitting
    - Follow TypeScript best practices and maintain type safety

5. **提交指南**
   - 编写清晰、描述性的提交消息
   - 使用常规提交格式（例如，“feat:”，“fix:”，“docs:”）
   - 在提交中引用相关问题，使用 #issue-number

6. **提交之前**
   - 在最新的 main 上重新基准您的分支
   - 确保您的分支成功构建
   - 仔细检查所有测试是否通过
   - 检查您的更改是否有任何调试代码或控制台日志

7. **拉取请求描述**
   - 清楚描述您的更改内容
   - 包括测试更改的步骤
   - 列出任何重大更改
   - 对于 UI 更改，添加截图

## 贡献协议

通过提交拉取请求，您同意您的贡献将根据与项目相同的许可证（[Apache 2.0](LICENSE)）进行许可。

记住：为 Cline 做贡献不仅仅是编写代码 - 这也是成为一个塑造 AI 辅助开发未来的社区的一部分。让我们一起构建一些惊人的东西！🚀
