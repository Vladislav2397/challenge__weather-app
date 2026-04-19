import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        port: 3000,
        open: true,
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
