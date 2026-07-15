import type { Metadata } from "next";
import { ProductDetailPage } from "../../ProductDetailPage";

export const metadata: Metadata = {
  title: "HeatOptx Detect - Industrial Thermal Anomaly Detection",
  description:
    "HeatOptx Detect flags leaks, fouling, insulation failures, abnormal temperature drops, and efficiency drift before they compound.",
};

export default function HeatOptxDetectPage() {
  return <ProductDetailPage product="detect" />;
}
