import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui";
import HeroResultsCard from "@/modules/marketing/HeroResultsCard";

// HeroSection: premium above-the-fold built to the Final Professional Layout
// Blueprint. STRUCTURE: full-viewport row, vertically centered — left value
// column (badge, 560px headline, subtext, checklist, dual CTA, microcopy) and a
// right elevated stats card carrying a mini testimonial — anchored by a grayscale
// "Trusted by" logo strip pinned to the bottom of the viewport.

const DEFAULT_LOGOS = [
  "Northwind",
  "Globex",
  "Initech",
  "Umbrella",
  "Soylent",
  "Hooli",
];

function renderHeroTitle(text) {
  const breakMarker = "Services That ";
  const markerIndex = text.indexOf(breakMarker);

  if (markerIndex === -1) {
    return text.replace(/Services That/g, "Services\u00A0That");
  }

  return (
    <>
      {text.slice(0, markerIndex)}Services&nbsp;That
      <br />
      <span className="hero-accent">{text.slice(markerIndex + breakMarker.length)}</span>
    </>
  );
}

export default function HeroSection({
  badge = "Website & Backend Development",
  title = "Web Development Services That Build Powerful Websites and Apps — Without the Headaches",
  lead = "We help small and growing businesses get a website or app they are proud of — one that loads fast, looks great, and never lets them down. No confusing tech talk. No surprise problems after launch. Just a team that gets the job done right, the first time.",
  points = [
    "Built to handle hundreds of users — without slowdowns",
    "Easy to Update — No Developer Needed.",
    "One Team. Design, Development & Support.",
  ],
  microcopy = "500+ projects delivered\u00A0\u00A0\u00A0·\u00A0\u00A0\u00A014+ years experience\u00A0\u00A0\u00A0·\u00A0\u00A0\u00A0Reply within one business hour",
  logos = DEFAULT_LOGOS,
}) {
  return (
    <section data-component="hero">
      <style>{`
        [data-component="hero"] {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          border: none;
          padding-block: 0;
        }

        /* Layer 1 — the technology illustration: covers the whole hero (cover,
           never stretched), softened with blur and dialled back to a subtle
           opacity so it reads as texture, not a dominant image. Scaled up slightly
           so the blur has no transparent edges. Positioned toward center/right. */
        [data-component="hero"]::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background: url("/images/hero-bg-icons.png") center center / cover no-repeat;
          filter: saturate(0.95) contrast(1.05);
          opacity: var(--hero-icon-opacity);
          transform: scale(1.03);
          image-rendering: -webkit-optimize-contrast;
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 20%, #000 80%, transparent 100%);
          mask-image: linear-gradient(180deg, transparent 0%, #000 20%, #000 80%, transparent 100%);
          animation: heroFloat 16s ease-in-out infinite;
        }

        /* Layer 2 — depth overlays stacked for an enterprise feel:
           a left→right dark gradient (keeps the left content area high-contrast),
           a soft accent glow top-right, and a vertical vignette for grounding. */
        [data-component="hero"]::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          animation: heroGlow 9s ease-in-out infinite;
        }

        /* ---- Animations ---- */
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroFloat {
          0%, 100% { transform: scale(1.03) translateY(0); }
          50% { transform: scale(1.03) translateY(-14px); }
        }

        @keyframes heroGlow {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 1; }
        }

        [data-component="hero"] .hero-badge,
        [data-component="hero"] .hero-copy h1,
        [data-component="hero"] .hero-sub,
        [data-component="hero"] .hero-check,
        [data-component="hero"] .hero-cta,
        [data-component="hero"] .hero-microcopy {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        [data-component="hero"] .hero-badge { animation-delay: 0.05s; }
        [data-component="hero"] .hero-copy h1 { animation-delay: 0.15s; }
        [data-component="hero"] .hero-sub { animation-delay: 0.28s; }
        [data-component="hero"] .hero-check { animation-delay: 0.4s; }
        [data-component="hero"] .hero-cta { animation-delay: 0.52s; }
        [data-component="hero"] .hero-microcopy { animation-delay: 0.62s; }

        [data-component="hero"] .hero-logos {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-component="hero"]::before,
          [data-component="hero"]::after,
          [data-component="hero"] .hero-badge,
          [data-component="hero"] .hero-copy h1,
          [data-component="hero"] .hero-sub,
          [data-component="hero"] .hero-check,
          [data-component="hero"] .hero-cta,
          [data-component="hero"] .hero-microcopy,
          [data-component="hero"] .hero-logos,
          [data-component="hero"] .hero-accent {
            animation: none;
            opacity: 1;
          }

          [data-component="hero"] .hero-accent {
            background-position: 0% center;
          }
        }

        [data-component="hero"] .hero-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 5;
          line-height: 0;
          pointer-events: none;
        }

        [data-component="hero"] .hero-wave svg {
          display: block;
          width: 100%;
          height: clamp(2rem, 4vw, 3.5rem);
        }

        @media (min-width: 980px) {
          [data-component="hero"]::before {
            background-position: 62% center;
          }
        }

        @media (max-width: 979px) {
          [data-component="hero"]::before {
            background-position: center;
            opacity: calc(var(--hero-icon-opacity) * 0.85);
          }

          [data-component="hero"]::after {
            background: var(--hero-overlay);
          }
        }

        [data-component="hero"] [data-component="container"] {
          padding-inline: var(--space-5);
        }

        @media (min-width: 640px) and (max-width: 979px) {
          [data-component="hero"] [data-component="container"] {
            padding-inline-start: var(--space-5);
            padding-inline-end: var(--space-8);
          }
        }

        @media (min-width: 980px) {
          [data-component="hero"] {
            --hero-title-size: clamp(1.875rem, 3.6vw, 2.5rem);
            --hero-title-leading: calc(var(--hero-title-size) * 1.18);
          }

          [data-component="hero"] [data-component="container"] {
            padding-inline-start: var(--space-6);
            padding-inline-end: var(--space-10);
          }
        }

        [data-component="hero"] .hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          min-height: calc(100dvh - 5.25rem);
          min-height: calc(100vh - 5.25rem);
          padding-block: var(--space-10) var(--space-8);
          gap: var(--space-10);
        }

        [data-component="hero"] .hero-grid {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-12);
          align-items: center;
          justify-items: start;
          width: 100%;
        }

        @media (min-width: 980px) {
          [data-component="hero"] .hero-grid {
            grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
            column-gap: var(--space-12);
            align-items: start;
            justify-items: stretch;
          }
        }

        @media (min-width: 1280px) {
          [data-component="hero"] .hero-grid {
            column-gap: var(--space-16);
          }
        }

        /* ---- Left column wrapper ---- */
        [data-component="hero"] .hero-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          max-width: 100%;
          margin-top: var(--space-8);
        }

        @media (min-width: 640px) and (max-width: 979px) {
          [data-component="hero"] .hero-content {
            margin-top: var(--space-10);
            padding-inline-end: var(--space-4);
          }
        }

        @media (min-width: 1280px) {
          [data-component="hero"] .hero-content {
            margin-top: var(--space-10);
            transform: translateX(calc(-1 * var(--space-6)));
          }
        }

        @media (min-width: 980px) and (max-width: 1279px) {
          [data-component="hero"] .hero-content {
            margin-top: var(--space-10);
            transform: none;
          }
        }

        /* ---- Right column wrapper ---- */
        [data-component="hero"] .hero-card-wrap {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: flex-start;
          width: 100%;
          margin-top: var(--space-16);
        }

        @media (min-width: 640px) and (max-width: 979px) {
          [data-component="hero"] .hero-card-wrap {
            margin-top: var(--space-20);
          }
        }

        @media (min-width: 1280px) {
          [data-component="hero"] .hero-card-wrap {
            /* Align card top with the 3rd headline line ("Headaches") */
            margin-top: calc(
              var(--space-10)
              + 2rem
              + var(--space-5)
              + var(--hero-title-leading)
              + var(--hero-title-leading)
            );
            align-items: flex-end;
            margin-inline-start: var(--space-6);
            transform: translateX(var(--space-12));
          }
        }

        @media (min-width: 980px) and (max-width: 1279px) {
          [data-component="hero"] .hero-card-wrap {
            margin-top: var(--space-12);
            align-items: stretch;
            margin-inline-start: 0;
            transform: none;
          }
        }

        /* ---- Left: value column ---- */
        [data-component="hero"] .hero-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-5);
          width: 100%;
        }

        [data-component="hero"] .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: 0.375rem 0.875rem;
          border-radius: var(--radius-pill);
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          backdrop-filter: blur(4px);
        }

        [data-component="hero"] .hero-badge::before {
          content: "";
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
        }

        [data-component="hero"] .hero-copy h1 {
          max-width: 38rem;
          margin: 0;
          font-size: clamp(1.875rem, 3.6vw, 2.5rem);
          line-height: 1.18;
          letter-spacing: -0.02em;
          font-weight: 700;
          text-wrap: balance;
        }

        [data-component="hero"] .hero-accent {
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: heroAccentShimmer 6s ease-in-out infinite;
        }

        @keyframes heroAccentShimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }

        [data-component="hero"] .hero-sub {
          max-width: 34rem;
          margin: 0;
          font-size: 1.0625rem;
          line-height: 1.6;
        }

        [data-component="hero"] .hero-check {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          margin: var(--space-1) 0 0;
        }

        [data-component="hero"] .hero-check li {
          display: flex;
          align-items: flex-start;
          gap: var(--space-3);
          font-size: 0.9375rem;
          font-weight: 500;
        }

        [data-component="hero"] .hero-check li::before {
          content: "✓";
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 1.35rem;
          height: 1.35rem;
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
        }

        [data-component="hero"] .hero-cta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-3);
          margin-top: var(--space-2);
        }

        [data-component="hero"] .hero-cta [data-variant="secondary"] {
          backdrop-filter: blur(4px);
        }

        [data-component="hero"] .hero-microcopy {
          margin: 0;
          font-size: 0.8125rem;
        }

        /* ---- Right: elevated stats card ---- */
        [data-component="hero"] .hero-card {
          width: 100%;
          padding: var(--space-5) var(--space-5);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
          transition: box-shadow 0.35s ease, border-color 0.35s ease;
        }

        [data-component="hero"] .hero-card:hover {
          border-color: var(--accent-border);
          box-shadow: none;
        }

        @media (min-width: 980px) {
          [data-component="hero"] .hero-card {
            max-width: 27rem;
          }
        }

        [data-component="hero"] .card-eyebrow {
          margin: 0;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--hero-eyebrow);
        }

        [data-component="hero"] .card-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-2);
        }

        [data-component="hero"] .card-stat {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          padding: var(--space-3);
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* ---- Mini testimonial inside the card ---- */
        [data-component="hero"] .card-quote {
          margin: 0;
          padding-top: var(--space-4);
          border-top: 1px solid transparent;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        [data-component="hero"] .card-quote blockquote {
          margin: 0;
          font-size: 0.9375rem;
          font-style: normal;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.82);
        }

        [data-component="hero"] .quote-author {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        [data-component="hero"] .quote-avatar {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: var(--accent);
          color: var(--accent-contrast);
          font-size: 0.75rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        [data-component="hero"] .quote-author .name {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--hero-text);
        }

        [data-component="hero"] .quote-author .role {
          font-size: 0.75rem;
          color: var(--hero-sub-text);
        }

        /* ---- Trusted-by logo strip ---- */
        [data-component="hero"] .hero-logos {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          align-self: flex-start;
          width: 100%;
          gap: var(--space-5) var(--space-8);
          padding-top: var(--space-6);
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        @media (min-width: 1280px) {
          [data-component="hero"] .hero-logos {
            transform: translateX(calc(-1 * var(--space-6)));
            padding-inline-end: var(--space-12);
          }
        }

        [data-component="hero"] .logos-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
        }

        [data-component="hero"] .logos-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-5) var(--space-8);
        }

        [data-component="hero"] .logos-list li {
          font-size: 1.0625rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: rgba(255, 255, 255, 0.4);
          filter: grayscale(1);
          transition: color 0.15s ease;
        }

        [data-component="hero"] .logos-list li:hover {
          color: var(--hero-text);
        }

        @media (max-width: 979px) {
          [data-component="hero"] .hero-card-wrap {
            order: 2;
          }

          [data-component="hero"] .hero-inner {
            min-height: auto;
          }

          [data-component="hero"] .hero-content {
            transform: none;
            margin-right: 0;
          }

          [data-component="hero"] .hero-card-wrap {
            transform: none;
          }

          [data-component="hero"] .hero-logos {
            transform: none;
            padding-inline-end: 0;
          }
        }
      `}</style>

      <Container as="div">
        <div className="hero-inner">
          <div className="hero-grid">
            {/* Left — content column */}
            <div className="hero-content">
              <div className="hero-copy">
                <span className="hero-badge">{badge}</span>
                <h1>{renderHeroTitle(title)}</h1>
                <p className="hero-sub">{lead}</p>

                <ul className="hero-check">
                  {points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="hero-cta">
                  <Button as={Link} href="/contact" variant="primary">
                    Book Web Consultation →
                  </Button>
                  <Button as={Link} href="/case-studies" variant="secondary">
                    View Case Studies
                  </Button>
                </div>

                <p className="hero-microcopy">{microcopy}</p>
              </div>
            </div>

            {/* Right — card column */}
            <div className="hero-card-wrap">
              <HeroResultsCard />
            </div>
          </div>

          {/* Bottom — grayscale client logo strip */}
          <div className="hero-logos">
            <span className="logos-label">Trusted by</span>
            <ul className="logos-list" aria-label="Trusted by leading teams">
              {logos.map((logo) => (
                <li key={logo}>{logo}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#f5f7ff"
            d="M0,40 C240,58 480,12 720,32 C960,52 1200,48 1440,36 L1440,60 L0,60 Z"
          />
        </svg>
      </div>
    </section>
  );
}
