import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // 添加react插件
  test: {
    environment: 'jsdom', // 测试环境, 模拟浏览器环境
    globals: true, // 启动全局API
    setupFiles: ['./src/tests/setup.ts'],  // 测试文件执行之前执行
    coverage: { 
      provider: 'istanbul', // 测试覆盖率
      reporter: ['text', 'json', 'html'], // 测试报告
      include: ['src/**/*.ts'], // 分析的文件
    }
  }
})