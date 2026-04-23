const BASE_URL = 'https://api.open-meteo.com/v1/forecast'

export const getMainData = async () => {
    const response = await fetch(
        `${BASE_URL}?latitude=52.52&longitude=13.41&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&forecast_days=7`,
    )

    return response.json()
}

export const getHourlyData = async () => {
    const response = await fetch(
        `${BASE_URL}?latitude=52.52&longitude=13.41&hourly=temperature_2m&start_hour=2026-04-23T00:00&end_hour=2026-04-23T23:00`,
    )

    return response.json()
}
