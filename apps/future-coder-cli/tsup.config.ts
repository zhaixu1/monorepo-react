import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs'], // 使用 CommonJS 格式以获得更好的兼容性
    dts: true, // 生成声明文件 
    clean: true, // 清理构建目录
    sourcemap: false, // 生成 sourcemap
    minify: false, // 禁用压缩以便调试
    outDir: 'dist', // 输出目录
    outExtension: () => { // 自定义输出文件名
        return {
            js: `.js`,
        }
    },
})