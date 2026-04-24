<template>
    <div :class="$style.root">
        <div :class="$style.header">
            <h3 :class="[$style.title, 'typo-heading-2']">Hourly forecast</h3>
            <HourlyDaySelect v-model:day="day" />
        </div>
        <div
            :class="$style.list"
            v-if="isLoading">
            <div
                v-for="i in 24"
                :key="i"
                :class="$style.skeletonRow"></div>
        </div>
        <div
            v-else
            :class="$style.list">
            <template
                v-for="item in hourlyData"
                :key="item.hour">
                <HourlyForecastRow
                    :hour="item.hour"
                    :temperature="`${item.temperature}°`"
                    :icon="item.icon" />
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { forecastApi } from '@/shared/api'
import { HourlyForecastRow } from './HourlyForecastRow'
import { useQuery } from '@tanstack/vue-query'
import { HourlyDaySelect, type DayOfWeek } from './HourlyDaySelect'
import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import type { WeatherIconName } from '@/shared/ui/WeatherIcon'

const day = ref<DayOfWeek>(dayjs().format('dddd') as DayOfWeek)

function convertDayOfWeekToNumber(day: DayOfWeek): number {
    switch (day) {
        case 'Sunday':
            return 0
        case 'Monday':
            return 1
        case 'Tuesday':
            return 2
        case 'Wednesday':
            return 3
        case 'Thursday':
            return 4
        case 'Friday':
            return 5
        case 'Saturday':
            return 6
        default:
            return 0
    }
}

const dayOfWeekDate = computed(() => {
    return dayjs().day(convertDayOfWeekToNumber(day.value)).format('YYYY-MM-DD')
})

const { data } = useQuery({
    queryKey: ['hourly-data', dayOfWeekDate],
    queryFn: () =>
        forecastApi.getHourlyData({ hourlyDate: dayOfWeekDate.value }),
})
const isLoading = true

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

const hourlyData = computed(() => {
    if (!data.value) return []

    const total = data.value.hourly.time.length
    const result: {
        hour: string
        temperature: number
        icon: WeatherIconName
    }[] = []

    for (let i = 0; i < total; i++) {
        const hour = data.value.hourly.time[i]
        const temperature = Math.round(data.value.hourly.temperature_2m[i])
        const weatherCode = data.value.hourly.weather_code[i]

        result.push({
            hour: dayjs(hour).format('h A'),
            temperature,
            icon: getWeatherCategory(weatherCode),
        })
    }

    return result
})
</script>

<style module lang="scss">
.root {
    padding: rem(20) rem(16);
    background-color: var(--neutral-800);
    border-radius: rem(20);
    height: rem(694);
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
        padding: rem(24) rem(25) rem(24);
    }
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: rem(16);

    @media (min-width: 1440px) {
        margin-bottom: rem(18);
    }
}

.list {
    display: flex;
    flex-direction: column;
    gap: rem(18);
    overflow: auto;
}

.skeletonRow {
    display: flex;
    align-items: center;
    gap: rem(8);
    background-color: var(--neutral-700);
    border-radius: rem(8);
    padding: 0 rem(15) 0 rem(12);
    box-shadow: 0 0 0 1px var(--neutral-600);
    min-height: rem(58);
    animation: global(pulse) 1.5s infinite;
}
</style>
