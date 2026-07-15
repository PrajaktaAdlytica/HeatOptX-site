export type ProductKey = "map" | "detect" | "roi";

export const productDetails = {
  map: {
    eyebrow: "HeatOptx Map",
    navLabel: "Map",
    title: "A live thermal map for every hidden loss path.",
    intro:
      "HeatOptx Map turns boilers, pipes, heat exchangers, process lines, and network zones into one readable thermal picture. Operators see where heat is leaving the system before it becomes another month of wasted fuel.",
    icon: "/icons/thermal-map.svg",
    visual: "/illustrations/plant-thermal-loss-map.svg",
    alt: "Thermal map showing industrial heat loss routes and hotspots",
    stats: [
      { label: "Mapped assets", value: "1,240+" },
      { label: "Loss layers", value: "Live" },
      { label: "First view", value: "7 days" },
    ],
    features: [
      {
        icon: "/icons/thermal-map.svg",
        title: "Thermal loss layer",
        copy: "Heat-loss intensity appears over assets, routes, and systems without forcing teams into raw sensor tables.",
      },
      {
        icon: "/icons/pipe-network.svg",
        title: "Asset and route context",
        copy: "Follow heat across boilers, buried pipes, loops, exchangers, tanks, and process lines from one map.",
      },
      {
        icon: "/icons/dashboard.svg",
        title: "Shared operating view",
        copy: "Energy, maintenance, and sustainability teams can work from the same visible source of truth.",
      },
    ],
    workflow: [
      "Import plant, thermal, meter, and inspection data.",
      "Align assets, routes, and thermal readings into a single map.",
      "Highlight high-loss zones and hand findings to Detect or ROI.",
    ],
    useCases: ["Factory utilities", "District heat loops", "Steam and hot-water systems"],
  },
  detect: {
    eyebrow: "HeatOptx Detect",
    navLabel: "Detect",
    title: "AI detection for leaks, fouling, drift, and failures.",
    intro:
      "HeatOptx Detect watches the thermal map for abnormal behavior, then turns invisible waste into a prioritized anomaly queue with severity, confidence, and likely cause.",
    icon: "/icons/detect.svg",
    visual: "/illustrations/ai-anomaly-queue.svg",
    alt: "Anomaly queue with industrial heat-loss findings",
    stats: [
      { label: "Finding types", value: "12" },
      { label: "Queue status", value: "Live" },
      { label: "Triage time", value: "-64%" },
    ],
    features: [
      {
        icon: "/icons/leak-detection.svg",
        title: "Anomaly queue",
        copy: "Surface leaks, fouling, insulation failures, steam trap issues, and efficiency drift before they compound.",
      },
      {
        icon: "/icons/security.svg",
        title: "Severity scoring",
        copy: "Rank findings by confidence, asset criticality, loss size, and operational risk.",
      },
      {
        icon: "/icons/sensor.svg",
        title: "Cause hints",
        copy: "Give operators a practical starting point instead of a vague alert that needs weeks of interpretation.",
      },
    ],
    workflow: [
      "Watch mapped heat signatures and operational baselines.",
      "Detect abnormal temperature drops, loss spread, and drift patterns.",
      "Send validated findings into ROI ranking and repair coordination.",
    ],
    useCases: ["Leak detection", "Fouling identification", "Efficiency drift monitoring"],
  },
  roi: {
    eyebrow: "HeatOptx ROI",
    navLabel: "ROI",
    title: "Repair prioritization decision-makers can fund.",
    intro:
      "HeatOptx ROI converts every finding into annualized loss, fix cost, payback period, CO2 impact, and confidence. Teams can defend the repair sequence with numbers, not guesses.",
    icon: "/icons/roi.svg",
    visual: "/illustrations/roi-prioritization.svg",
    alt: "ROI table ranking industrial heat-loss repair opportunities",
    stats: [
      { label: "Ranked actions", value: "14" },
      { label: "Fastest payback", value: "3.2 mo" },
      { label: "Report format", value: "Board-ready" },
    ],
    features: [
      {
        icon: "/icons/savings.svg",
        title: "Savings model",
        copy: "Estimate annualized energy cost, avoided waste, and operational benefit for every repair option.",
      },
      {
        icon: "/icons/co2-reporting.svg",
        title: "CO2 view",
        copy: "Translate hidden heat loss into emissions impact for sustainability and compliance reporting.",
      },
      {
        icon: "/icons/work-order.svg",
        title: "Repair ranking",
        copy: "Prioritize the repairs that pay back fastest and coordinate the handoff to operations.",
      },
    ],
    workflow: [
      "Attach loss size, repair effort, and confidence to every finding.",
      "Compare payback, emissions, and asset risk in one ranked list.",
      "Create an executive-ready repair case and operational action plan.",
    ],
    useCases: ["Budget approval", "Maintenance planning", "Energy program reporting"],
  },
} satisfies Record<
  ProductKey,
  {
    eyebrow: string;
    navLabel: string;
    title: string;
    intro: string;
    icon: string;
    visual: string;
    alt: string;
    stats: { label: string; value: string }[];
    features: { icon: string; title: string; copy: string }[];
    workflow: string[];
    useCases: string[];
  }
>;
