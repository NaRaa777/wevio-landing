"use client";

import { SectionTag } from "@/components/ui/SectionTag";
import { Card } from "@/components/ui/Card";
import { useScrollReveal } from "@/components/animations/useScrollReveal";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Wevio a livré notre CRM en 6 semaines. L'équipe commerciale a adopté l'outil dès la première semaine.",
    author: "Sophie Martin",
    role: "Directrice commerciale",
    company: "Nexoria",
  },
  {
    id: 2,
    quote:
      "Refonte impeccable : design premium, performances au top et accompagnement réactif du début à la fin.",
    author: "Thomas Leroy",
    role: "Fondateur",
    company: "Boldframe",
  },
  {
    id: 3,
    quote:
      "Un vrai partenaire technique. Ils comprennent nos enjeux métier et proposent des solutions pragmatiques.",
    author: "Karim Benali",
    role: "COO",
    company: "Vaultex",
  },
];

export function Testimonials() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="px-4 py-20 min-[480px]:px-5 md:px-8 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <SectionTag label="Témoignages" />
        <h2 className="mt-3 font-syne text-[clamp(2.1rem,3.5vw,3rem)] font-bold text-white">
          Ils nous font confiance
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.id} className="relative p-8">
              <span
                className="font-syne text-6xl leading-none text-transparent"
                style={{
                  background: "linear-gradient(135deg, var(--blue), var(--cyan))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="mt-2 text-muted">{t.quote}</p>
              <p className="mt-6 font-medium text-white">{t.author}</p>
              <p className="text-sm text-dim">
                {t.role} · {t.company}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


