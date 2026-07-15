import Link from "next/link";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "HeatOptx Map", href: "/products/map" },
      { label: "HeatOptx Detect", href: "/products/detect" },
      { label: "HeatOptx ROI", href: "/products/roi" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Problem", href: "/#problem" },
      { label: "Solutions", href: "/#solutions" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Contact", href: "/demo" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link href="/" aria-label="HeatOptx home">
          <img src="/brand/heatoptx-logo-horizontal.svg" alt="HeatOptx" />
        </Link>
        <p>
          Industrial Thermal AI for hidden heat loss across industrial plants,
          district heating networks, food processing lines, and facility teams.
        </p>
      </div>

      <div className="footer-columns">
        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <strong>{group.title}</strong>
            <div className="footer-links">
              {group.links.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
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
  );
}
