import { CinematicEntry } from "./CinematicEntry";
import { ScrollStory } from "./ScrollStory";
import type { CSSProperties } from "react";

const productCards = [
  {
    kind: "map",
    icon: "/icons/thermal-map.svg",
    title: "HeatOptx Map",
    copy:
      "Visualize heat-loss intensity across boilers, pipe routes, exchangers, process lines, and district network segments.",
    details: [
      { icon: "/icons/thermal-map.svg", title: "Thermal map", copy: "Live heat-loss view" },
      { icon: "/icons/heat-exchanger.svg", title: "Asset overlays", copy: "Context on demand" },
      { icon: "/icons/leak-detection.svg", title: "Loss filters", copy: "Focus on what matters" },
    ],
  },
  {
    kind: "detect",
    icon: "/icons/detect.svg",
    title: "HeatOptx Detect",
    copy:
      "Detect leaks, fouling, insulation failures, abnormal temperature drops, and efficiency drift before they compound.",
    details: [
      { icon: "/icons/dashboard.svg", title: "Anomaly queue", copy: "Prioritized issues" },
      { icon: "/icons/security.svg", title: "Severity scoring", copy: "Risk at a glance" },
      { icon: "/icons/sensor.svg", title: "Cause hints", copy: "Act with confidence" },
    ],
  },
  {
    kind: "roi",
    icon: "/icons/roi.svg",
    title: "HeatOptx ROI",
    copy:
      "Convert heat loss into annualized savings, payback period, CO2 impact, and ranked repair recommendations.",
    details: [
      { icon: "/icons/roi.svg", title: "Payback model", copy: "Clear business case" },
      { icon: "/icons/co2-reporting.svg", title: "CO2 view", copy: "Impact quantified" },
      { icon: "/icons/work-order.svg", title: "Repair ranking", copy: "Focus on ROI" },
    ],
  },
];

const productOutcomes = [
  {
    icon: "/icons/savings.svg",
    title: "Reduce energy loss",
    copy: "Identify and fix what wastes the most.",
  },
  {
    icon: "/icons/security.svg",
    title: "Protect assets",
    copy: "Prevent failures and extend equipment life.",
  },
  {
    icon: "/icons/co2-reporting.svg",
    title: "Lower emissions",
    copy: "Cut CO2 with measurable improvements.",
  },
  {
    icon: "/icons/roi.svg",
    title: "Prove ROI",
    copy: "Every action tied to savings and payback.",
  },
];

const solutionCards = [
  {
    icon: "/icons/boiler.svg",
    visual: "factory",
    title: "Factories",
    copy: "Track thermal loss around steam, hot water, compressed processes, and utility rooms.",
    benefits: [
      { icon: "/icons/detect.svg", label: "Find hidden losses" },
      { icon: "/icons/savings.svg", label: "Reduce fuel cost" },
      { icon: "/icons/security.svg", label: "Improve uptime" },
    ],
  },
  {
    icon: "/icons/district-heating.svg",
    visual: "district",
    title: "District heating",
    copy: "Prioritize buried network segments, temperature drops, and service zones with rising losses.",
    benefits: [
      { icon: "/icons/leak-detection.svg", label: "Lower network losses" },
      { icon: "/icons/sensor.svg", label: "Balance demand" },
      { icon: "/icons/roi.svg", label: "Plan with confidence" },
    ],
  },
  {
    icon: "/icons/food-processing.svg",
    visual: "food",
    title: "Food processing",
    copy: "Watch process heat, washdown, pasteurization, chilling, and recovery loops in one place.",
    benefits: [
      { icon: "/icons/co2-reporting.svg", label: "Protect quality" },
      { icon: "/icons/thermal-map.svg", label: "Recover energy" },
      { icon: "/icons/security.svg", label: "Ensure compliance" },
    ],
  },
  {
    icon: "/icons/facility.svg",
    visual: "facility",
    title: "Facility teams",
    copy: "Give maintenance, energy, and sustainability teams a shared thermal operating view.",
    benefits: [
      { icon: "/icons/dashboard.svg", label: "One source of truth" },
      { icon: "/icons/work-order.svg", label: "Act faster" },
      { icon: "/icons/roi.svg", label: "Prove impact" },
    ],
  },
];

