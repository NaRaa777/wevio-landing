"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProjectScreenshot } from "@/types";
import { PortfolioScreenshot } from "./PortfolioScreenshot";

interface ProjectGalleryProps {
  slides: ProjectScreenshot[];
  previewClass: string;
}

export function ProjectGallery({ slides, previewClass }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = slides.length > 1;
  const current = slides[index];

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + slides.length) % slides.length);
    },
    [slides.length]
  );

  useEffect(() => {
    setIndex(0);
  }, [slides]);

  useEffect(() => {
    if (!hasMultiple) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasMultiple, go]);

  return (
    <div className="border-b border-[var(--border)]">
      <div className={`relative w-full ${previewClass}`}>
        {/* Hauteur plafonnée pour ne pas écraser le texte sous la galerie */}
        <div className="relative h-[min(38vh,360px)] w-full min-h-[200px] bg-bg/40 sm:h-[min(40vh,400px)]">
          <div className="relative h-full w-full p-3 sm:p-4">
            <PortfolioScreenshot
              key={current.src}
              src={current.src}
              alt={current.alt}
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-bg/95 text-white shadow-lg hover:border-blue/50 sm:h-11 sm:w-11"
                aria-label="Écran précédent"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-bg/95 text-white shadow-lg hover:border-blue/50 sm:h-11 sm:w-11"
                aria-label="Écran suivant"
              >
                <ChevronRight size={20} />
              </button>
              <span className="absolute bottom-2 right-2 z-10 rounded-full bg-bg/95 px-2.5 py-1 text-xs text-white shadow-md">
                {index + 1} / {slides.length}
              </span>
            </>
          )}
        </div>
      </div>

      {hasMultiple && (
        <div className="flex gap-2 overflow-x-auto border-t border-[var(--border)] bg-bg/80 p-3 [-webkit-overflow-scrolling:touch]">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              className={`relative h-[72px] w-[128px] shrink-0 overflow-hidden rounded-lg border-2 bg-bg sm:h-20 sm:w-36 ${
                i === index
                  ? "border-blue shadow-[0_0_12px_rgba(50,96,255,0.4)]"
                  : "border-[var(--border)] opacity-70 hover:opacity-100"
              }`}
              aria-label={slide.caption}
              aria-current={i === index}
            >
              <div className="relative h-full w-full p-1.5">
                <PortfolioScreenshot src={slide.src} alt="" sizes="144px" />
              </div>
            </button>
          ))}
        </div>
      )}

      <p className="border-t border-[var(--border)] bg-surf/80 px-4 py-3 text-center text-sm text-muted sm:px-6">
        {current.caption}
      </p>
    </div>
  );
}
