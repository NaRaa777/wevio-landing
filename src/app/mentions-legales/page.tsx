import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { InfoGrid } from "@/components/legal/InfoGrid";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Informations légales relatives à l'éditeur et à l'hébergement du site Wevio.",
};

const UPDATED = "18 mai 2026";

export default function MentionsLegalesPage() {
  return (
    <LegalLayout
      title="Mentions légales"
      description="Informations légales relatives à l'éditeur et à l'hébergement du site wevio.fr."
      updatedAt={UPDATED}
    >
      <section>
        <h2>1. Éditeur du site</h2>
        <InfoGrid
          items={[
            { label: "Nom", value: "Fidyk Hugo" },
            { label: "Statut juridique", value: "Auto-entrepreneur" },
            { label: "Nom commercial", value: "Wevio" },
            { label: "SIREN", value: "942 782 301" },
            { label: "Adresse", value: "60 rue François 1er – 75008 Paris" },
            {
              label: "Email",
              value: (
                <a href="mailto:hugodev@wevio.fr">hugodev@wevio.fr</a>
              ),
            },
            { label: "Téléphone", value: "06 52 57 07 60" },
          ]}
        />
      </section>

      <section>
        <h2>2. Activité</h2>
        <p>
          Wevio est une agence digitale parisienne spécialisée dans la conception et le
          développement de sites web sur-mesure et d&apos;applications métier (CRM, ERP,
          outils internes) pour des clients professionnels.
        </p>
      </section>

      <section>
        <h2>3. Hébergement</h2>
        <p>
          Le site <strong>wevio.fr</strong> est hébergé par{" "}
          <strong>Vercel Inc.</strong> — 340 Pine Street, Suite 700, San Francisco, CA
          94104, États-Unis.
        </p>
        <p>
          Les projets livrés aux clients peuvent être hébergés sur l&apos;infrastructure
          de leur choix ou sur des plateformes tierces (Vercel, AWS, etc.) selon le
          contrat de prestation.
        </p>
      </section>

      <section>
        <h2>4. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (code source, design, textes,
          images, logos) sont protégés par le droit de la propriété intellectuelle et
          appartiennent à Fidyk Hugo / Wevio, sauf mention contraire.
        </p>
        <p>
          Toute reproduction, représentation ou diffusion sans autorisation écrite
          préalable est interdite.
        </p>
      </section>

      <section>
        <h2>5. Données personnelles</h2>
        <p>
          Conformément au RGPD (UE 2016/679) et à la loi Informatique et Libertés, vous
          disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de
          portabilité de vos données personnelles.
        </p>
        <p>
          Pour exercer ces droits :{" "}
          <a href="mailto:hugodev@wevio.fr">hugodev@wevio.fr</a>
        </p>
        <p>
          Pour plus de détails, consultez notre{" "}
          <a href="/politique-confidentialite">politique de confidentialité</a>.
        </p>
      </section>

      <section>
        <h2>6. Cookies</h2>
        <p>
          Ce site utilise uniquement des cookies techniques strictement nécessaires à son
          fonctionnement (session, préférences). Aucun cookie publicitaire ou de traçage
          tiers n&apos;est déposé sans votre consentement.
        </p>
      </section>

      <section>
        <h2>7. Responsabilité</h2>
        <p>
          Fidyk Hugo s&apos;efforce d&apos;assurer l&apos;exactitude des informations
          publiées sur ce site. Toutefois, sa responsabilité ne saurait être engagée en
          cas d&apos;interruption de service, d&apos;inexactitudes ou d&apos;omissions
          dans les contenus.
        </p>
      </section>

      <section>
        <h2>8. Droit applicable</h2>
        <p>
          Le présent site est soumis au droit français. En cas de litige, les tribunaux
          français sont seuls compétents.
        </p>
      </section>
    </LegalLayout>
  );
}
