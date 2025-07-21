import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      outputDir: "dist/types"
    })
  ],
  build: {
    cssCodeSplit: false, // 禁用 CSS 代码拆分
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ZxComponents',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      // 确保外部化处理，不打包react等依赖
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
