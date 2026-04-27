<template>
    <DropdownMenuRoot>
        <DropdownMenuTrigger asChild>
            <button :class="[$style.btn, $style['typo-text-4']]">
                <Icon
                    :class="$style.byMobile"
                    icon="icon-units"
                    size="14" />
                <Icon
                    :class="$style.byDesktop"
                    icon="icon-units"
                    size="16" />
                Units
                <Icon
                    :class="$style.byMobile"
                    icon="icon-dropdown"
                    size="10" />
                <Icon
                    :class="$style.byDesktop"
                    icon="icon-dropdown"
                    size="13" />
            </button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
            <DropdownMenuContent
                class="DropdownMenuContent"
                :class="$style.popup"
                align="end"
                :side-offset="12">
                <DropdownMenuItem
                    v-if="unitSystem === 'metric'"
                    value="imperial"
                    :class="[$style.switch, $style.item, 'typo-text-4']"
                    @select="setUnitSystem('imperial')">
                    Switch to Imperial
                </DropdownMenuItem>
                <DropdownMenuItem
                    v-else
                    value="metric"
                    :class="[$style.switch, $style.item, 'typo-text-4']"
                    @select="setUnitSystem('metric')">
                    Switch to Metric
                </DropdownMenuItem>
                <SelectUnitGroup
                    v-model:value="temperature"
                    label="Temperature"
                    :items="[
                        { value: 'celsius', label: 'Celsius (°C)' },
                        { value: 'fahrenheit', label: 'Fahrenheit (°F)' },
                    ]" />
                <div :class="$style.separator" />
                <SelectUnitGroup
                    v-model:value="windSpeed"
                    label="Wind Speed"
                    :items="[
                        { value: 'km/h', label: 'km/h' },
                        { value: 'mph', label: 'mph' },
                    ]" />
                <div :class="$style.separator" />
                <SelectUnitGroup
                    v-model:value="precipitation"
                    label="Precipitation"
                    :items="[
                        { value: 'mm', label: 'Millimeters (mm)' },
                        { value: 'in', label: 'Inches (in)' },
                    ]" />
            </DropdownMenuContent>
        </DropdownMenuPortal>
    </DropdownMenuRoot>
</template>

<script lang="ts" setup>
import { useAppConfig } from '@/shared/config'
import { Icon } from '@/shared/ui/Icon'
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuRoot,
    DropdownMenuTrigger,
} from 'reka-ui'
import { computed } from 'vue'
import { SelectUnitGroup } from './SelectUnitGroup'

const { units, setTemperatureUnit, setWindSpeedUnit, setPrecipitationUnit } =
    useAppConfig()

const temperature = computed({
    get: () => units.value.temperature,
    set: setTemperatureUnit,
})

const windSpeed = computed({
    get: () => units.value.windSpeed,
    set: setWindSpeedUnit,
})

const precipitation = computed({
    get: () => units.value.precipitation,
    set: setPrecipitationUnit,
})

function setUnitSystem(value: 'metric' | 'imperial') {
    unitSystem.value = value
}

const unitSystem = computed({
    get: () => {
        if (units.value.temperature === 'celsius') return 'metric'
        if (units.value.windSpeed === 'km/h') return 'metric'
        if (units.value.precipitation === 'mm') return 'metric'

        return 'imperial'
    },
    set: value => {
        if (value === 'metric') {
            setTemperatureUnit('celsius')
            setWindSpeedUnit('km/h')
            setPrecipitationUnit('mm')
        } else {
            setTemperatureUnit('fahrenheit')
            setWindSpeedUnit('mph')
            setPrecipitationUnit('inch')
        }
    },
})
</script>

<style module lang="scss">
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(6);
    min-height: rem(34);
    padding: 0 rem(12);
    background-color: var(--neutral-600);
    border-radius: rem(8);
    cursor: pointer;

    @media (min-width: 1440px) {
        display: none;
    }
}

.buttonDesktop {
    display: none;

    @media (min-width: 1440px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: rem(10);
        background-color: var(--neutral-600);
        border-radius: rem(8);
        padding: 0 rem(15);
        min-height: rem(42);
        cursor: pointer;
    }
}

.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(6);
    min-height: rem(34);
    padding: 0 rem(12);
    background-color: var(--neutral-600);
    border-radius: rem(8);
    cursor: pointer;

    @media (min-width: 1440px) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: rem(10);
        background-color: var(--neutral-600);
        border-radius: rem(8);
        padding: 0 rem(15);
        min-height: rem(42);
        cursor: pointer;
    }
}

.byMobile {
    display: block;
    @media (min-width: 1440px) {
        display: none;
    }
}
.byDesktop {
    display: none;
    @media (min-width: 1440px) {
        display: block;
    }
}

.popup {
    width: rem(214);
    padding: rem(8);
    border-radius: rem(12);
    background-color: var(--neutral-800);
    box-shadow: 0 0 0 1px var(--neutral-700);
    display: flex;
    flex-direction: column;
}

.switch {
    margin-bottom: rem(10);
    padding: 0 rem(8);
    border-radius: rem(8);
    min-height: rem(32);
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: var(--neutral-600);
    }
}

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

.separator {
    height: 1px;
    width: 100%;
    background-color: var(--neutral-600);
    margin-top: rem(5);
    margin-bottom: rem(9);
}

.typo-text-4 {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    letter-spacing: 1%;

    @media (min-width: 1440px) {
        font-size: 16px;
        letter-spacing: 1%;
    }
}
</style>
