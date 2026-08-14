export const plans = [
  {
    name: "BÁSICO",
    description: "Para empezar tu presencia digital.",
    items: ["Landing page profesional", "WhatsApp integrado", "Formulario de contacto", "Analítica básica"],
    price: "$X",
    note: "Pago único",
    cta: "COTIZAR",
    recommended: false,
    plus: false,
    whatsappMessage:
      "Hola, me interesa el plan Básico de OCTO. Me gustaría recibir información y cotización.",
  },
  {
    name: "CRECIMIENTO",
    description: "Para empresas que quieren generar más clientes.",
    items: ["Sitio web completo", "WhatsApp integrado", "SEO inicial", "Analítica avanzada", "Integraciones básicas", "Soporte por 60 días"],
    price: "$X",
    note: "Pago único",
    cta: "COTIZAR",
    recommended: false,
    plus: false,
    whatsappMessage:
      "Hola, me interesa el plan Crecimiento de OCTO. Quiero conocer qué incluye y cómo podemos empezar.",
  },
  {
    name: "OCTO",
    description: "Para empresas que quieren evolucionar continuamente.",
    items: ["Sitio web completo", "Automatizaciones", "Integraciones avanzadas", "Soporte continuo", "Mejoras continuas", "Reportes y optimización"],
    price: "$X / mes",
    note: "Suscripción mensual",
    cta: "CONOCER OCTO+",
    recommended: true,
    plus: true,
    whatsappMessage:
      "Hola, me interesa OCTO+. Quiero conocer la mensualidad, qué incluye y cómo funciona el acompañamiento continuo.",
  },
] as const;
