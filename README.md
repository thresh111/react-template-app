# React Template App

这是一个使用 React 和 Vite 构建的模板项目，支持 TypeScript、Redux Toolkit、React Router、Tailwind CSS 等现代前端开发工具。该项目旨在快速启动和开发 React 应用，集成了代码质量检查和格式化工具。

## 项目特性

- **React 18**: 使用最新版本的 React 进行开发。
- **Vite**: 使用 Vite 作为开发服务器，提供极速的开发体验。
- **TypeScript**: 使用 TypeScript 进行类型检查和增强的代码提示。
- **Redux Toolkit**: 集成 Redux Toolkit 进行状态管理。
- **React Router**: 使用 React Router 管理应用路由。
- **Tailwind CSS**: 使用 Tailwind CSS 进行快速样式开发。
- **Sass**: 支持 Sass 预处理器。
- **代码质量**: 集成 ESLint 和 Prettier 保持代码整洁。
- **自动化**: 使用 Husky 管理 Git 钩子，集成 Commitlint 规范提交信息。

## 开始使用

### 环境要求

- Node.js >= 16
- pnpm (推荐使用 [pnpm](https://pnpm.io/) 包管理工具)

### 安装依赖

```bash
pnpm install

```

### 本地开发

启动开发服务器：

```bash
pnpm dev

```

### 预览构建

启动开发服务器：

```bash
pnpm preview

```

### 代码检查和格式化

运行代码格式化：

```bash
pnpm lint

```

### 项目结构
react-template-app/
│
├── public/ # 公共静态资源
├── src/ # 源码目录
│ ├── assets/ # 资源文件 (图片、字体等)
│ ├── components/ # 通用组件
│ ├── hooks/ # 自定义 hooks
│ ├── config/ # 配置文件
│ ├── pages/ # 页面组件
│ ├── store/ # Redux 状态管理
│ ├── styles/ # 样式文件
│ ├── utils/ # 工具函数
│ ├── App.tsx # 应用入口组件
│ ├── main.tsx # 应用主入口
│
├── .eslintrc.js # ESLint 配置文件
├── .prettierrc # Prettier 配置文件
├── postcss.config.js # PostCSS 配置文件
├── tailwind.config.js # Tailwind CSS 配置文件
├── tsconfig.json # TypeScript 配置文件
├── commitlint.config.cjs # Commitlint 配置文件
├── vite.config.ts # Vite 配置文件
│
└── package.json # 项目元数据
