"use client";

import { useSyncExternalStore } from "react";
import type { Language } from "./content";
export type Theme = "dark" | "light";
const listeners = new Set<() => void>();
let languageFallback: Language = "pt";
let themeFallback: Theme = "dark";
function read(key: string) { try { return localStorage.getItem(key); } catch { return null; } }
function write(key: string, value: string) { try { localStorage.setItem(key, value); } catch { /* The current session still works without storage. */ } }
function notify() { listeners.forEach((listener) => listener()); }
function subscribe(listener: () => void) {
  listeners.add(listener);
  const refresh = () => { applyPreferences(); listener(); };
  window.addEventListener("storage", refresh);
  return () => { listeners.delete(listener); window.removeEventListener("storage", refresh); };
}
const getLanguage = (): Language => read("rr-language") === "en" ? "en" : read("rr-language") === "pt" ? "pt" : languageFallback;
const getTheme = (): Theme => {
  const value = read("rr-theme") || read("rr-preview-theme");
  return value === "light" || value === "dark" ? value : themeFallback;
};
export function setLanguage(value: Language) { languageFallback = value; write("rr-language", value); document.documentElement.lang = value === "pt" ? "pt-BR" : "en"; notify(); }
export function setTheme(value: Theme) {
  themeFallback = value;
  // Both routes share the preference; retain compatibility with the approved preview.
  write("rr-preview-theme", value); write("rr-theme", value);
  document.documentElement.dataset.previewTheme = value;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", value === "dark" ? "#101313" : "#f4ede2");
  notify();
}
export function applyPreferences() {
  const theme = getTheme();
  document.documentElement.dataset.previewTheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#101313" : "#f4ede2");
  document.documentElement.lang = getLanguage() === "pt" ? "pt-BR" : "en";
}
export function usePreferences() {
  const language = useSyncExternalStore(subscribe, getLanguage, () => "pt" as const);
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark" as const);
  return { language, theme };
}
function subscribeWidth(listener: () => void) {
  const query = window.matchMedia("(min-width: 768px)");
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
}
export function useDesktopContent() { return useSyncExternalStore(subscribeWidth, () => window.matchMedia("(min-width: 768px)").matches, () => true); }
