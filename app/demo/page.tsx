import type { Metadata } from "next";
import { SiteFooter } from "../SiteFooter";
import { SubpageNav } from "../SubpageNav";

export const metadata: Metadata = {
  title: "Request a HeatOptx Demo",
  description:
    "Request a HeatOptx ROI assessment for factories, district heating operators, food processing plants, and facility teams.",
};

const demoSteps = [
  {
    title: "Scope the assets",
    copy: "Tell us the plant, network, process line, or facility zone where heat loss is suspected.",
  },
  {
    title: "Map the loss",
    copy: "We align available thermal, inspection, metering, and operating data into a first HeatOptx view.",
  },
  {
    title: "Rank the action",
    copy: "Your team receives a prioritized list with cost, payback, CO2 impact, and confidence.",
  },
];

export default function DemoPage() {
  return (
    <main className="subpage-shell demo-page">
      <SubpageNav active="contact" />

      <section className="subpage-section demo-page-hero">
        <div>
          <p className="section-kicker">Request demo</p>
          <h1>Find the heat losses that should be fixed first.</h1>
          <p>
            Share a few details about your operation. HeatOptx will respond with
            the right path for a thermal ROI scan, continuous platform pilot, or
            multi-site deployment.
          </p>
          <div className="demo-page-stats">
            <span>
              <strong>7-14 days</strong>
              First assessment view
            </span>
            <span>
              <strong>3 products</strong>
              Map, Detect, ROI
            </span>
            <span>
              <strong>EU-ready</strong>
              Industrial programs
            </span>
          </div>
        </div>

        <form className="demo-form demo-page-form">
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

      <section className="subpage-section demo-process">
        {demoSteps.map((step, index) => (
          <article key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{step.title}</h2>
            <p>{step.copy}</p>
          </article>
        ))}
      </section>

      <section className="subpage-section demo-assurance">
        <span>No long-term contract required</span>
        <span>Works with existing meters and inspections</span>
        <span>Built for energy, maintenance, and sustainability teams</span>
      </section>

      <SiteFooter />
    </main>
  );
}
