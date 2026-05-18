"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Btn } from "@/components/ui/Btn";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex flex-col bg-bg/98 backdrop-blur-2xl lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation"
    >
      <div className="flex items-center justify-between px-5 py-4">
        <span className="font-syne text-xl font-extrabold text-white">
          Wevio<span className="text-blue">.</span>
        </span>
        <button
          type="button"
          onClick={onClose}
          className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full border border-[var(--border)] text-white"
          aria-label="Fermer le menu"
        >
          <X size={22} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={onClose}
            className={`min-h-[48px] py-3 font-syne text-3xl font-bold transition-colors ${
              pathname === l.href ? "text-blue" : "text-white"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="p-8">
        <Btn href="/contact" variant="primary" className="w-full">
          Demander un devis
        </Btn>
      </div>
    </div>
  );
}


