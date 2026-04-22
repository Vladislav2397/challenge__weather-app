<template>
    <div :class="$style.root">
        <div :class="$style.card">
            <img
                :class="$style.image"
                :src="background" />
            <div :class="$style.content">
                <div :class="$style.header">
                    <h2 :class="[$style.title, 'typo-text-1']">
                        Berlin, Germany
                    </h2>
                    <p :class="[$style.description, 'typo-text-3']">
                        Tuesday, Aug 5, 2025
                    </p>
                </div>
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
        <WeatherOtherCard
            :class="$style.info"
            label="Feels Like"
            value="18°" />
        <WeatherOtherCard
            :class="$style.info"
            label="Humidity"
            value="46%" />
        <WeatherOtherCard
            :class="$style.info"
            label="Wind"
            value="14 km/h" />
        <WeatherOtherCard
            :class="$style.info"
            label="Precipitation"
            value="0 mm" />
    </div>
</template>

<script lang="ts" setup>
import background from '@/shared/images/bg-today-small.svg'
import { WeatherIcon } from '@/shared/ui/WeatherIcon'
import { WeatherOtherCard } from '@/shared/ui/WeatherOtherCard'
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
