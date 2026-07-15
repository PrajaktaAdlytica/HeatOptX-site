import { CinematicEntry } from "./CinematicEntry";
import { ScrollStory } from "./ScrollStory";

const productCards = [
  {
    icon: "/icons/thermal-map.svg",
    title: "HeatOptx Map",
    copy:
      "Visualize heat-loss intensity across boilers, pipe routes, exchangers, process lines, and district network segments.",
    details: ["Thermal map", "Asset overlays", "Loss filters"],
  },
  {
    icon: "/icons/detect.svg",
    title: "HeatOptx Detect",
    copy:
      "Detect leaks, fouling, insulation failures, abnormal temperature drops, and efficiency drift before they compound.",
    details: ["Anomaly queue", "Severity scoring", "Cause hints"],
  },
  {
    icon: "/icons/roi.svg",
    title: "HeatOptx ROI",
    copy:
      "Convert heat loss into annualized savings, payback period, CO2 impact, and ranked repair recommendations.",
    details: ["Payback model", "CO2 view", "Repair ranking"],
  },
];

const solutionCards = [
  {
    icon: "/icons/boiler.svg",
    title: "Factories",
    copy: "Track thermal loss around steam, hot water, compressed processes, and utility rooms.",
  },
  {
    icon: "/icons/district-heating.svg",
    title: "District heating",
    copy: "Prioritize buried network segments, temperature drops, and service zones with rising losses.",
  },
  {
    icon: "/icons/food-processing.svg",
    title: "Food processing",
    copy: "Watch process heat, washdown, pasteurization, chilling, and recovery loops in one place.",
  },
  {
    icon: "/icons/facility.svg",
    title: "Facility teams",
    copy: "Give maintenance, energy, and sustainability teams a shared thermal operating view.",
  },
];

const problems = [
  "Boiler drift hides inside monthly fuel reports.",
  "Heat exchanger fouling looks like normal production variance.",
  "Pipe and insulation failures spread cost across the whole plant.",
  "Teams struggle to prove which repair pays back first.",
];

export default function Home() {
  return (
    <main>
      <CinematicEntry />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="HeatOptx home">
          <img src="/brand/heatoptx-logo-horizontal.svg" alt="HeatOptx" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#product">Product</a>
          <a href="#problem">Problem</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#demo">Contact</a>
        </nav>
        <div className="nav-actions">
          <a className="nav-login" href="/sign-in">
            Sign in
          </a>
          <a className="button button-small" href="#demo">
            Request demo
          </a>
        </div>
      </header>

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
        <div>
          <p className="section-kicker">The problem</p>
          <h2>Industrial heat loss is expensive. Most teams cannot see where it happens.</h2>
        </div>
        <div className="problem-content">
          <p>
            Boilers drift, heat exchangers foul, steam lines leak, and buried
            heating networks lose energy long before the damage appears in
            monthly reports. HeatOptx gives teams a live thermal view of where
            heat is escaping, what it costs, and which repair pays back first.
          </p>
          <ul className="problem-list">
            {problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </div>
      </section>

      <ScrollStory />

      <section className="section product-section" id="product">
        <div className="section-heading">
          <p className="section-kicker">Product suite</p>
          <h2>One thermal workflow from map to action.</h2>
          <p>
            HeatOptx is designed for teams who need evidence, not another
            passive dashboard.
          </p>
        </div>
        <div className="product-grid">
          {productCards.map((card) => (
            <article className="product-card" key={card.title}>
              <img src={card.icon} alt="" aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <div className="tag-row">
                {card.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>
            </article>
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
        <div className="section-heading">
          <p className="section-kicker">Solutions</p>
          <h2>Built around industrial heat, not generic energy monitoring.</h2>
        </div>
        <div className="solution-grid">
          {solutionCards.map((card) => (
            <article className="solution-card" key={card.title}>
              <img src={card.icon} alt="" aria-hidden="true" />
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof-section">
        <div className="proof-copy">
          <p className="section-kicker">Why teams use it</p>
          <h2>Prioritization makes heat-loss work fundable.</h2>
          <p>
            HeatOptx packages each finding with the language decision-makers
            need: estimated loss, fix cost, payback, emissions impact, and
            confidence level.
          </p>
        </div>
        <div className="proof-grid">
          <div>
            <span>Assessment output</span>
            <strong>Ranked repair list</strong>
          </div>
          <div>
            <span>Financial model</span>
            <strong>Payback by asset</strong>
          </div>
          <div>
            <span>Operations handoff</span>
            <strong>Work-order ready</strong>
          </div>
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
      </footer>
    </main>
  );
}
