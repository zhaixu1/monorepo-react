import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from "vite-plugin-dts";
import fs from 'fs';

// 获取 src 目录下的所有组件入口
const components = fs.readdirSync(path.resolve(__dirname, 'src'))
  .filter(file => fs.statSync(path.resolve(__dirname, 'src', file)).isDirectory())
  .filter(dir => !['demo', 'tests', '__tests__'].includes(dir));

// 生成入口文件配置
const entry = {
  index: path.resolve(__dirname, 'src/index.ts'),  // 主入口
  ...Object.fromEntries(
    components.map(component => {
      // 检查是否存在 .tsx 或 .ts 文件
      const tsxPath = path.resolve(__dirname, `src/${component}/index.tsx`);
      const tsPath = path.resolve(__dirname, `src/${component}/index.ts`);
      
      const entryPath = fs.existsSync(tsxPath) ? tsxPath : tsPath;
      
      return [
        `${component}/index`,
        entryPath
      ];
    })
  )
};

console.log('entry:', entry)

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      exclude: ["src/**/demo/**"],
      outputDir: "dist/types",
      // 确保类型文件扁平化输出
      rollupTypes: true,
      // 将所有类型合并到一个文件
      staticImport: true,
      // 跳过类型检查，提高构建速度（可选）
      skipDiagnostics: false,
    })
  ],
  build: {
    cssCodeSplit: false, // 禁用 CSS 代码拆分，将所有 CSS 打包到一个文件
    lib: {
      entry,
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        // 如果是主入口，直接放在根目录
        if (entryName === 'index') {
          return `index.${format}.js`;
        }
        // 其他组件放在各自的文件夹下
        return `${entryName}.${format}.js`;
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'index.css'; // 所有 CSS 都输出到 index.css
          }
          return '[name].[ext]';
        }
      }
    }
  }
});
