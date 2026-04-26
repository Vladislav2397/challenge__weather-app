import { inject, provide, ref, type ComputedRef } from 'vue'

const KEY = Symbol('location')

type LocationContext = {
    location: ComputedRef<{
        name: string
        latitude: number
        longitude: number
    }>
    setLocation: (location: {
        name: string
        latitude: number
        longitude: number
    }) => void
}

export const useLocationProvider = () => {
    const location = ref({
        name: 'Berlin, Germany',
        latitude: 52.52,
        longitude: 13.41,
    })

    function setLocation(_location: {
        name: string
        latitude: number
        longitude: number
    }) {
        location.value = _location
    }

    provide<LocationContext>(KEY, {
        location: location as ComputedRef<typeof location.value>,
        setLocation,
    })
}

export const useLocation = () => {
    const location = inject<LocationContext>(KEY)

    if (!location) {
        throw new Error('Location context not found')
    }

    return location
}
