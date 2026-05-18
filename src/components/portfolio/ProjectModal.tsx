"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { Project } from "@/types";
import { Btn } from "@/components/ui/Btn";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!project) return;

    const html = document.documentElement;
    html.classList.add("modal-open");
    document.body.classList.add("modal-open");

    const resetTilt = async () => {
      const { gsap } = await import("gsap");
      document.querySelectorAll("[data-tilt='true']").forEach((el) => {
        gsap.set(el, { rotateX: 0, rotateY: 0, clearProps: "transform" });
      });
    };
    resetTilt();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      html.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project || !mounted) return null;

  const content = (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-bg/85 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fermer la modale"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative z-10 w-full max-w-4xl overflow-y-auto overscroll-contain rounded-card border border-[var(--border)] bg-surf shadow-2xl max-h-[min(92dvh,920px)] [-webkit-overflow-scrolling:touch]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-bg text-white shadow-lg hover:border-blue/50 sm:right-4 sm:top-4"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        <ProjectGallery slides={project.gallery} previewClass={project.preview} />

        <div className="px-5 pb-6 pt-2 sm:px-8 sm:pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue/20 px-3 py-1 text-xs text-bluel">
              {project.badge}
            </span>
            <span className="text-xs text-dim">{project.client}</span>
            {project.gallery.length > 1 && (
              <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-muted">
                {project.gallery.length} écrans
              </span>
            )}
          </div>

          <h2
            id="modal-title"
            className="mt-4 font-syne text-xl font-bold text-white sm:text-3xl"
          >
            {project.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {project.desc}
          </p>

          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-card border border-[var(--border)] bg-white/[0.03] p-4 text-center sm:p-5"
              >
                <p className="font-syne text-xl font-extrabold text-white sm:text-2xl">
                  {m.value}
                </p>
                <p className="mt-1 text-xs text-muted">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8">
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

          <div className="mt-6 sm:mt-8">
            <Btn href="/contact" variant="primary" className="w-full sm:w-auto">
              Projet similaire ? Parlons-en
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
