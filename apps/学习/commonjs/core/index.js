const fs = require("fs");
const path = require("path");
const vm = require("vm");

class Module {
    constructor(id) {
        this.id = id;
        this.exports = {};
        this.loaded = false; // 是否已经被加载过
    }

    load() {
        const extname = path.extname(this.id);

        Module.extensions[extname](this);

        this.loaded = true;
    }

    // 静态方法作用：前面为什么要加 static ?
    // 静态方法可以被类直接调用，不需要实例化,
    //  如何使用: 类名.静态方法名()
    static resolveFilename(filename) {
        // 使用 path.resolve(__dirname, filename) 确保基于当前文件目录查找，避免受执行目录(CWD)影响
        let absPath = path.resolve(__dirname, filename);

        if (!fs.existsSync(absPath)) {
            const extensions = Object.keys(Module.extensions);
            for (const ext of extensions) {
                const fullPath = absPath + ext;
                if (fs.existsSync(fullPath)) {
                    return fullPath;
                }
            }
        }

        return absPath;
    }

    static extensions = {
        '.js'(module) {
            const content = fs.readFileSync(module.id, "utf-8"); // 读取模块内容

            // 包装模块代码
            const wrappedCode = `(function(exports, require, module, __filename, __dirname) {
                ${content}
            })`;

            // 执行编译并执行代码

            const compileFn = vm.runInThisContext(wrappedCode);
            compileFn(
                module.exports,
                myRequire, // 使用自定义的 myRequire
                module,
                module.id,
                path.dirname(module.id)
            );

            module.loaded = true;
        },
        '.json'(module) {
            const content = fs.readFileSync(module.id, "utf-8");
            module.exports = JSON.parse(content);
        },
    };

    static _cache = {}; // 缓存模块
}

function myRequire(filename) {
    debugger
    const absPath = Module.resolveFilename(filename);

    debugger
    if(Module._cache[absPath]) {
        return Module._cache[absPath].exports;
    }

    const module = new Module(absPath);

    Module._cache[absPath] = module;

    module.load();

    return module.exports;
}

const math = myRequire('./math')
console.log(math)

// Module.resolveFilename('./index.js')
