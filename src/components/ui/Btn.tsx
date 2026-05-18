"use client";

import Link from "next/link";
import { type ReactNode, type RefObject } from "react";
import { useMagneticBtn } from "@/components/animations/useMagneticBtn";

type Variant = "primary" | "ghost" | "outline";

interface BtnProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white hover:bg-bluel shadow-[0_0_24px_rgba(50,96,255,0.35)]",
  ghost: "bg-transparent text-white hover:bg-white/5",
  outline:
    "bg-transparent border border-[var(--border)] text-white hover:border-blue/50",
};

export function Btn({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  ariaLabel,
}: BtnProps) {
  const magneticRef = useMagneticBtn();
  const base =
    "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-colors duration-200 cursor-pointer";

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        ref={magneticRef as RefObject<HTMLAnchorElement>}
        className={cls}
        aria-label={ariaLabel}
        data-cursor-hover
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={magneticRef as RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={cls}
      aria-label={ariaLabel}
      data-cursor-hover
    >
      {children}
    </button>
  );
}


