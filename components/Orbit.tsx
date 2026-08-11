const labels = [
  ["ESTRATEGIA", 50, 3],
  ["AUTOMATIZACIÓN", 83, 17],
  ["INTELIGENCIA ARTIFICIAL", 92, 49],
  ["CRECIMIENTO", 83, 78],
  ["RESULTADOS", 50, 94],
  ["INTEGRACIÓN", 17, 78],
  ["DISEÑO", 8, 49],
  ["TECNOLOGÍA", 17, 17],
];

export default function Orbit() {
  return (
    <div className="orbit" aria-label="Ecosistema OCTO: estrategia, automatización, inteligencia artificial, crecimiento, resultados, integración, diseño y tecnología">
      <div className="orbit-ring ring-1" />
      <div className="orbit-ring ring-2" />
      <div className="orbit-ring ring-3" />
      <div className="orbit-axis axis-x" />
      <div className="orbit-axis axis-y" />
      {labels.map(([label, x, y]) => (
        <span key={String(label)} className="orbit-label" style={{ left: `${x}%`, top: `${y}%` }}>
          <i />{label}
        </span>
      ))}
      <div className="orbit-core">
        {Array.from({ length: 8 }).map((_, i) => <span key={i} style={{ transform: `rotate(${i * 45}deg) translateY(-44px)` }} />)}
      </div>
    </div>
  );
}
