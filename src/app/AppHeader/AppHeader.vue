<template>
    <div :class="$style.root">
        <img
            :class="$style.logo"
            :src="logo"
            alt="Weather App" />
        <Button
            theme="secondary"
            size="34"
            iconLeft="icon-units"
            iconRight="icon-dropdown">
            Units
        </Button>
    </div>
</template>

<script lang="ts" setup>
import logo from '@/shared/images/logo.svg'
import { Button } from '@/shared/ui/Button'
</script>

<style module lang="scss">
.root {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: rem(64);
}

.logo {
    width: rem(138);
}
</style>
