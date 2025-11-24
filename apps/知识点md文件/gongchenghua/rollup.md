# Rollup 打包工具

## Rollup是什么？
Rollup 是一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序,一般我们用于打包 类库、应用程序（比如组件库、工具库、Vue、React）。

## Rollup优势
1.  Rollup可以进行 tree shaking。
    Rollup使用ESM进行模块处理，在编译阶段，Rollup使用 @rollup/plugin-commonjs 插件将 commonjs 文件转换成 esm文件，使用 import 进行导入，这样就可以只导入使用的模块了。其余不使用模块不进行打包到项目中，减少了体积。当然，如果插件识别不到具体的代码就会这个包进行打包。
2. 多格式输出支持，兼容性好。Rollup不仅可以将cjs 模块编译成 esm模块，也可以将esm模块编译成 cjs模块。以及UMD文件格式，可以使用script标签直接使用。
3. 输出代码简洁，无冗余代码。相较于webpack，webpack通常会注入大量的 _webpack_require_e_ 等辅助函数。增加了代码的体积降低了代码的可读性。
4. 生态与标准。拥抱ESM，插件容易编写与维护。


### 为什么 ES 模块比 CommonJS 模块更好？
ES 模块是官方标准，是 JavaScript 代码结构的明确未来发展方向，而 CommonJS 模块是一种特殊的兼容型格式，被视为 ES 模块提出之前的一种临时解决方案。ES 模块允许静态分析，可帮助进行优化（如除屑优化和作用域提升），并提供高级功能（如循环引用和实时绑定）。

### 如何在 Node.js 中使用 Rollup 和 CommonJS 模块？
也就是Rollup 不仅可以在浏览器环境下运行，还可以在node环境下运行。
Rollup 力求实现 ES 模块的规范，而不是 Node.js、NPM、require() 和 CommonJS 的行为。因此，CommonJS 模块的加载和使用 Node 的模块位置解析逻辑都作为可选插件实现，不包含在 Rollup 核心中。只需 npm install commonjs 和 node-resolve 插件，然后使用 rollup.config.js 文件启用它们，即可完成设置。如果模块导入 JSON 文件，则还需要 json 插件。

###