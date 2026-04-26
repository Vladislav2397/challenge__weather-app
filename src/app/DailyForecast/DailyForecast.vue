<template>
    <div :class="$style.root">
        <h3 :class="[$style.title, 'typo-heading-2']">Daily forecast</h3>
        <div
            :class="$style.grid"
            v-if="isLoading">
            <div
                v-for="i in 7"
                :key="i"
                :class="$style.skeletonCell"></div>
        </div>
        <div
            v-else
            :class="$style.grid">
            <DailyForecastCard
                v-for="item in dailyData"
                :day="item.dayOfWeek"
                :temperatureDay="`${item.temperatureDay}°`"
                :temperatureNight="`${item.temperatureNight}°`"
                :iconDay="getWeatherCategory(item.weatherCode)" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { DailyForecastCard } from './DailyForecastCard'
import { forecastApi } from '@/shared/api'
import dayjs from 'dayjs'
import { computed } from 'vue'
import type { WeatherIconName } from '@/shared/ui/WeatherIcon'
import { useLocation } from '@/shared/lib/location'

const { location } = useLocation()

const { data, isLoading } = useQuery({
    queryKey: ['daily-data'],
    queryFn: () => forecastApi.getMainData(location.value),
})

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

const dailyData = computed(() => {
    if (!data.value) return []

    const total = data.value.daily.time.length
    const result: {
        dayOfWeek: string
        temperatureDay: number
        temperatureNight: number
        weatherCode: number
    }[] = []

    for (let i = 0; i < total; i++) {
        const time = data.value.daily.time[i]
        const temperatureDay = Math.round(
            data.value.daily.temperature_2m_max[i],
        )
        const temperatureNight = Math.round(
            data.value.daily.temperature_2m_min[i],
        )
        const dayOfWeek = dayjs(time).format('ddd')
        const weatherCode = data.value.daily.weather_code[i]

        result.push({
            temperatureDay,
            temperatureNight,
            weatherCode,
            dayOfWeek,
        })
    }

    return result
})
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

.skeletonCell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(14);
    padding: rem(12) rem(10) rem(12);
    background-color: var(--neutral-800);
    border-radius: rem(12);
    box-shadow: 0 0 0 1px var(--neutral-700);
    min-height: rem(163);
}
</style>
