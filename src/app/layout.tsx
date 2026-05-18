import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import { ClientProviders } from "@/components/layout/ClientProviders";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wevio — Agence digitale Paris",
    template: "%s | Wevio",
  },
  description:
    "Agence digitale parisienne spécialisée en sites web sur-mesure et applications métier (CRM, ERP, outils internes).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
