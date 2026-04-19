<template>
    <SvgSprite
        symbol="icon-units"
        size="0 0 24 24"
        role="presentation"
        class="icon--inline"
    />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { SvgSprite } from 'vue-svg-sprite'

const { icon } = defineProps<{
    icon: 'units';
}>();

const paths = computed(() => ({
    units: '@/assets/icon-units.svg',
}))

const currentPath = computed(() => paths.value[icon]);
</script>

<style module lang="scss">
.root {
  //
}
</style>
