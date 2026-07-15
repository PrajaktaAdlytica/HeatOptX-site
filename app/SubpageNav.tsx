import Link from "next/link";

const productLinks = [
  { label: "HeatOptx Map", href: "/products/map", copy: "Thermal loss mapping" },
  { label: "HeatOptx Detect", href: "/products/detect", copy: "AI anomaly detection" },
  { label: "HeatOptx ROI", href: "/products/roi", copy: "Repair prioritization" },
];

const navLinks = [
  { label: "Product", href: "/#product", key: "product", children: productLinks },
  { label: "Problem", href: "/#problem", key: "problem" },
  { label: "Solutions", href: "/#solutions", key: "solutions" },
  { label: "Pricing", href: "/pricing", key: "pricing" },
  { label: "Contact", href: "/demo", key: "contact" },
];

export function SubpageNav({ active }: { active?: string }) {
  return (
    <nav className="subpage-nav" aria-label="Primary navigation">
      <Link className="subpage-logo" href="/" aria-label="HeatOptx home">
        <img src="/brand/heatoptx-logo-horizontal.svg" alt="HeatOptx" />
      </Link>

      <div className="subpage-links">
        {navLinks.map((link) => (
          <div
            className={`nav-dropdown-wrap${link.children ? " has-dropdown" : ""}`}
            key={link.key}
          >
            <Link
              className={`nav-link-trigger${active === link.key ? " is-active" : ""}`}
              href={link.href}
            >
              {link.label}
            </Link>
            {link.children && (
              <div className="nav-dropdown" aria-label="Product pages">
                {link.children.map((child) => (
                  <Link href={child.href} key={child.href}>
                    <strong>{child.label}</strong>
                    <span>{child.copy}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="subpage-actions">
        <Link href="/sign-in">Sign in</Link>
        <Link className="subpage-demo" href="/demo">
          Request demo
          <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </nav>
  );
}
