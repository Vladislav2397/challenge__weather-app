<template>
    <div :class="$style.root">
        <Icon
            icon="icon-search"
            size="22" />
        <input
            :class="[$style.input, 'typo-text-2']"
            type="search"
            placeholder="Search for a place..." />
    </div>
</template>

<script lang="ts" setup>
import { Icon } from '../Icon'

//
</script>

<style module lang="scss">
.root {
    display: flex;
    align-items: center;
    gap: rem(12);
    background-color: var(--neutral-800);
    border-radius: rem(12);
    padding-left: rem(24);
    padding-right: rem(24);
    min-height: rem(54);
}
@media (min-width: 650px) {
    .root {
        //
    }
}

input {
    background-color: transparent;
    border: none;
    flex-grow: 1;
    outline: none;
    color: var(--neutral-0);

    &::placeholder {
        color: var(--neutral-200);
    }
}
</style>
