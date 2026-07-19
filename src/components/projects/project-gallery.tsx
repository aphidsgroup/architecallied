"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ProjectImage } from "@/content/projects";

/**
 * Accessible project gallery (page-specifications.md):
 * - Radix Dialog: proper title, Escape closes, focus trapped, focus returns
 *   to the triggering thumbnail on close.
 * - Arrow-key navigation between images while open.
 * - Touch-friendly 44px+ controls. No auto-advance.
 */
export function ProjectGallery({
  title,
  images,
}: {
  title: string;
  images: ProjectImage[];
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const step = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count],
  );

  if (count === 0) return null;

  return (
    <section aria-label={`${title} gallery`}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <li key={img.src}>
            <Dialog
              onOpenChange={(open) => {
                if (open) setIndex(i);
              }}
            >
              <DialogTrigger className="group block w-full border rule">
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </span>
                <span className="sr-only">Open image: {img.alt}</span>
              </DialogTrigger>
              <DialogContent
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") step(1);
                  if (e.key === "ArrowLeft") step(-1);
                }}
              >
                <DialogTitle className="label mb-4 text-beige">
                  {title} — image {index + 1} of {count}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Use the left and right arrow keys, or the previous and next
                  buttons, to move between images. Press Escape to close.
                </DialogDescription>
                <figure>
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={images[index].src}
                      alt={images[index].alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-beige-muted">
                    {images[index].alt}
                  </figcaption>
                </figure>
                {count > 1 && (
                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      className="inline-flex min-h-11 min-w-11 items-center gap-2 px-3 text-beige hover:text-white"
                    >
                      <ChevronLeftIcon aria-hidden className="size-5" />
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      className="inline-flex min-h-11 min-w-11 items-center gap-2 px-3 text-beige hover:text-white"
                    >
                      Next
                      <ChevronRightIcon aria-hidden className="size-5" />
                    </button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </li>
        ))}
      </ul>
    </section>
  );
}
