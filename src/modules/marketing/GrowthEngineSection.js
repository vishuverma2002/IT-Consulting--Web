"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

// GrowthEngineSection: light, narrative "why us" band placed directly below the
// StatsBand. Built to the page's design tokens (white surface + indigo accent).
// MOTION: framer-motion is not a dependency, so the reveal is driven by a single
// IntersectionObserver with CSS-staggered children. All motion is gated on a
// prefers-reduced-motion check, falling back to the final state instantly.

const PARAGRAPHS = [
  "Too many businesses struggle with websites that are slow, difficult to update, and disconnected from the tools they use every day. Small changes require developer support, and valuable time gets wasted on manual work.",
  "We help businesses simplify this with modern websites and digital solutions built for performance, growth, and long-term reliability \u2014 including custom Web Development, scalable Java backend systems, and easy-to-manage WordPress platforms.",
  "Our goal is to create systems that save time, improve customer experience, and support business growth without adding complexity.",
  "From understanding your business to final delivery, we ensure fast, scalable, and easy-to-manage solutions so your team can focus on growth instead of maintenance.",
];

const PILLARS = [
  {
    id: "web",
    label: "Custom Web Development",
    detail: "Fast, conversion-ready websites tailored to your brand.",
    icon: (
      <path d="M3 7h18M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7M3 7l2-3h14l2 3M8 11h8M8 14h5" />
    ),
  },
  {
    id: "java",
    label: "Scalable Java Backends",
    detail: "Robust systems engineered to handle real-world growth.",
    icon: (
      <path d="M4 17a8 8 0 0 0 16 0M12 3v8m0 0l3-3m-3 3L9 8M5 21h14" />
    ),
  },
  {
    id: "wordpress",
    label: "Easy WordPress Platforms",
    detail: "Update content yourself \u2014 no developer needed.",
    icon: (
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM4 9h16M7 9l3 9M17 9l-3 9" />
    ),
  },
];

const OUTCOMES = ["Save your team time", "Improve customer experience", "Support long-term growth"];

