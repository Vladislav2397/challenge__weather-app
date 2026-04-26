# Weather App

Solution for the [Frontend Mentor - Weather app](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49) challenge built with `Vue 3` and `TypeScript`.

![image](./challenge/preview.jpg)

## About

The app displays current weather, hourly forecast, and 7-day forecast for a selected city using the `Open-Meteo API`.

### Features

- City search via input field.
- Current weather: temperature, weather icon, and location name.
- Additional metrics: `feels like`, humidity, wind speed, and precipitation.
- 7-day daily forecast.
- Hourly forecast with day-of-week switching.
- Units dropdown to change:
    - temperature (`C`/`F`);
    - wind speed (`km/h`/`mph`);
    - precipitation (`mm`).
- Responsive layout and proper `hover/focus` states for interactive UI elements.

## Tech Stack

- `Vue 3` + `TypeScript`
- `Vite`
- `Sass`
- `@tanstack/vue-query` (server state management)
- `@vueuse/core`
- `dayjs`
- `reka-ui`

## Architecture

The project follows an `FSD`-style structure:

- `src/app` - app composition and major UI blocks (header, forecasts, current weather section).
- `src/shared` - shared API layer, config, utilities, and reusable UI components (`Icon`, `Button`, `InputSearch`, `DropdownMenu`, etc.).

## Run Locally

### Requirements

- `Node.js` 20+
- `npm` 10+

### Installation and Start

```bash
npm install
npm run dev
```

### Available Scripts

```bash
npm run dev      # start local dev server
npm run build    # build for production
npm run preview  # preview production build locally
```

## Links

- Live Site: [GitHub Pages](https://vladislav2397.github.io/challenge__weather-app/)
- Repository: [GitHub](https://github.com/Vladislav2397/challenge__weather-app)
- Frontend Mentor Challenge: [Weather app challenge](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49)

## Key Learnings

- Typed weather models and API contracts.
- UI decomposition into reusable components.
- Working with weather data formats and measurement units.
- Separating UI and business logic in an FSD-style architecture.

## AI Collaboration

AI was used as a supporting tool for:

- validating and refining architecture decisions;
- speeding up refactoring and local improvements;
- targeted help with debugging and documentation updates.
