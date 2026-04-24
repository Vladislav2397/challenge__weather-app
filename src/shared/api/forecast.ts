import {
    dailyDataResponseContract,
    hourlyDataResponseContract,
} from './contracts/forecast'

const BASE_URL = 'https://api.open-meteo.com/v1/forecast'

export const getMainData = async () => {
    const response = await fetch(
        `${BASE_URL}?latitude=52.52&longitude=13.41&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code&forecast_days=7`,
    )

    const data = await response.json()

    if (!dailyDataResponseContract.isData(data)) {
        console.error(dailyDataResponseContract.getErrorMessages(data))
        throw new Error('Invalid response')
    }

    return data
}

export const getHourlyData = async ({ hourlyDate }: { hourlyDate: string }) => {
    const response = await fetch(
        `${BASE_URL}?latitude=52.52&longitude=13.41&hourly=temperature_2m,weather_code&start_hour=${hourlyDate}T00:00&end_hour=${hourlyDate}T23:00`,
    )

    const data = await response.json()

    if (!hourlyDataResponseContract.isData(data)) {
        console.error(hourlyDataResponseContract.getErrorMessages(data))
        throw new Error('Invalid response')
    }

    return data
}
