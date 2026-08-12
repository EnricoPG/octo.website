import Image from "next/image";

const pillars = [
  { key: "strategy", title: "ESTRATEGIA", text: "Alineamos visión, datos y objetivos de negocio.", icon: "◎" },
  { key: "design", title: "DISEÑO", text: "Experiencias que conectan, comunican y convierten.", icon: "✎" },
  { key: "integration", title: "INTEGRACIÓN", text: "Unificamos sistemas, herramientas y datos para operar mejor.", icon: "◇" },
  { key: "automation", title: "AUTOMATIZACIÓN", text: "Optimizamos procesos y eliminamos trabajo repetitivo.", icon: "ϟ" },
  { key: "ai", title: "INTELIGENCIA ARTIFICIAL", text: "Usamos IA para predecir, personalizar y escalar.", icon: "✦" },
  { key: "growth", title: "CRECIMIENTO", text: "Ecosistemas que generan resultados sostenibles.", icon: "▥" },
  { key: "results", title: "RESULTADOS", text: "Medimos, aprendemos y mejoramos en cada iteración.", icon: "○" },
];

export default function Orbit() {
  return (
    <div className="ecosystem-map" aria-label="Ecosistema OCTO: estrategia, diseño, integración, automatización, inteligencia artificial, crecimiento y resultados">
      <div className="map-orbit map-orbit-outer" />
      <div className="map-orbit map-orbit-main" />
      <div className="map-orbit map-orbit-inner" />
      <div className="map-cross map-cross-x" />
      <div className="map-cross map-cross-y" />

      <div className="map-core" aria-hidden="true">
        <div className="map-core-glow" />
        <Image src="/octo-imagotipo.png" alt="" width={260} height={266} priority />
      </div>

      {pillars.map((item) => (
        <div className={`map-pillar pillar-${item.key}`} key={item.key}>
          <div className="pillar-icon">{item.icon}</div>
          <div className="pillar-copy"><strong>{item.title}</strong><span>{item.text}</span></div>
        </div>
      ))}

      <svg className="map-connectors" viewBox="0 0 760 680" aria-hidden="true" preserveAspectRatio="none">
        <path d="M380 130 L380 205" />
        <path d="M168 250 L235 250 L278 286" />
        <path d="M168 500 L235 500 L282 458" />
        <path d="M592 245 L545 245 L500 285" />
        <path d="M600 365 L535 365" />
        <path d="M574 510 L538 510 L495 465" />
        <path d="M380 545 L380 612" />
      </svg>

      <div className="map-node node-strategy" />
      <div className="map-node node-design" />
      <div className="map-node node-integration" />
      <div className="map-node node-automation" />
      <div className="map-node node-ai" />
      <div className="map-node node-growth" />
      <div className="map-node node-results" />
    </div>
  );
}