const solutionJourney = [
  {
    icon: "/icons/thermal-map.svg",
    title: "See the truth",
    copy: "Make hidden heat loss visible across your systems.",
  },
  {
    icon: "/icons/savings.svg",
    title: "Understand impact",
    copy: "Quantify cost, carbon, and operational consequence.",
  },
  {
    icon: "/icons/work-order.svg",
    title: "Prioritize action",
    copy: "Rank fixes by ROI and payback with confidence.",
  },
  {
    icon: "/icons/pipe-network.svg",
    title: "Take action",
    copy: "Coordinate repairs and improvements across teams.",
  },
  {
    icon: "/icons/roi.svg",
    title: "Prove results",
    copy: "Measure savings, verify impact, and improve continuously.",
  },
];

const roiRepairs = [
  {
    priority: 1,
    icon: "/icons/heat-exchanger.svg",
    issue: "Heat exchanger fouling",
    loss: "2,450 MWh/yr",
    cost: "EUR 48,200",
    payback: "3.2 mo",
    confidence: "High",
    confidenceLevel: 92,
  },
  {
    priority: 2,
    icon: "/icons/pipe-network.svg",
    issue: "Steam trap leak",
    loss: "1,820 MWh/yr",
    cost: "EUR 21,600",
    payback: "4.7 mo",
    confidence: "Medium",
    confidenceLevel: 62,
  },
  {
    priority: 3,
    icon: "/icons/insulation.svg",
    issue: "Insulation degradation",
    loss: "980 MWh/yr",
    cost: "EUR 12,800",
    payback: "6.1 mo",
    confidence: "Medium",
    confidenceLevel: 58,
  },
  {
    priority: 4,
    icon: "/icons/boiler.svg",
    issue: "Valve bypass",
    loss: "610 MWh/yr",
    cost: "EUR 7,900",
    payback: "8.3 mo",
    confidence: "Low",
    confidenceLevel: 35,
  },
];

const roiProofItems = [
  {
    icon: "/icons/thermal-map.svg",
    title: "Quantify what matters",
    copy: "Measure hidden heat loss with confidence.",
  },
  {
    icon: "/icons/savings.svg",
    title: "Compare with confidence",
    copy: "Benchmark options and validate assumptions.",
  },
  {
    icon: "/icons/security.svg",
    title: "Focus on what pays back",
    copy: "Prioritize fixes that deliver the highest impact fastest.",
  },
  {
    icon: "/icons/co2-reporting.svg",
    title: "Report with credibility",
    copy: "Communicate ROI, CO2 impact, and confidence clearly.",
  },
  {
    icon: "/icons/dashboard.svg",
    title: "Coordinate repairs",
    copy: "Align maintenance, energy, and leadership teams.",
  },
];

const problemCards = [
  {
    icon: "/icons/boiler.svg",
    title: "Boiler drift hides inside monthly fuel reports.",
    copy: "Small inefficiencies compound into major fuel waste.",
  },
  {
    icon: "/icons/heat-exchanger.svg",
    title: "Heat exchanger fouling looks like normal variance.",
    copy: "Performance slowly drops while energy use climbs.",
  },
  {
    icon: "/icons/pipe-network.svg",
    title: "Pipe and insulation failures spread cost.",
    copy: "Heat loss travels across systems and production lines.",
  },
  {
    icon: "/icons/roi.svg",
    title: "Teams struggle to prove which repair pays back first.",
    copy: "Decisions rely on guesswork, not fact.",
  },
];

const problemTags = [
  {
    icon: "/icons/heat-exchanger.svg",
    className: "tag-exchanger",
    title: "Heat exchanger fouling",
    copy: "+24% energy loss",
  },
  {
    icon: "/icons/leak-detection.svg",
    className: "tag-leak",
    title: "Steam line leak",
    copy: "EUR 18.4k / month",
  },
  {
    icon: "/icons/boiler.svg",
    className: "tag-boiler",
    title: "Boiler drift",
    copy: "+8% fuel usage",
  },
  {
    icon: "/icons/insulation.svg",
    className: "tag-insulation",
    title: "Insulation failure",
    copy: "+15% heat loss",
  },
];

