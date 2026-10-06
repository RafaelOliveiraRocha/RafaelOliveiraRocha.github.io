import type { Metadata, Viewport } from "next";
import { preferenceInit } from "./preference-init";
import "./globals.css";

const portfolioTitle = "Rafael Rocha | Dados, Automação e IA Aplicada";
const portfolioDescription = "Estruturo dados, desenvolvo dashboards e automatizo análises para ajudar equipes a acompanhar a operação e identificar o que precisa de atenção.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafaeloliveirarocha.github.io"),
  title: {
    default: portfolioTitle,
    template: "%s | Rafael Rocha",
  },
  description: portfolioDescription,
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
    "ETL/ELT",
    "Integração de Dados",
    "Modelagem de Dados",
    "APIs",
    "Pipelines de Dados",
    "Data Storytelling",
    "Customer Analytics",
    "Automação",
    "IA aplicada",
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
    title: portfolioTitle,
    description: portfolioDescription,
    type: "website",
    url: "/",
    siteName: "Portfólio Rafael Rocha",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: portfolioTitle,
    description: portfolioDescription,
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101313",
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
      image: "https://rafaeloliveirarocha.github.io/redesign/foto-rafael-800.webp",
      jobTitle: "Analista de Dados",
      description: "Analista de Dados na Hi Platform. Atuo na construção e evolução de soluções de dados, BI, automação e IA aplicada, conectando desenvolvimento técnico às necessidades do negócio.",
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
      alumniOf: { "@type": "CollegeOrUniversity", name: "UNOPAR" },
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
        "Integração de Dados",
        "Modelagem de Dados",
        "APIs",
        "Pipelines de Dados",
        "n8n",
        "Data Storytelling",
        "Automação",
        "IA aplicada",
        "LLMs",
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
    <html lang="pt-BR" data-preview-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceInit }} />
        <link rel="icon" href="/favicon.svg?v=ff5033" type="image/svg+xml" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png?v=ff5033" sizes="32x32" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico?v=ff5033" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
