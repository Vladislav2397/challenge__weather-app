import {
    dailyDataResponseContract,
    hourlyDataResponseContract,
    searchCityResponseContract,
} from './contracts/forecast'
import type { AppConfigUnits } from '@/shared/config'

const BASE_URL = 'https://api.open-meteo.com'

export const getMainData = async ({
    latitude,
    longitude,
    units,
}: {
    latitude: number
    longitude: number
    units: AppConfigUnits
}) => {
    const url = new URL(BASE_URL + '/v1/forecast')
    url.searchParams.set('latitude', latitude.toString())
    url.searchParams.set('longitude', longitude.toString())
    url.searchParams.set(
        'daily',
        ['temperature_2m_max', 'temperature_2m_min', 'weather_code'].join(','),
    )
    url.searchParams.set('forecast_days', '7')
    url.searchParams.set(
        'current',
        [
            'apparent_temperature',
            'relative_humidity_2m',
            'wind_speed_10m',
            'precipitation_probability',
            'weather_code',
            'temperature',
        ].join(','),
    )
    url.searchParams.set('temperature_unit', units.temperature)
    url.searchParams.set('wind_speed_unit', units.windSpeed.replace(/\W/g, ''))
    url.searchParams.set('precipitation_unit', units.precipitation)

    const response = await fetch(url.toString())

    const data = await response.json()

    if (!dailyDataResponseContract.isData(data)) {
        console.error(dailyDataResponseContract.getErrorMessages(data))
        throw new Error('Invalid response')
    }

    return data
}

export const getHourlyData = async ({
    hourlyDate,
    latitude,
    longitude,
    units,
}: {
    hourlyDate: string
    latitude: number
    longitude: number
    units: Pick<AppConfigUnits, 'temperature'>
}) => {
    const url = new URL(BASE_URL + '/v1/forecast')
    url.searchParams.set('latitude', latitude.toString())
    url.searchParams.set('longitude', longitude.toString())
    url.searchParams.set('hourly', 'temperature_2m,weather_code')
    url.searchParams.set('temperature_unit', units.temperature)
    url.searchParams.set('start_hour', `${hourlyDate}T00:00`)
    url.searchParams.set('end_hour', `${hourlyDate}T23:00`)

    const response = await fetch(url.toString())

    const data = await response.json()

    if (!hourlyDataResponseContract.isData(data)) {
        console.error(hourlyDataResponseContract.getErrorMessages(data))
        throw new Error('Invalid response')
    }

    return data
}

export const searchCity = async ({ search }: { search: string }) => {
    const url = new URL('https://geocoding-api.open-meteo.com/v1/search')
    url.searchParams.set('name', search)

    const response = await fetch(url.toString())

    const data = await response.json()

    if (!searchCityResponseContract.isData(data)) {
        console.error(searchCityResponseContract.getErrorMessages(data))
        throw new Error('Invalid response')
    }

    return data
}
