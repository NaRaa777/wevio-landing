"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Btn } from "@/components/ui/Btn";
import { MobileMenu } from "./MobileMenu";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--border)] bg-bg/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 min-[480px]:px-5 md:px-8 lg:px-8"
          aria-label="Navigation principale"
        >
          <Link
            href="/"
            className="font-syne text-xl font-extrabold tracking-tight text-white"
            data-cursor-hover
          >
            Wevio<span className="text-blue">.</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative text-sm font-medium transition-colors ${
                    pathname === l.href ? "text-white" : "text-muted hover:text-white"
                  }`}
                  data-cursor-hover
                >
                  {l.label}
                  {pathname === l.href && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded bg-blue" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Btn href="/contact" variant="primary">
              Demander un devis
            </Btn>
          </div>

          <button
            type="button"
            className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-[var(--border)] text-white lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            data-cursor-hover
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={links} />
    </>
  );
}


