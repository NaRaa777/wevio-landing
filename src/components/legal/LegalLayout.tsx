import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionTag } from "@/components/ui/SectionTag";
import type { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  updatedAt: string;
}

export function LegalLayout({
  title,
  description,
  children,
  updatedAt,
}: LegalLayoutProps) {
  return (
    <article className="px-4 pb-24 pt-28 min-[480px]:px-5 md:px-8 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex min-h-[48px] items-center gap-2 text-sm text-muted transition-colors hover:text-white"
        >
          <ArrowLeft size={16} aria-hidden />
          Retour à l&apos;accueil
        </Link>

        <header className="border-b border-[var(--border)] pb-10">
          <SectionTag label="Légal" />
          <h1 className="mt-4 font-syne text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-white">
            {title}
          </h1>
          <p className="mt-3 text-muted">{description}</p>
        </header>

        <div className="legal-content mt-12 space-y-12 text-[15px] leading-relaxed text-muted [&_a]:text-bluel [&_a]:no-underline hover:[&_a]:text-white [&_h2]:mb-5 [&_h2]:border-b [&_h2]:border-[var(--border)] [&_h2]:pb-3 [&_h2]:font-syne [&_h2]:text-sm [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-widest [&_h2]:text-bluel [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-white [&_li]:mb-1.5 [&_p]:mb-3 [&_strong]:text-white [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>

        <p className="mt-16 border-t border-[var(--border)] pt-6 font-mono text-xs text-dim">
          Dernière mise à jour : {updatedAt} — Paris, France
        </p>
      </div>
    </article>
  );
}
