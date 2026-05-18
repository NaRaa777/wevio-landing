import { Fragment, type ReactNode } from "react";

interface InfoGridProps {
  items: { label: string; value: ReactNode }[];
}

export function InfoGrid({ items }: InfoGridProps) {
  return (
    <dl className="divide-y divide-[var(--border)] rounded-card border border-[var(--border)] bg-white/[0.02]">
      {items.map(({ label, value }) => (
        <Fragment key={label}>
          <div className="grid gap-1 px-6 py-4 sm:grid-cols-[180px_1fr]">
            <dt className="text-sm text-dim">{label}</dt>
            <dd className="text-sm text-white">{value}</dd>
          </div>
        </Fragment>
      ))}
    </dl>
  );
}
