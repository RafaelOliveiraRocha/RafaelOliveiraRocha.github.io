"use client";
import { useEffect, useRef, type ReactNode } from "react";
import styles from "./preview.module.css";

export default function Modal({ id, title, closeLabel, onClose, children, returnFocus }: { id: string; title: string; closeLabel: string; onClose: () => void; children: ReactNode; returnFocus: () => HTMLElement | null }) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnRef = useRef(returnFocus);
  useEffect(() => {
    const dialog = ref.current;
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const fallback = returnRef.current;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      const target = opener?.isConnected && opener.getClientRects().length ? opener : fallback();
      target?.focus({ preventScroll: true });
    };
  }, []);
  return <dialog ref={ref} id={id} className={`${styles.modal} ${id === "preview-menu" ? styles.menuModal : styles.recruiterModal}`} aria-labelledby={`${id}-title`} onCancel={event => { event.preventDefault(); onClose(); }} onKeyDown={event => {
    if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); onClose(); }
    if (event.key !== "Tab") return;
    const controls = [...event.currentTarget.querySelectorAll<HTMLElement>('a[href],button:not(:disabled),[tabindex="0"]')].filter(element => element.getClientRects().length > 0);
    const first = controls[0]; const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }} onClick={event => {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
  }}>
    <div className={styles.modalHeader}><h2 id={`${id}-title`}>{title}</h2><button type="button" ref={closeRef} onClick={onClose} className={styles.iconButton} aria-label={closeLabel}>×</button></div>
    {children}
  </dialog>;
}
