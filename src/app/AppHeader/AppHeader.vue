<template>
    <div :class="$style.root">
        <img
            :class="$style.logo"
            :src="logo"
            alt="Weather App" />
        <!-- <Button
            theme="secondary"
            size="34"
            iconLeft="icon-units"
            iconRight="icon-dropdown">
            Units
        </Button> -->
        <button :class="[$style.button]">
            <Icon
                icon="icon-units"
                size="14" />
            Units
            <Icon
                icon="icon-dropdown"
                size="10" />
        </button>
        <button :class="[$style.buttonDesktop]">
            <Icon
                icon="icon-units"
                size="16" />
            Units
            <Icon
                icon="icon-dropdown"
                size="13" />
        </button>
    </div>
</template>

<script lang="ts" setup>
import logo from '@/shared/images/logo.svg'
import { Icon } from '@/shared/ui/Icon'
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

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: rem(5);
    min-height: rem(34);
    background-color: var(--neutral-800);
    border-radius: rem(6);
    padding: 0 rem(10);

    /* typo-text-4-custom */
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    letter-spacing: 1%;
}
@media (min-width: 1440px) {
    .button {
        display: none;
    }
    .buttonDesktop {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: rem(10);
        min-height: rem(34);
        background-color: var(--neutral-800);
        border-radius: rem(6);
        padding: 0 rem(15);
        min-height: rem(42);

        /* typo-text-3 */
        font-family: 'DM Sans', sans-serif;
        font-size: 16px;
        letter-spacing: 1%;
    }
}
</style>
