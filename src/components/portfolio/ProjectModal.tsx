"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { Project } from "@/types";
import { Btn } from "@/components/ui/Btn";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    document.body.classList.add("modal-open");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-end justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-md sm:items-center"
      style={{ WebkitOverflowScrolling: "touch" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl rounded-card border border-[var(--border)] bg-surf shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-[var(--border)] bg-bg/80 text-white"
          aria-label="Fermer la modale"
        >
          <X size={20} />
        </button>

        <div className={`h-56 sm:h-64 ${project.preview} rounded-t-card`} />

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-blue/20 px-3 py-1 text-xs text-bluel">
              {project.badge}
            </span>
            <span className="text-xs text-dim">{project.client}</span>
          </div>

          <h2 id="modal-title" className="mt-4 font-syne text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h2>
          <p className="mt-3 text-muted">{project.desc}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-bluel">
                Métriques
              </h3>
              <ul className="space-y-3">
                {project.metrics.map((m) => (
                  <li key={m}>
                    <p className="font-syne text-lg font-bold text-white">{m}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-bluel">
                Stack technique
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Btn href="/contact" variant="primary" className="w-full sm:w-auto">
              Projet similaire ? Parlons-en
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
