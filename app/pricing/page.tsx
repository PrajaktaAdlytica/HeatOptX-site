import type { Metadata } from "next";
import { PricingSection } from "../PricingSection";
import { SiteFooter } from "../SiteFooter";
import { SubpageNav } from "../SubpageNav";

export const metadata: Metadata = {
  title: "HeatOptx Pricing",
  description:
    "Choose the HeatOptx assessment, platform, or enterprise package for industrial thermal AI and heat-loss ROI prioritization.",
};

export default function PricingPage() {
  return (
    <main className="subpage-shell pricing-page">
      <SubpageNav active="pricing" />
      <PricingSection standalone />
      <SiteFooter />
    </main>
  );
}
