import { registerSW } from 'virtual:pwa-register'

export function withPwa() {
    registerSW({ immediate: true })
}
