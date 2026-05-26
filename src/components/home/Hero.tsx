"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Btn } from "@/components/ui/Btn";
import { HeroDashboardMockup } from "@/components/home/HeroDashboardMockup";

const words = ["Sites", "web", "&", "apps", "métier", "sur-mesure"];

export function Hero() {
  const mockupRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const run = async () => {
      const { gsap } = await import("gsap");
      const spans = titleRef.current?.querySelectorAll(".word");
      if (spans?.length) {
        gsap.fromTo(
          spans,
          { y: "110%" },
          { y: "0%", duration: 0.9, stagger: 0.06, ease: "power4.out", delay: 0.3 }
        );
      }
      if (mockupRef.current) {
        gsap.fromTo(
          mockupRef.current,
          { rotateX: -5, opacity: 0, y: 40 },
          { rotateX: 0, opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.6 }
        );
        const el = mockupRef.current;
        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(el, {
            rotateY: x * 12,
            rotateX: -y * 8 - 2,
            transformPerspective: 1000,
            duration: 0.4,
          });
        };
        const onLeave = () => {
          gsap.to(el, { rotateY: 0, rotateX: -2, duration: 0.6, ease: "elastic.out(1,0.5)" });
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        return () => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        };
      }
    };
    run();
  }, []);

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 min-[480px]:px-5 md:px-8 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2" aria-hidden>
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-full border border-blue/20 animate-pulse"
            style={{
              margin: `${i * 40}px`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/[0.03] px-4 py-2 text-xs text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
            Agence digitale — Paris
          </span>

          <h1
            ref={titleRef}
            className="font-syne text-[clamp(3rem,6.8vw,6.2rem)] font-extrabold leading-[1.02] tracking-tight text-white"
          >
            {words.map((w) => (
              <span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <span className="word inline-block">{w}</span>
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted">
            Nous concevons des sites web premium et des applications métier (CRM, ERP,
            outils internes) pour les entreprises qui veulent aller vite.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row">
            <Btn href="/contact" variant="primary">
              Demander un devis <ArrowRight size={16} />
            </Btn>
            <Btn href="/portfolio" variant="outline">
              Voir le portfolio
            </Btn>
          </div>

          <ul className="mt-10 flex flex-wrap gap-4">
            {["50+ projets livrés", "Délais respectés", "Support 12 mois"].map((b) => (
              <li
                key={b}
                className="rounded-full border border-[var(--border)] bg-white/[0.03] px-4 py-2 text-xs text-muted"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={mockupRef}
          className="relative hidden min-[480px]:block"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          <HeroDashboardMockup />
        </div>
      </div>
    </section>
  );
}


