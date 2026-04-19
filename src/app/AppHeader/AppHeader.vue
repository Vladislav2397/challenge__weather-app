<template>
  <div :class="$style.root">
    <img :class="$style.logo" :src="logo" alt="Weather App" />
    <Button>Units</Button>
  </div>
</template>

<script lang="ts" setup>
import logo from '@/shared/images/logo.svg';
import { Button } from '@/shared/ui/Button'
</script>

<style module lang="scss">
.root {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: rem(16);
    padding-right: rem(16);
    min-height: rem(64);
}

.logo {
    width: rem(138);
}
</style>
