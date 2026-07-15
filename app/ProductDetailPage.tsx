import Link from "next/link";
import { productDetails, type ProductKey } from "./productDetailData";
import { SiteFooter } from "./SiteFooter";
import { SubpageNav } from "./SubpageNav";

const productOrder: ProductKey[] = ["map", "detect", "roi"];

export function ProductDetailPage({ product }: { product: ProductKey }) {
  const data = productDetails[product];

  return (
    <main className={`subpage-shell product-detail product-detail-${product}`}>
      <SubpageNav active="product" />

      <section className="subpage-section product-detail-hero">
        <div className="product-detail-copy">
          <p className="section-kicker">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
          <div className="subpage-cta-row">
            <Link className="button" href="/demo">
              Request ROI assessment
            </Link>
            <Link className="button button-secondary" href="/#product">
              Compare suite
            </Link>
          </div>
        </div>

        <div className="product-detail-visual">
          <div className="detail-visual-top">
            <span>{data.eyebrow}</span>
            <strong>Live module</strong>
          </div>
          <img src={data.visual} alt={data.alt} />
          <div className="detail-metrics">
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav className="product-tabs" aria-label="HeatOptx products">
        {productOrder.map((item) => (
          <Link
            className={item === product ? "is-active" : undefined}
            href={`/products/${item}`}
            key={item}
          >
            <img src={productDetails[item].icon} alt="" aria-hidden="true" />
            {productDetails[item].navLabel}
          </Link>
        ))}
      </nav>

      <section className="subpage-section detail-feature-grid">
        {data.features.map((feature) => (
          <article className="detail-feature-card" key={feature.title}>
            <img src={feature.icon} alt="" aria-hidden="true" />
            <h2>{feature.title}</h2>
            <p>{feature.copy}</p>
          </article>
        ))}
      </section>

      <section className="subpage-section detail-workflow">
        <div>
          <p className="section-kicker">Workflow</p>
          <h2>Built for the path from signal to action.</h2>
        </div>
        <div className="detail-workflow-list">
          {data.workflow.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="subpage-section detail-use-cases">
        <p className="section-kicker">Common use cases</p>
        <div>
          {data.useCases.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="subpage-section subpage-final-cta">
        <div>
          <p className="section-kicker">Next step</p>
          <h2>Start with the losses that are already costing you money.</h2>
        </div>
        <Link className="button" href="/demo">
          Request demo
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
