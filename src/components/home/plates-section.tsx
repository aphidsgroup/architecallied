import Image from "next/image";
import Link from "next/link";
import { getPlates } from "@/lib/photos";

/**
 * SELECTED WORK — real projects presented as numbered museum plates
 * (composition researched via Mobbin: Aino Agency's indexed plate captions;
 * frontend-design skill: asymmetric, one large plate + two offset, oversized
 * ghost numerals overlapping the images). Each plate links to the project.
 */
const PICKS = [0, 3, 2] as const;

function Plate({
  index,
  large,
  className,
}: {
  index: number;
  large?: boolean;
  className?: string;
}) {
  const s = getPlates()[index];
  const body = (
    <>
      <div className="relative">
        <Image
          src={s.src}
          alt={s.alt}
          width={s.width}
          height={s.height}
          sizes={large ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="aspect-[4/3] w-full border rule object-cover"
        />
        <span
          aria-hidden
          className={`pointer-events-none absolute -top-8 font-display font-light leading-none ${
            large ? "-left-3 text-[7rem] md:text-[9rem]" : "-left-2 text-[5rem] md:text-[6.5rem]"
          } text-navy/25`}
        >
          {s.n}
        </span>
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm">
        <span>
          <span className="label text-ink-muted">{s.typology}</span>
          <span className="mt-0.5 block font-display text-lg group-hover:text-gold-ink">
            {s.caption}
          </span>
        </span>
        <span className="label shrink-0 text-gold-ink">{s.kindLabel}</span>
      </figcaption>
    </>
  );
  return s.href ? (
    <Link href={s.href} className={`group block ${className ?? ""}`}>
      {body}
    </Link>
  ) : (
    <figure className={className}>{body}</figure>
  );
}

export function PlatesSection() {
  return (
    <div>
      <div className="grid gap-x-10 gap-y-16 lg:grid-cols-12">
        <Plate index={PICKS[0]} large className="lg:col-span-7" />
        <div className="flex flex-col justify-between gap-10 lg:col-span-4 lg:col-start-9">
          <p className="max-w-xs text-ink-muted lg:pt-10">
            A cross-section of the practice&apos;s work — railway stations,
            civic buildings, sports and housing, delivered across Odisha, Tamil
            Nadu and beyond.
          </p>
          <Plate index={PICKS[1]} />
        </div>
      </div>
      <div className="mt-16 grid gap-10 lg:grid-cols-12">
        <Plate index={PICKS[2]} className="lg:col-span-5 lg:col-start-3" />
        <div className="content-end lg:col-span-4 lg:col-start-9">
          <Link
            href="/projects"
            className="label inline-flex min-h-11 items-center text-navy underline decoration-gold underline-offset-4 hover:text-gold-ink"
          >
            View all projects
          </Link>
        </div>
      </div>
    </div>
  );
}
