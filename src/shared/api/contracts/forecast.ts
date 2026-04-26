import * as C from '@withease/contracts'

const optional = <T extends C.Contract<unknown, unknown>>(contract: T) =>
    C.or(contract, C.nothing)

export const dailyDataResponseContract = C.obj({
    current: C.obj({
        time: C.str,
        interval: C.num,
        temperature: C.num,
        apparent_temperature: C.num,
        relative_humidity_2m: C.num,
        wind_speed_10m: C.num,
        precipitation_probability: C.num,
        weather_code: C.num,
    }),
    daily: C.obj({
        time: C.arr(C.str),
        temperature_2m_max: C.arr(C.num),
        temperature_2m_min: C.arr(C.num),
        weather_code: C.arr(C.num),
    }),
})

export const hourlyDataResponseContract = C.obj({
    hourly_units: C.obj({
        time: C.str,
        temperature_2m: C.str,
    }),
    hourly: C.obj({
        time: C.arr(C.str),
        temperature_2m: C.arr(C.num),
        weather_code: C.arr(C.num),
    }),
})

export const searchCityResponseContract = C.obj({
    results: optional(
        C.arr(
            C.obj({
                id: C.num,
                name: C.str,
                latitude: C.num,
                longitude: C.num,
                country_code: C.str,
                timezone: C.str,
                country: C.str,
                admin1: C.str,
                admin2: optional(C.str),
                admin3: optional(C.str),
                admin4: optional(C.str),
            }),
        ),
    ),
})
