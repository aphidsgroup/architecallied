import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy",
  description: `Privacy information for the ${site.name} website.`,
  path: "/privacy",
});

/**
 * Accurate minimal policy for the site as actually built: static pages,
 * no cookies, no analytics, no forms, self-hosted fonts. Must be revised
 * if analytics or a form backend is ever added (CONTENT_REQUIRED.md).
 */
export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <p className="label text-ink-muted">Privacy</p>
      <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-tight">
        Privacy on this website
      </h1>

      <div className="mt-14 max-w-2xl space-y-6">
        <p>
          This website is a set of static informational pages. It does not set
          cookies, does not use analytics or tracking scripts, and does not
          contain contact forms that store your data.
        </p>
        <p>
          Fonts and all other assets are served directly from this website; no
          third-party services receive your browsing data through this site.
        </p>
        <p>
          If you contact us by email or telephone using the details on the
          contact page, the message is initiated by you through your own email
          or phone application. We use the information you send us solely to
          respond to your enquiry.
        </p>
        <p>
          For any privacy question, write to{" "}
          <a className="underline decoration-gold underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
