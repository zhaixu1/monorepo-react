import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      // import.meta.url 是一个ES模块中的元属性，表示当前模块的URL。这里通过 new URL("./src/index.ts", import.meta.url) 获取到 src/index.ts 的绝对路径，再用 fileURLToPath 转换为文件系统路径，作为打包入口。
      entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)), // 打包入口
      formats: ["es", "cjs"], // 打包格式支持, 约束打包完成之后的类型，
      fileName: "index",
    },
  },
});
