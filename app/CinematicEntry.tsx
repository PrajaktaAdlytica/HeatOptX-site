"use client";

import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Menu,
  Play,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const productLinks = [
  { label: "HeatOptx Map", href: "/products/map", copy: "Thermal loss mapping" },
  { label: "HeatOptx Detect", href: "/products/detect", copy: "AI anomaly detection" },
  { label: "HeatOptx ROI", href: "/products/roi", copy: "Repair prioritization" },
];

const navLinks = [
  { label: "Product", href: "#product", children: productLinks },
  { label: "Problem", href: "#problem" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/demo" },
];

export function CinematicEntry() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.location.hash) return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const updateNav = () => setIsScrolled(window.scrollY > 80);

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  return (
    <section className="cinematic-entry" id="entry">
      <video
        className="cinematic-video"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="cinematic-bottom-blur" aria-hidden="true" />

      <nav
        className={`cinematic-nav ${isScrolled ? "is-scrolled" : ""}`}
        aria-label="Primary navigation"
      >
        <a
          className="cinematic-logo animate-blur-fade-up"
          href="#entry"
          style={{ animationDelay: "0ms" }}
          aria-label="HeatOptx home"
        >
          <img src="/brand/heatoptx-logo-horizontal.svg" alt="HeatOptx" />
        </a>

        <div className="cinematic-links">
          {navLinks.map((link, index) => (
            <div
              className={`nav-dropdown-wrap animate-blur-fade-up${link.children ? " has-dropdown" : ""}`}
              key={link.label}
              style={{ animationDelay: `${100 + index * 50}ms` }}
            >
              <a className="nav-link-trigger" href={link.href}>
                {link.label}
              </a>
              {link.children && (
                <div className="nav-dropdown" aria-label="Product pages">
                  {link.children.map((child) => (
                    <a href={child.href} key={child.href}>
                      <strong>{child.label}</strong>
                      <span>{child.copy}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="cinematic-actions">
          <a
            className="entry-login animate-blur-fade-up"
            href="/sign-in"
            style={{ animationDelay: "350ms" }}
          >
            Sign in
          </a>
          <a
            className="entry-demo animate-blur-fade-up"
            href="/demo"
            style={{ animationDelay: "400ms" }}
          >
            Request demo
          </a>
          <button
            className="entry-menu liquid-glass animate-blur-fade-up"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            style={{ animationDelay: "350ms" }}
          >
            <Menu
              className={`entry-menu-icon ${isOpen ? "is-hidden" : ""}`}
              size={19}
              strokeWidth={1.8}
            />
            <X
              className={`entry-menu-icon ${isOpen ? "is-visible" : ""}`}
              size={19}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </nav>

      <div className={`cinematic-mobile-menu ${isOpen ? "is-open" : ""}`}>
        {navLinks.map((link, index) => (
          <div className="mobile-link-group" key={link.label}>
            <a
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
            {link.children && (
              <div className="mobile-product-links">
                {link.children.map((child) => (
                  <a
                    href={child.href}
                    key={child.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="cinematic-mobile-actions">
          <a href="/sign-in" onClick={() => setIsOpen(false)}>
            Sign in
          </a>
          <a href="/demo" onClick={() => setIsOpen(false)}>
            Request demo
          </a>
        </div>
      </div>

      <div className="cinematic-content">
        <div className="cinematic-content-inner">
          <div className="cinematic-copy">
            <div
              className="entry-meta animate-blur-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <span>
                <Star size={16} fill="currentColor" />
                Industrial Thermal AI
              </span>
              <span>
                <Clock size={16} />
                Live assessment
              </span>
              <span>
                <Calendar size={16} />
                EU factories
              </span>
            </div>

            <h1
              className="entry-title animate-blur-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              See Heat Loss. Prioritize Impact.
            </h1>
            <p
              className="entry-description animate-blur-fade-up"
              style={{ animationDelay: "500ms" }}
            >
              HeatOptx turns invisible industrial heat waste into thermal maps,
              detected anomalies, and ROI-backed repair decisions.
            </p>

            <div className="entry-ctas">
              <a
                className="entry-primary animate-blur-fade-up"
                href="/demo"
                style={{ animationDelay: "600ms" }}
              >
                <Play size={18} fill="currentColor" />
                Request ROI assessment
              </a>
              <a
                className="entry-secondary liquid-glass animate-blur-fade-up"
                href="#top"
                style={{ animationDelay: "700ms" }}
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="entry-arrows" aria-label="Story controls">
            <a
              className="liquid-glass animate-blur-fade-up"
              href="#entry"
              style={{ animationDelay: "800ms" }}
            >
              <ChevronLeft size={18} />
              Previous
            </a>
            <a
              className="liquid-glass animate-blur-fade-up"
              href="#top"
              style={{ animationDelay: "900ms" }}
            >
              Next
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
