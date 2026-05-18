"use client";

import { Btn } from "@/components/ui/Btn";
import { useScrollReveal } from "@/components/animations/useScrollReveal";

export function CtaStrip() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="px-4 py-20 min-[480px]:px-5 md:px-8 lg:px-8">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-8 rounded-card border border-blue/20 bg-gradient-to-r from-blue/10 to-violet/10 p-10 md:flex-row md:p-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs text-cyan">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
            Disponible pour de nouveaux projets
          </span>
          <h2 className="mt-4 font-syne text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white">
            Prêt à lancer votre prochain projet ?
          </h2>
          <p className="mt-2 max-w-md text-muted">
            Parlons de votre site web ou application métier. Réponse sous 24h.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 min-[480px]:w-auto min-[480px]:flex-row">
          <Btn href="/contact" variant="primary" className="w-full min-[480px]:w-auto">
            Demander un devis
          </Btn>
          <Btn href="/portfolio" variant="outline" className="w-full min-[480px]:w-auto">
            Voir le portfolio
          </Btn>
        </div>
      </div>
    </section>
  );
}


