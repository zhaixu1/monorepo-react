# nodjs

## 什么是nodejs？
    Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
    Node.js是 单线程模型，基于事件驱动，非阻塞的js运行环境。

## 浏览器内核
    1. Blink
    2. Webkit    

## 浏览器 JS引擎
    1. V8
    2. JavaScriptCore

### JS引擎 翻译器
    JS =》汇编语言 =》 机器语言 =》 二进制

### V8引擎

V8 是 c++ 写的，基于 chrome 浏览器内核

chorme nodejs deno

- 支持语言 c++ 高性能 支持js webassembly
- 跨平台，
- 嵌入式，可以独立运行，也可以嵌入到其他C++ 应用中。


### V8 执行js的过程

1. 解析（解析js代码，生成AST）
2. 转换（将AST转换成中间代码）转化成 字节码    
3. 优化（优化中间代码）
4. 代码生成（将中间代码转换成机器码）


## node 架构
    1. V8,  Libuv, 不依赖libuv 第三方c++ 模块
    

