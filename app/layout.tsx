import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaeloliveirarocha.github.io"),
  title: {
    default: "Rafael Rocha | Analista de Dados, BI & Analytics",
    template: "%s | Rafael Rocha",
  },
  description:
    "Portfólio de Rafael Rocha, Analista de Dados especializado em BI, analytics operacional, SQL, Python, PostgreSQL, Apache Superset, Power BI, dashboards, KPIs, automação e IA aplicada ao BI.",
  keywords: [
    "Rafael Rocha",
    "Analista de Dados",
    "Business Intelligence",
    "BI",
    "SQL",
    "Python",
    "Apache Superset",
    "Power BI",
    "PostgreSQL",
    "n8n",
    "Analytics",
    "Data Analytics",
    "Dashboards",
    "KPIs",
    "ETL",
    "Data Storytelling",
    "Customer Analytics",
    "Automação",
    "IA aplicada ao BI",
  ],
  authors: [{ name: "Rafael Rocha" }],
  creator: "Rafael Rocha",
  publisher: "Rafael Rocha",
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "Rafael Rocha | Dados, BI & Analytics",
    description:
      "Dados operacionais transformados em inteligência de negócio, indicadores confiáveis e decisões melhores.",
    type: "website",
    url: "/",
    siteName: "Portfólio Rafael Rocha",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Rafael Rocha | Analista de Dados, BI & Analytics",
    description: "BI, SQL, Python, dashboards, automação e IA aplicada ao BI com contexto de negócio.",
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060912",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://rafaeloliveirarocha.github.io/#profile-page",
      url: "https://rafaeloliveirarocha.github.io/",
      name: "Rafael Rocha | Portfólio profissional",
      inLanguage: "pt-BR",
      mainEntity: { "@id": "https://rafaeloliveirarocha.github.io/#rafael-rocha" },
    },
    {
      "@type": "Person",
      "@id": "https://rafaeloliveirarocha.github.io/#rafael-rocha",
      name: "Rafael Rocha",
      url: "https://rafaeloliveirarocha.github.io/",
      image: "https://rafaeloliveirarocha.github.io/rafael-rocha.jpeg",
      jobTitle: "Analista de Dados",
      description: "Analista de Dados com atuação em Business Intelligence, analytics operacional, SQL, Python, PostgreSQL, Apache Superset, Power BI, automação e IA aplicada ao BI.",
      email: "mailto:rafaelolirocha@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ubá",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      sameAs: [
        "https://www.linkedin.com/in/rafael-rocha-89271021b/",
        "https://github.com/RafaelOliveiraRocha",
      ],
      worksFor: { "@type": "Organization", name: "Hi Platform" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade Pitágoras Unopar Anhanguera" },
      knowsAbout: [
        "Business Intelligence",
        "Data Analytics",
        "SQL",
        "Python",
        "PostgreSQL",
        "Apache Superset",
        "Power BI",
        "Dashboards",
        "KPIs",
        "ETL/ELT",
        "Data Storytelling",
        "Automação",
        "IA aplicada ao BI",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
