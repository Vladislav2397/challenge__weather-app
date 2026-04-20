<template>
    <div :class="$style.root">
        <img
            :class="$style.image"
            :src="background" />
        <div :class="$style.content">
            <h2 :class="[$style.title, 'typo-text-1']">Berlin, Germany</h2>
            <p :class="[$style.description, 'typo-text-3']">
                Tuesday, Aug 5, 2025
            </p>
            <div :class="$style.temperature">
                <div :class="$style.icon">
                    <!--  -->
                </div>
                <span class="typo-huge-1">20°</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import background from '@/shared/images/bg-today-small.svg'
</script>

<style module lang="scss">
.root {
    position: relative;
    min-height: rem(286);
}

.image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: rem(38) rem(25) 0;
}

.title {
    margin-bottom: rem(6);
}

.temperature {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>
