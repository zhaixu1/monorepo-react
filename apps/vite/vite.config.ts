import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  },


  server: {
    port: 3000,
    open: true,
    proxy: {
        '/api': {
            target: 'https://api.github.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})