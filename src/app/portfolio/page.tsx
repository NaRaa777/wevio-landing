import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Découvrez nos réalisations : sites web, applications métier, e-commerce et SaaS.",
};

export default function PortfolioPage() {
  return <PortfolioGrid />;
}
