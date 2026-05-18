import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Btn } from "@/components/ui/Btn";
import type { ServiceBlock } from "@/types";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sites web sur-mesure, applications métier et maintenance — découvrez nos offres.",
};

const blocks: ServiceBlock[] = [
  {
    id: "web",
    title: "Site web sur-mesure",
    description:
      "Sites corporate, landing pages et portfolios avec un design premium, des animations soignées et un référencement optimisé dès le lancement.",
    tags: ["Next.js", "SEO", "GSAP", "CMS headless"],
    features: [
      { title: "Design UI/UX", desc: "Maquettes Figma et design system cohérent avec votre marque." },
      { title: "Performance", desc: "Score Lighthouse 95+, images optimisées, Core Web Vitals." },
      { title: "CMS intégré", desc: "Sanity, Contentful ou Strapi pour une autonomie totale." },
    ],
  },
  {
    id: "app",
    title: "Application métier",
    description:
      "CRM, ERP, outils internes et dashboards sur-mesure — nous modélisons vos processus métier pour livrer un outil que vos équipes adoptent.",
    tags: ["React", "Node.js", "PostgreSQL", "API"],
    features: [
      { title: "Analyse métier", desc: "Ateliers pour cartographier vos flux et besoins réels." },
      { title: "Architecture scalable", desc: "Stack moderne, tests, CI/CD et documentation." },
      { title: "Intégrations", desc: "Connexion à vos outils existants (ERP, compta, email)." },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & évolution",
    description:
      "Un partenaire technique de long terme : corrections, mises à jour de sécurité, évolutions fonctionnelles et support réactif.",
    tags: ["SLA", "Monitoring", "Support", "Évolutions"],
    features: [
      { title: "Support 12 mois", desc: "Hotline et tickets avec temps de réponse garanti." },
      { title: "Mises à jour", desc: "Patches sécurité, dépendances et compatibilité navigateurs." },
      { title: "Roadmap produit", desc: "Priorisation et livraison itérative de nouvelles features." },
    ],
  },
];

const steps = [
  { n: "01", title: "Découverte", desc: "Appel découverte, brief et estimation sous 48h." },
  { n: "02", title: "Conception", desc: "Maquettes, validation et planning détaillé." },
  { n: "03", title: "Développement", desc: "Sprints agiles avec démos hebdomadaires." },
  { n: "04", title: "Livraison", desc: "Mise en production, formation et support." },
];

export default function ServicesPage() {
  return (
    <div className="px-4 pb-24 pt-32 min-[480px]:px-5 md:px-8 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <header className="mx-auto max-w-3xl text-center">
          <SectionTag label="Services" className="justify-center" />
          <h1 className="mt-4 font-syne text-[clamp(2.5rem,5vw,4rem)] font-extrabold">
            <span className="bg-gradient-to-r from-blue via-bluel to-cyan bg-clip-text text-transparent">
              Des solutions digitales sur-mesure
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted">
            Du site vitrine à l&apos;application métier complexe — nous accompagnons votre
            transformation digitale de A à Z.
          </p>
        </header>

        <div className="mt-20 space-y-24">
          {blocks.map((b, i) => (
            <section
              key={b.id}
              id={b.id}
              className={`grid items-start gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""
              }`}
            >
              <div>
                <h2 className="font-syne text-3xl font-bold text-white">{b.title}</h2>
                <p className="mt-4 text-muted">{b.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Btn href="/contact" variant="primary">
                    Demander un devis <ArrowRight size={16} />
                  </Btn>
                </div>
              </div>
              <ul className="space-y-4">
                {b.features.map((f) => (
                  <li
                    key={f.title}
                    className="rounded-card border border-[var(--border)] bg-white/[0.02] p-6"
                  >
                    <div className="flex gap-3">
                      <Check className="mt-0.5 shrink-0 text-cyan" size={18} />
                      <div>
                        <h3 className="font-medium text-white">{f.title}</h3>
                        <p className="mt-1 text-sm text-muted">{f.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-28">
          <SectionTag label="Processus" />
          <h2 className="mt-3 font-syne text-[clamp(2.1rem,3.5vw,3rem)] font-bold text-white">
            Comment nous travaillons
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-card border border-[var(--border)] bg-white/[0.02] p-8"
              >
                <span
                  className="font-syne text-5xl font-extrabold text-transparent"
                  style={{
                    background: "linear-gradient(135deg, var(--blue), var(--violet))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  {s.n}
                </span>
                <h3 className="mt-4 font-syne text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
