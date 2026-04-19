import { createApp } from 'vue'
import App from './App.vue'
import './shared/styles/index.scss'
import { svgSpritePlugin } from 'vue-svg-sprite'

createApp(App).use(svgSpritePlugin, {
    url: '/src/shared/ui/Icon/sprite.svg',
}).mount('#app')
