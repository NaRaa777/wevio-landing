import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgv", label: "CGV" },
  { href: "/politique-confidentialite", label: "Confidentialité" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-surf/50">
      <div className="mx-auto max-w-[1280px] px-4 py-12 min-[480px]:px-5 md:px-8 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-syne text-2xl font-extrabold text-white">
              Wevio<span className="text-blue">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Agence digitale parisienne — sites web sur-mesure et applications métier.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-bluel">
              Navigation
            </p>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-bluel">
              Contact
            </p>
            <p className="text-sm text-muted">Paris, France</p>
            <a
              href="mailto:contact@wevio.fr"
              className="mt-1 block text-sm text-bluel hover:text-white"
            >
              contact@wevio.fr
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-8 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Wevio. Tous droits réservés.</p>
          <nav className="flex flex-wrap gap-4" aria-label="Pages légales">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-muted">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
