type LogoProps = { compact?: boolean; className?: string };

export default function Logo({ compact = false, className = "" }: LogoProps) {
  return (
    <div className={`brand ${className}`} aria-label="OCTO Technology Studio">
      <svg className="brand-mark" viewBox="0 0 64 64" role="img" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round">
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d="M32 8 C39 8 44 11 48 15"
              transform={`rotate(${i * 45} 32 32)`}
            />
          ))}
        </g>
      </svg>
      {!compact && (
        <div className="brand-copy">
          <span className="brand-name">OCTO</span>
          <span className="brand-tag">Technology Studio</span>
        </div>
      )}
    </div>
  );
}
