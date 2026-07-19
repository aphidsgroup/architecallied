import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DatumSweep } from "@/components/datum-sweep";

export default function NotFound() {
  return (
    <div className="surface-dark flex min-h-svh flex-col justify-center bg-navy pt-20">
      <div className="mx-auto w-full max-w-[1360px] px-4 py-24 md:px-6">
        <p className="label text-gold">404</p>
        <h1 className="mt-6 max-w-2xl text-[clamp(2.25rem,6vw,4.5rem)] font-light leading-tight text-cream">
          This page does not exist
        </h1>
        <DatumSweep className="mt-10 h-10 w-full max-w-xl" />
        <Button asChild variant="onDark" className="mt-12">
          <Link href="/">Return to the home page</Link>
        </Button>
      </div>
    </div>
  );
}
