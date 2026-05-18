"use client";

import type { ProjectCategory } from "@/types";
import { filterOptions } from "@/data/projects";

interface PortfolioFiltersProps {
  active: ProjectCategory;
  onChange: (cat: ProjectCategory) => void;
}

export function PortfolioFilters({ active, onChange }: PortfolioFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les projets">
      {filterOptions.map((f) => (
        <button
          key={f.id}
          type="button"
          role="tab"
          aria-selected={active === f.id}
          onClick={() => onChange(f.id)}
          className={`min-h-[48px] rounded-full px-5 py-2 text-sm font-medium transition-all ${
            active === f.id
              ? "bg-blue text-white shadow-[0_0_20px_rgba(50,96,255,0.4)]"
              : "border border-[var(--border)] text-muted hover:border-blue/40 hover:text-white"
          }`}
          data-cursor-hover
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
