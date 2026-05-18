"use client";

import { SectionTag } from "@/components/ui/SectionTag";
import { useCountUp } from "@/components/animations/useCountUp";
import { useScrollReveal } from "@/components/animations/useScrollReveal";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, display } = useCountUp({ value, suffix });
  return (
    <div className="text-center">
      <span ref={ref} className="block font-syne text-4xl font-extrabold text-white md:text-5xl">
        {display}
      </span>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export function Stats() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="px-4 py-16 min-[480px]:px-5 md:px-8 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-card border border-[var(--border)] bg-white/[0.04] p-10 backdrop-blur-xl">
          <SectionTag label="En chiffres" className="justify-center" />
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatItem value={50} suffix="+" label="Projets livrés" />
            <StatItem value={98} suffix="%" label="Clients satisfaits" />
            <StatItem value={3} suffix=" ans" label="D'expérience" />
            <StatItem value={15} suffix="j" label="Délai moyen MVP" />
          </div>
        </div>
      </div>
    </section>
  );
}


