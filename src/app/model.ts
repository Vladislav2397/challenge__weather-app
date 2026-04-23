import { ref } from 'vue'

export function useAppModel() {
    const data = ref<any>(null)
    const isLoading = ref(true)

    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&t_weather=true&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&forecast_days=7',
            )

            return response.json()
        } finally {
            isLoading.value = false
        }
    }
    fetchData()

    return {
        isLoading,
        data,
    }
}
