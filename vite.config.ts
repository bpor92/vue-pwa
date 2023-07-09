import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    webUpdateNotice({
      logVersion: true,
    }),
    VitePWA({
      devOptions: {
        enabled: true
      },
      // display_override: ['tabbed'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'PWA learn',
        short_name: 'PWA learn',
        description: 'Opis apki',
        theme_color: '#ffddd',
        start_url: '/',
        icons: [
          {
            src: '/svg-seeklogo.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: '/svg-seeklogo.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          },
          {
            src: '/svg-seeklogo.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    }
    )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
