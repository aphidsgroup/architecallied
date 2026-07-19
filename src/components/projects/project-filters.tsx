"use client";

import { useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PROJECT_STATUSES, TYPOLOGIES } from "@/content/projects";
import type { ProjectFilterState } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * URL-persisted project filters. State lives entirely in the query string,
 * so back/forward, reload and shared links all work. Native <select>
 * elements keep the control fully keyboard- and screen-reader-accessible
 * with zero custom widget code (docs/design/page-specifications.md).
 */
export function ProjectFilters({
  filters,
  locations,
  resultCount,
}: {
  filters: ProjectFilterState;
  locations: string[];
  resultCount: number;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setFilter = useCallback(
    (key: "typology" | "location" | "status", value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set(key, value);
      else params.delete(key);
      router.push(`${pathname}${params.size ? `?${params}` : ""}`, {
        scroll: false,
      });
    },
    [router, pathname, searchParams],
  );

  const hasFilters = Boolean(
    filters.typology || filters.location || filters.status,
  );

  const fields: {
    key: "typology" | "location" | "status";
    label: string;
    value: string | undefined;
    options: readonly string[];
  }[] = [
    { key: "typology", label: "Typology", value: filters.typology, options: TYPOLOGIES },
    { key: "location", label: "Location", value: filters.location, options: locations },
    { key: "status", label: "Status", value: filters.status, options: PROJECT_STATUSES },
  ];

  return (
    <div className="border-y rule py-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="grid gap-6 sm:grid-cols-3 md:max-w-2xl md:flex-1">
          {fields.map((f) => (
            <div key={f.key} data-active={Boolean(f.value)} className="relative">
              <label htmlFor={`filter-${f.key}`} className="label block text-ink-muted">
                {f.label}
              </label>
              <select
                id={`filter-${f.key}`}
                value={f.value ?? ""}
                onChange={(e) => setFilter(f.key, e.target.value)}
                className={cn(
                  "mt-2 block min-h-11 w-full border rule bg-white px-3 py-2 text-navy",
                  f.options.length === 0 && "text-ink-muted",
                )}
                disabled={f.options.length === 0}
              >
                <option value="">All</option>
                {f.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              {/* datum indicator: gold underline grows when filter active */}
              <span aria-hidden className="filter-active-line absolute -bottom-1 left-0 block h-0.5 w-full bg-gold" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <p aria-live="polite" className="text-sm text-ink-muted">
            {resultCount} {resultCount === 1 ? "project" : "projects"}
          </p>
          {hasFilters && (
            <Link
              href="/projects"
              scroll={false}
              className="label inline-flex min-h-11 items-center text-navy underline decoration-gold underline-offset-4 hover:text-ink-muted"
            >
              Clear all
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
