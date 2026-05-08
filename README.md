# Solar Supply, S.A. — Sitio corporativo

Sitio corporativo desarrollado para GitHub + Vercel con Next.js App Router, TypeScript y CSS propio.

## Requisitos

- Node.js 20.x
- npm

## Instalación local

```bash
npm install
npm run dev
```

Abrir: http://localhost:3000

## Despliegue en Vercel

1. Subir este proyecto a un repositorio de GitHub.
2. En Vercel, crear un nuevo proyecto e importar el repositorio.
3. Framework Preset: **Next.js**.
4. Build Command: `npm run build`.
5. Output: dejar automático.
6. Node.js: 20.x.
7. Dominio recomendado: `www.solarsupplysa.com`.

## Dónde cambiar información

- Datos generales, teléfonos, correos, productos, servicios y navegación: `lib/site.ts`
- Estilos principales: `app/globals.css`
- Imágenes y marca: `public/brand/` y `public/images/`

## Formularios

El formulario actual no necesita backend. Genera un mensaje ordenado hacia WhatsApp y también ofrece salida por correo directo. Para integrar CRM, Google Sheets o envío SMTP después, se puede agregar una ruta API en `app/api/contact/route.ts`.

## Notas importantes

- Es una web corporativa, no una landing de una sola página.
- Los paneles solares están organizados para manejar marcas variables según disponibilidad.
- La marca de estructuras/accesorios queda discreta para poder cambiarla después.
- El servicio de planos y permisología se presenta como servicio adicional para clientes que compran productos.
