import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA } from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Muslih Portfolio App',
        short_name: 'DevFolio',
        description: 'A simple Vue.js application with PWA support to showcase my portfolio.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'assets/images/me.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'assets/images/me.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })

  ],
})
