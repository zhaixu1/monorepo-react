# 脚手架

1. 不难
2. 区分业务项目
3. 重点思路


常见的脚手架
- vue-cli
- create-react-app
- create-vite


## 作用
- 标准化项目结构
- 提高开发效率、质量
- 统一团队开发规范、技术栈
- 统一收口、统一发布 -> npm
- 封装自动化流程 -> webpack、rollup、vite

### 设计脚手架

1. 交互体系， 命令行交互

- 模块管理
   - 本地模板
   - 远程模板
- 文件操作
- 进程控制
- 插件式设计   

### 依赖模块

- tsup
  - 基于 esbuild ts js 打包工具

### commander 命令行工具
  - 创建命令行工具
  - future-cli create
  - future-cli dev

### inquirer 命令行交互  prompts 命令行交互
  - inquirer  
    - 体积大
  - prompts 
    - 体积小,更适合命令行交互  


### download-git-repo vs giget 下载远程模板
- download-git-repo
- giget

### 颜色插件
- chalk
- picocolors 更加小巧

### consola 日志插件
- consola
- log info success error warn debug 日志级别



