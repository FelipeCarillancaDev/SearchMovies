# SearchMovies

Proyecto Angular para buscar y mostrar películas (demo). Contiene componentes, interfaces y servicios mínimos para consumir datos y mostrar tarjetas de películas.

## Contenido rápido

- Angular CLI: 18.1.2
- Aplicación de ejemplo para buscar y mostrar películas usando servicios locales (o una API externa si se configura).

## Requisitos

- Node.js >= 18.x (recomendado) y npm
- Angular CLI (opcional, puedes usar los scripts npm incluidos)

## Instalación

1. Clona el repositorio:

   git clone <url-del-repo>

2. Entra a la carpeta del proyecto e instala dependencias:

   cd SearchMovies
   npm install

## Scripts útiles

- `npm start` / `ng serve` — Inicia el servidor de desarrollo en http://localhost:4200/
- `npm run build` — Genera la build en `dist/`
- `npm run watch` — Compila en modo watch (desarrollo)
- `npm test` — Ejecuta los tests unitarios (Karma)

Puedes ver los scripts completos en `package.json`.

## Uso

1. Levanta la app:

   npm start

2. Abre tu navegador en http://localhost:4200/

3. Interactúa con la UI para buscar películas o navegar la lista.

## Estructura principal del proyecto

- `src/app/` — Código fuente de la aplicación Angular
  - `components/` — Componentes reutilizables
  - `card-movie/` — Componente que renderiza una tarjeta de película
  - `movies/` — Componente que lista o busca películas
  - `services/` — Servicios para obtener datos (`movies.service.ts`, `movie-backen.service.ts`)
  - `interfaces/` — Tipos e interfaces TypeScript (`movie.ts`, `director.ts`, `apiResponse.ts`)

## Contrato mínimo (inputs/outputs)

- Servicio `MoviesService` devuelve objetos `Movie` con campos como `id`, `title`, `director`, `year`, `poster`.
- Componentes consumen esos objetos y renderizan tarjetas con la información básica.

## Notas para desarrollo

- Si quieres conectar una API real, edita `movie-backen.service.ts` para apuntar al endpoint deseado y ajustar `apiResponse`.
- Para generar componentes o servicios adicionales usa `ng generate component nombre` o `ng generate service nombre`.

## Tests y calidad

- Los tests se ejecutan con Karma/Jasmine. Ejecuta `npm test`.

## Contribuir

Si quieres contribuir:

1. Crea un fork y una rama con tu feature: `git checkout -b feature/nombre`
2. Haz commits claros y abre un pull request describiendo los cambios.

## Licencia

Agrega aquí la licencia del proyecto si aplica (por ejemplo MIT).

## Recursos

- Documentación Angular: https://angular.io/
- Angular CLI: https://github.com/angular/angular-cli

---
