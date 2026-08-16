export const siteContent = {
  brand: {
    name: "OCTO",
    tagline: "Technology Studio",
    imagotype: "/brand/octo-imagotipo.png",
  },
  navigation: [
    { label: "SOLUCIONES", href: "#ecosistema" },
    { label: "QUÉ HACEMOS", href: "#capacidades" },
    { label: "PLANES", href: "#planes" },
  ],
  hero: {
    eyebrow: "OCTO / TECHNOLOGY STUDIO",
    titleLines: ["Tecnología", "para hacer crecer"],
    accent: "tu negocio.",
    description:
      "Creamos websites, automatizaciones e inteligencia artificial para negocios que quieren vender, atender y operar mejor.",
    primaryCta: { label: "COTIZAR UN PROYECTO", href: "#contacto" },
  },
  manifesto: {
    title: "Todo lo que tu negocio necesita, conectado.",
    description:
      "Website, WhatsApp, IA, ventas y automatización trabajando como un solo ecosistema.",
  },
  cinematicCta: {
    videoUrl: "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8",
    title: "Tu negocio. Mejor conectado.",
    description: "Cuéntanos qué necesitas. Nosotros conectamos la tecnología.",
    primaryCta: { label: "COTIZAR UN PROYECTO", href: "#contacto" },
  },
  contact: {
    email: "hola@octo.studio",
    instagramUrl: "https://www.instagram.com/octosolutions.mx/?hl=es",
    whatsappNumber: "525512955401",
    whatsappGeneralMessage:
      "Hola, vi el sitio de OCTO y me gustaría recibir información sobre sus soluciones. ¿Me puedes dar más información?",
  },
  copyright: "© 2026 OCTO. Todos los derechos reservados.",
} as const;