const problemMetrics = [
  {
    icon: "/icons/savings.svg",
    value: "10-30%",
    label: "Energy lost in most plants",
  },
  {
    icon: "/icons/roi.svg",
    value: "EUR 250k+",
    label: "Average annual avoidable cost",
  },
  {
    icon: "/icons/co2-reporting.svg",
    value: "15-25%",
    label: "Unnecessary CO2 emissions",
  },
  {
    icon: "/icons/detect.svg",
    value: "Months",
    label: "To find issues manually",
  },
];

export default function Home() {
  return (
    <main>
      <CinematicEntry />

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Industrial Thermal AI</p>
          <h1>Industrial Thermal AI for hidden heat loss.</h1>
          <p className="hero-lede">
            HeatOptx maps thermal losses across boilers, pipes, heat
            exchangers, and process lines, detects anomalies, and ranks every
            fix by ROI.
          </p>
          <div className="hero-actions">
            <a className="button" href="#demo">
              Request ROI assessment
            </a>
            <a className="button button-secondary" href="#story">
              Explore platform
            </a>
          </div>
          <div className="trust-row" aria-label="Built for">
            <span>Built for</span>
            <strong>Factories</strong>
            <strong>District heating</strong>
            <strong>Food processing</strong>
            <strong>Facility energy</strong>
          </div>
        </div>

        <div className="hero-panel" aria-label="HeatOptx thermal map preview">
          <div className="panel-topbar">
            <span>HeatOptx Map</span>
            <strong>Live assessment</strong>
          </div>
          <img
            className="hero-illustration"
            src="/illustrations/plant-thermal-loss-map.svg"
            alt="Plant thermal loss map with heat routes and a hotspot"
          />
          <div className="hero-metrics">
            <div>
              <span>Annualized loss</span>
              <strong>EUR 412k</strong>
            </div>
            <div>
              <span>Priority fixes</span>
              <strong>14</strong>
            </div>
            <div>
              <span>Fastest payback</span>
              <strong>3.8 mo</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-band section" id="problem">
        <div className="problem-left">
          <p className="section-kicker">The problem</p>
          <h2>Industrial heat loss is expensive. Most teams cannot see where it happens.</h2>
          <div className="problem-visual" aria-label="Industrial heat loss illustration">
            <img
              className="problem-plant"
              src="/illustrations/problem-industrial-heat-loss.png"
              alt="Isometric industrial plant with copper thermal loss routes"
            />
            {problemTags.map((tag) => (
              <div className={`problem-tag ${tag.className}`} key={tag.title}>
                <img src={tag.icon} alt="" aria-hidden="true" />
                <span>
                  <strong>{tag.title}</strong>
                  <small>{tag.copy}</small>
                </span>
              </div>
            ))}
          </div>
          <div className="problem-metrics" aria-label="Heat loss impact">
            {problemMetrics.map((metric) => (
              <div key={metric.value}>
                <img src={metric.icon} alt="" aria-hidden="true" />
                <span>
                  <strong>{metric.value}</strong>
                  <small>{metric.label}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="problem-content">
          <p>
            Boilers drift, heat exchangers foul, steam lines leak, and buried
            heating networks lose energy long before the damage appears in
            monthly reports. HeatOptx gives teams a live thermal view of where
            heat is escaping, what it costs, and which repair pays back first.
          </p>
          <div className="problem-list">
            {problemCards.map((problem) => (
              <article className="problem-card" key={problem.title}>
                <img src={problem.icon} alt="" aria-hidden="true" />
                <div>
                  <h3>{problem.title}</h3>
                  <p>{problem.copy}</p>
                </div>
              </article>
            ))}
            <article className="problem-card problem-card-highlight">
              <img src="/icons/thermal-map.svg" alt="" aria-hidden="true" />
              <div>
                <h3>You can&apos;t fix what you can&apos;t see.</h3>
                <p>HeatOptx makes hidden heat loss visible and actionable.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ScrollStory />

      <section className="section product-section" id="product">
        <div className="product-section-top">
          <div className="section-heading product-heading">
            <p className="section-kicker">Product suite</p>
            <h2>One thermal workflow from map to action.</h2>
            <p>
              HeatOptx is designed for teams who need evidence, not another
              passive dashboard.
            </p>
          </div>
          <div className="product-suite-visual" aria-hidden="true">
            <img
              src="/illustrations/problem-industrial-heat-loss.png"
              alt=""
            />
            <span className="suite-marker marker-map">
              <img src="/icons/thermal-map.svg" alt="" />
            </span>
            <span className="suite-marker marker-detect">
              <img src="/icons/detect.svg" alt="" />
            </span>
            <span className="suite-marker marker-roi">
              <img src="/icons/roi.svg" alt="" />
            </span>
          </div>
        </div>
        <div className="product-bento">
          {productCards.map((card) => (
            <article className={`product-card product-card-${card.kind}`} key={card.title}>
              <div className="product-card-copy">
                <div className="product-card-header">
                  <img src={card.icon} alt="" aria-hidden="true" />
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.copy}</p>
                  </div>
                </div>
                <div className="product-feature-row">
                  {card.details.map((detail) => (
                    <span key={detail.title}>
                      <img src={detail.icon} alt="" aria-hidden="true" />
                      <small>
                        <strong>{detail.title}</strong>
                        {detail.copy}
                      </small>
                    </span>
                  ))}
                </div>
              </div>
              <div className={`product-preview product-preview-${card.kind}`}>
                {card.kind === "map" && (
                  <>
                    <aside className="map-legend">
                      <strong>Heat-loss intensity</strong>
                      <span className="legend-hot">High</span>
                      <span className="legend-mid">Medium</span>
                      <span className="legend-low">Low</span>
                      <small>Systems</small>
                      <em>Boilers</em>
                      <em>Pipes</em>
                      <em>Exchangers</em>
                      <em>Network</em>
                    </aside>
                    <img
                      src="/illustrations/plant-thermal-loss-map.svg"
                      alt="Thermal map interface preview"
                    />
                    <div className="map-callout">
                      <strong>Boiler House 2</strong>
                      <span>Heat loss</span>
                      <small>1.82 MWh/h</small>
                      <b>High</b>
                    </div>
                  </>
                )}

                {card.kind === "detect" && (
                  <>
                    <div className="detect-table">
                      <div className="detect-title">
                        <strong>Anomaly queue</strong>
                        <span>12 new</span>
                      </div>
                      {[
                        ["Steam Line 7B", "Leak", "High", "New"],
                        ["Heat Exchanger 3", "Fouling", "High", "New"],
                        ["Boiler 2", "Efficiency drift", "Medium", "Investigating"],
                        ["Pipe Route 4A", "Insulation loss", "Medium", "New"],
                        ["Tank Farm 1", "Heat loss", "Low", "Monitoring"],
                      ].map((row) => (
                        <div className="detect-row" key={row[0]}>
                          {row.map((cell) => (
                            <span key={cell}>{cell}</span>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="detect-side">
                      <strong>Steam Line 7B</strong>
                      <span>Severity <b>High</b></span>
                      <small>Estimated loss</small>
                      <em>18.4 MWh/day</em>
                      <div className="trend-line" />
                    </div>
                  </>
                )}

                {card.kind === "roi" && (
                  <>
                    <div className="roi-mini-card">
                      <span>Annualized savings</span>
                      <strong>EUR 412,560</strong>
                      <small>Total across 8 actions</small>
                      <div className="bar-set">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                    <div className="roi-mini-card">
                      <span>Payback period</span>
                      <strong>7.3</strong>
                      <small>months</small>
                      <div className="donut" />
                    </div>
                    <div className="roi-actions">
                      <span>Top actions</span>
                      {["Insulation repair", "HX cleaning", "Steam trap fix"].map((item, index) => (
                        <p key={item}>
                          <b>{index + 1}</b>
                          <strong>{item}</strong>
                          <small>{["EUR 152,300 / 4.2 mo", "EUR 98,700 / 6.1 mo", "EUR 61,500 / 5.3 mo"][index]}</small>
                        </p>
                      ))}
                      <a href="#demo">View all actions</a>
                    </div>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="product-outcomes">
          {productOutcomes.map((outcome) => (
            <div key={outcome.title}>
              <img src={outcome.icon} alt="" aria-hidden="true" />
              <span>
                <strong>{outcome.title}</strong>
                <small>{outcome.copy}</small>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-section section">
        <div className="dashboard-copy">
          <p className="section-kicker">Platform preview</p>
          <h2>From thermal signal to operational decision.</h2>
          <p>
            The product view combines thermal maps, anomaly detection, repair
            economics, and integration status so cross-functional teams can
            agree on the next move.
          </p>
        </div>
        <div className="dashboard-shell">
          <div className="dashboard-sidebar">
            <img src="/brand/heatoptx-icon-mark.svg" alt="" />
            <span>Map</span>
            <span>Detect</span>
            <span>ROI</span>
            <span>Reports</span>
          </div>
          <div className="dashboard-main">
            <div className="dashboard-header">
              <div>
                <span>Plant A</span>
                <h3>Thermal loss workspace</h3>
              </div>
              <strong>14 findings</strong>
            </div>
            <div className="dashboard-grid">
              <div className="map-card">
                <img
                  src="/illustrations/process-line-monitoring.svg"
                  alt="Process line thermal monitoring dashboard"
                />
              </div>
              <div className="queue-card">
                <span className="table-label">Anomaly queue</span>
                {["Pipe A-14", "HX-03 fouling", "Boiler B drift"].map(
                  (item, index) => (
                    <div className="queue-row" key={item}>
                      <span>{item}</span>
                      <strong>{["High", "Medium", "Medium"][index]}</strong>
                    </div>
                  ),
                )}
              </div>
              <div className="roi-panel">
                <span>Recommended first repair</span>
                <strong>Insulate Pipe A-14</strong>
                <p>EUR 42k annualized loss, 3.8 month payback.</p>
              </div>
              <div className="trend-panel">
                <span>Verified outcome</span>
                <strong>Before / after baseline</strong>
                <div className="trend-line" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section solutions-section" id="solutions">
        <div className="solutions-hero">
          <div className="solutions-copy">
            <p className="section-kicker">Solutions</p>
            <h2>
              Built around <span>industrial heat</span>, not generic energy
              monitoring.
            </h2>
            <p>
              HeatOptx adapts to the way your operation works across plants,
              networks, processes, and facilities.
            </p>
          </div>
          <img
            className="solutions-network"
            src="/illustrations/solutions-industrial-network.png"
            alt="Industrial heat network connecting factories, facilities, and process sites"
          />
        </div>
        <div className="solution-grid">
          {solutionCards.map((card) => (
            <article className="solution-card" key={card.title}>
              <div className="solution-card-top">
                <img src={card.icon} alt="" aria-hidden="true" />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
              </div>
              <div className={`solution-visual solution-visual-${card.visual}`}>
                <img
                  src="/illustrations/solutions-card-sheet.png"
                  alt=""
                  aria-hidden="true"
                />
              </div>
              <div className="solution-benefits">
                {card.benefits.map((benefit) => (
                  <span key={benefit.label}>
                    <img src={benefit.icon} alt="" aria-hidden="true" />
                    {benefit.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="solution-journey">
          <div className="journey-intro">
            <p className="section-kicker">Why teams use it</p>
            <h3>From invisible loss to measurable value.</h3>
          </div>
          <div className="journey-steps">
            {solutionJourney.map((step) => (
              <article key={step.title}>
                <img src={step.icon} alt="" aria-hidden="true" />
                <h4>{step.title}</h4>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section proof-section" id="roi-proof">
        <div className="proof-top">
          <div className="proof-copy">
            <p className="section-kicker">ROI proof</p>
            <h2>Prioritization makes heat-loss work fundable.</h2>
            <span className="proof-rule" aria-hidden="true" />
            <p>
              HeatOptx packages each finding with the language decision-makers
              need: estimated loss, fix cost, payback, emissions impact, and
              confidence level.
            </p>
          </div>
          <div className="repair-table-card">
            <div className="repair-table-header">
              <h3>Ranked repair opportunities</h3>
              <button type="button">Sort by: Payback</button>
            </div>
            <div className="repair-table" role="table" aria-label="Ranked repair opportunities">
              <div className="repair-row repair-head" role="row">
                <span>Priority</span>
                <span>Asset / Issue</span>
                <span>Est. Heat Loss</span>
                <span>Fix Cost</span>
                <span>Payback</span>
                <span>Confidence</span>
              </div>
              {roiRepairs.map((repair) => (
                <div className="repair-row" role="row" key={repair.issue}>
                  <span className={`repair-priority priority-${repair.priority}`}>
                    {repair.priority}
                  </span>
                  <span className="repair-issue">
                    <img src={repair.icon} alt="" aria-hidden="true" />
                    <strong>{repair.issue}</strong>
                  </span>
                  <strong className="repair-loss">{repair.loss}</strong>
                  <span>{repair.cost}</span>
                  <strong className="repair-payback">{repair.payback}</strong>
                  <span className="confidence">
                    <i style={{ "--level": `${repair.confidenceLevel}%` } as CSSProperties} />
                    {repair.confidence}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="roi-proof-grid">
          {roiProofItems.map((item) => (
            <article key={item.title}>
              <img src={item.icon} alt="" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="roi-proof-cta">
          <span>
            <img src="/icons/roi.svg" alt="" aria-hidden="true" />
            <strong>Turn complexity into clarity.</strong>
            <small>One ranked list. Defensible decisions. Measurable impact.</small>
          </span>
          <a href="#demo">See how it works</a>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div>
          <p className="section-kicker">Pricing</p>
          <h2>Start with the highest-value losses.</h2>
        </div>
        <div className="pricing-grid">
          <article>
            <span>Assessment</span>
            <h3>Thermal ROI scan</h3>
            <p>One facility or network zone with ranked loss opportunities.</p>
          </article>
          <article>
            <span>Platform</span>
            <h3>Continuous thermal AI</h3>
            <p>Map, Detect, and ROI workflows for ongoing facility use.</p>
          </article>
          <article>
            <span>Enterprise</span>
            <h3>Multi-site deployment</h3>
            <p>Portfolio setup, integrations, governance, and reporting.</p>
          </article>
        </div>
      </section>

      <section className="demo-section section" id="demo">
        <div className="demo-copy">
          <p className="section-kicker">Request demo</p>
          <h2>Find the heat losses that should be fixed first.</h2>
          <p>
            Share a few details about your plant, network, or facility
            portfolio. HeatOptx will respond with the right assessment path.
          </p>
        </div>
        <form className="demo-form">
          <label>
            Work email
            <input type="email" name="email" placeholder="name@company.com" />
          </label>
          <label>
            Company type
            <select name="companyType" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Factory or manufacturing site</option>
              <option>District heating operator</option>
              <option>Food processing plant</option>
              <option>Facility or energy team</option>
            </select>
          </label>
          <label>
            What should HeatOptx inspect?
            <textarea
              name="message"
              placeholder="Boilers, pipes, heat exchangers, process lines, or network zones"
            />
          </label>
          <button className="button" type="submit">
            Request ROI assessment
          </button>
        </form>
      </section>

      <footer className="site-footer">
        <div>
          <img src="/brand/heatoptx-logo-horizontal.svg" alt="HeatOptx" />
          <p>
            Industrial Thermal AI for hidden heat loss across industrial and
            district heating systems.
          </p>
        </div>
        <div className="footer-links">
          <a href="#product">Product</a>
          <a href="#problem">Problem</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#demo">Contact</a>
        </div>
        <div className="footer-socials" aria-label="Social links">
          <a href="https://www.linkedin.com" aria-label="LinkedIn">
            <span>in</span>
          </a>
          <a href="https://x.com" aria-label="X">
            <span>X</span>
          </a>
          <a href="https://www.youtube.com" aria-label="YouTube">
            <span>YT</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
