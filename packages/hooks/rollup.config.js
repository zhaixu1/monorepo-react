import resolve from "@rollup/plugin-node-resolve"; // 解析第三方模块路径
import commonjs from "@rollup/plugin-commonjs"; // 转换 CommonJS 模块供 Rollup 处理
import typescript from "@rollup/plugin-typescript"; // 支持 TypeScript 编译和类型检查
import { terser } from "rollup-plugin-terser"; //代码压缩混淆（生产环境启用）
import dts from "rollup-plugin-dts"; // 生成 .d.ts 文件, 单独输出
import { globSync } from "glob"; // 分析文件系统的资源
import cleaner from "rollup-plugin-cleaner"; // 构建前清理 lib/es 目录

const hookEntries = globSync("src/use*/index.ts").reduce((entries, file) => {
  console.log(file, "file");

  const name = file.split("\\")[1];
  console.log(name, "entries");
  entries[`${name}/index`] = file;
  return entries;
}, {});

/**
hookEntries =
{
  'useWindowSize/index': 'src\\useWindowSize\\index.ts',
  'useToggle/index': 'src\\useToggle\\index.ts',
  'useStorage/index': 'src\\useStorage\\index.ts',
  'useFocus/index': 'src\\useFocus\\index.ts'
} hookEntrie
 */

export default [
  {
    // js 打包入口，主入口和单个分别打包
    input: {
      index: "src/index.ts",
      ...hookEntries,
    },
    output: [
      {
        dir: "lib",
        format: "cjs",
        exports: "named", // 使用具名导出方式
        preserveModules: true, //  保留模块结构，按模块输出文件
        preserveModulesRoot: "src", // 输出文件基于此路径
        entryFileNames: "[name].js", // 输出文件名称
      },
      {
        dir: "es",
        format: "esm",
        preserveModules: true, //  保留模块结构，按模块输出文件
        preserveModulesRoot: "src", // 输出文件基于此路径
        entryFileNames: "[name].js", // 输出文件名称
      },
    ],
    plugins: [
      cleaner({
        targets: ["./lib/", "./es/"], // 删除构建目录
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser(),
    ],
    external: ["react"], // 告诉 Rollup 不需要打包 react
  },
  {
    //  类型声明打包
    input: {
      index: "src/index.ts",
      ...hookEntries,
    },
    output: [
      {
        dir: "lib",
        format: "lib", //
        preserveModules: true, //  保留模块结构，按模块输出文件
        entryFileNames: "[name].d.ts", // 输出文件名称
      },
    ],
    plugins: [
      dts(), // 找到ts文件，按照目录进行输出
    ],
  },
//   {
//     // dist cdn 打包
//     // // 不允许文件分割，在一个文件中 UMD 和 IIFE 格式要求所有代码打包为单个文件
//     input: {
//       index: "src/index.ts",
//     },
//     output: {
//       dir: "dist",
//       format: "umd",
//       name: "zxReactHooks",
//     },
//     plugins: [
//       resolve(),
//       commonjs(),
//       typescript({
//         tsconfig: "./tsconfig.json",
//         declaration: false, // 类型文件单独打包
//       }),
//       terser(),
//     ],
//   },
];
