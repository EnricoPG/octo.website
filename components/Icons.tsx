type IconType = "web" | "automation" | "ai" | "build";

export function Icon({ type }: { type: IconType }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (type === "web") {
    return <svg {...common}><circle cx="16" cy="16" r="11"/><path d="M5 16h22M16 5c3.4 3.2 5.2 6.9 5.2 11S19.4 23.8 16 27M16 5c-3.4 3.2-5.2 6.9-5.2 11S12.6 23.8 16 27"/></svg>;
  }

  if (type === "automation") {
    return <svg {...common}><circle cx="8" cy="16" r="3"/><circle cx="24" cy="8" r="3"/><circle cx="24" cy="24" r="3"/><path d="M11 16h5c3.3 0 5-1.7 5-5M11 16h5c3.3 0 5 1.7 5 5"/></svg>;
  }

  if (type === "ai") {
    return <svg {...common}><path d="M16 4l1.9 6.1L24 12l-6.1 1.9L16 20l-1.9-6.1L8 12l6.1-1.9L16 4Z"/><path d="M25 20l.9 2.9L29 24l-3.1 1.1L25 28l-1.1-2.9L21 24l2.9-1.1L25 20Z"/></svg>;
  }

  return <svg {...common}><path d="M7 9h18v14H7z"/><path d="M11 5v4M21 5v4M11 23v4M21 23v4M3 13h4M3 19h4M25 13h4M25 19h4"/></svg>;
}
