# 项目结构说明文档

本项目是一个基于 React 的 Web 应用，主要用于与 VS Code 扩展进行交互。以下是项目的主要结构和各个文件夹的说明。

## 项目结构

```
webview-ui/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatView.tsx
│   │   │   ├── ChatRow.tsx
│   │   │   ├── TaskHeader.tsx
│   │   │   └── Announcement.tsx
│   │   ├── common/
│   │   │   ├── CodeBlock.tsx
│   │   │   ├── CodeAccordian.tsx
│   │   │   └── Thumbnails.tsx
│   │   ├── history/
│   │   │   └── HistoryView.tsx
│   │   ├── settings/
│   │   │   ├── ApiOptions.tsx
│   │   │   └── OpenRouterModelPicker.tsx
│   │   └── welcome/
│   │       └── WelcomeView.tsx
│   ├── context/
│   │   └── ExtensionStateContext.tsx
│   ├── locales/
│   │   ├── en.json
│   │   └── zh-CN.json
│   ├── utils/
│   │   ├── format.ts
│   │   ├── getLanguageFromPath.ts
│   │   └── context-mentions.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   └── reportWebVitals.ts
├── scripts/
│   └── build-react-no-split.js
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## 文件夹及文件说明

### `public/`
- **index.html**: 应用的主 HTML 文件，包含基本的页面结构和引入的资源。
- **manifest.json**: 提供应用的元数据，主要用于 PWA（渐进式 Web 应用）。
- **robots.txt**: 指定搜索引擎爬虫的访问规则。
- **favicon.ico**: 网站图标。

### `src/`
- **components/**: 存放 React 组件的文件夹。
  - **chat/**: 聊天相关组件。
    - **ChatView.tsx**: 聊天界面组件。
    - **ChatRow.tsx**: 聊天行组件，显示单条消息。
    - **TaskHeader.tsx**: 任务头部组件，显示任务信息。
    - **Announcement.tsx**: 公告组件，显示重要信息。
  - **common/**: 公共组件。
    - **CodeBlock.tsx**: 代码块组件，用于显示代码。
    - **CodeAccordian.tsx**: 可折叠的代码组件。
    - **Thumbnails.tsx**: 缩略图组件。
  - **history/**: 历史记录相关组件。
    - **HistoryView.tsx**: 显示历史记录的组件。
  - **settings/**: 设置相关组件。
    - **ApiOptions.tsx**: API 选项设置组件。
    - **OpenRouterModelPicker.tsx**: 模型选择组件。
  - **welcome/**: 欢迎界面组件。
    - **WelcomeView.tsx**: 欢迎视图组件。

- **context/**: 存放上下文管理相关文件。
  - **ExtensionStateContext.tsx**: 扩展状态上下文管理。

- **locales/**: 存放国际化语言文件。
  - **en.json**: 英文语言包。
  - **zh-CN.json**: 中文语言包。

- **utils/**: 存放工具函数的文件夹。
  - **format.ts**: 格式化工具函数。
  - **getLanguageFromPath.ts**: 根据路径获取语言的工具函数。
  - **context-mentions.ts**: 处理提及的工具函数。

- **App.tsx**: 应用的主组件，包含应用的整体结构和路由。
- **index.tsx**: 应用的入口文件，渲染主组件。
- **react-app-env.d.ts**: TypeScript 环境声明文件。
- **reportWebVitals.ts**: 性能监测工具。

### `scripts/`
- **build-react-no-split.js**: 自定义构建脚本，用于禁用代码分割。

### `.gitignore`
- 指定 Git 忽略的文件和文件夹。

### `package.json`
- 项目的依赖和脚本配置文件。

### `tsconfig.json`
- TypeScript 配置文件。

### `README.md`
- 项目的说明文档，包含项目的基本信息和使用说明。

## 总结
本项目结构清晰，组件划分合理，便于维护和扩展。通过使用 React 和 TypeScript，确保了代码的可读性和可维护性。

## 相关文档
- [VS Code Webview API 文档](https://code.visualstudio.com/api/extension-guides/webview)

- [VS Code 1.95 版本更新日志](https://code.visualstudio.com/updates/v1_95)
- [VS Code 1.94 版本更新日志](https://code.visualstudio.com/updates/v1_94)