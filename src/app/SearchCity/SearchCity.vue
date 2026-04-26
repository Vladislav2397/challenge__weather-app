<template>
    <div :class="$style.root">
        <InputSearch
            :class="$style.input"
            v-model:value="value" />
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
import { Button } from '@/shared/ui/Button'
import { InputSearch } from '@/shared/ui/InputSearch'
import { useQuery } from '@tanstack/vue-query'
import { ref } from 'vue'

const value = ref('')

const search = ref('')

function applySearch() {
    search.value = value.value
}

const { data, isLoading } = useQuery({
    queryKey: ['search-city', search],
    queryFn: () =>
        forecastApi.searchCity({
            search: search.value,
        }),
    enabled: () => !!search.value,
})
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
</style>
