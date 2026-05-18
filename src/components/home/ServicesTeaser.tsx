"use client";

import Link from "next/link";
import { ArrowRight, Code2, Layout, Wrench } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Card } from "@/components/ui/Card";
import { useScrollReveal } from "@/components/animations/useScrollReveal";

const services = [
  {
    icon: Layout,
    title: "Site web sur-mesure",
    desc: "Sites corporate, landing pages et portfolios avec animations premium et SEO optimisé.",
    href: "/services#web",
  },
  {
    icon: Code2,
    title: "Application métier",
    desc: "CRM, ERP et outils internes adaptés à vos processus métier.",
    href: "/services#app",
  },
  {
    icon: Wrench,
    title: "Maintenance & évolution",
    desc: "Support technique, mises à jour et évolutions continues de vos outils.",
    href: "/services#maintenance",
  },
];

export function ServicesTeaser() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="px-4 py-20 min-[480px]:px-5 md:px-8 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <SectionTag label="Services" />
        <h2 className="mt-3 font-syne text-[clamp(2.1rem,3.5vw,3rem)] font-bold text-white">
          Ce que nous construisons
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              tilt
              className="group relative overflow-hidden p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue/40 hover:shadow-[0_20px_60px_rgba(50,96,255,0.15)]"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue/10 to-violet/5 opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <s.icon className="mb-4 text-blue" size={28} />
              <h3 className="font-syne text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
              <Link
                href={s.href}
                className="mt-6 inline-flex min-h-[48px] items-center gap-1 text-sm text-bluel hover:text-white"
                data-cursor-hover
              >
                En savoir plus <ArrowRight size={14} />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

