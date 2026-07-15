const pricingPlans = [
  {
    icon: "/icons/thermal-camera.svg",
    tier: "Assessment",
    title: "Thermal ROI scan",
    copy: "One facility or network zone with ranked loss opportunities.",
    features: [
      "Thermal survey & data analysis",
      "Ranked heat-loss list",
      "Estimated savings & ROI",
      "Fix cost & payback estimates",
      "PDF report & summary",
    ],
    priceLabel: "Starting at",
    price: "EUR 4,900",
    note: "per assessment",
    cta: "Learn more",
    highlighted: false,
  },
  {
    icon: "/icons/ai-model.svg",
    tier: "Platform",
    title: "Continuous thermal AI",
    copy: "Map, detect, and ROI workflows for ongoing facility use.",
    features: [
      "Continuous thermal monitoring",
      "AI-powered anomaly detection",
      "Heat-loss quantification & ROI",
      "Dashboard & alerts",
      "Export & API access",
    ],
    priceLabel: "Starting at",
    price: "EUR 1,500",
    suffix: "/month",
    note: "billed annually",
    cta: "Get started",
    highlighted: true,
  },
  {
    icon: "/icons/dashboard.svg",
    tier: "Enterprise",
    title: "Multi-site deployment",
    copy: "Portfolio setup, integrations, governance, and reporting.",
    features: [
      "Multi-site & multi-user access",
      "Centralized reporting & analytics",
      "Custom integrations",
      "Role-based permissions",
      "Dedicated support & onboarding",
    ],
    priceLabel: "",
    price: "Custom pricing",
    note: "Tailored to your needs",
    cta: "Contact sales",
    highlighted: false,
  },
];

const pricingTrust = [
  {
    icon: "/icons/security.svg",
    title: "No long-term contracts",
    copy: "Cancel anytime.",
  },
  {
    icon: "/icons/scada.svg",
    title: "Enterprise security",
    copy: "Your data is protected.",
  },
  {
    icon: "/icons/facility.svg",
    title: "Expert support",
    copy: "From onboarding to scale.",
  },
  {
    icon: "/icons/roi.svg",
    title: "Scale with confidence",
    copy: "Add sites and features anytime.",
  },
];

export function PricingSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      className={`section pricing-section${standalone ? " pricing-section-standalone" : ""}`}
      id="pricing"
    >
      <div className="pricing-heading">
        <p className="section-kicker">Pricing</p>
        <h2>Start with the highest-value losses.</h2>
        <p>
          Choose the package that matches your visibility needs today. Scale as
          your program grows.
        </p>
      </div>
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article
            className={`pricing-card${plan.highlighted ? " pricing-card-featured" : ""}`}
            key={plan.title}
          >
            {plan.highlighted && <div className="pricing-badge">Most popular</div>}
            <div className="pricing-card-top">
              <img src={plan.icon} alt="" aria-hidden="true" />
              <span>{plan.tier}</span>
            </div>
            <h3>{plan.title}</h3>
            <p>{plan.copy}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="pricing-price">
              {plan.priceLabel && <small>{plan.priceLabel}</small>}
              <strong>
                {plan.price}
                {plan.suffix && <em>{plan.suffix}</em>}
              </strong>
              <span>{plan.note}</span>
            </div>
            <a
              className={`pricing-cta${plan.highlighted ? " pricing-cta-primary" : ""}`}
              href="/demo"
            >
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
      <div className="pricing-trust">
        {pricingTrust.map((item) => (
          <div key={item.title}>
            <img src={item.icon} alt="" aria-hidden="true" />
            <span>
              <strong>{item.title}</strong>
              <small>{item.copy}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
