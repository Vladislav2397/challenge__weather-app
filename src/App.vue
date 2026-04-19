<template>
    <main>
        <AppHeader />
        <h1 :class="[$style.title, 'typo-heading-1']">
            How’s the sky looking today?
        </h1>
    </main>
</template>

<script setup lang="ts">
import { AppHeader } from './app/AppHeader'

//
</script>

<style module lang="scss">
.title {
    text-align: center;
    padding-top: rem(32);
    padding-left: rem(16);
    padding-right: rem(16);
}
</style>
