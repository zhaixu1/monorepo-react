import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import rollupPluginExample from "./plugins/rollup-plugin-example.js";

export default {
    external: ["react", "lodash"], // 打包时排除 react 和 lodash 模块
    // 入口文件
    input: "./index.js",
    jsx: 'react-jsx',

    // 输出配置：可以是 一个对象，也可以是数组（用于输出多种格式）
    output: [
        // {
        //   // 产物输出目录
        //   dir: 'dist/cjs',
        //   // 产物格式：cjs (CommonJS), esm (ES Module), umd, iife, amd, system
        //   format: 'cjs',
        //   // 开启 sourcemap，方便调试
        //   sourcemap: true,
        //   // cjs 格式下通常需要指定 exports 模式
        //   exports: 'named',
        //   // 输出文件名模式，[name] 代表文件名，[hash] 代表哈希值
        //   entryFileNames: '[name].cjs.js'
        // },
        {
            dir: "dist/esm",
            format: "esm",
            sourcemap: true,
            entryFileNames: "[name].esm.js",
        },
        // {
        //   // UMD 格式需要指定 name，作为全局变量名
        //   file: 'dist/umd/bundle.js',
        //   format: 'umd',
        //   name: 'MyRollupLib',
        //   sourcemap: true,
        //   // 定义全局变量映射，用于 external 模块
        //   globals: {
        //     react: 'React',
        //     lodash: '_'
        //   }
        // }
    ],

    // 插件列表，注意顺序很重要
    plugins: [
        // 1. 解析 node_modules 中的模块
        resolve(),

        // 2. 将 CommonJS 模块转换为 ES6，以便 Rollup 进行 Tree Shaking
        commonjs(),

        // 3. 支持导入 JSON 文件
        json(),

        // 4. 使用 Babel 编译代码（如转译 ES6+ 语法）
        babel({
            babelHelpers: "bundled", // 推荐用于库的打包
            exclude: "node_modules/**", // 排除 node_modules
        }),

        // 5. 压缩代码（通常只在生产环境开启，这里演示直接开启）
        terser(),

        // 6. 使用自定义插件
        rollupPluginExample(),
    ],

    // 监听模式配置
    watch: {
        include: "src/**",
        exclude: "node_modules/**",
    },
};
