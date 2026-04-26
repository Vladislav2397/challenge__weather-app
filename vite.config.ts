import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ViteSvgSpriteWrapper({
            icons: './src/shared/icons/*.svg',
            outputDir: './public',
            generateType: true,
            typeOutputDir: './src/shared/ui/Icon',
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
    base: '/challenge__weather-app/',
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
