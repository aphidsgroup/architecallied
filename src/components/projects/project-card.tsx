import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-enter group block border rule bg-white"
    >
      {project.images[0] ? (
        <div className="relative aspect-[4/3] overflow-hidden border-b rule">
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          aria-hidden
          className="flex aspect-[4/3] items-center justify-center border-b rule bg-cream"
        >
          <span className="label text-ink-muted">Imagery forthcoming</span>
        </div>
      )}
      <div className="p-5">
        <h3 className="font-display text-lg leading-snug group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4">
          {project.title}
        </h3>
        <p className="label mt-2 text-ink-muted">
          {project.typology} · {project.location}
          {project.year ? ` · ${project.year}` : ""}
        </p>
      </div>
    </Link>
  );
}
