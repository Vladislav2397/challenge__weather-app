<template>
    <DropdownMenuRadioGroup
        v-model:value="value"
        :class="$style.group">
        <DropdownMenuLabel :class="$style.label">{{ label }}</DropdownMenuLabel>
        <DropdownMenuRadioItem
            v-for="item in items"
            :value="item.value"
            :class="[
                $style.item,
                value === item.value && $style.active,
                'typo-text-4',
            ]"
            @select="value = item.value">
            {{ item.label }}
            <Icon
                v-if="value === item.value"
                :class="$style.checkedIcon"
                icon="icon-checkmark"
                size="16" />
        </DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
</template>

<script lang="ts" setup>
import { Icon } from '@/shared/ui/Icon'
import {
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from 'reka-ui'

const value = defineModel<string>('value', { required: true })

defineProps<{
    label: string
    items: { value: string; label: string }[]
}>()
</script>

<style module lang="scss">
.group {
    display: flex;
    flex-direction: column;
}

.label {
    padding: 0 rem(8);
    margin-bottom: rem(8);
    font-family: 'DM Sans', sans-serif;
    font-size: rem(14);
    font-weight: 500;
    letter-spacing: 1%;
    color: var(--neutral-200);
}

.item {
    padding: 0 rem(8);
    border-radius: rem(8);
    min-height: rem(39);
    display: flex;
    align-items: center;
    cursor: pointer;

    & + & {
        margin-top: rem(4);
    }

    &:hover {
        background-color: var(--neutral-700);
    }

    &.active {
        background-color: var(--neutral-700);
    }
}

.checkedIcon {
    margin-left: auto;
}
</style>
