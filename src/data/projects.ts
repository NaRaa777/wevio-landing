import type { Project } from "@/types";

/** Une carte = une application · galerie multi-écrans dans la modale */
export const projects: Project[] = [
  {
    id: 1,
    cat: "app",
    badge: "Application métier",
    title: "TerraFlow",
    client: "Paysagiste · B2B",
    preview: "bg-green-dark",
    desc: "Suite de gestion pour paysagistes : analytics saisonniers, devis, facturation Stripe, planning chantiers et visualisation IA des plantations sur photos clients.",
    gallery: [
      {
        src: "/portfolio/terraflow-analytics.png",
        alt: "Dashboard analytics TerraFlow",
        caption: "Analytics — CA saisonnier & conversion devis",
      },
      {
        src: "/portfolio/terraflow-ia-visualisation.png",
        alt: "Module IA visualisation TerraFlow",
        caption: "IA Visualisation — Aperçu plantation sur photo",
      },
      {
        src: "/portfolio/terraflow-factures.png",
        alt: "Module facturation TerraFlow",
        caption: "Factures — Encaissements & relances",
      },
    ],
    metrics: [
      { value: "8", label: "Modules métier intégrés" },
      { value: "40 %", label: "Taux de conversion devis" },
      { value: "-35 %", label: "Temps admin. estimé" },
    ],
    stack: ["Next.js", "Supabase", "Stripe", "IA générative", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    cat: "app",
    badge: "CRM terrain",
    title: "AquaGest Pro",
    client: "Artisans BTP · PME",
    preview: "bg-deep-blue",
    desc: "Application tout-en-un pour artisans : clients, devis, chantiers, SAV, catalogue, planning et actions prioritaires suggérées par l'IA au quotidien.",
    gallery: [
      {
        src: "/portfolio/aquagest-pro.png",
        alt: "Dashboard AquaGest Pro",
        caption: "Dashboard — KPIs, actions IA & suivi d'activité",
      },
    ],
    metrics: [
      { value: "+12 %", label: "Visibilité CA mensuel" },
      { value: "72/100", label: "Score actions IA du jour" },
      { value: "1", label: "App · 9 modules métiers" },
    ],
    stack: ["React", "Supabase", "IA", "Tailwind CSS", "Vercel"],
  },
  {
    id: 3,
    cat: "app",
    badge: "CRM sur-mesure",
    title: "CRM Pisciniste",
    client: "Piscine Laurent · Pisciniste",
    preview: "bg-blue-deep",
    desc: "CRM dédié aux piscinistes : tableau de bord chantiers, générateur de devis IA, catalogue matériaux, relances impayées et espace de connexion brandé.",
    gallery: [
      {
        src: "/portfolio/crm-pisciniste-dashboard.png",
        alt: "Dashboard CRM Pisciniste",
        caption: "Dashboard — Devis, chantiers & relances",
      },
      {
        src: "/portfolio/crm-pisciniste-devis-ia.png",
        alt: "Générateur de devis IA",
        caption: "Devis IA — Catalogue & marges automatiques",
      },
      {
        src: "/portfolio/piscine-laurent-login.png",
        alt: "Écran de connexion Piscine Laurent",
        caption: "Connexion — Identité visuelle sur-mesure",
      },
    ],
    metrics: [
      { value: "-65 %", label: "Temps de création devis" },
      { value: "3", label: "Écrans clés livrés" },
      { value: "5 j", label: "Délai mise en service" },
    ],
    stack: ["Next.js", "Supabase", "OpenAI API", "TypeScript", "Tailwind CSS"],
  },
];

export const filterOptions = [
  { id: "all" as const, label: "Tous" },
  { id: "web" as const, label: "Sites Web" },
  { id: "app" as const, label: "Applications" },
  { id: "ecom" as const, label: "E-commerce" },
  { id: "saas" as const, label: "SaaS" },
];
