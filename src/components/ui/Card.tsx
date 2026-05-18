import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  tilt?: boolean;
}

export function Card({ children, className = "", onClick, tilt }: CardProps) {
  return (
    <div
      className={`rounded-card border border-[var(--border)] bg-[rgba(255,255,255,0.024)] ${className}`}
      onClick={onClick}
      data-tilt={tilt ? "true" : undefined}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}


