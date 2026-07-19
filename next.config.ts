import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/**
 * Static-compatible CSP (docs: Next.js CSP guide for static sites).
 * - script-src 'unsafe-inline' is required because Next.js emits inline
 *   bootstrap scripts on static pages without a nonce infrastructure;
 *   'unsafe-eval' is additionally required only in development (React
 *   Refresh). No remote script/style/img/font origins are permitted.
 * - JSON-LD <script type="application/ld+json"> blocks are data, not
 *   executable script, but remain covered by 'unsafe-inline'.
 * - frame-ancestors 'none' is used, so X-Frame-Options is intentionally
 *   omitted (they must not conflict).
 * Verified against `pnpm build && pnpm start` — see docs/qa/final-report.md.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  "frame-ancestors 'none'",
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  // No remote images permitted — all imagery is local (content integrity).
  images: { remotePatterns: [] },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
