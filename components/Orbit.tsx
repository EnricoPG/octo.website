const labels = [
  ["ESTRATEGIA", 50, 3],
  ["AUTOMATIZACIÓN", 84, 18],
  ["INTELIGENCIA ARTIFICIAL", 92, 50],
  ["CRECIMIENTO", 84, 79],
  ["RESULTADOS", 50, 95],
  ["INTEGRACIÓN", 16, 79],
  ["DISEÑO", 8, 50],
  ["TECNOLOGÍA", 16, 18],
];

import Image from "next/image";

export default function Orbit() {
  return (
    <div className="orbit" aria-label="Ecosistema OCTO: estrategia, automatización, inteligencia artificial, crecimiento, resultados, integración, diseño y tecnología">
      <div className="orbit-ring ring-1" />
      <div className="orbit-ring ring-2" />
      <div className="orbit-ring ring-3" />
      <div className="orbit-axis axis-x" />
      <div className="orbit-axis axis-y" />
      {labels.map(([label, x, y], i) => (
        <span key={String(label)} className={`orbit-label orbit-label-${i + 1}`} style={{ left: `${x}%`, top: `${y}%` }}>
          <i />{label}
        </span>
      ))}
      <div className="orbit-core orbit-core-image" aria-hidden="true">
        <Image src="/octo-orbit-core.png" alt="" width={320} height={350} priority />
      </div>
      <div className="orbit-glow" />
    </div>
  );
}
