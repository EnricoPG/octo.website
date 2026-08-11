import Image from "next/image";

type LogoProps = { compact?: boolean; className?: string };

export default function Logo({ compact = false, className = "" }: LogoProps) {
  if (compact) {
    return (
      <div className={`brand brand-compact ${className}`} aria-label="OCTO Technology Studio">
        <Image src="/octo-logo.png" alt="OCTO Technology Studio" width={242} height={70} priority />
      </div>
    );
  }

  return (
    <div className={`brand ${className}`} aria-label="OCTO Technology Studio">
      <Image src="/octo-logo.png" alt="OCTO Technology Studio" width={242} height={70} priority />
    </div>
  );
}
