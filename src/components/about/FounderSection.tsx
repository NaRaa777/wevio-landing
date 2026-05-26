"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Code2, Palette, Brain, TrendingUp } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Btn } from "@/components/ui/Btn";
import { useCountUp } from "@/components/animations/useCountUp";

interface FounderSectionProps {
  photoUrl?: string;
}

const skills = [
  {
    icon: Code2,
    title: "Développement",
    chips: ["React", "Next.js", "Node.js", "TypeScript", "Python", "PostgreSQL"],
  },
  {
    icon: Palette,
    title: "Design UI/UX",
    chips: ["Figma", "GSAP", "Framer", "Design System", "Webflow"],
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    chips: ["Claude API", "OpenAI", "Prompt engineering", "LLM apps", "RAG"],
  },
  {
    icon: TrendingUp,
    title: "Business & Stratégie",
    chips: ["Stratégie digitale", "Growth", "CRO", "SEO technique"],
  },
];

function FounderStat({
  value,
  suffix = "",
  prefix = "",
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const { ref, display } = useCountUp({ value, suffix, prefix });
  return (
    <div className="text-center">
      <span
        ref={ref}
        className="block font-syne text-2xl font-extrabold text-white sm:text-3xl"
      >
        {display}
      </span>
      <p className="mt-1 text-[11px] leading-tight text-muted sm:text-xs">{label}</p>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function FounderSection({ photoUrl }: FounderSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const run = async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      const { gsap } = gsapMod;
      gsap.registerPlugin(stMod.ScrollTrigger);

      const card = el.querySelector(".founder-card");
      const avatar = el.querySelector(".founder-avatar-wrap");
      const identityItems = el.querySelectorAll("[data-founder-identity]");
      const skillItems = el.querySelectorAll("[data-founder-skill]");
      const ctaRow = el.querySelector("[data-founder-cta]");

      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      });

      if (card) {
        tl.fromTo(card, { opacity: 0, y: 44 }, { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" });
      }
      if (avatar) {
        tl.fromTo(
          avatar,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)" },
          "-=0.5"
        );
      }
      if (identityItems.length) {
        tl.fromTo(
          identityItems,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.55, stagger: 0.08, ease: "power3.out" },
          "-=0.35"
        );
      }
      if (skillItems.length) {
        tl.fromTo(
          skillItems,
          { opacity: 0, x: 24 },
          { opacity: 1, x: 0, duration: 0.55, stagger: 0.1, ease: "power3.out" },
          "-=0.45"
        );
      }
      if (ctaRow) {
        tl.fromTo(
          ctaRow,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
          "-=0.2"
        );
      }
    };

    run();
  }, []);

  return (
    <section ref={sectionRef} className="mt-28 overflow-hidden">
      <SectionTag label="Le fondateur" />
      <h2 className="mt-3 font-syne text-[clamp(2.1rem,3.5vw,3rem)] font-bold text-white">
        Le visage derrière Wevio
      </h2>
      <p className="mt-4 max-w-2xl text-muted">
        Pas une agence anonyme — une personne qui prend votre projet à cœur, du premier
        échange à la mise en ligne.
      </p>

      <div className="founder-card mt-12 rounded-card border border-[var(--border)] bg-white/[0.02] p-5 min-[480px]:p-8 lg:p-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Colonne gauche — Identité */}
          <div className="flex shrink-0 flex-col items-center text-center lg:w-[300px] lg:items-start lg:text-left">
            <div className="flex flex-row items-center gap-5 lg:flex-col lg:gap-0">
              <div className="founder-avatar-wrap relative flex h-20 w-20 shrink-0 items-center justify-center sm:h-28 sm:w-28 lg:mx-0 lg:mb-6 lg:h-[140px] lg:w-[140px]">
                <span
                  className="founder-ring pointer-events-none absolute inset-0 rounded-full border border-blue/40"
                  aria-hidden
                />
                <span
                  className="founder-ring founder-ring-delay pointer-events-none absolute inset-0 rounded-full border border-cyan/30"
                  aria-hidden
                />
                {photoUrl ? (
                  <div className="relative z-10 h-full w-full overflow-hidden rounded-full shadow-[0_0_40px_rgba(50,96,255,0.45)]">
                    <Image
                      src={photoUrl}
                      alt="Hugo, fondateur de Wevio"
                      fill
                      className="object-cover"
                      sizes="140px"
                    />
                  </div>
                ) : (
                  <div
                    className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue via-cyan to-violet font-syne text-3xl font-extrabold text-white shadow-[0_0_40px_rgba(50,96,255,0.45)] sm:text-4xl lg:text-5xl"
                    aria-hidden
                  >
                    H
                  </div>
                )}
              </div>

              <span
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 lg:mt-0"
                data-founder-identity
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Disponible
              </span>
            </div>

            <div className="mt-6 w-full lg:mt-0" data-founder-identity>
              <p className="font-syne text-3xl font-extrabold text-white sm:text-4xl">
                Hugo
              </p>
              <p className="mt-1 bg-gradient-to-r from-blue to-cyan bg-clip-text text-xs font-medium uppercase tracking-[0.14em] text-transparent">
                Fondateur · Dev · Designer
              </p>
            </div>

            <p
              className="mt-4 text-sm leading-relaxed text-muted"
              data-founder-identity
            >
              Je crée des expériences digitales qui allient performance technique et
              design soigné. Chaque projet Wevio est construit par moi, de A à Z — pas de
              sous-traitance, pas de template, que du sur-mesure.
            </p>

            <div
              className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start"
              data-founder-identity
            >
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2 text-sm text-muted transition-colors hover:border-blue/50 hover:text-white"
                data-cursor-hover
              >
                <LinkedInIcon />
                LinkedIn
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2 text-sm text-muted transition-colors hover:border-blue/50 hover:text-white"
                data-cursor-hover
              >
                <GitHubIcon />
                GitHub
              </Link>
            </div>
          </div>

          {/* Colonne droite — Compétences */}
          <div className="min-w-0 flex-1">
            <div className="space-y-4">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  data-founder-skill
                  className="group rounded-card border border-[var(--border)] bg-white/[0.015] p-4 transition-all duration-300 hover:translate-x-1 hover:border-blue/40 hover:bg-blue/[0.04] sm:p-5"
                >
                  <div className="flex items-start gap-3">
                    <skill.icon
                      className="mt-0.5 shrink-0 text-blue transition-colors group-hover:text-cyan"
                      size={20}
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-white">{skill.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                        {skill.chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[11px] text-dim transition-colors group-hover:border-blue/30 group-hover:text-bluel sm:px-3 sm:text-xs"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-8 grid grid-cols-2 gap-4 rounded-card border border-[var(--border)] bg-white/[0.03] p-4 sm:grid-cols-4 sm:p-6"
              data-founder-skill
            >
              <FounderStat value={50} suffix="+" label="Projets livrés" />
              <FounderStat value={3} suffix=" ans" label="D'expérience" />
              <FounderStat value={100} suffix="%" label="Code sur-mesure" />
              <FounderStat value={48} suffix="h" label="Réponse garantie" />
            </div>

            <div
              className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
              data-founder-cta
            >
              <Btn href="/contact" variant="primary" className="w-full sm:w-auto">
                Parler à Hugo directement
              </Btn>
              <blockquote className="border-l-2 border-blue pl-4 text-sm italic text-muted sm:max-w-xs">
                Je réponds à chaque message personnellement — pas un bot, pas un commercial.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
