<template>
    <div :class="$style.root">
        <div :class="$style.header">
            <h3 :class="[$style.title, 'typo-heading-2']">Hourly forecast</h3>
            <button :class="[$style.button, 'typo-text-4']">
                Tuesday
                <Icon
                    icon="icon-dropdown"
                    size="14" />
            </button>
        </div>
        <div :class="$style.list">
            <HourlyForecastRow
                hour="3 PM"
                icon="overcast"
                temperature="20°" />
            <HourlyForecastRow
                hour="4 PM"
                icon="partly-cloudy"
                temperature="20°" />
            <HourlyForecastRow
                hour="5 PM"
                icon="sunny"
                temperature="20°" />
            <HourlyForecastRow
                hour="6 PM"
                icon="overcast"
                temperature="19°" />
            <HourlyForecastRow
                hour="7 PM"
                icon="snow"
                temperature="18°" />
            <HourlyForecastRow
                hour="8 PM"
                icon="fog"
                temperature="18°" />
            <HourlyForecastRow
                hour="9 PM"
                icon="snow"
                temperature="17°" />
            <HourlyForecastRow
                hour="10 PM"
                icon="overcast"
                temperature="17°" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { HourlyForecastRow } from './HourlyForecastRow'
import { Icon } from '@/shared/ui/Icon'

//
</script>

<style module lang="scss">
.root {
    padding: rem(20) rem(16);
    background-color: var(--neutral-800);
    border-radius: rem(20);
    height: rem(684);
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: rem(16);
}

.button {
    display: flex;
    align-items: center;
    gap: rem(12);
    justify-content: center;
    min-height: rem(38);
    padding: 0 rem(16);
    background-color: var(--neutral-600);
    border-radius: rem(8);
}

.list {
    display: flex;
    flex-direction: column;
    gap: rem(18);
}
</style>
