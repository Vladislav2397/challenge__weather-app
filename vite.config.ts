import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { VitePWA } from 'vite-plugin-pwa'
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper'

const BASE = '/challenge__weather-app/'

// https://vite.dev/config/
export default defineConfig({
    base: BASE,
    plugins: [
        vue(),
        ViteSvgSpriteWrapper({
            icons: './src/shared/icons/*.svg',
            outputDir: './public',
            generateType: true,
            typeOutputDir: './src/shared/ui/Icon',
        }),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon-32x32.png', 'sprite.svg', 'pwa-192x192.png', 'pwa-512x512.png'],
            manifest: {
                name: 'Frontend Mentor | Weather app',
                short_name: 'Weather',
                description:
                    'Current weather, hourly forecast, and 7-day forecast for a selected city.',
                theme_color: '#07071f',
                background_color: '#07071f',
                display: 'standalone',
                orientation: 'portrait',
                start_url: BASE,
                scope: BASE,
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/api\.open-meteo\.com\/.*/i,
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'open-meteo-forecast',
                            expiration: {
                                maxEntries: 40,
                                maxAgeSeconds: 60 * 15,
                            },
                            cacheableResponse: {
                                statuses: [0, 200],
                            },
                        },
                    },
                    {
                        urlPattern: /^https:\/\/geocoding-api\.open-meteo\.com\/.*/i,
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'open-meteo-geocoding',
                            expiration: {
                                maxEntries: 30,
                                maxAgeSeconds: 60 * 60,
                            },
                            cacheableResponse: {
                                statuses: [0, 200],
                            },
                        },
                    },
                ],
            },
        }),
    ],
    server: {
        port: 3000,
        open: true,
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['vue'],
                },
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "@/shared/styles/utils.scss" as *;\n',
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
