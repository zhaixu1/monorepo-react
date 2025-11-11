# future-coder-cli

一个基于 zx 的脚手架工具

## 安装依赖

```bash
pnpm install
```

## 开发模式

在开发模式下，代码会自动监听文件变化并重新构建：

```bash
pnpm dev
```

## 构建项目

构建项目，生成可执行文件：

```bash
pnpm build
```

## 启动脚手架

### 方式一：本地开发测试
****
1. 首先构建项目：
```bash
cd apps/future-coder-cli
pnpm build
```

2. 然后运行脚手架：
```bash
node bin/future.js
```

或者直接运行命令：
```bash
node bin/future.js info
```

### 方式二：全局安装后使用

1. 在项目根目录链接到全局：
```bash
cd apps/future-coder-cli
pnpm link --global
```

2. 然后可以在任何地方使用：
```bash
future-coder-cli info
```

### 方式三：使用 pnpm 工作区

在 monorepo 根目录，可以直接使用：
```bash
pnpm --filter future-coder-cli build
pnpm --filter future-coder-cli exec node bin/future.js info
```

## 可用命令

### info

显示项目信息：

```bash
future-coder-cli info
```

### create

创建一个新项目：

```bash
# 交互式创建（会提示选择模板）
future-coder-cli create my-project

# 指定模板创建
future-coder-cli create my-project -t react-vite

# 强制覆盖已存在的目录
future-coder-cli create my-project -t react-vite -f
```

**选项：**
- `-t, --template <template>` - 指定模板名称
- `-f, --force` - 强制覆盖已存在的目录

**可用模板：**
- `react-vite` - React + Vite 项目模板
- 更多模板可在 `templates` 目录中添加

## 发布

```bash
# 补丁版本
pnpm release:patch

# 次要版本
pnpm release:minor

# 主要版本
pnpm release:major
```

## 创建自定义模板

1. 在 `templates` 目录下创建一个新文件夹，例如 `my-template`
2. 在模板文件中使用 `{{变量名}}` 语法来定义可替换的变量
3. 支持的变量：
   - `{{projectName}}` - 项目名称
   - `{{description}}` - 项目描述
   - `{{author}}` - 作者
   - `{{version}}` - 版本号（默认 1.0.0）

**示例：**

在 `templates/my-template/package.json` 中：
```json
{
  "name": "{{projectName}}",
  "version": "{{version}}",
  "description": "{{description}}",
  "author": "{{author}}"
}
```

## 项目结构

```
future-coder-cli/
├── bin/              # CLI 入口文件
├── src/              # 源代码
│   ├── commands/     # 命令定义
│   ├── utils/        # 工具函数
│   ├── constants/    # 常量定义
│   └── types/        # 类型定义
├── templates/        # 项目模板
│   └── react-vite/   # React + Vite 模板示例
├── dist/             # 构建输出
└── package.json
```

