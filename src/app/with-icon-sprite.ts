import type { App } from 'vue'
import { svgSpritePlugin } from 'vue-svg-sprite'

export function withIconSprite(app: App) {
    app.use(svgSpritePlugin, {
        url: '/src/shared/ui/Icon/sprite.svg',
    })
}
