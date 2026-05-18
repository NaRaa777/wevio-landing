"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";
import { SectionTag } from "@/components/ui/SectionTag";
import { PortfolioFilters } from "./PortfolioFilters";
import { PortfolioCard } from "./PortfolioCard";
import { ProjectModal } from "./ProjectModal";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const [visible, setVisible] = useState(true);

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.cat === filter)),
    [filter]
  );

  const handleFilter = async (cat: ProjectCategory) => {
    if (cat === filter) return;
    setVisible(false);
    const { gsap } = await import("gsap");
    gsap.to(".portfolio-grid", {
      opacity: 0,
      scale: 0.96,
      duration: 0.25,
      onComplete: () => {
        setFilter(cat);
        setAnimKey((k) => k + 1);
        setVisible(true);
        gsap.fromTo(
          ".portfolio-grid",
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
        );
      },
    });
  };

  return (
    <>
      <section className="px-4 py-28 min-[480px]:px-5 md:px-8 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <SectionTag label="Portfolio" />
          <h1 className="mt-3 font-syne text-[clamp(2.5rem,5vw,4rem)] font-extrabold">
            <span className="bg-gradient-to-r from-white via-bluel to-cyan bg-clip-text text-transparent">
              Nos réalisations
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-muted">
            Sites web, applications métier, e-commerce et SaaS — découvrez une sélection de
            projets livrés pour nos clients.
          </p>

          <div className="mt-10">
            <PortfolioFilters active={filter} onChange={handleFilter} />
          </div>

          <div
            key={animKey}
            className={`portfolio-grid mt-12 grid grid-cols-1 gap-6 transition-opacity sm:grid-cols-2 lg:grid-cols-3 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {filtered.map((p) => (
              <PortfolioCard key={p.id} project={p} onOpen={setSelected} />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
