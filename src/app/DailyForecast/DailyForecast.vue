<template>
    <div :class="$style.root">
        <h3 :class="[$style.title, 'typo-heading-2']">Daily forecast</h3>
        <div :class="$style.grid">
            <DailyForecastCard
                day="Tue"
                temperatureDay="20°"
                temperatureNight="14°"
                iconDay="rain"
                iconNight="icon-night" />
            <DailyForecastCard
                day="Wed"
                temperatureDay="21°"
                temperatureNight="15°"
                iconDay="drizzle"
                iconNight="icon-night" />
            <DailyForecastCard
                day="Thu"
                temperatureDay="24°"
                temperatureNight="14°"
                iconDay="sunny"
                iconNight="icon-night" />
            <DailyForecastCard
                day="Fri"
                temperatureDay="25°"
                temperatureNight="13°"
                iconDay="partly-cloudy"
                iconNight="icon-night" />
            <DailyForecastCard
                day="Sat"
                temperatureDay="21°"
                temperatureNight="15°"
                iconDay="storm"
                iconNight="icon-night" />
            <DailyForecastCard
                day="Sun"
                temperatureDay="25°"
                temperatureNight="16°"
                iconDay="snow"
                iconNight="icon-night" />
            <DailyForecastCard
                day="Mon"
                temperatureDay="24°"
                temperatureNight="15°"
                iconDay="fog"
                iconNight="icon-night" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { DailyForecastCard } from './DailyForecastCard'

//
</script>

<style module lang="scss">
.root {
    //
}

.title {
    margin-bottom: rem(18);
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(18);

    @media (min-width: 1440px) {
        grid-template-columns: repeat(7, 1fr);
    }
}
</style>
