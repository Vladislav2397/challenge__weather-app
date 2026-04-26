<template>
    <SvgSprite
        :symbol="`${icon}`"
        :size="`0 0 ${size} ${size}`"
        role="presentation"
        class="icon--inline" />
</template>

<script lang="ts" setup>
import { SvgSprite } from 'vue-svg-sprite'
import type { SvgIcons } from './svg-icons'

defineProps<{
    icon: SvgIcons
    size: number | `${number}`
}>()
</script>

<style module lang="scss">
.root {
    //
}
</style>
