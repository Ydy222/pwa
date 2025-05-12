import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'robots.txt'],
        manifest: {
            name: 'My PWA App',
            short_name: 'PWAApp',
            description: 'My Vite + React PWA!',
            theme_color: '#ffffff',
            background_color: '#ffffff',
            display: 'standalone',
            start_url: '/',
            icons: [
                {
                    src: '/icon-192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: '/icon-512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
            ],
        },
    }),
    ],
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
