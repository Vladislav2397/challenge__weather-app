<template>
    <div :class="$style.root">
        <img
            :class="$style.logo"
            :src="logo"
            alt="Weather App" />
        <SelectUnits />
    </div>
</template>

<script lang="ts" setup>
import logo from '@/shared/images/logo.svg'
import { SelectUnits } from './SelectUnits'
</script>

<style module lang="scss">
.root {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: rem(64);
    position: relative;
}
@media (min-width: 1440px) {
    .root {
        min-height: rem(140);
    }
}

.logo {
    width: rem(138);
}
@media (min-width: 1440px) {
    .logo {
        width: rem(197);
    }
}

</style>
