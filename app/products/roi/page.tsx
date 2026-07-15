import type { Metadata } from "next";
import { ProductDetailPage } from "../../ProductDetailPage";

export const metadata: Metadata = {
  title: "HeatOptx ROI - Heat Loss Repair Prioritization",
  description:
    "HeatOptx ROI ranks heat-loss repairs by annualized savings, fix cost, payback period, emissions impact, and confidence.",
};

export default function HeatOptxRoiPage() {
  return <ProductDetailPage product="roi" />;
}
