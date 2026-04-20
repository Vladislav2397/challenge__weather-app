<template>
    <main :class="$style.root">
        <AppHeader />
        <h1 :class="[$style.title, 'typo-heading-1']">
            How’s the sky looking today?
        </h1>
        <InputSearch :class="$style.input" />
        <Button
            :class="$style.button"
            theme="primary"
            size="56">
            Search
        </Button>
        <CurrentWeather :class="$style.currentWeather" />
        <div :class="$style.weatherOtherCards">
            <WeatherOtherCard
                label="Feels Like"
                value="18°" />
            <WeatherOtherCard
                label="Humidity"
                value="46%" />
            <WeatherOtherCard
                label="Wind"
                value="14 km/h" />
            <WeatherOtherCard
                label="Precipitation"
                value="0 mm" />
            <!-- <WeatherOtherCard
                label="Sunrise"
                value="06:00" />
            <WeatherOtherCard
                label="Sunset"
                value="18:00" /> -->
        </div>
    </main>
</template>

<script setup lang="ts">
import { AppHeader } from './app/AppHeader'
import { Button } from './shared/ui/Button'
import { InputSearch } from './shared/ui/InputSearch'
import { WeatherOtherCard } from './shared/ui/WeatherOtherCard'
import { CurrentWeather } from './widgets/CurrentWeather'

//
</script>

<style module lang="scss">
.root {
    $padding: 16;

    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-left: rem($padding);
    padding-right: rem($padding);
}

.title {
    $padding: 16;

    text-align: center;
    padding-top: rem(32);
    padding-left: rem($padding);
    padding-right: rem($padding);
    margin-bottom: rem(50);
}

.input {
    margin-bottom: rem(12);
}

.button {
    margin-bottom: rem(32);
}

.currentWeather {
    margin-bottom: rem(22);
}

.weatherOtherCards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: rem(16);
}
</style>
