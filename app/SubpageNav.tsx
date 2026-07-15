import Link from "next/link";

const navLinks = [
  { label: "Product", href: "/#product", key: "product" },
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
          <Link
            className={active === link.key ? "is-active" : undefined}
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
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
