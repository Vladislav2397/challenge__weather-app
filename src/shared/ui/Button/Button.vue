<template>
    <button :class="[$style.root, 'typo-text-4-custom']">
        <Icon
            v-if="iconLeft"
            :icon="iconLeft"
            size="14" />
        <slot />
        <Icon
            v-if="iconRight"
            :icon="iconRight"
            size="10" />
    </button>
</template>

<script lang="ts" setup>
import { Icon, type IconName } from '../Icon'

defineProps<{
    iconLeft?: IconName
    iconRight?: IconName
}>()
</script>

<style module lang="scss">
.root {
    $padding: 10;

    display: flex;
    align-items: center;
    gap: rem(5);
    min-height: rem(34);
    background-color: var(--neutral-800);
    border-radius: rem(6);
    padding-left: rem($padding);
    padding-right: rem($padding);
}
</style>
