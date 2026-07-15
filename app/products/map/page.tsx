import type { Metadata } from "next";
import { ProductDetailPage } from "../../ProductDetailPage";

export const metadata: Metadata = {
  title: "HeatOptx Map - Live Thermal Loss Mapping",
  description:
    "HeatOptx Map visualizes industrial heat loss across boilers, pipes, heat exchangers, process lines, and district heating zones.",
};

export default function HeatOptxMapPage() {
  return <ProductDetailPage product="map" />;
}
