<template>
    <div :class="$style.root">
        <div :class="$style.card">
            <img
                :class="$style.image"
                :src="background" />
            <div :class="$style.content">
                <div :class="$style.header">
                    <h2 :class="[$style.title, 'typo-text-1']">
                        {{ location.name }}
                    </h2>
                    <p :class="[$style.description, 'typo-text-3']">
                        {{ date }}
                    </p>
                </div>
                <div :class="$style.temperature">
                    <div :class="$style.icon">
                        <WeatherIcon
                            :icon="icon"
                            size="120" />
                    </div>
                    <span class="typo-huge-1">
                        {{ Math.round(currentWeatherData.temperature) }}°
                    </span>
                </div>
            </div>
        </div>
        <WeatherOtherCard
            :class="$style.info"
            label="Feels Like"
            :value="`${Math.round(currentWeatherData.apparent_temperature)}°`" />
        <WeatherOtherCard
            :class="$style.info"
            label="Humidity"
            :value="`${currentWeatherData.relative_humidity_2m}%`" />
        <WeatherOtherCard
            :class="$style.info"
            label="Wind"
            :value="`${Math.round(currentWeatherData.wind_speed_10m)} ${windSpeedLabel}`" />
        <WeatherOtherCard
            :class="$style.info"
            label="Precipitation"
            :value="`${currentWeatherData.precipitation_probability}%`" />
    </div>
</template>

<script lang="ts" setup>
import { forecastApi } from '@/shared/api'
import { useAppConfig } from '@/shared/config'
import background from '@/shared/images/bg-today-small.svg'
import { useLocation } from '@/shared/lib/location'
import { WeatherIcon, type WeatherIconName } from '@/shared/ui/WeatherIcon'
import { WeatherOtherCard } from '@/shared/ui/WeatherOtherCard'
import { useQuery } from '@tanstack/vue-query'
import dayjs from 'dayjs'
import { computed } from 'vue'

const { location } = useLocation()
const { units } = useAppConfig()

const { data } = useQuery({
    queryKey: ['daily-data', location, units],
    queryFn: () => {
        console.log('units', units.value)
        return forecastApi.getMainData({
            ...location.value,
            units: units.value,
        })
    },
})

const windSpeedLabel = computed(() => {
    return units.value.windSpeed
})

/** @duplicate TODO: extract function to module and reuse */
function getWeatherCategory(code: number): WeatherIconName {
    if ([0, 1].includes(code)) return 'sunny'
    if (code === 2) return 'partly-cloudy'
    if (code === 3) return 'overcast'
    if (code >= 45 && code <= 48) return 'fog'
    if ([51, 53, 61, 63, 80, 81, 82].includes(code)) return 'rain'
    if ([55, 65, 71, 73, 75].includes(code)) return 'snow'
    if ([80, 81, 82].includes(code)) return 'storm'

    // fallback
    return 'overcast'
}

const icon = computed(() => {
    return getWeatherCategory(currentWeatherData.value.weather_code)
})

const date = computed(() => {
    return dayjs().format('dddd, MMM D, YYYY')
})

const currentWeatherData = computed(() => {
    if (!data.value)
        return {
            time: '',
            interval: 0,
            apparent_temperature: 0,
            relative_humidity_2m: 0,
            wind_speed_10m: 0,
            precipitation_probability: 0,
            weather_code: 0,
            temperature: 0,
        }

    return data.value.current
})
</script>

<style module lang="scss">
.root {
    display: grid;
    gap: rem(16);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 1fr 1fr;

    @media (min-width: 1440px) {
        gap: rem(32) rem(26);
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, auto);
    }
}

.card {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    position: relative;
    min-height: rem(286);
    overflow: hidden;
    border-radius: rem(20);

    @media (max-width: 1439px) {
        margin-bottom: rem(4);
    }

    @media (min-width: 1440px) {
        grid-column: 1 / 5;
        grid-row: 1 / 3;
    }
}

.image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: rem(38) rem(25) 0;
    // height: 100%;

    @media (min-width: 1440px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 rem(25);
        height: 100%;
    }
}

.header {
    display: flex;
    flex-direction: column;
    gap: rem(6);
    text-align: center;

    @media (min-width: 1440px) {
        text-align: left;
    }
}

.temperature {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1440px) {
        gap: rem(24);
    }
}

.info {
    min-height: rem(118);
}
</style>
