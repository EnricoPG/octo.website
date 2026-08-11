export function Icon({ type }: { type: "web" | "automation" | "ai" | "build" }) {
  const common = { width: 34, height: 34, viewBox: "0 0 34 34", fill: "none", xmlns: "http://www.w3.org/2000/svg" };
  if (type === "web") return <svg {...common}><circle cx="17" cy="17" r="12" stroke="currentColor"/><path d="M5 17h24M17 5c4 4 5 8 5 12s-1 8-5 12c-4-4-5-8-5-12s1-8 5-12Z" stroke="currentColor"/></svg>;
  if (type === "automation") return <svg {...common}><circle cx="8" cy="9" r="3" stroke="currentColor"/><circle cx="26" cy="9" r="3" stroke="currentColor"/><circle cx="8" cy="25" r="3" stroke="currentColor"/><circle cx="26" cy="25" r="3" stroke="currentColor"/><path d="M11 10.5 23 23.5M23 10.5 11 23.5" stroke="currentColor"/></svg>;
  if (type === "ai") return <svg {...common}><path d="M17 4c1.4 7.3 5.7 11.6 13 13-7.3 1.4-11.6 5.7-13 13-1.4-7.3-5.7-11.6-13-13 7.3-1.4 11.6-5.7 13-13Z" stroke="currentColor"/><path d="M27 4v7M23.5 7.5h7" stroke="currentColor"/></svg>;
  return <svg {...common}><path d="m17 5 12 6-12 6L5 11l12-6Z" stroke="currentColor"/><path d="m5 17 12 6 12-6M5 23l12 6 12-6" stroke="currentColor"/></svg>;
}
