"use client";

import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";

interface PortfolioCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function PortfolioCard({ project, onOpen }: PortfolioCardProps) {
  return (
    <article
      className="group cursor-pointer rounded-card border border-[var(--border)] bg-[rgba(255,255,255,0.024)] transition-all duration-300 hover:-translate-y-[7px] hover:border-blue/50 hover:shadow-[0_24px_60px_rgba(50,96,255,0.15)]"
      onClick={() => onOpen(project)}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
      tabIndex={0}
      role="button"
      aria-label={`Voir le projet ${project.title}`}
      data-tilt="true"
    >
      <div className={`h-44 rounded-t-card ${project.preview} relative overflow-hidden`}>
        <div className="absolute inset-4 grid grid-cols-3 gap-2 opacity-40">
          <div className="col-span-2 rounded bg-white/20" />
          <div className="space-y-2">
            <div className="h-full rounded bg-white/15" />
          </div>
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
          {project.badge}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-syne text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] px-2 py-0.5 text-xs text-dim"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-flex min-h-[48px] items-center gap-1 text-sm text-bluel group-hover:text-white">
          Voir le projet <ArrowRight size={14} />
        </span>
      </div>
    </article>
  );
}
