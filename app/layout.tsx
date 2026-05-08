import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Preloader } from "@/components/Preloader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Solar Supply, S.A. | Suministro solar en Panamá",
    template: "%s | Solar Supply"
  },
  description:
    "Sitio corporativo de Solar Supply, S.A. Suministro de paneles solares, inversores, microinversores, estructuras, accesorios y soporte técnico para proyectos solares.",
  keywords: site.keywords,
  openGraph: {
    title: "Solar Supply, S.A.",
    description: site.tagline,
    url: site.domain,
    siteName: "Solar Supply",
    locale: "es_PA",
    type: "website",
    images: [{ url: "/brand/logo-solarsupply.png", width: 1200, height: 630, alt: "Solar Supply" }]
  },
  icons: {
    icon: "/brand/favicon.svg"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Preloader />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
