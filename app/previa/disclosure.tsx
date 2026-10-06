"use client";
import { useRef, useState, type ReactNode } from "react";
import styles from "./preview.module.css";

export default function Disclosure({ id, title, period, children, desktop }: { id: string; title: string; period?: string; children: ReactNode; desktop: boolean }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  function toggle() {
    const top = trigger.current?.getBoundingClientRect().top ?? 0;
    setOpen(!open);
    if (open) requestAnimationFrame(() => {
      trigger.current?.focus({ preventScroll: true });
      const delta = (trigger.current?.getBoundingClientRect().top ?? top) - top;
      window.scrollBy({ top: delta, behavior: "instant" });
    });
  }
  return <article className={`${styles.disclosure} ${period ? styles.timelineItem : styles.skillGroup}`}>
    {period && <p className={styles.period}>{period}</p>}
    <div className={styles.disclosureContent}>
      <h3><span className={styles.desktopTitle}>{title}</span><button ref={trigger} className={styles.disclosureTrigger} type="button" aria-expanded={open} aria-controls={id} onClick={toggle}>{title}<span aria-hidden="true">{open ? "−" : "+"}</span></button></h3>
      <div className={styles.disclosureBody} data-expanded={open} id={id} hidden={!desktop && !open}>{children}</div>
    </div>
  </article>;
}
