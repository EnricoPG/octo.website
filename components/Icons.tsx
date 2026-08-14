type IconType = "web" | "automation" | "ai" | "build";

export function Icon({ type }: { type: IconType }) {
  const glyphs: Record<IconType, string> = {
    web: "◎",
    automation: "✦",
    ai: "✧",
    build: "⌘",
  };
  return <span aria-hidden="true">{glyphs[type]}</span>;
}
