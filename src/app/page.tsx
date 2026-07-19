import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DatumSweep } from "@/components/datum-sweep";
import { SectionHeading } from "@/components/section-heading";
import { expertiseAreas } from "@/content/expertise";
import { site } from "@/content/site";
import { getPublishedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `${site.name} — Architecture practice, Chennai`,
  description:
    "Architecture practice led by Principal Architect S. Ravikumar, B.Arch. Head office in T. Nagar, Chennai; branch office in Bhubaneswar.",
  path: "/",
});

/** DRAFT copy requiring client review is sourced from src/content/site.ts. */
export default function HomePage() {
  const selected = getPublishedProjects().slice(0, 3);

  return (
    <>
      {/* HERO — solid navy, typographic; no fake photography */}
      <section className="surface-dark relative flex min-h-svh flex-col justify-center overflow-hidden bg-navy pt-20">
        {/* Two 45° solid planes anchored to the edge, echoing the logo's angle */}
        <div
          aria-hidden
          className="absolute -right-24 top-0 hidden h-full w-[38%] bg-navy-soft lg:block"
          style={{ clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div
          aria-hidden
          className="absolute -right-24 bottom-0 hidden h-[45%] w-[24%] bg-gold/10 lg:block"
          style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div className="relative mx-auto w-full max-w-[1360px] px-4 py-24 md:px-6">
          <p className="hero-rise hero-rise-1 label text-gold">
            Architecture · Chennai &amp; Bhubaneswar
          </p>
          <h1 className="hero-rise hero-rise-2 mt-6 max-w-4xl text-[clamp(2.75rem,8vw,5.5rem)] font-light lowercase leading-[1.05] text-cream">
            {site.displayName}
          </h1>
          <p className="hero-rise hero-rise-3 mt-8 max-w-xl text-lg text-beige">
            {site.positioning.tagline}
          </p>
          <DatumSweep animated className="mt-14 h-12 w-full max-w-2xl md:h-16" />
        </div>
      </section>

      {/* SELECTED WORK */}
      <section aria-labelledby="work-h" className="bg-cream">
        <div className="mx-auto max-w-[1360px] px-4 py-24 md:px-6 md:py-36">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="label text-ink-muted">Selected work</p>
              <SectionHeading id="work-h" className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-tight">
                Work grounded in its context
              </SectionHeading>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              {selected.length > 0 ? (
                <ul className="grid gap-8">
                  {selected.map((p) => (
                    <li key={p.slug}>
                      <ProjectCard project={p} />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="border-l-2 border-gold pl-8">
                  <p className="text-lg">
                    A curated selection of our work is being prepared for
                    publication.
                  </p>
                  <p className="mt-3 text-ink-muted">
                    Project documentation and photography are currently under
                    review. In the meantime, we are glad to discuss relevant
                    experience directly.
                  </p>
                  <Button asChild variant="outline" className="mt-8">
                    <Link href="/projects">Visit the projects page</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE OVERVIEW */}
      <section aria-labelledby="exp-h" className="bg-white">
        <div className="mx-auto max-w-[1360px] px-4 py-24 md:px-6 md:py-36">
          <p className="label text-ink-muted">Expertise</p>
          <SectionHeading id="exp-h" className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3rem)] leading-tight">
            Buildings across the breadth of everyday life
          </SectionHeading>
          <ul className="mt-14 grid border-t rule sm:grid-cols-2">
            {expertiseAreas.map((area) => (
              <li
                key={area.typology}
                className="flex items-baseline justify-between gap-6 border-b rule py-5 sm:odd:pr-10 sm:even:pl-10"
              >
                <span className="text-xl font-normal">{area.typology}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant="ghost" className="mt-10 px-0">
            <Link href="/expertise">About our expertise</Link>
          </Button>
        </div>
      </section>

      {/* PRACTICE APPROACH — DRAFT copy, asymmetric 5/7 grid, single gold rule */}
      <section aria-labelledby="approach-h" className="surface-dark bg-navy text-beige">
        <div className="mx-auto max-w-[1360px] px-4 py-24 md:px-6 md:py-36">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="label text-gold">Approach</p>
              <SectionHeading id="approach-h" className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-tight text-cream">
                How we work
              </SectionHeading>
            </div>
            <ol className="border-l border-gold/60 pl-8 md:col-span-6 md:col-start-7">
              {[
                ["Context first", "Every site brings its own climate, street and habits of use. The design grows from what is already there."],
                ["Clarity of plan", "Simple, legible organisation — buildings that people understand without instruction."],
                ["Built to endure", "Materials and details chosen for how they age, not how they photograph."],
                ["Careful stewardship", "A project is a long relationship: budgets, approvals and construction held to the same standard as the drawing."],
              ].map(([title, body], i) => (
                <li key={title} className={i > 0 ? "mt-10" : undefined}>
                  <span aria-hidden className="block text-3xl font-light text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-xl text-cream">{title}</h3>
                  <p className="mt-2 max-w-md text-beige-muted">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PRINCIPAL — verified facts only */}
      <section aria-labelledby="principal-h" className="bg-cream">
        <div className="mx-auto max-w-[1360px] px-4 py-24 md:px-6 md:py-36">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="label text-ink-muted">Leadership</p>
              <SectionHeading id="principal-h" className="mt-4 text-[clamp(2rem,4vw,3rem)] leading-tight">
                {site.principal.name},{" "}
                <span className="whitespace-nowrap">{site.principal.qualification}</span>
              </SectionHeading>
              <p className="label mt-4 text-gold">{site.principal.role}</p>
            </div>
            <div className="md:col-span-6 md:col-start-6">
              <p className="text-lg">
                {site.name} is led by {site.principal.name},{" "}
                {site.principal.qualification}, practising from the head office
                in T. Nagar, Chennai, with a branch office in Bhubaneswar,
                Odisha.
              </p>
              <p className="mt-6 text-ink-muted">{site.clientStatement}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section aria-labelledby="cta-h" className="bg-white">
        <div className="mx-auto max-w-[1360px] px-4 py-24 md:px-6 md:py-36">
          <DatumSweep className="h-10 w-full max-w-xl" />
          <SectionHeading id="cta-h" className="mt-10 max-w-3xl text-[clamp(2rem,5vw,3.75rem)] leading-tight">
            Discuss a project with us
          </SectionHeading>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.phone.mobile.href}>{site.phone.mobile.display}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
