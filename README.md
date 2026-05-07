# Ecotech CR

Sitio web corporativo de Ecotech CR, empresa costarricense enfocada en soluciones de ingeniería, seguridad, tecnología, redes, climatización y mantenimiento empresarial.

Producción: `https://www.ecotech-cr.com/`

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo Local

```bash
npm run dev
```

Vite levanta el sitio normalmente en `http://localhost:5173`.

## Comandos

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: compila TypeScript y genera el build de producción.
- `npm run preview`: sirve localmente el build generado.
- `npm run lint`: ejecuta ESLint.

## Estructura

- `src/components/layout`: navegación y pie de página.
- `src/components/sections`: secciones principales del sitio.
- `src/components/ui`: componentes visuales reutilizables.
- `src/data`: contenido editable del sitio.
- `src/assets`: logos, marcas e imágenes internas.
- `public`: favicon, logo público y assets para metadata social.

## Contenido y SEO

El contenido principal se administra desde `src/data`. La metadata base del sitio, Open Graph, favicon, canonical y tarjetas sociales se configuran en `index.html`.

## Validación

Antes de publicar cambios:

```bash
npm run build
```
