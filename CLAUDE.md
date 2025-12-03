# CLAUDE.md

此文件为 Claude Code (claude.ai/code) 在此代码库中工作时提供指导。

## 项目概述

这是一个包含多个应用程序和共享包的 React monorepo，专门用于组件库和 React hooks。该项目向 npm 发布两个主要包：`zxreact-hooks` 和 `zxreact-components`。

## Monorepo 架构

该 monorepo 使用 **pnpm workspaces** 管理，结构如下：

- **`packages/`** - 共享库和包
  - `hooks/` - React hooks 库 (`zxreact-hooks`)
  - `components/` - React 组件库 (`zxreact-components`)
  - `lib/` - 共享工具库
  - `server/` - Express 服务器（提供模拟 API）
  - `ui/` 和 `utils/` - 其他共享包

- **`apps/`** - 使用这些包的应用程序
  - `react-master/` - 主要 React 应用程序（使用 Webpack）
  - `web-app/` - 次要 Web 应用程序
  - `myUniapp/` - UniApp Vue3 项目
  - `admin-app/` - 管理后台应用
  - 其他演示和模式应用

## 基本命令

### 包管理

```bash
# 安装依赖（必须：强制使用 pnpm）
pnpm install

# 启动特定应用程序或包
pnpm run start [app-name]  # 例如：pnpm run start react-master

# 构建特定应用程序或包
pnpm run build [app-name]  # 例如：pnpm run build hooks

# 构建所有包
pnpm run build
```

### 文档
```bash
# 启动文档站点（使用 dumi）
pnpm run site

# 构建文档用于部署
pnpm run build:doc
```

### 包特定命令

**Hooks 库 (`packages/hooks/`)**:
```bash
cd packages/hooks
pnpm run build        # 使用 Rollup 构建
pnpm run test         # 使用 Vitest 运行测试
pnpm run test:ui      # 运行 UI 测试
pnpm run test:coverage # 生成覆盖率报告
pnpm run publish      # 构建并发布到 npm
```

**组件库 (`packages/components/`)**:
```bash
cd packages/components
pnpm run build        # 使用 Vite 构建
pnpm run build:types  # 仅生成 TypeScript 声明文件
pnpm run publish      # 发布到 npm
```

**React Master 应用 (`apps/react-master/`)**:
```bash
cd apps/react-master
pnpm run start        # 启动开发服务器（webpack-dev-server）
pnpm run build        # 生产环境构建（webpack）
```

## 构建系统详情

- **Monorepo 管理**：pnpm workspaces 配合 `scripts/` 目录中的自定义脚本
- **包构建**：每个包都有自己的构建系统：
  - Hooks：Rollup 配合 TypeScript，输出 CJS、ESM 和 UMD 格式
  - Components：Vite 配合 TypeScript 声明文件
  - Apps：多种方式（Webpack、Vite）
- **文档**：使用 Dumi v2 生成组件/hook 文档和演示
- **测试**：使用 Vitest 配合 React Testing Library 测试 hooks

## 包依赖关系

- 应用通过工作区协议使用包（`workspace:*`）
- 组件库依赖 `@monorepo/lib`
- 应用使用已发布版本的 `zxreact-hooks` 和 `zxreact-components`
- 共享依赖被提升到根目录的 `node_modules`

## 开发工作流程

1. **开始开发**：使用 `pnpm run start [app-name]` 启动特定应用
2. **包开发**：在 `packages/` 中工作并在 `apps/` 中测试
3. **文档**：组件和 hooks 包含 dumi 的演示文件和 markdown 文档
4. **发布**：每个包都有自己的发布脚本，先构建后发布到 npm
5. **测试**：从各个包目录使用 Vitest 运行测试

## 关键配置文件

- [`pnpm-workspace.yaml`](pnpm-workspace.yaml) - 定义工作区包
- [`scripts/workspace.mjs`](scripts/workspace.mjs) - 动态工作区发现
- [`.dumirc.ts`](.dumirc.ts) - 文档站点配置
- 每个 `packages/*/` 和 `apps/*/` 目录中的包特定配置

## 部署

- 文档通过 GitHub Actions 自动部署到 GitHub Pages
- 包通过各自的发布脚本手动发布到 npm
- 所有包管理操作都使用 pnpm