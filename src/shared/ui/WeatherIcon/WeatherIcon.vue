<template>
    <img
        :class="$style.icon"
        :style="styles"
        :src="iconHref"
        alt="weather icon" />
</template>

<script lang="ts" setup>
import drizzleIcon from '@/shared/images/icon-drizzle.webp'
import fogIcon from '@/shared/images/icon-fog.webp'
import overcastIcon from '@/shared/images/icon-overcast.webp'
import partlyCloudyIcon from '@/shared/images/icon-partly-cloudy.webp'
import rainIcon from '@/shared/images/icon-rain.webp'
import snowIcon from '@/shared/images/icon-snow.webp'
import stormIcon from '@/shared/images/icon-storm.webp'
import sunnyIcon from '@/shared/images/icon-sunny.webp'
import { computed } from 'vue'
import type { WeatherIconName } from './model'

const { icon, size = 60 } = defineProps<{
    icon: WeatherIconName
    size: number | `${number}`
}>()

const iconMap = new Map<WeatherIconName, string>([
    ['fog', fogIcon],
    ['drizzle', drizzleIcon],
    ['overcast', overcastIcon],
    ['partly-cloudy', partlyCloudyIcon],
    ['rain', rainIcon],
    ['snow', snowIcon],
    ['storm', stormIcon],
    ['sunny', sunnyIcon],
])

const iconHref = computed(() => {
    return iconMap.get(icon)
})

const styles = computed(() => ({
    width: pxToRem(+size),
    height: pxToRem(+size),
}))

function pxToRem(px: number): `${number}rem` {
    return `${px / 16}rem`
}
</script>

<style module lang="scss">
.root {
    width: rem(60);
    height: rem(60);
    object-fit: contain;
}
</style>
