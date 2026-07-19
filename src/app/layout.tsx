import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/content/site";
import { absoluteUrl, SITE_URL } from "@/lib/metadata";
import { organizationJsonLd } from "@/lib/structured-data";
import "./globals.css";

/**
 * Jost self-hosted via next/font — no runtime requests to Google Fonts.
 * Files vendored from @fontsource/jost (SIL OFL, licence at src/fonts/OFL.txt)
 * because the build environment cannot reach fonts.googleapis.com; behaviour
 * is identical to next/font/google (self-hosted, preloaded, swap).
 */
const jost = localFont({
  src: [
    { path: "../fonts/jost-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/jost-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/jost-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-jost",
  display: "swap",
});

/**
 * Fraunces (variable, optical size) — the Direction A editorial display face
 * selected after the coded typography exploration (docs/redesign/). SIL OFL,
 * vendored from @fontsource-variable (licence: src/fonts/OFL-fraunces.txt).
 * Used for display/headings only; Jost remains the utility/body voice.
 */
const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-latin-opsz-normal.woff2", style: "normal" },
    { path: "../fonts/fraunces-latin-opsz-italic.woff2", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — Architecture practice, Chennai`,
    template: `%s — ${site.name}`,
  },
  description:
    "Archi-tec Allied is an architecture practice led by Principal Architect S. Ravikumar, B.Arch, based in T. Nagar, Chennai, with a branch office in Bhubaneswar.",
  icons: {
    icon: "/brand/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
  openGraph: {
    siteName: site.name,
    type: "website",
    images: [
      {
        url: absoluteUrl("/brand/og-default.png"),
        width: 1200,
        height: 630,
        alt: `${site.name} logo`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jost.variable} ${fraunces.variable}`}>
      <body>
        <a href="#main" className="skip-link label">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
