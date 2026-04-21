<template>
    <main :class="$style.root">
        <AppHeader />
        <h1 :class="[$style.title, 'typo-heading-1']">
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
        <CurrentWeather :class="$style.currentWeather" />
        <DailyForecast :class="$style.dailyForecast" />
        <HourlyForecast />
    </main>
</template>

<script setup lang="ts">
import { AppHeader } from './app/AppHeader'
import { DailyForecast } from './app/DailyForecast'
import { HourlyForecast } from './app/HourlyForecast'
import { Button } from './shared/ui/Button'
import { InputSearch } from './shared/ui/InputSearch'
import { CurrentWeather } from './widgets/CurrentWeather'
</script>

<style module lang="scss">
.root {
    $padding: 16;

    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-left: rem($padding);
    padding-right: rem($padding);
    padding-bottom: rem(56);
    max-width: rem(650);
    margin: 0 auto;
}

.title {
    $padding: 16;

    text-align: center;
    padding-top: rem(32);
    padding-left: rem($padding);
    padding-right: rem($padding);
    margin-bottom: rem(50);
}

.inputSearch {
    display: flex;
    flex-direction: column;
    gap: rem(12);
    margin-bottom: rem(32);
}

.currentWeather {
    margin-bottom: rem(30);
}

.dailyForecast {
    margin-bottom: rem(32);
}
</style>
