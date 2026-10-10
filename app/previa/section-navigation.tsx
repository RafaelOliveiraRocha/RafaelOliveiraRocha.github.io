"use client";

import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import styles from "./preview.module.css";

const sectionIds = ["impacto", "experiencia", "sobre", "contato"] as const;
type SectionId = typeof sectionIds[number];
export type NavigationItem = { id: SectionId; label: string };

export function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const sections = sectionIds.map(id => document.getElementById(id));
    const header = document.querySelector("header");
    const main = document.getElementById("conteudo");
    if (!header || !main || sections.some(section => !section)) return;

    let frame = 0;
    let measure = true;
    let starts: number[] = [];
    let pageHeight = 0;
    let current: SectionId | null = null;
    let anchorFrame = 0;
    const initialHash = window.location.hash;
    const initialTarget = sections.find(section => `#${section!.id}` === initialHash);
    let anchorCancelled = false;
    function cancelInitialAnchor() { anchorCancelled = true; }
    const interactionEvents = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
    function removeAnchorListeners() {
      interactionEvents.forEach(event => window.removeEventListener(event, cancelInitialAnchor));
    }
    if (initialTarget) interactionEvents.forEach(event => window.addEventListener(event, cancelInitialAnchor, { passive: true }));

    function update() {
      frame = 0;
      const y = window.scrollY;
      if (measure) {
        const headerBottom = header!.getBoundingClientRect().bottom;
        starts = sections.map(section => {
          // Use the same reading offset as anchor navigation, including its gap.
          const margin = parseFloat(getComputedStyle(section!).scrollMarginTop) || 0;
          return Math.floor(section!.getBoundingClientRect().top + y - Math.max(headerBottom, margin));
        });
        pageHeight = document.documentElement.scrollHeight;
        measure = false;
      }

      let index = starts.findLastIndex(start => y >= start);
      const previousIndex = current ? sectionIds.indexOf(current) : -1;
      // A small return margin prevents flickering at fractional scroll positions.
      if (previousIndex > index && y >= starts[previousIndex] - 2) index = previousIndex;
      const atBottom = y > 0 && y + window.innerHeight >= pageHeight - 2;
      const next = atBottom ? "contato" : sectionIds[index] ?? null;
      if (next !== current) {
        current = next;
        setActive(next);
      }
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }
    function remeasure() {
      measure = true;
      schedule();
    }

    const observer = new ResizeObserver(remeasure);
    observer.observe(header);
    observer.observe(main);
    main.querySelectorAll("[data-continuity-section]").forEach(section => observer.observe(section));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", remeasure);
    window.addEventListener("pageshow", remeasure);
    window.addEventListener("popstate", remeasure);
    window.addEventListener("hashchange", remeasure);
    let disposed = false;
    void document.fonts.ready.then(() => {
      if (disposed) return;
      remeasure();
      if (initialTarget) {
        // Native anchors can run before the saved language and mobile layout settle.
        anchorFrame = requestAnimationFrame(() => {
          anchorFrame = requestAnimationFrame(() => {
            if (!anchorCancelled && window.location.hash === initialHash) {
              initialTarget.scrollIntoView({ block: "start", behavior: "instant" });
              remeasure();
            }
            removeAnchorListeners();
          });
        });
      }
    });
    schedule();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(anchorFrame);
      removeAnchorListeners();
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", remeasure);
      window.removeEventListener("pageshow", remeasure);
      window.removeEventListener("popstate", remeasure);
      window.removeEventListener("hashchange", remeasure);
    };
  }, []);

  return active;
}

export default function SectionNavigation({ items, active, label, vertical = false, onNavigate }: {
  items: NavigationItem[];
  active: SectionId | null;
  label: string;
  vertical?: boolean;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, id: string) => void;
}) {
  const nav = useRef<HTMLElement>(null);
  const point = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = nav.current;
    const marker = point.current;
    if (!element || !marker) return;
    let frame = 0;

    function measure() {
      frame = 0;
      const link = active ? element!.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`) : null;
      const bounds = element!.getBoundingClientRect();
      if (!link || !bounds.width || !bounds.height) {
        marker!.dataset.visible = "false";
        return;
      }
      const target = link.getBoundingClientRect();
      const center = vertical ? target.top + target.height / 2 - bounds.top : target.left + target.width / 2 - bounds.left;
      marker!.style.setProperty("--nav-marker-position", `${center}px`);
      marker!.dataset.visible = "true";
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(measure);
    }
    const observer = new ResizeObserver(schedule);
    observer.observe(element);
    element.querySelectorAll("a").forEach(link => observer.observe(link));
    window.addEventListener("resize", schedule);
    let disposed = false;
    void document.fonts.ready.then(() => { if (!disposed) schedule(); });
    schedule();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", schedule);
    };
  }, [active, items, vertical]);

  return <nav ref={nav} className={vertical ? styles.menuLinks : styles.nav} aria-label={label}>
    {items.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} onClick={event => onNavigate(event, item.id)}>{item.label}</a>)}
    <span className={styles.navTrack} aria-hidden="true"><span ref={point} className={styles.navPoint}/></span>
  </nav>;
}
