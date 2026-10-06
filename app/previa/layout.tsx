import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prévia completa",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
