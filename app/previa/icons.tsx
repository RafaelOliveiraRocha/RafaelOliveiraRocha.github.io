import type { SVGProps } from "react";
export type IconName = "bars" | "trend" | "table" | "dashboard" | "database" | "integration" | "document" | "check" | "question" | "ai" | "graduation" | "email" | "linkedin" | "whatsapp" | "github" | "up" | "menu" | "sun" | "moon";
export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    bars: <><path d="M8 50h48M14 45V30m12 15V18m12 27V10m12 35V23"/><path d="M7 8h24" opacity=".45"/></>,
    trend: <><path d="M10 49h44M12 48V12M16 38l11-9 9 4 16-19m-9 0h9v9"/></>,
    table: <><rect x="9" y="10" width="46" height="44" rx="2"/><path d="M9 22h46M9 33h46M9 44h46M24 22v32M41 22v32"/><path d="M16 16h1m7 0h1m7 0h1"/></>,
    dashboard: <><rect x="5" y="8" width="54" height="48" rx="2"/><path d="M5 18h54M11 13h1m5 0h1m5 0h1M12 44V33h5v11m5 0V26h5v18m-16 4h19M36 48h16M36 52h10"/><path d="M45 25v11h11a11 11 0 0 0-11-11Z"/><path d="M41 27a11 11 0 1 0 13 13"/></>,
    database: <><ellipse cx="32" cy="13" rx="20" ry="7"/><path d="M12 13v37c0 10 40 10 40 0V13M12 26c0 10 40 10 40 0M12 38c0 10 40 10 40 0"/></>,
    integration: <><circle cx="15" cy="33" r="7"/><circle cx="43" cy="14" r="7"/><circle cx="47" cy="49" r="7"/><path d="m21 29 16-11M22 37l19 9M44 21l2 21"/></>,
    document: <><path d="M17 7h21l11 11v39H17Z M38 7v12h11M24 28h18M24 36h18M24 44h13"/></>,
    check: <><circle cx="32" cy="32" r="24"/><path d="m20 32 9 9 17-20"/></>,
    question: <><path d="M9 8h46v37H26L14 56V45H9Z"/><path d="M26 23a6 6 0 0 1 12 0c0 5-6 5-6 10m0 5v1"/></>,
    ai: <><path d="M31 12c-7-9-18-1-15 7-9 2-10 15-3 18-6 8 0 18 9 16 1 6 9 7 10 0V15m2-3c7-9 18-1 15 7 9 2 10 15 3 18 6 8 0 18-9 16-1 6-9 7-10 0M20 22l9 8m-10 7 10-2m-7 11 7-5m12-20-7 8m10 7-10-2m7 11-7-5"/></>,
    graduation: <><path d="m3 22 29-14 29 14-29 14Zm11 6v17l18 10 18-10V28M57 25v24"/><path d="M57 48v9" stroke="var(--vermillion)" strokeWidth="4"/></>,
    email: <><rect x="6" y="14" width="52" height="36" rx="3"/><path d="m7 17 25 19 25-19"/></>,
    linkedin: <><path d="M14 27v25M28 52V27m0 10c0-15 23-15 23 0v15" strokeWidth="7"/><circle cx="14" cy="14" r="4" fill="currentColor" stroke="none"/></>,
    whatsapp: <><path d="M14 49 6 58l3-17a25 25 0 1 1 5 8Z"/><path d="M24 17c-9 4 2 23 15 28 5 2 10-4 7-6l-7-4-4 5c-6-2-12-9-12-14l5-2Z"/></>,
    github: <><path d="M23 56v-9C9 48 15 38 8 37m34 19V44c9-3 13-9 13-17 0-5-2-9-5-12 1-4 0-8-1-10-6 0-10 4-12 5a36 36 0 0 0-13 0C20 7 16 5 12 5c-1 4-2 8 0 11-3 3-5 7-5 12 0 9 6 15 16 16"/></>,
    up: <path d="M32 54V10m-17 17 17-17 17 17"/>,
    menu: <path d="M8 16h48M8 32h48M8 48h48"/>,
    sun: <><circle cx="32" cy="32" r="13"/><path d="M32 3v8m0 42v8M3 32h8m42 0h8M11 11l6 6m30 30 6 6M53 11l-6 6M17 47l-6 6"/></>,
    moon: <path d="M48 47A25 25 0 0 1 21 7a25 25 0 1 0 34 34Z"/>,
  };
  return <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{paths[name]}</svg>;
}
