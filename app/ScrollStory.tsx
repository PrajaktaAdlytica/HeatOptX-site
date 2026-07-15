"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    eyebrow: "01 / Map",
    title: "Invisible heat loss becomes a readable system.",
    copy:
      "HeatOptx Map turns boilers, pipes, heat exchangers, and process lines into a single thermal picture your team can act on.",
    metric: "Live loss layer",
  },
  {
    eyebrow: "02 / Reveal",
    title: "Thermal paths wake up as losses move through the plant.",
    copy:
      "Copper routes highlight escaping heat while stable sage paths keep operators oriented across complex industrial assets.",
    metric: "Asset-level context",
  },
  {
    eyebrow: "03 / Detect",
    title: "AI flags the fault before it becomes a monthly surprise.",
    copy:
      "Leaks, insulation failures, fouling, steam trap issues, and drift move into an anomaly queue with severity and cause hints.",
    metric: "8 open findings",
  },
  {
    eyebrow: "04 / Prioritize",
    title: "Every finding becomes a ranked repair decision.",
    copy:
      "HeatOptx ROI compares annualized loss, repair cost, payback, and CO2 impact so teams know what should be fixed first.",
    metric: "3.8 mo payback",
  },
  {
    eyebrow: "05 / Operate",
    title: "The map resolves into an operating dashboard.",
    copy:
      "Energy, maintenance, and sustainability teams share one view from thermal signal to work-order-ready recommendation.",
    metric: "ROI-ready actions",
  },
];

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const scrollable = Math.max(rect.height - viewportHeight, 1);
      const passed = Math.min(Math.max(-rect.top, 0), scrollable);
      const progress = passed / scrollable;
      const nextStep = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(progress * steps.length)),
      );

      setActiveStep(nextStep);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="scroll-story"
      data-step={activeStep}
      id="story"
      aria-label="HeatOptx scroll story"
    >
      <div className="story-pin">
        <div className="story-copy">
          <p className="section-kicker">Thermal workflow</p>
          <span className="story-step-label">{steps[activeStep].eyebrow}</span>
          <h2>{steps[activeStep].title}</h2>
          <p>{steps[activeStep].copy}</p>
          <div className="story-status" aria-live="polite">
            <span>{steps[activeStep].eyebrow}</span>
            <strong>{steps[activeStep].metric}</strong>
          </div>
        </div>

        <div className="story-visual" aria-hidden="true">
          <img
            className="story-art story-art-0"
            src="/illustrations/plant-thermal-loss-map.svg"
            alt=""
          />
          <img
            className="story-art story-art-1"
            src="/illustrations/process-line-monitoring.svg"
            alt=""
          />
          <img
            className="story-art story-art-2"
            src="/illustrations/ai-anomaly-queue.svg"
            alt=""
          />
          <img
            className="story-art story-art-3"
            src="/illustrations/roi-prioritization.svg"
            alt=""
          />
          <img
            className="story-art story-art-4"
            src="/illustrations/data-integrations.svg"
            alt=""
          />

          <div className="hotspot" />
          <div className="roi-chip chip-loss">EUR 42k / yr</div>
          <div className="roi-chip chip-payback">3.8 mo payback</div>
          <div className="roi-chip chip-co2">128 tCO2e</div>
        </div>
      </div>
    </section>
  );
}
