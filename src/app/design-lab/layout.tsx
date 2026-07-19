import type { Metadata } from "next";
import localFont from "next/font/local";

/**
 * DESIGN LAB — temporary isolated exploration environment.
 * - Excluded from sitemap (sitemap.ts lists routes explicitly) and nav.
 * - robots: noindex.
 * - Global header/footer are hidden via the :has() rule below so each
 *   direction can present its own authored navigation. No production
 *   component is modified.
 * - Deletable wholesale after direction selection.
 *
 * Lab fonts (all SIL OFL, vendored from @fontsource-variable, licences in
 * src/fonts/lab/): Fraunces (A), Space Grotesk (B), Archivo wdth (C).
 */
const fraunces = localFont({
  src: [
    { path: "../../fonts/lab/fraunces-latin-opsz-normal.woff2", style: "normal" },
    { path: "../../fonts/lab/fraunces-latin-opsz-italic.woff2", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});
const spaceGrotesk = localFont({
  src: "../../fonts/lab/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-space",
  display: "swap",
});
const archivo = localFont({
  src: "../../fonts/lab/archivo-latin-wdth-normal.woff2",
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Lab (internal)",
  robots: { index: false, follow: false },
};

export default function DesignLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`design-lab ${fraunces.variable} ${spaceGrotesk.variable} ${archivo.variable}`}
    >
      {/* Hide the production header/footer only while a design-lab page is mounted */}
      <style>{`
        body:has(.design-lab) > header, body:has(.design-lab) > footer { display: none; }
        .font-fraunces { font-family: var(--font-fraunces), Georgia, serif; }
        .font-space { font-family: var(--font-space), system-ui, sans-serif; }
        .font-archivo { font-family: var(--font-archivo), system-ui, sans-serif; }
      `}</style>
      {children}
    </div>
  );
}
