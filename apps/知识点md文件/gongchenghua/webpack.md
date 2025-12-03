# 工程化实战- webpack


## 执行过程

1. 基本概念

- entry 入口， 执行的时候从entry开始执行
- module 模块，从 entry 开始，递归找出所有依赖的模块
- chunk 代码块，从一个chunk 由多个module 组成
- bundle 打包，将多个chunk 打包在一起
- loader 模块转换器，将模块转换成浏览器可识别的模块
- plugin 插件，在webpack 中扩展功能

参数 options
2. 开始编译：创建 Compiler 对象，执行所有插件的 compiler.hooks.environment.call() 方法
3. 确定入口：执行所有插件的 compiler.hooks.entryOption.call(context, entry) 方法，并返回 entry 有效的入口
4. 编译模块，执行所有插件的 compilation.hooks.buildModule.call(module) 方法,


compilation:
### 流程
1. c初始化参数，从配置文件、环境变量、argv参数中读取，并合并为最终的
**make**：在 webpack 的编译过程中，`make` 阶段负责从入口模块出发，递归分析和构建所有依赖的模块，形成完整的模块依赖图（Module Graph）。这一阶段会处理所有的 `loader` 转换，确保每个模块被正确解析和封装。

**seal**：`seal` 阶段会根据上一步生成的模块依赖图，对模块进行整理和分组，生成最终的 `chunk`（代码块），比如分包、代码分割等操作都在这个阶段确定下来，为输出阶段做准备。

**emit**：`emit` 阶段主要将所有生成的 `chunk` 输出到文件系统中，写入硬盘。这一步通常会触发插件的 `emit` 钩子，比如你可以在这一阶段对最终文件内容做修改或生成额外的资源等。


- 入口模块：entryPoing make（module graph） => seal（生成chunk） => emit（output）


## webpack 配置
- entry 入口
    - string  => 默认 main.
    - array  => 默认 main. 合并到一个chunk中
    - object { main: string, a: string[] } => main.js  a.js 多页面模式会有多个chunk
- output
    - path  => 默认 dist
    - filename 输出文件名，“bundle.js
        -  [name] 入口名称
        - [hash] 构建hash值
        - [name]-[hash:8] 构建 bundle.js-8
- publicPath  => 发布路径
- library => 输出库名称
    - libraryTarget => 输出库类型,包含 esm, cjs

- module
    - rules
    - test 匹配规则
    - use 
    - exclude 排除规则
    - include 包含规则

- resolve
    - alias 别名
    - extensions 默认扩展名
    - modules 模块查找目录
    - fallback 默认模块查找目录
    - resolveLoader

    
- plugins   插件        
     -    


### 自定义 loader
1. 创建 loader 文件夹，创建 loader.js 文件
```js
// 转换js文件
import babel from 'babel-core'
module.exports = function(source) {
    // 同步转换
    // return babel.transform(source, { presets: ['es2015'] }).code
    // 异步转换
    const callback = this.async() // this.async()
    babel.transform(source, { presets: ['es2015'] }, function(err, result) {})\
    callback(err, result.code)
    return  
}
``

### 自定义 plugin
1. 创建 plugin 文件夹，创建 plugin.js 文件
compiler 描述了 webpack 的编译过程，包括所有的配置信息，以及所有插件，loader，以及编译过程中所有的文件信息
compilation 描述 compilation的过程，相当于一个车间
```js 
class Plugin {}
module.exports = Plugin
Plugin.prototype.apply = function(compiler) {}
compiler.plugin('emit', function(compilation, callback) {})
compiler.plugin('done', function() {})
compiler.plugin('after-emit', function(compilation, callback) {})
compiler.plugin('after-optimize-chunk-assets', function(compilation, callback) {})
compiler.plugin('after-optimize-chunk-modules', function(compilation, callback) {})
compiler.plugin('after-optimize-modules', function(compilation, callback) {})
```


### 事件流
- Tapable
    - 发布订阅的插件机制
    -提供了发布订阅的API， 注册事件，不同时机执行事件
    -
    -同步事件 异步事件
- 