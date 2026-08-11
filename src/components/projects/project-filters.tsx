"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TYPOLOGIES } from "@/content/projects";
import type { ProjectFilterState } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * URL-persisted project filters. State lives entirely in the query string,
 * so back/forward, reload and shared links all work. 
 * Re-designed as a horizontal, scrollable pill category filter.
 */
export function ProjectFilters({
  filters,
  resultCount,
}: {
  filters: ProjectFilterState;
  resultCount: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setTypology = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set("typology", value);
      else params.delete("typology");
      // Remove other filters if any existed from previous versions
      params.delete("location");
      params.delete("status");
      
      router.push(`${pathname}${params.size ? `?${params}` : ""}`, {
        scroll: false,
      });
    },
    [router, pathname, searchParams],
  );

  return (
    <div className="py-2">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Scrollable Pill Container */}
        <div className="-mx-6 overflow-x-auto px-6 pb-4 md:mx-0 md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <ul className="flex items-center gap-3">
            <li>
              <button
                onClick={() => setTypology("")}
                className={cn(
                  "whitespace-nowrap rounded-full border px-6 py-2.5 text-sm font-medium transition-colors cursor-pointer",
                  !filters.typology
                    ? "bg-navy border-navy text-white"
                    : "border-navy/20 text-navy hover:border-navy"
                )}
              >
                All Projects
              </button>
            </li>
            {TYPOLOGIES.map((typology) => (
              <li key={typology}>
                <button
                  onClick={() => setTypology(typology)}
                  className={cn(
                    "whitespace-nowrap rounded-full border px-6 py-2.5 text-sm font-medium transition-colors cursor-pointer",
                    filters.typology === typology
                      ? "bg-navy border-navy text-white"
                      : "border-navy/20 text-navy hover:border-navy"
                  )}
                >
                  {typology}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Results Count */}
        <div className="shrink-0 pt-2 lg:pt-0">
          <p aria-live="polite" className="text-sm text-ink-muted">
            {resultCount} {resultCount === 1 ? "project" : "projects"}
          </p>
        </div>

      </div>
    </div>
  );
}

