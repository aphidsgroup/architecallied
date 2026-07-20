import Image from "next/image";
import { clientLogos, type ClientLogo } from "@/content/media";

/**
 * "Our clients" — three continuously running logo rows:
 * row 1 right→left, row 2 left→right, row 3 right→left.
 * Pure CSS animation (globals.css): pauses on hover/focus-within; under
 * prefers-reduced-motion the rows render as a static wrapped grid instead.
 * Each row's track duplicates its logo set once for a seamless loop; the
 * duplicate set is aria-hidden so screen readers hear each client once.
 */
function Row({
  logos,
  reverse,
  duration,
}: {
  logos: ClientLogo[];
  reverse?: boolean;
  duration: string;
}) {
  const set = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-14 pr-14"
    >
      {logos.map((l) => (
        <li key={l.src} className="shrink-0">
          <Image
            src={l.src}
            alt={hidden ? "" : l.name}
            width={240}
            height={112}
            className="h-12 w-auto md:h-14"
          />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden border-b rule py-5 first:border-t">
      <div
        className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        {set(false)}
        {set(true)}
      </div>
    </div>
  );
}

export function ClientMarquee() {
  const third = Math.ceil(clientLogos.length / 3);
  const rows = [
    clientLogos.slice(0, third),
    clientLogos.slice(third, third * 2),
    clientLogos.slice(third * 2),
  ];
  return (
    <div>
      {/* Animated rows (hidden under reduced motion via CSS) */}
      <div className="marquee-container" aria-label="Client logos">
        <Row logos={rows[0]} duration="46s" />
        <Row logos={rows[1]} reverse duration="52s" />
        <Row logos={rows[2]} duration="48s" />
      </div>
      {/* Reduced-motion fallback: static wrapped grid (shown via CSS) */}
      <ul className="marquee-static hidden flex-wrap items-center gap-x-12 gap-y-6 border-y rule py-8">
        {clientLogos.map((l) => (
          <li key={l.src}>
            <Image src={l.src} alt={l.name} width={240} height={112} className="h-10 w-auto" />
          </li>
        ))}
      </ul>
    </div>
  );
}
