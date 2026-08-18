# OCTO Core Lite v1

Esta versión mantiene la apariencia del frontend, pero separa el contenido editable de los componentes.

## Cambios cotidianos — NO tocar CSS

- Marca, Hero, Nosotros, Instagram, email: `content/site.ts`
- Servicios, soluciones y proceso: `content/services.ts`
- Planes y precios: `content/plans.ts`
- Logos de clientes: `content/clients.ts` + `public/clients/`
- Textos del mapa del Hero: `content/orbit.ts`
- Imagotipo: reemplazar `public/brand/octo-imagotipo.png` manteniendo el mismo nombre.

## Componentes bloqueados

`components/sections/` y `app/globals.css` son estructura/diseño. Solo se modifican cuando el cambio solicitado es realmente de diseño o funcionalidad.

## Regla OCTO

1. Cambio de contenido → solo `content/` o `public/`.
2. Cambio estructural → componentes.
3. Cambio de diseño → CSS/componentes y debe tratarse como nueva iteración.

## Deploy

Subir el contenido de esta carpeta al repositorio de GitHub. Vercel seguirá desplegando automáticamente desde `main`.

## v1.1
Se añadió CTA + footer cinematográfico con video HLS configurable desde `content/site.ts`.

## v1.2 — Conversion Flow
- BÁSICO reemplaza ESENCIAL.
- OCTO+ es el plan recomendado.
- Header, Hero, planes y CTA final abren WhatsApp.
- Cada plan tiene su propio mensaje prellenado.
- Se agregó botón flotante de WhatsApp.
- Se retiró temporalmente el banner de logos.

## v1.3
Precios definitivos visibles, OCTO+ recomendado con corona, Google Maps incluido, CTA de planes animado e Instagram enlazado a @octosolutions.mx. Sin promociones ni banners adicionales.

## v1.4.1
Mobile motion refinement: restores adapted scroll reveals, subtle ecosystem movement, touch feedback and WhatsApp micro-motion while preserving the responsive layout and reduced-motion accessibility.

## v1.4.3
Corrección de estructura de planes y mensajes personalizados de WhatsApp por paquete.

## v1.4.4
Corrección de reproducción del video/animación cinematográfica en mobile: HLS nativo prioritario en Safari/iOS, autoplay reforzado y reanudación de playback.
\n## v1.4.9\nNebula Hero migrado a WebGL nativo para evitar fallos de type-check en Vercel y reducir peso/runtime.\n