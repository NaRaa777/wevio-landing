import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente des prestations Wevio — agence digitale Paris.",
};

const UPDATED = "18 mai 2026";

export default function CgvPage() {
  return (
    <LegalLayout
      title="Conditions générales de vente"
      description="Les présentes CGV régissent les prestations de conception et développement web réalisées par Wevio pour des clients professionnels."
      updatedAt={UPDATED}
    >
      <section>
        <h2>Préambule</h2>
        <p>
          Toute commande ou signature de devis implique l&apos;acceptation pleine et
          entière des présentes CGV. Celles-ci prévalent sur tout document émanant du
          Client, sauf accord écrit contraire.
        </p>
        <p>
          Wevio est une marque commerciale de <strong>Fidyk Hugo</strong>,
          auto-entrepreneur, SIREN 942 782 301, 60 rue François 1er – 75008 Paris —{" "}
          <a href="mailto:hugodev@wevio.fr">hugodev@wevio.fr</a>.
        </p>
      </section>

      <section>
        <h2>Article 1 — Objet</h2>
        <p>
          Wevio propose des prestations de services numériques : conception et
          développement de sites web, applications métier (CRM, ERP, outils internes),
          intégrations, maintenance et accompagnement technique.
        </p>
        <p>
          Le périmètre exact de chaque mission est défini dans le devis ou le contrat de
          prestation signé par les parties.
        </p>
      </section>

      <section>
        <h2>Article 2 — Devis et commande</h2>
        <p>
          Chaque projet fait l&apos;objet d&apos;un devis détaillé (description,
          livrables, délais, prix). Le devis est valable 30 jours à compter de sa date
          d&apos;émission, sauf mention contraire.
        </p>
        <p>
          La commande est réputée acceptée à réception du devis signé (ou validation
          écrite par email) accompagné, le cas échéant, de l&apos;acompte prévu.
        </p>
      </section>

      <section>
        <h2>Article 3 — Prix et paiement</h2>
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-card border border-[var(--border)] bg-white/[0.02] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-dim">
              Acompte
            </p>
            <p className="mt-2 font-syne text-2xl font-bold text-white">30 à 50 %</p>
            <p className="mt-1 text-sm text-muted">
              À la commande, selon le devis
            </p>
          </div>
          <div className="rounded-card border border-[var(--border)] bg-white/[0.02] p-6">
            <p className="text-xs font-medium uppercase tracking-widest text-dim">
              Solde
            </p>
            <p className="mt-2 font-syne text-2xl font-bold text-white">À la livraison</p>
            <p className="mt-1 text-sm text-muted">
              Ou selon jalons définis au devis
            </p>
          </div>
        </div>
        <h3>Modalités</h3>
        <p>
          Le paiement s&apos;effectue par virement bancaire ou tout autre moyen convenu
          dans le devis. Il est exigible aux échéances indiquées sur la facture.
        </p>
        <p>
          Tout retard de paiement entraîne des pénalités au taux légal en vigueur, ainsi
          qu&apos;une indemnité forfaitaire de 40 € pour frais de recouvrement (art.
          L.441-10 du Code de commerce), sans préjudice de dommages et intérêts
          complémentaires.
        </p>
        <h3>Non-inclus par défaut</h3>
        <ul>
          <li>Hébergement, nom de domaine et certificats SSL (sauf mention au devis)</li>
          <li>Création de contenus rédactionnels ou visuels non prévus au devis</li>
          <li>Formation au-delà de celle explicitement prévue</li>
          <li>Évolutions hors périmètre du devis initial</li>
        </ul>
      </section>

      <section>
        <h2>Article 4 — Livraison et recette</h2>
        <p>
          Les délais de livraison sont indicatifs et communiqués dans le devis. Ils
          courent à compter de la réception de l&apos;acompte et de l&apos;ensemble des
          éléments nécessaires fournis par le Client (contenus, accès, validations).
        </p>
        <p>
          La livraison est matérialisée par la mise en ligne ou la remise des accès
          convenus. Le Client dispose de <strong>8 jours ouvrés</strong> pour formuler
          des réserves écrites. Passé ce délai sans réserve, la prestation est réputée
          acceptée.
        </p>
      </section>

      <section>
        <h2>Article 5 — Propriété intellectuelle</h2>
        <p>
          Sauf stipulation contraire au devis, Wevio reste propriétaire de ses
          méthodes, outils, bibliothèques et composants génériques réutilisables.
        </p>
        <p>
          Après paiement intégral, le Client bénéficie des droits d&apos;exploitation
          sur les livrables spécifiques créés pour son projet (design, contenus fournis
          par le Client, code spécifique), dans les limites du devis.
        </p>
        <div className="rounded-card border border-blue/20 bg-blue/5 p-4">
          <p className="mb-0 text-sm">
            Wevio se réserve le droit de mentionner le projet à titre de référence
            commerciale (portfolio), sauf opposition écrite du Client.
          </p>
        </div>
      </section>

      <section>
        <h2>Article 6 — Données personnelles</h2>
        <p>
          Dans le cadre des prestations, Wevio peut accéder à des données personnelles
          du Client ou de ses utilisateurs. Le rôle de chaque partie (responsable de
          traitement / sous-traitant) est précisé au contrat ou dans un accord de
          sous-traitance (DPA) lorsque nécessaire.
        </p>
        <p>
          Voir également notre{" "}
          <a href="/politique-confidentialite">politique de confidentialité</a>.
        </p>
      </section>

      <section>
        <h2>Article 7 — Garanties et responsabilité</h2>
        <p>
          Wevio s&apos;engage à réaliser les prestations avec diligence et
          conformément au devis. La garantie couvre la correction des anomalies
          reproduites signalées dans un délai de <strong>30 jours</strong> après
          livraison, hors évolutions fonctionnelles.
        </p>
        <p>Wevio ne saurait être tenu responsable notamment de :</p>
        <ul>
          <li>Interruptions liées à des tiers (hébergeur, registrar, API externes)</li>
          <li>Contenus fournis par le Client ou des tiers</li>
          <li>Dommages indirects, pertes d&apos;exploitation ou manque à gagner</li>
        </ul>
        <p>
          La responsabilité de Wevio est en tout état de cause limitée au montant HT
          facturé au titre de la prestation concernée.
        </p>
      </section>

      <section>
        <h2>Article 8 — Maintenance</h2>
        <p>
          Une offre de maintenance (correctifs, mises à jour, support) peut être
          souscrite séparément. En l&apos;absence de contrat de maintenance, toute
          intervention hors garantie fait l&apos;objet d&apos;un devis complémentaire.
        </p>
      </section>

      <section>
        <h2>Article 9 — Résiliation</h2>
        <p>
          En cas de manquement grave non réparé sous 15 jours après mise en demeure
          écrite, chaque partie peut résilier le contrat. Les sommes dues au titre des
          prestations déjà réalisées restent exigibles.
        </p>
        <p>
          En cas de résiliation à l&apos;initiative du Client sans faute de Wevio, les
          travaux engagés et l&apos;acompte restent acquis à Wevio.
        </p>
      </section>

      <section>
        <h2>Article 10 — Droit applicable</h2>
        <p>
          Les présentes CGV sont soumises au droit français. En cas de litige, les
          parties s&apos;engagent à rechercher une solution amiable. À défaut, le
          tribunal compétent sera celui du ressort du domicile professionnel de Fidyk
          Hugo (Paris).
        </p>
      </section>
    </LegalLayout>
  );
}
