import Image from "next/image";
import { orbitPillars } from "../content/orbit";
import { siteContent } from "../content/site";

function PillarIcon({ type }: { type: string }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.45, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

  if (type === "strategy") return <svg {...common}><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/></svg>;
  if (type === "design") return <svg {...common}><path d="m6 18 10-10 3 3-10 10H6v-3Z"/><path d="m14 10 3 3"/></svg>;
  if (type === "integration") return <svg {...common}><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="7" r="2.5"/><circle cx="18" cy="17" r="2.5"/><path d="M8.5 12h3.5c2.5 0 3.5-1.5 3.5-3M8.5 12H12c2.5 0 3.5 1.5 3.5 3"/></svg>;
  if (type === "automation") return <svg {...common}><path d="M13 2 6 13h6l-1 9 7-12h-6l1-8Z"/></svg>;
  if (type === "ai") return <svg {...common}><path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>;
  if (type === "growth") return <svg {...common}><path d="M4 20h16"/><path d="M6 18v-4h3v4M11 18v-7h3v7M16 18V8h3v10"/><path d="m5 10 5-4 4 2 5-5"/></svg>;
  return <svg {...common}><path d="M4 12a8 8 0 1 0 2.3-5.7"/><path d="M4 5v5h5"/><path d="m9 12 2 2 4-5"/></svg>;
}

export default function Orbit() {
  return (
    <div className="ecosystem-map" aria-label="Ecosistema OCTO">
      <div className="map-orbit map-orbit-outer" />
      <div className="map-orbit map-orbit-main" />
      <div className="map-orbit map-orbit-inner" />
      <div className="map-cross map-cross-x" />
      <div className="map-cross map-cross-y" />

      <div className="map-core" aria-hidden="true">
        <div className="map-core-glow" />
        <Image src={siteContent.brand.imagotype} alt="" width={260} height={266} priority />
      </div>

      {orbitPillars.map((item) => (
        <div className={`map-pillar pillar-${item.key}`} key={item.key}>
          <div className="pillar-icon"><PillarIcon type={item.key} /></div>
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

    </div>
  );
}
