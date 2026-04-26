<template>
    <div :class="$style.root">
        <WeatherIcon
            :icon="icon"
            size="40" />
        <p :class="['typo-text-2']">{{ hour }}</p>
        <p :class="[$style.temperature, 'typo-text-4']">
            {{ temperature }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { WeatherIcon, type WeatherIconName } from '@/shared/ui/WeatherIcon'

const { hour, temperature } = defineProps<{
    hour: string
    temperature: string
    icon: WeatherIconName
}>()
</script>

<style module lang="scss">
.root {
    display: flex;
    align-items: center;
    gap: rem(8);
    background-color: var(--neutral-700);
    border-radius: rem(8);
    padding: 0 rem(15) 0 rem(12);
    box-shadow: inset 0 0 0 1px var(--neutral-600);
    min-height: rem(58);
}

.temperature {
    margin-left: auto;
    letter-spacing: 2%;
}
</style>
