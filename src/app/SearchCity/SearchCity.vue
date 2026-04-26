<template>
    <div :class="$style.root">
        <DropdownMenuRoot v-model:open="isOpenDropdown">
            <DropdownMenuTrigger
                asChild
                disabled>
                <InputSearch
                    v-model:value="value"
                    :class="$style.input"
                    placeholder="Search for a place..." />
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
                <DropdownMenuContent
                    :class="$style.content"
                    :side-offset="10">
                    <DropdownMenuItem
                        v-if="isLoading"
                        :class="[$style.item, $style.disabled, 'typo-text-4']"
                        disabled>
                        <Icon
                            :class="$style.spinner"
                            icon="icon-loading"
                            size="16" />
                        Search in progress
                    </DropdownMenuItem>
                    <template v-else>
                        <DropdownMenuItem
                            v-for="city in cities"
                            :class="[$style.item, 'typo-text-4']"
                            :value="city.name"
                            @select="onClickItem(city)">
                            {{ city.fullName }}
                        </DropdownMenuItem>
                    </template>
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenuRoot>
        <Button
            :class="$style.button"
            theme="primary"
            size="56"
            @click="applySearch">
            Search
        </Button>
    </div>
</template>

<script lang="ts" setup>
import { forecastApi } from '@/shared/api'
import { useLocation } from '@/shared/lib/location'
import { Button } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import { InputSearch } from '@/shared/ui/InputSearch'
import { useQuery } from '@tanstack/vue-query'
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuRoot,
    DropdownMenuTrigger,
} from 'reka-ui'
import { computed, ref } from 'vue'

const isOpenDropdown = ref(false)

const value = ref('')

const search = ref('')

function applySearch() {
    if (!value.value) return

    search.value = value.value
    isOpenDropdown.value = true
}

const { data, isLoading } = useQuery({
    queryKey: ['search-city', search],
    queryFn: () =>
        forecastApi.searchCity({
            search: search.value,
        }),
    enabled: () => !!search.value,
})

const cities = computed(() => {
    if (!data.value) return []
    if (!data.value.results) return []

    return data.value.results.map(result => {
        const fullName = [
            result.name,
            result.admin1,
            result.admin2,
            result.admin3,
            result.admin4,
            result.country,
        ]
            .filter(Boolean)
            .join(', ')

        return {
            name: `${result.name}, ${result.country}`,
            fullName,
            latitude: result.latitude,
            longitude: result.longitude,
        }
    })
})

const { setLocation } = useLocation()
function onClickItem(city: {
    name: string
    latitude: number
    longitude: number
}) {
    setLocation({
        name: city.name,
        latitude: city.latitude,
        longitude: city.longitude,
    })
}
</script>

<style module lang="scss">
.root {
    display: flex;
    flex-direction: column;
    gap: rem(12);

    @media (min-width: 1440px) {
        gap: rem(16);
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
}

.input {
    @media (min-width: 1440px) {
        min-width: rem(526);
    }
}

.button {
    @media (min-width: 1440px) {
        min-width: rem(114);
    }
}

.content {
    background-color: var(--neutral-800);
    width: var(--reka-popper-anchor-width);
    border-radius: rem(12);
    padding: rem(8);
    display: flex;
    flex-direction: column;
    gap: rem(4);
    box-shadow: inset 0 0 0 1px var(--neutral-600);
}

.item {
    display: flex;
    align-items: center;
    gap: rem(4);
    padding: 0 rem(8);
    min-height: rem(39);
    border-radius: rem(8);

    &:hover:not(.disabled) {
        background-color: var(--neutral-700);
        cursor: pointer;
    }

    &.active {
        background-color: var(--neutral-700);
        box-shadow: inset 0 0 0 1px var(--neutral-600);
    }
}

.spinner {
    animation: spin 1s linear infinite;
}
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
