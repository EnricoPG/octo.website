import Image from "next/image";
import { orbitPillars } from "../content/orbit";
import { siteContent } from "../content/site";

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

      {orbitPillars.map((item) => <div key={item.key} className={`map-node node-${item.key}`} />)}
    </div>
  );
}
