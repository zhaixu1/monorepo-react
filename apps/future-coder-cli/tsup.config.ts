import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs'], // CLI 工具使用 CommonJS 格式
    dts: true, // 生成声明文件 
    clean: true, // 清理构建目录
    sourcemap: false, // 生成 sourcemap
    minify: true, // 压缩代码
    outDir: 'dist', // 输出目录
    outExtension: () => { // 自定义输出文件名
        return {
            js: `.js`,
        }
    },
})