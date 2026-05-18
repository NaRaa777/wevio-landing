"use client";

import { ArrowRight, Images } from "lucide-react";
import type { Project } from "@/types";
import { PortfolioScreenshot } from "./PortfolioScreenshot";

interface PortfolioCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function PortfolioCard({ project, onOpen }: PortfolioCardProps) {
  const cover = project.gallery[0];
  const screenCount = project.gallery.length;

  return (
    <article
      className="group cursor-pointer overflow-hidden rounded-card border border-[var(--border)] bg-[rgba(255,255,255,0.024)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-[7px] hover:border-blue/50 hover:shadow-[0_24px_60px_rgba(50,96,255,0.15)]"
      onClick={() => onOpen(project)}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
      tabIndex={0}
      role="button"
      aria-label={`Voir le projet ${project.title}, ${screenCount} écran${screenCount > 1 ? "s" : ""}`}
      data-tilt="true"
    >
      <div
        className={`relative flex aspect-[16/10] w-full items-center justify-center ${project.preview}`}
      >
        <div className="absolute inset-2 sm:inset-3">
          <PortfolioScreenshot
            src={cover.src}
            alt={cover.alt}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
          />
        </div>
        <span className="absolute left-3 top-3 z-10 rounded-full bg-bg/90 px-3 py-1 text-xs text-white shadow-md backdrop-blur-sm">
          {project.badge}
        </span>
        {screenCount > 1 && (
          <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-bg/90 px-3 py-1 text-xs text-white shadow-md backdrop-blur-sm">
            <Images size={12} aria-hidden />
            {screenCount} écrans
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-syne text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-1 text-xs text-dim">{project.client}</p>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{project.desc}</p>
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[var(--border)] pt-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-syne text-sm font-bold text-white">{m.value}</p>
              <p className="mt-0.5 text-[10px] leading-tight text-dim">{m.label}</p>
            </div>
          ))}
        </div>
        <span className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-1 rounded-full border border-[var(--border)] text-sm text-bluel transition-colors group-hover:border-blue/40 group-hover:bg-blue/10 group-hover:text-white sm:w-auto sm:justify-start sm:border-0 sm:bg-transparent sm:px-0">
          Voir les écrans <ArrowRight size={14} />
        </span>
      </div>
    </article>
  );
}


