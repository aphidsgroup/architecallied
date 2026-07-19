/**
 * Signature element: the "architectural datum sweep" — a fine gold line
 * travelling horizontally then breaking upward at 45°, abstracted from the
 * directional baseline of the logo (never repeating the monogram itself).
 *
 * Animated variant uses pure CSS stroke-dashoffset (no GSAP plugin needed).
 * Reduced-motion users see the fully drawn line immediately (globals.css).
 * Used at most 3 times site-wide: hero (animated), section transition
 * (static), projects filter active indicator (CSS underline variant).
 */
export function DatumSweep({
  animated = false,
  className,
}: {
  animated?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 640 80"
      fill="none"
      className={className}
      preserveAspectRatio="xMinYMid meet"
    >
      <path
        d="M0 64 H420 L484 16 H640"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        pathLength={1000}
        className={animated ? "datum-path" : undefined}
      />
    </svg>
  );
}
