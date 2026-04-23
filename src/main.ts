import { createApp } from 'vue'
import App from './App.vue'
import './shared/styles/index.scss'

import { withIconSprite } from './app/with-icon-sprite'
import { withQueryClient } from './app/with-query-client'

const app = createApp(App)

withIconSprite(app)
withQueryClient(app)

app.mount('#app')
