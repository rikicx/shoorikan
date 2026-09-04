import type { Metadata, Viewport } from "next";
import "./globals.css";
import { roboto, zen, mono } from "./fonts";
import { SITE } from "@/lib/site";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const description =
  "Academia de Judô Shoorikan — desde 1996, na Vila Mariana, São Paulo. Judô, jiu-jitsu e muay thai, do primeiro contato ao alto rendimento. Tradição, técnica e respeito, sob a direção do sensei Jairo Andrade.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shoorikan.vercel.app"),
  title: {
    default: "Shoorikan — Academia de Judô · Vila Mariana, São Paulo",
    template: "%s · Shoorikan",
  },
  description,
  keywords: [
    "judô",
    "academia de judô São Paulo",
    "judô Vila Mariana",
    "jiu-jitsu",
    "muay thai",
    "Shoorikan",
    "Jairo Andrade",
  ],
  openGraph: {
    title: "Shoorikan — Tradição, técnica e respeito no tatame",
    description,
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image", title: "Shoorikan", description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${zen.variable} ${mono.variable}`}
    >
      <body>
        <div className="grain" aria-hidden="true" />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <FloatingCTA />
      </body>
    </html>
  );
}
