"use client";

import { useEffect, useRef } from "react";
import styles from "./preview.module.css";

/** One decorative thread; measured against the live layout, never a fixed page height. */
export default function Continuity() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const pointRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    const point = pointRef.current;
    const root = svg?.parentElement;
    if (!svg || !path || !point || !root) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let needsMeasure = true;
    let alive = true;
    let height = 1;
    let length = 1;
    let start = 96;

    const draw = () => {
      frame = 0;
      const bounds = root.getBoundingClientRect();
      if (needsMeasure) {
        needsMeasure = false;
        // The absolutely positioned SVG must not contribute to its own measurement.
        height = Math.max(1, bounds.height);
        const content = root.querySelector<HTMLElement>("[data-content-width]");
        const margin = content ? content.getBoundingClientRect().left - bounds.left : 24;
        const x = Math.max(8, margin - (bounds.width < 640 ? 16 : 28));
        const bend = Math.min(8, x - 4);
        start = bounds.width < 640 ? 80 : 98;
        const stops = [...root.querySelectorAll<HTMLElement>("[data-continuity-section]")]
          .map((section) => section.getBoundingClientRect().top - bounds.top)
          .filter((y) => y > start + 100 && y < height - 80)
          .sort((a, b) => a - b);
        let d = `M ${x} ${start}`;
        for (const y of stops) {
          // All bends stay inside the empty outer margin.
          d += ` L ${x} ${y - 42} C ${x} ${y - 20}, ${x - bend} ${y - 20}, ${x - bend} ${y}`;
          d += ` C ${x - bend} ${y + 20}, ${x} ${y + 20}, ${x} ${y + 42}`;
        }
        d += ` L ${x} ${Math.max(start + 1, height - 32)}`;
        svg.setAttribute("viewBox", `0 0 ${bounds.width} ${height}`);
        path.setAttribute("d", d);
        length = path.getTotalLength();
      }

      // Reading position is in document coordinates. Reduced motion keeps a static marker.
      const readingY = motion.matches ? start + 20 : Math.max(start, Math.min(height - 32, -bounds.top + window.innerHeight * 0.44));
      const progress = Math.max(0, Math.min(1, (readingY - start) / Math.max(1, height - 32 - start)));
      const position = path.getPointAtLength(length * progress);
      point.setAttribute("cx", String(position.x));
      point.setAttribute("cy", String(position.y));
      svg.dataset.motion = motion.matches ? "reduced" : "reading";
      svg.dataset.progress = progress.toFixed(4);
    };

    const schedule = () => {
      if (alive && !frame) frame = window.requestAnimationFrame(draw);
    };
    const measure = () => { needsMeasure = true; schedule(); };
    const onScroll = () => { if (!motion.matches) schedule(); };
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    // Covers reflow from accordions, font swaps, image sizes and future section changes.
    for (const section of root.querySelectorAll("[data-continuity-section]")) observer.observe(section);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    motion.addEventListener("change", measure);
    document.fonts.ready.then(() => { if (alive) measure(); });
    schedule();
    return () => {
      alive = false;
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      motion.removeEventListener("change", measure);
    };
  }, []);

  return (
    <svg ref={svgRef} className={styles.continuity} aria-hidden="true" focusable="false" preserveAspectRatio="none">
      <path ref={pathRef} className={styles.thread} fill="none" />
      <circle ref={pointRef} className={styles.readingPoint} r="3.5" cx="8" cy="100" />
    </svg>
  );
}
