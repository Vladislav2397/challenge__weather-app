<template>
    <main :class="$style.root">
        <AppHeader />
        <h1 :class="[$style.title, $style['typo-heading-1']]">
            How’s the sky looking today?
        </h1>
        <div :class="$style.inputSearch">
            <InputSearch :class="$style.input" />
            <Button
                :class="$style.button"
                theme="primary"
                size="56">
                Search
            </Button>
        </div>
        <div :class="$style.dashboard">
            <CurrentWeather :class="$style.currentWeather" />
            <DailyForecast :class="$style.dailyForecast" />
            <HourlyForecast :class="$style.hourlyForecast" />
        </div>
    </main>
</template>

<script setup lang="ts">
import { AppHeader } from './app/AppHeader'
import { DailyForecast } from './app/DailyForecast'
import { HourlyForecast } from './app/HourlyForecast'
import { Button } from './shared/ui/Button'
import { InputSearch } from './shared/ui/InputSearch'
import { CurrentWeather } from './app/CurrentWeather'
// import { useAppModel } from './app/model'

// const { isLoading, data } = useAppModel()
</script>

<style module lang="scss">
.root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 0 rem(16) rem(56);
    max-width: rem(650);
    margin: 0 auto;
}
@media (min-width: 1440px) {
    .root {
        max-width: 1248px;
        padding: 0 rem(16) rem(80);
    }
}

.title {
    text-align: center;
    padding: rem(32) rem(16) 0;
    margin-bottom: rem(50);

    @media (min-width: 1440px) {
        padding: rem(14) rem(16) 0;
        margin-bottom: rem(62);
    }
}

.typo-heading-1 {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 700;
    font-size: 54px;
    line-height: 62px;
    letter-spacing: 1%;

    @media (min-width: 1440px) {
        font-size: 54px;
        line-height: 65px;
        letter-spacing: 0.5%;
    }
}

.inputSearch {
    display: flex;
    flex-direction: column;
    gap: rem(12);
    margin-bottom: rem(32);

    @media (min-width: 1440px) {
        gap: rem(16);
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: rem(48);
    }
}

.input {
    @media (min-width: 1440px) {
        min-width: rem(526);
    }
}
.button {
    @media (min-width: 1440px) {
        min-width: rem(114);
    }
}

.dashboard {
    display: grid;
    grid-template-areas: 'today' 'daily' 'hourly';
    grid-template-columns: 1fr;
    gap: rem(32);

    @media (min-width: 1440px) {
        grid-template-columns: auto rem(384);
        grid-template-rows: auto 1fr;
        grid-template-areas: 'today hourly' 'daily hourly';
        gap: rem(44) rem(32);
    }
}

.currentWeather {
    grid-area: today;
}

.dailyForecast {
    grid-area: daily;
}

.hourlyForecast {
    grid-area: hourly;
}
</style>
