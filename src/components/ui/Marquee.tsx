const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "GSAP",
  "Tailwind CSS",
  "CRM sur-mesure",
  "ERP",
  "E-commerce",
  "SaaS",
  "Design UI",
  "API REST",
  "Docker",
  "AWS",
  "Maintenance",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-[var(--border)] py-5" aria-label="Technologies et services">
      <div className="flex w-max marquee-track gap-12">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-12 text-sm font-medium uppercase tracking-widest text-dim"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-blue" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}


