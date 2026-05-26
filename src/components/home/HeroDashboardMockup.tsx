"use client";

import {
  LayoutDashboard,
  Users,
  FileText,
  HardHat,
  Wrench,
  FileCheck,
  Image as ImageIcon,
  Package,
  Bell,
  Search,
  Plus,
  Sparkles,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Clients" },
  { icon: FileText, label: "Devis" },
  { icon: HardHat, label: "Chantiers" },
  { icon: Wrench, label: "SAV" },
  { icon: FileCheck, label: "Contrats" },
  { icon: ImageIcon, label: "Photos" },
  { icon: Package, label: "Catalogue" },
];

const kpis = [
  { label: "CA facturé HT", value: "38 500 €", trend: "+12%", color: "text-cyan" },
  { label: "Devis en attente", value: "17 095 €", trend: "17 devis", color: "text-bluel" },
  { label: "SAV ouverts", value: "2", trend: "1 urgent", color: "text-orange-400" },
  { label: "Prochaine interv.", value: "Dans 2j", trend: "Planifié", color: "text-emerald-400" },
];

const aiActions = [
  "Relancer le devis Martin — 7 jours sans réponse",
  "SAV Dupont : intervention à planifier avant vendredi",
  "3 factures impayées — envoyer relance automatique",
];

const notifications = [
  { title: "SAV critique", desc: "Client Dupont — délai dépassé", color: "border-red-500/50 bg-red-500/10" },
  { title: "Devis en attente", desc: "Martin — 7 200 € à signer", color: "border-orange-500/50 bg-orange-500/10" },
  { title: "Paiement reçu", desc: "Facture #1842 — 4 350 €", color: "border-emerald-500/50 bg-emerald-500/10" },
];

export function HeroDashboardMockup() {
  return (
    <div
      className="overflow-hidden rounded-[16px] border border-[var(--border)] bg-[#040E1C] shadow-[0_32px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(50,96,255,0.12)]"
      aria-hidden
    >
      {/* macOS chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#081628] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-[10px] text-dim">AquaGest Pro</span>
      </div>

      {/* Topbar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#081628]/90 px-3 py-2 sm:gap-3 sm:px-4">
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#3260FF] to-[#22D3EE] text-[10px] font-bold text-white">
            A
          </span>
          <span className="hidden text-xs font-semibold text-white sm:inline">AquaGest Pro</span>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/[0.07] bg-[#040E1C] px-2.5 py-1.5">
          <Search className="shrink-0 text-dim" size={12} />
          <span className="truncate text-[10px] text-dim">Rechercher client, devis, SAV…</span>
        </div>
        <button
          type="button"
          tabIndex={-1}
          className="flex shrink-0 items-center gap-1 rounded-lg bg-[#3260FF] px-2 py-1.5 text-[10px] font-medium text-white shadow-[0_0_16px_rgba(50,96,255,0.35)]"
        >
          <Plus size={12} />
          <span className="hidden sm:inline">Nouveau</span>
        </button>
      </div>

      <div className="flex min-h-[280px] sm:min-h-[320px]">
        {/* Sidebar */}
        <aside className="hidden w-[118px] shrink-0 border-r border-white/[0.06] bg-[#081628]/50 py-2 sm:block">
          <nav className="space-y-0.5 px-1.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[9px] ${
                  item.active
                    ? "bg-[#3260FF]/20 text-white"
                    : "text-dim hover:bg-white/[0.03]"
                }`}
              >
                <item.icon size={11} className={item.active ? "text-[#5B8EFF]" : ""} />
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 overflow-hidden p-2.5 sm:p-3">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold text-white sm:text-xs">Bonjour 👋</p>
              <p className="text-[9px] text-dim">Lundi — Saison haute en cours</p>
            </div>
            <Bell className="text-dim" size={14} />
          </div>

          {/* KPIs */}
          <div className="mb-2 grid grid-cols-2 gap-1.5 lg:grid-cols-4">
            {kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2 transition-colors hover:border-[#3260FF]/30"
              >
                <p className="text-[8px] uppercase tracking-wide text-dim">{k.label}</p>
                <p className="mt-0.5 font-syne text-sm font-bold text-white">{k.value}</p>
                <p className={`text-[8px] ${k.color}`}>{k.trend}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-2 lg:grid-cols-[1fr_120px]">
            <div className="space-y-2">
              {/* Actions IA */}
              <div className="rounded-lg border border-orange-500/25 bg-orange-500/[0.06] p-2">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1 text-[9px] font-medium text-white">
                    <Sparkles size={10} className="text-orange-400" />
                    Actions du jour — IA
                  </span>
                  <span className="animate-pulse rounded-full bg-orange-500/20 px-1.5 py-0.5 text-[8px] font-medium text-orange-300">
                    Score 72/100
                  </span>
                </div>
                <ul className="space-y-1">
                  {aiActions.map((line, i) => (
                    <li
                      key={i}
                      className="flex gap-1.5 text-[8px] leading-snug text-muted"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-orange-400" />
                      <span className="hero-mockup-shimmer">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chart SVG */}
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
                <p className="mb-1 text-[9px] font-medium text-white">Chiffre d&apos;affaires — 12 mois</p>
                <svg
                  viewBox="0 0 280 72"
                  className="h-auto w-full"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3260FF" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#3260FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* grid lines */}
                  {[18, 36, 54].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="280"
                      y2={y}
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />
                  ))}
                  <path
                    d="M0 58 L24 52 L48 48 L72 44 L96 38 L120 42 L144 35 L168 28 L192 32 L216 22 L240 18 L264 12 L280 8"
                    fill="none"
                    stroke="#22D3EE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="hero-chart-line"
                  />
                  <path
                    d="M0 58 L24 52 L48 48 L72 44 L96 38 L120 42 L144 35 L168 28 L192 32 L216 22 L240 18 L264 12 L280 8 L280 72 L0 72 Z"
                    fill="url(#heroChartFill)"
                    className="hero-chart-area"
                  />
                </svg>
              </div>
            </div>

            {/* Notifications */}
            <div className="hidden rounded-lg border border-white/[0.06] bg-white/[0.02] p-2 lg:block">
              <p className="mb-1.5 text-[9px] font-medium text-white">Notifications</p>
              <ul className="space-y-1.5">
                {notifications.map((n) => (
                  <li
                    key={n.title}
                    className={`rounded-md border px-1.5 py-1 ${n.color}`}
                  >
                    <p className="text-[8px] font-medium text-white">{n.title}</p>
                    <p className="text-[7px] text-dim">{n.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
