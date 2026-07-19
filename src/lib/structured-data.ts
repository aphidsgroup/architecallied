import { site } from "@/content/site";
import { absoluteUrl } from "./metadata";

/**
 * JSON-LD built from VERIFIED facts only. No founding year, awards, social
 * profiles or client claims — none are verified (CONTENT_REQUIRED.md).
 * Project JSON-LD is generated only for published real projects.
 */

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/brand/logo-gold.png"),
    email: site.email,
    telephone: site.phone.mobile.display,
    address: site.offices.map((o) => ({
      "@type": "PostalAddress",
      streetAddress: o.lines.slice(0, -1).join(", "),
      addressLocality: o.city,
      addressRegion: o.region,
      addressCountry: o.country,
    })),
    founder: personJsonLdFragment(),
  };
}

function personJsonLdFragment() {
  return {
    "@type": "Person",
    name: `${site.principal.name}, ${site.principal.qualification}`,
    jobTitle: site.principal.role,
    worksFor: site.name,
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    ...personJsonLdFragment(),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
