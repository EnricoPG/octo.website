import Image from "next/image";

type LogoProps = { compact?: boolean; className?: string };

export default function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <div className={`brand ${compact ? "brand-compact" : ""} ${className}`} aria-label="OCTO Technology Studio">
      <Image
        className="brand-symbol"
        src="/octo-imagotipo.png"
        alt=""
        width={90}
        height={90}
        priority
      />
      {!compact && (
        <div className="brand-copy">
          <span className="brand-name">OCTO</span>
          <span className="brand-tag">Technology Studio</span>
        </div>
      )}
    </div>
  );
}
