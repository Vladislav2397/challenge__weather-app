<template>
    <div :class="$style.root">
        <p :class="[$style.label, 'typo-text-3']">{{ label }}</p>
        <p :class="[$style.value, 'typo-huge-2']">{{ value }}</p>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    label: string
    value: string
}>()
</script>

<style module lang="scss">
.root {
    display: flex;
    flex-direction: column;
    padding: rem(16) rem(20) rem(12);
    background-color: var(--neutral-800);
    border-radius: rem(16);
    box-shadow: 0 0 0 1px var(--neutral-700);
    gap: rem(14);
}
</style>
