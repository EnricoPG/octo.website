export const capabilities = [
  { n: "01", title: "DESARROLLO WEB", icon: "web" as const, items: ["Sitios web", "Landing page", "e-commerce"] },
  { n: "02", title: "AUTOMATIZACIÓN", icon: "automation" as const, items: ["WhatsApp", "CRM", "Gestión de leads", "Flujos de trabajo"] },
  { n: "03", title: "INTELIGENCIA ARTIFICIAL", icon: "ai" as const, items: ["Agentes de IA", "Integraciones de IA", "Análisis inteligente"] },
  { n: "04", title: "DESARROLLO A MEDIDA", icon: "build" as const, items: ["Sistemas personalizados", "Paneles de control", "Integraciones"] },
] as const;

export const solutions = [
  "SITIOS WEB",
  "E-COMMERCE",
  "SISTEMAS",
  "AUTOMATIZACIÓN",
  "WHATSAPP",
  "CRM",
  "INTELIGENCIA ARTIFICIAL",
  "SOPORTE Y MANTENIMIENTO",
] as const;

export const processSteps = [
  ["01", "ENTENDEMOS", "Analizamos tu negocio, procesos y objetivos para identificar oportunidades reales."],
  ["02", "DISEÑAMOS", "Creamos la estrategia y el diseño del sistema ideal para alcanzar resultados medibles."],
  ["03", "CONSTRUIMOS", "Desarrollamos, integramos y automatizamos con tecnología de forma ágil y segura."],
  ["04", "EVOLUCIONAMOS", "Medimos, optimizamos y escalamos tu sistema para seguir generando crecimiento."],
] as const;