export default function GrowthEngineSection() {
  const sectionRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);
  const active = prefersReducedMotion || inView;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      data-component="growth-engine"
      data-visible={active ? "true" : "false"}
      aria-labelledby="growth-engine-heading"
    >
      <style>{`
        [data-component="growth-engine"] {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: var(--surface);
          padding-block: var(--space-20);
        }

        /* Subtle, on-theme background texture: a faint grid + two soft indigo
           glows so the white section never reads as flat. */
        [data-component="growth-engine"] .ge-bg {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
        }
        [data-component="growth-engine"] .ge-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(79, 70, 229, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 70, 229, 0.045) 1px, transparent 1px);
          background-size: 44px 44px;
          -webkit-mask-image: radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 78%);
          mask-image: radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 78%);
        }
        [data-component="growth-engine"] .ge-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.55;
        }
        [data-component="growth-engine"] .ge-orb--1 {
          width: 26rem; height: 26rem;
          top: -10rem; right: -8rem;
          background: radial-gradient(circle, var(--hero-badge-bg), transparent 70%);
        }
        [data-component="growth-engine"] .ge-orb--2 {
          width: 22rem; height: 22rem;
          bottom: -9rem; left: -7rem;
          background: radial-gradient(circle, rgba(129, 140, 248, 0.2), transparent 70%);
        }

        [data-component="growth-engine"] .ge-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-12);
          align-items: start;
        }
        @media (min-width: 980px) {
          [data-component="growth-engine"] .ge-grid {
            grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
            column-gap: var(--space-16);
          }
        }

        /* ---- Left: narrative ---- */
        [data-component="growth-engine"] .ge-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: 0.375rem 0.875rem;
          border-radius: var(--radius-pill);
          background: var(--accent-soft);
          border: 1px solid var(--brand-mark-glow-hover);
          color: var(--accent);
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        [data-component="growth-engine"] .ge-badge::before {
          content: "";
          width: 0.4rem; height: 0.4rem;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.18);
        }

        [data-component="growth-engine"] .ge-heading {
          margin: var(--space-5) 0 0;
          max-width: 34rem;
          font-size: clamp(1.75rem, 3.4vw, 2.375rem);
          line-height: 1.18;
          letter-spacing: -0.02em;
          font-weight: 700;
          color: var(--ink);
          text-wrap: balance;
        }
        [data-component="growth-engine"] .ge-heading .ge-accent {
          color: var(--accent);
        }

        [data-component="growth-engine"] .ge-copy {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          margin-top: var(--space-6);
          max-width: 36rem;
        }
        [data-component="growth-engine"] .ge-copy p {
          margin: 0;
          font-size: 1.0625rem;
          line-height: 1.7;
          color: var(--muted);
        }

        [data-component="growth-engine"] .ge-outcomes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-3);
          margin-top: var(--space-8);
        }
        [data-component="growth-engine"] .ge-chip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-pill);
          background: #f8f9fc;
          border: 1px solid var(--border-soft);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--ink);
          text-align: center;
          white-space: nowrap;
        }
        [data-component="growth-engine"] .ge-chip svg {
          width: 1rem; height: 1rem;
          stroke: var(--accent);
          stroke-width: 2.4;
          fill: none;
        }

        /* ---- Right: pillar cards ---- */
        [data-component="growth-engine"] .ge-cards {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        @media (min-width: 980px) {
          [data-component="growth-engine"] .ge-cards {
            position: sticky;
            top: var(--space-12);
          }
        }
        [data-component="growth-engine"] .ge-card {
          display: flex;
          align-items: flex-start;
          gap: var(--space-4);
          padding: var(--space-5);
          border-radius: var(--radius-lg);
          background: var(--surface);
          border: 1px solid var(--border-soft);
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        [data-component="growth-engine"] .ge-card:hover {
          border-color: rgba(79, 70, 229, 0.4);
          transform: translateY(-4px);
          box-shadow:
            0 20px 40px -18px var(--accent-border),
            var(--shadow-md);
        }
        [data-component="growth-engine"] .ge-card-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 2.85rem; height: 2.85rem;
          border-radius: var(--radius-md);
          border: 1px solid rgba(79, 70, 229, 0.18);
          background: #ffffff;
          background-size: 160% 160%;
          color: var(--accent);
          overflow: hidden;
          box-shadow: 0 4px 12px -6px rgba(15, 23, 42, 0.18);
          transition:
            transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            color 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            background-position 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        [data-component="growth-engine"] .ge-card-icon::after {
          display: none;
        }
        [data-component="growth-engine"] .ge-card:hover .ge-card-icon {
          transform: translateY(-2px) scale(1.04);
          background: linear-gradient(145deg, var(--accent-secondary) 0%, var(--accent) 45%, var(--accent-secondary) 100%);
          background-position: 100% 100%;
          border-color: var(--accent-border);
          color: var(--accent-contrast);
          box-shadow: 0 10px 24px -8px var(--accent-glow);
        }
        [data-component="growth-engine"] .ge-card:hover .ge-card-icon::after {
          transform: none;
        }
        [data-component="growth-engine"] .ge-card-icon svg {
          width: 1.4rem; height: 1.4rem;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
        }
        [data-component="growth-engine"] .ge-card-label {
          margin: 0;
          font-size: 1rem;
          font-weight: 700;
          color: var(--ink);
        }
        [data-component="growth-engine"] .ge-card-detail {
          margin: 0.2rem 0 0;
          font-size: 0.9375rem;
          line-height: 1.5;
          color: var(--muted);
        }

        /* ---- Reveal animation (staggered) ---- */
        [data-component="growth-engine"] [data-reveal] {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: calc(var(--reveal-i, 0) * 90ms);
        }
        [data-component="growth-engine"][data-visible="true"] [data-reveal] {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          [data-component="growth-engine"] [data-reveal] {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="ge-bg" aria-hidden="true">
        <span className="ge-orb ge-orb--1" />
        <span className="ge-orb ge-orb--2" />
      </div>

      <Container as="div">
        <div className="ge-grid">
          {/* Left — narrative column */}
          <div className="ge-narrative">
            <span className="ge-badge" data-reveal style={{ "--reveal-i": 0 }}>
              Why CodeForge
            </span>

            <h2 id="growth-engine-heading" className="ge-heading" data-reveal style={{ "--reveal-i": 1 }}>
              Turn your website into a <span className="ge-accent">growth engine</span>
              {" \u2014 not another thing your team has to manage"}
            </h2>

            <div className="ge-copy">
              {PARAGRAPHS.map((text, index) => (
                <p key={index} data-reveal style={{ "--reveal-i": index + 2 }}>
                  {text}
                </p>
              ))}
            </div>

            <ul className="ge-outcomes" aria-label="What our solutions deliver">
              {OUTCOMES.map((outcome, index) => (
                <li
                  key={outcome}
                  className="ge-chip"
                  data-reveal
                  style={{ "--reveal-i": index + 6 }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — pillar cards */}
          <div className="ge-cards">
            {PILLARS.map((pillar, index) => (
              <article
                key={pillar.id}
                className="ge-card"
                data-reveal
                style={{ "--reveal-i": index + 3 }}
              >
                <span className="ge-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">{pillar.icon}</svg>
                </span>
                <div>
                  <h3 className="ge-card-label">{pillar.label}</h3>
                  <p className="ge-card-detail">{pillar.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
