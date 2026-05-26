import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Wevio collecte, utilise et protège vos données personnelles (RGPD).",
};

const UPDATED = "18 mai 2026";

const rights = [
  { title: "Accès", desc: "Obtenir une copie de vos données" },
  { title: "Rectification", desc: "Corriger des données inexactes" },
  { title: "Effacement", desc: "Demander la suppression de vos données" },
  { title: "Portabilité", desc: "Recevoir vos données dans un format structuré" },
  { title: "Limitation", desc: "Restreindre le traitement de vos données" },
  { title: "Opposition", desc: "Vous opposer à certains traitements" },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      description="Comment Wevio collecte, utilise et protège vos données personnelles, conformément au RGPD."
      updatedAt={UPDATED}
    >
      <section>
        <h2>1. Responsable de traitement</h2>
        <p>
          <strong>Fidyk Hugo</strong>, auto-entrepreneur opérant sous la marque{" "}
          <strong>Wevio</strong>, SIREN 942 782 301, 60 rue François 1er – 75008 Paris,
          est responsable de traitement pour les données collectées via le site wevio.fr
          et dans le cadre de ses activités commerciales.
        </p>
        <p>
          Pour les données traitées dans le cadre d&apos;un projet livré au Client, le
          Client est généralement responsable de traitement et Wevio agit en qualité de
          sous-traitant, selon les termes du contrat ou d&apos;un accord DPA.
        </p>
      </section>

      <section>
        <h2>2. Données collectées et finalités</h2>
        <div className="overflow-x-auto rounded-card border border-[var(--border)]">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-blue/10">
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-bluel">
                  Données
                </th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-bluel">
                  Finalité
                </th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-bluel">
                  Durée
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              <tr>
                <td className="px-4 py-3 text-muted">Nom, email, téléphone (formulaire contact)</td>
                <td className="px-4 py-3 text-muted">Réponse à votre demande, relation commerciale</td>
                <td className="px-4 py-3 text-muted">3 ans après dernier contact</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-muted">Données de facturation</td>
                <td className="px-4 py-3 text-muted">Gestion contractuelle et comptable</td>
                <td className="px-4 py-3 text-muted">10 ans (obligation légale)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-muted">Logs techniques</td>
                <td className="px-4 py-3 text-muted">Sécurité et bon fonctionnement du site</td>
                <td className="px-4 py-3 text-muted">12 mois maximum</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-muted">Données de projet (clients)</td>
                <td className="px-4 py-3 text-muted">Exécution de la prestation</td>
                <td className="px-4 py-3 text-muted">Durée du contrat + délai convenu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>3. Base légale</h2>
        <ul>
          <li>
            <strong>Exécution du contrat</strong> — pour les données nécessaires à la
            réalisation de votre projet
          </li>
          <li>
            <strong>Intérêt légitime</strong> — pour la prospection B2B et l&apos;amélioration
            de nos services
          </li>
          <li>
            <strong>Obligation légale</strong> — pour la conservation des données
            comptables
          </li>
          <li>
            <strong>Consentement</strong> — lorsque vous nous contactez volontairement via
            le formulaire
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Sous-traitants techniques</h2>
        <p>
          Vos données peuvent être traitées par les prestataires suivants, dans la limite
          nécessaire à leurs missions :
        </p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong> — hébergement du site web
          </li>
          <li>
            <strong>Fournisseurs d&apos;email</strong> — envoi et réception de messages
            professionnels
          </li>
          <li>
            <strong>Outils de gestion de projet</strong> — selon les besoins du contrat
          </li>
        </ul>
        <p>
          Aucune donnée n&apos;est vendue ou cédée à des tiers à des fins publicitaires.
        </p>
      </section>

      <section>
        <h2>5. Vos droits</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {rights.map((r) => (
            <div
              key={r.title}
              className="rounded-card border border-[var(--border)] bg-white/[0.02] p-4"
            >
              <strong className="block text-sm text-white">{r.title}</strong>
              <span className="text-sm text-dim">{r.desc}</span>
            </div>
          ))}
        </div>
        <p className="mt-4">
          Pour exercer vos droits :{" "}
          <a href="mailto:hugodev@wevio.fr">hugodev@wevio.fr</a> — réponse sous 30 jours.
          Réclamation auprès de la CNIL :{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            cnil.fr
          </a>
          .
        </p>
      </section>

      <section>
        <h2>6. Sécurité</h2>
        <p>
          Wevio met en œuvre des mesures techniques et organisationnelles adaptées :
          accès restreints, chiffrement en transit (HTTPS/TLS), sauvegardes selon les
          projets, bonnes pratiques de développement sécurisé.
        </p>
      </section>

      <section>
        <h2>7. Cookies</h2>
        <p>
          Ce site n&apos;utilise pas de cookies publicitaires. Seuls des cookies
          techniques peuvent être employés pour assurer son bon fonctionnement. Vous
          pouvez configurer votre navigateur pour les refuser, ce qui peut limiter
          certaines fonctionnalités.
        </p>
      </section>

      <section>
        <h2>8. Transferts hors UE</h2>
        <p>
          Certains sous-traitants (notamment Vercel Inc.) peuvent être situés aux
          États-Unis. Les transferts s&apos;effectuent dans le cadre du Data Privacy
          Framework UE-USA ou via des clauses contractuelles types approuvées par la
          Commission européenne.
        </p>
      </section>
    </LegalLayout>
  );
}
