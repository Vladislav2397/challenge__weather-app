import * as C from '@withease/contracts'

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
