import { inject, provide, type Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const KEY = Symbol('app-config')

export type TemperatureUnit = 'celsius' | 'fahrenheit'
export type WindSpeedUnit = 'km/h' | 'mph'
export type PrecipitationUnit = 'mm' | 'inch'

export type AppConfigUnits = {
    temperature: TemperatureUnit
    windSpeed: WindSpeedUnit
    precipitation: PrecipitationUnit
}

type AppConfigContext = {
    units: Ref<AppConfigUnits>
    setTemperatureUnit: (unit: TemperatureUnit) => void
    setWindSpeedUnit: (unit: WindSpeedUnit) => void
    setPrecipitationUnit: (unit: PrecipitationUnit) => void
}

const METRIC_UNITS: AppConfigUnits = {
    temperature: 'celsius',
    windSpeed: 'km/h',
    precipitation: 'mm',
}

export const useAppConfigProvider = () => {
    const units = useLocalStorage<AppConfigUnits>(
        'weather-app/v1/app-config/units',
        {
            ...METRIC_UNITS,
        },
    )

    function setTemperatureUnit(unit: TemperatureUnit) {
        units.value = {
            ...units.value,
            temperature: unit,
        }
    }

    function setWindSpeedUnit(unit: WindSpeedUnit) {
        units.value = {
            ...units.value,
            windSpeed: unit,
        }
    }

    function setPrecipitationUnit(unit: PrecipitationUnit) {
        units.value = {
            ...units.value,
            precipitation: unit,
        }
    }

    provide<AppConfigContext>(KEY, {
        units,
        setTemperatureUnit,
        setWindSpeedUnit,
        setPrecipitationUnit,
    })

    return { units }
}

export const useAppConfig = () => {
    const appConfig = inject<AppConfigContext>(KEY)

    if (!appConfig) {
        throw new Error('App config context not found')
    }

    return appConfig
}
