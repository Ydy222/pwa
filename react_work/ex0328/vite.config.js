import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
		VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        "name": "pmh",
        "short_name": "pmh",
        "icons": [
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
        ],
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#ffffff"
      },
      workbox: {
        importScripts: ['push-service-worker.js'], // ✅ 푸시 핸들러 추가됨
        runtimeCaching: [{
                urlPattern: /\.ico$/,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'ico-cache',
                    expiration: {
                        maxEntries: 10, 
                        maxAgeSeconds: 60 * 60 * 24 * 365,  
                    }
                }
            },
            {
                urlPattern: /\.json$/,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'json-cache',
                    cacheableResponse: {
                        statuses: [200]
                    }
                },
            }
        ],
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})