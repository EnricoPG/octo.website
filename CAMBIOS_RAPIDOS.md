# Cambios rápidos

| Quiero cambiar | Archivo |
|---|---|
| Logo / imagotipo | `public/brand/octo-imagotipo.png` |
| Título o texto del Hero | `content/site.ts` |
| Botones del Hero | `content/site.ts` |
| Instagram o email | `content/site.ts` |
| Servicios | `content/services.ts` |
| Soluciones | `content/services.ts` |
| Planes / precios | `content/plans.ts` |
| Logos de clientes | `public/clients/` + `content/clients.ts` |
| Textos alrededor del mapa | `content/orbit.ts` |

**No edites `globals.css` para cambios de contenido.**

## CTA cinematográfico
- Video final: `content/site.ts` → `cinematicCta.videoUrl`
- Título/texto/botones: `content/site.ts` → `cinematicCta`

## v1.2 — Conversión por WhatsApp

- Número de WhatsApp: `content/site.ts` → `contact.whatsappNumber`
- Mensaje general: `content/site.ts` → `contact.whatsappGeneralMessage`
- Mensaje por plan: `content/plans.ts` → `whatsappMessage`
- Plan recomendado: `content/plans.ts` → `recommended`
- Botón flotante WhatsApp: `components/WhatsAppFloat.tsx`
