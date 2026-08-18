import Image from "next/image";
import { siteContent } from "../content/site";

type LogoProps = { compact?: boolean; className?: string };

export default function Logo({ compact = false, className = "" }: LogoProps) {
  const { brand } = siteContent;
  return (
    <div className={`brand ${compact ? "brand-compact" : ""} ${className}`} aria-label={`${brand.name} ${brand.tagline}`}>
      <Image className="brand-symbol" src={brand.imagotype} alt="" width={90} height={90} priority />
      {!compact && (
        <div className="brand-copy">
          <span className="brand-name">{brand.name}</span>
          <span className="brand-tag">{brand.tagline}</span>
        </div>
      )}
    </div>
  );
}
