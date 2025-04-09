import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://www.dhlottery.co.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/cloud': {
        target: 'https://port-0-pwa-m913h1zh8f5530cc.sel4.cloudtype.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cloud/, '')
      }
    }
  }
})
