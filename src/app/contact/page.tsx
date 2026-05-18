"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Btn } from "@/components/ui/Btn";
import type { FaqItem } from "@/types";

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "Quel est le délai moyen de livraison ?",
    answer:
      "Un site vitrine est livré en 3 à 4 semaines. Une application métier prend entre 6 et 12 semaines selon la complexité.",
  },
  {
    id: 2,
    question: "Proposez-vous un accompagnement post-livraison ?",
    answer:
      "Oui, tous nos projets incluent 12 mois de support technique, corrections de bugs et mises à jour de sécurité.",
  },
  {
    id: 3,
    question: "Travaillez-vous avec des clients hors Paris ?",
    answer:
      "Absolument. Nous travaillons en remote avec des clients dans toute la France et en Europe.",
  },
  {
    id: 4,
    question: "Comment se déroule le premier échange ?",
    answer:
      "Un appel découverte de 30 minutes pour comprendre votre projet, suivi d'un devis détaillé sous 48h.",
  },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((f) => (
        <div
          key={f.id}
          className="overflow-hidden rounded-card border border-[var(--border)] bg-white/[0.02]"
        >
          <button
            type="button"
            className="flex min-h-[48px] w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-white"
            onClick={() => setOpen(open === f.id ? null : f.id)}
            aria-expanded={open === f.id}
          >
            {f.question}
            <span className="text-bluel">{open === f.id ? "−" : "+"}</span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: open === f.id ? "200px" : "0" }}
          >
            <p className="px-6 pb-4 text-sm text-muted">{f.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="px-4 pb-24 pt-32 min-[480px]:px-5 md:px-8 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionTag label="Contact" />
            <h1 className="mt-3 font-syne text-[clamp(2.1rem,3.5vw,3rem)] font-bold text-white">
              Parlons de votre projet
            </h1>
            <p className="mt-4 text-muted">
              Décrivez-nous votre besoin — nous revenons vers vous sous 24h ouvrées.
            </p>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-xs text-cyan">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" />
              Disponible pour de nouveaux projets
            </span>

            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={18} className="text-blue" />
                Paris, France
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <Mail size={18} className="text-blue" />
                <a href="mailto:contact@wevio.fr" className="hover:text-white">
                  contact@wevio.fr
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <Phone size={18} className="text-blue" />
                +33 1 23 45 67 89
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-card border border-[var(--border)] bg-white/[0.02] p-8"
          >
            {sent ? (
              <p className="py-12 text-center text-muted">
                Merci ! Votre message a bien été envoyé. Nous vous répondons sous 24h.
              </p>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-xs text-dim">Nom</span>
                    <input
                      required
                      name="name"
                      className="w-full min-h-[48px] rounded-lg border border-[var(--border)] bg-bg px-4 text-white outline-none focus:border-blue"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs text-dim">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full min-h-[48px] rounded-lg border border-[var(--border)] bg-bg px-4 text-white outline-none focus:border-blue"
                    />
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className="mb-1 block text-xs text-dim">Téléphone</span>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full min-h-[48px] rounded-lg border border-[var(--border)] bg-bg px-4 text-white outline-none focus:border-blue"
                  />
                </label>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-xs text-dim">Type de projet</span>
                    <select
                      name="type"
                      className="w-full min-h-[48px] rounded-lg border border-[var(--border)] bg-bg px-4 text-white outline-none focus:border-blue"
                    >
                      <option>Site web</option>
                      <option>Application métier</option>
                      <option>E-commerce</option>
                      <option>Maintenance</option>
                      <option>Autre</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs text-dim">Budget</span>
                    <select
                      name="budget"
                      className="w-full min-h-[48px] rounded-lg border border-[var(--border)] bg-bg px-4 text-white outline-none focus:border-blue"
                    >
                      <option>&lt; 5 000 €</option>
                      <option>5 000 – 15 000 €</option>
                      <option>15 000 – 50 000 €</option>
                      <option>&gt; 50 000 €</option>
                    </select>
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className="mb-1 block text-xs text-dim">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="w-full resize-none rounded-lg border border-[var(--border)] bg-bg px-4 py-3 text-white outline-none focus:border-blue"
                  />
                </label>
                <div className="mt-6">
                  <Btn type="submit" variant="primary" className="w-full">
                    Envoyer le message
                  </Btn>
                </div>
              </>
            )}
          </form>
        </div>

        <section className="mt-24">
          <SectionTag label="FAQ" />
          <h2 className="mt-3 font-syne text-2xl font-bold text-white">
            Questions fréquentes
          </h2>
          <div className="mt-8 max-w-2xl">
            <FaqAccordion />
          </div>
        </section>
      </div>
    </div>
  );
}
