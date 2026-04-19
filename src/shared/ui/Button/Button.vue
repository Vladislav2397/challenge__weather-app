<template>
  <button :class="[$style.root, 'typo-text-3']">
    <Icon icon="units" />
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { Icon } from '../Icon';

//
</script>

<style module lang="scss">
.root {
    display: flex;
    align-items: center;
    gap: rem(8);
    min-height: rem(34);
    background-color: var(--neutral-700);
    border-radius: 12px;
}
</style>
