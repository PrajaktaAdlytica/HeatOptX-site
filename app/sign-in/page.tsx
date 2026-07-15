import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SubpageNav } from "../SubpageNav";

export const metadata = {
  title: "Sign In - HeatOptx",
  description: "Sign in to the HeatOptx industrial thermal AI workspace.",
};

export default function SignInPage() {
  return (
    <main className="auth-page">
      <SubpageNav />
      <section className="auth-shell" aria-label="HeatOptx sign in">
        <div className="auth-brand-panel">
          <Link href="/" aria-label="Back to HeatOptx home">
            <img src="/brand/heatoptx-logo-horizontal.svg" alt="HeatOptx" />
          </Link>
          <div>
            <p className="section-kicker">Operator workspace</p>
            <h1>Return to your thermal loss command view.</h1>
            <p>
              Review active anomalies, ROI-ranked repairs, verified savings,
              and assessment reports across your industrial heat systems.
            </p>
          </div>
          <div className="auth-preview">
            <span>Current workspace</span>
            <strong>Plant A thermal assessment</strong>
            <div className="auth-preview-grid">
              <div>
                <small>Open findings</small>
                <b>14</b>
              </div>
              <div>
                <small>Fastest payback</small>
                <b>3.8 mo</b>
              </div>
            </div>
          </div>
        </div>

        <form className="auth-form">
          <div>
            <p className="section-kicker">Sign in</p>
            <h2>Access HeatOptx</h2>
            <p>
              Use your company email to continue. Authentication will be
              connected in the next product pass.
            </p>
          </div>
          <label>
            Work email
            <input type="email" name="email" placeholder="name@company.com" />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="Password" />
          </label>
          <button className="button" type="submit">
            Sign in
          </button>
          <Link className="auth-link" href="/demo">
            Need access? Request an ROI assessment
          </Link>
        </form>
      </section>
      <section className="auth-trust-strip" aria-label="HeatOptx workspace benefits">
        <span>Role-aware workspaces</span>
        <span>Assessment reports</span>
        <span>Thermal anomaly review</span>
      </section>
      <SiteFooter />
    </main>
  );
}
