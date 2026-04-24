<template>
    <DropdownMenuRoot
        v-model:open="toggleState"
        :modal="false">
        <DropdownMenuTrigger
            asChild
            aria-label="select day">
            <button :class="[$style.button, 'typo-text-4']">
                {{ dayOfWeek }}
                <Icon
                    icon="icon-dropdown"
                    size="14" />
            </button>
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
            <DropdownMenuContent
                class="DropdownMenuContent"
                :class="$style.popup"
                align="end"
                :side-offset="12">
                <DropdownMenuItem
                    v-for="day in days"
                    :value="day"
                    :class="[
                        $style.item,
                        { [$style.active]: day === dayOfWeek },
                        'typo-text-3',
                    ]"
                    @select="onClick(day)">
                    {{ day }}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>

<script lang="ts" setup>
import { Icon } from '@/shared/ui/Icon'
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuRoot,
    DropdownMenuTrigger,
} from 'reka-ui'
import { computed, ref } from 'vue'
import type { DayOfWeek } from './model'

const toggleState = ref(false)

const dayOfWeek = defineModel<DayOfWeek>('day', { required: true })

const days = computed<DayOfWeek[]>(() => [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
])

function onClick(value: DayOfWeek) {
    dayOfWeek.value = value
}
</script>

<style module lang="scss">
.root {
    //
}

.button {
    display: flex;
    align-items: center;
    gap: rem(12);
    justify-content: center;
    min-height: rem(38);
    padding: 0 rem(16);
    background-color: var(--neutral-600);
    border-radius: rem(8);
    cursor: pointer;

    @media (min-width: 1440px) {
        min-height: rem(37);
    }
}

.popup {
    width: rem(214);
    padding: rem(8);
    border-radius: rem(12);
    background-color: var(--neutral-700);
    box-shadow: 0 0 0 1px var(--neutral-600);
    display: flex;
    flex-direction: column;
    gap: rem(4);
}

.item {
    padding: rem(0) rem(8);
    border-radius: rem(8);
    min-height: rem(38);
    display: flex;
    align-items: center;
    cursor: pointer;

    &.active,
    &:hover {
        background-color: var(--neutral-600);
    }
}
</style>
