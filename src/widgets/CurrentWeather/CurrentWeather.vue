<template>
    <div :class="$style.root">
        <div :class="$style.card">
            <img
                :class="$style.image"
                :src="background" />
            <div :class="$style.content">
                <h2 :class="[$style.title, 'typo-text-1']">Berlin, Germany</h2>
                <p :class="[$style.description, 'typo-text-3']">
                    Tuesday, Aug 5, 2025
                </p>
                <div :class="$style.temperature">
                    <div :class="$style.icon">
                        <WeatherIcon
                            icon="sunny"
                            size="120" />
                    </div>
                    <span class="typo-huge-1">20°</span>
                </div>
            </div>
        </div>
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
        </div>
    </div>
</template>

<script lang="ts" setup>
import background from '@/shared/images/bg-today-small.svg'
import { WeatherIcon } from '@/shared/ui/WeatherIcon'
import { WeatherOtherCard } from '@/shared/ui/WeatherOtherCard'
</script>

<style module lang="scss">
.root {
    display: flex;
    flex-direction: column;
    gap: rem(22);
}

.card {
    position: relative;
    min-height: rem(286);
    overflow: hidden;
    border-radius: rem(20);
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
    align-items: center;
    padding: rem(38) rem(25) 0;
}

.title {
    margin-bottom: rem(6);
}

.temperature {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.weatherOtherCards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: rem(16);
}
</style>
