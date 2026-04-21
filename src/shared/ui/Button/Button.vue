<template>
    <button
        :class="[$style.root, textSizeClass]"
        :style="styles">
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
import { computed } from 'vue'
import { Icon, type IconName } from '../Icon'

const { size, theme } = defineProps<{
    iconLeft?: IconName
    iconRight?: IconName
    theme: 'primary' | 'secondary'
    size: '34' | '38' | '56'
}>()

const textSizeClass = computed(() => {
    if (size === '34') return 'typo-text-4-custom'
    if (size === '38') return 'typo-text-3'

    return 'typo-text-2'
})

const borderRadius = computed(() => {
    if (size === '34') return pxToRem(6)
    return pxToRem(12)
})

const backgroundColor = computed(() => {
    if (theme === 'primary') return 'var(--blue-500)'
    return 'var(--neutral-800)'
})

const styles = computed(() => {
    return {
        minHeight: pxToRem(+size),
        borderRadius: borderRadius.value,
        backgroundColor: backgroundColor.value,
    }
})

function pxToRem(px: number) {
    return `${px / 16}rem`
}
</script>

<style module lang="scss">
.root {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: rem(5);
    // min-height: rem(34);
    background-color: var(--neutral-800);
    // border-radius: rem(6);
    padding: 0 rem(10);
}
</style>
