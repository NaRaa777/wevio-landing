interface SectionTagProps {
  label: string;
  className?: string;
}

export function SectionTag({ label, className = "" }: SectionTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-bluel ${className}`}
    >
      <span className="h-px w-6 bg-blue" aria-hidden />
      {label}
    </span>
  );
}


