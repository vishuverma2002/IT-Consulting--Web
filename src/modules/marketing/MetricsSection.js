import Container from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

// MetricsSection: full-width proof band carrying the headline marketing stats.
// THEME: the band paints itself with the project accent (--accent) so the strip
// stays on-brand instead of borrowing an arbitrary blue. Each stat shows a big
// value, a label, and a small supporting note, divided by hairline rules.
// DATA FLOW: pulls from siteConfig.stats by default (single source of truth).

export default function MetricsSection({ stats = siteConfig.stats }) {
  return (
    <section data-component="metrics-band" aria-label="Company at a glance">
      <style>{`
        [data-component="metrics-band"] {
          width: 100%;
          background:
            linear-gradient(180deg, var(--accent) 0%, var(--accent-hover) 100%);
          color: var(--hero-text);
        }

        [data-component="metrics-band"] .metrics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8) 0;
          padding-block: var(--space-12);
        }

        @media (min-width: 560px) {
          [data-component="metrics-band"] .metrics-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 900px) {
          [data-component="metrics-band"] .metrics-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        [data-component="metrics-band"] .metrics-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: var(--space-2);
          text-align: center;
          padding-inline: var(--space-5);
        }

        /* Hairline dividers between items on wider layouts. */
        @media (min-width: 560px) {
          [data-component="metrics-band"] .metrics-item:nth-child(even) {
            border-inline-start: 1px solid rgba(255, 255, 255, 0.18);
          }
        }

        @media (min-width: 900px) {
          [data-component="metrics-band"] .metrics-item + .metrics-item {
            border-inline-start: 1px solid rgba(255, 255, 255, 0.18);
          }
        }

        [data-component="metrics-band"] .metrics-value {
          margin: 0;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--hero-text);
        }

        [data-component="metrics-band"] .metrics-label {
          margin: 0;
          font-size: 0.9375rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: rgba(255, 255, 255, 0.92);
        }

        [data-component="metrics-band"] .metrics-note {
          margin: 0;
          font-size: 0.8125rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.62);
        }
      `}</style>

      <Container as="div">
        <div className="metrics-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="metrics-item">
              <p className="metrics-value">{stat.value}</p>
              <p className="metrics-label">{stat.label}</p>
              {stat.note ? <p className="metrics-note">{stat.note}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
