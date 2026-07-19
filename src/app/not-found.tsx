import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DatumSweep } from "@/components/datum-sweep";

export default function NotFound() {
  return (
    <div className="surface-dark flex min-h-svh flex-col justify-center bg-navy px-6 pt-20 text-beige md:px-10">
      <p className="label text-gold">404 — not in the index</p>
      <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.05] text-cream">
        This page <em className="text-gold">does not exist</em>
      </h1>
      <DatumSweep className="mt-10 h-10 w-full max-w-xl" />
      <div className="mt-12">
        <Button asChild variant="onDark">
          <Link href="/">Return to the home page</Link>
        </Button>
      </div>
    </div>
  );
}
