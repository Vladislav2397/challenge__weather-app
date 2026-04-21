<template>
    <div :class="$style.root">
        <p class="typo-text-3">{{ day }}</p>
        <WeatherIcon
            :icon="iconDay"
            size="60" />
        <div :class="$style.temperatures">
            <p class="typo-text-4">{{ temperatureDay }}</p>
            <p class="typo-text-4">{{ temperatureNight }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { WeatherIcon, type WeatherIconName } from '@/shared/ui/WeatherIcon'

const { iconDay } = defineProps<{
    day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
    temperatureDay: string
    temperatureNight: string
    iconDay: WeatherIconName
    iconNight: string
}>()
</script>

<style module lang="scss">
.root {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(14);
    padding: rem(12) rem(10) rem(12);
    background-color: var(--neutral-800);
    border-radius: rem(12);
    box-shadow: 0 0 0 1px var(--neutral-700);
}

.icon {
    width: rem(60);
    height: rem(60);
    object-fit: contain;
}

.temperatures {
    display: flex;
    gap: rem(16);
    justify-content: space-between;
    width: 100%;
}
</style>
