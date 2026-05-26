import type { Metadata } from "next";
import { Check } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { FounderSection } from "@/components/about/FounderSection";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez Wevio, agence digitale parisienne — nos valeurs, notre approche et le fondateur.",
};

const features = [
  "Développement full-stack basé à Paris",
  "Méthode agile avec livraisons hebdomadaires",
  "Support et maintenance sur 12 mois inclus",
];

const values = [
  {
    title: "Craft",
    desc: "Chaque pixel et chaque ligne de code comptent. Nous visons l'excellence technique et visuelle.",
  },
  {
    title: "Partenariat",
    desc: "Nous nous intégrons à votre équipe comme un partenaire, pas un simple prestataire.",
  },
  {
    title: "Résultats",
    desc: "Nos projets sont mesurés par des KPIs concrets : conversion, productivité, adoption.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-4 pb-24 pt-32 min-[480px]:px-5 md:px-8 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-square max-h-[480px] overflow-hidden rounded-card border border-[var(--border)] bg-surf">
            <div className="absolute inset-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-blue/30" />
              <div className="rounded-lg bg-violet/20" />
              <div className="col-span-2 rounded-lg bg-cyan/15" />
            </div>
          </div>
          <div>
            <SectionTag label="À propos" />
            <h1 className="mt-3 font-syne text-[clamp(2.1rem,3.5vw,3rem)] font-bold text-white">
              Une agence digitale qui livre
            </h1>
            <p className="mt-4 text-muted">
              Fondée à Paris, Wevio accompagne les PME et scale-ups dans la création de sites
              web premium et d&apos;applications métier sur-mesure. Notre obsession : des outils
              que vos équipes adoptent vraiment.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted">
                  <Check className="shrink-0 text-cyan" size={18} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-28">
          <SectionTag label="Valeurs" />
          <h2 className="mt-3 font-syne text-[clamp(2.1rem,3.5vw,3rem)] font-bold text-white">
            Ce qui nous guide
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-card border border-[var(--border)] bg-white/[0.02] p-8"
              >
                <h3 className="font-syne text-xl font-bold text-blue">{v.title}</h3>
                <p className="mt-3 text-sm text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <FounderSection />
      </div>
    </div>
  );
}
