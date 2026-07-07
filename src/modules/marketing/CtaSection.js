"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

// CtaSection: premium conversion band placed directly above the footer.
// LAYOUT: dark grid card with left narrative (badge, headline, lead, accent pills)
// and a right-aligned indigo gradient CTA. Stacks vertically on mobile.

const TRUST_PILLS = [
  "Free 30-Min Consultation",
  "Non-Disclosure Agreement (NDA) Protected",
  "No Technical Expertise Needed from You",
  "Transparent Roadmap Before Commitment",
];

const SUPPORT_PHONE = siteConfig.contact.phone;
const SUPPORT_PHONE_HREF = `tel:+${siteConfig.contact.phone.replace(/\D/g, "")}`;

export default function CtaSection() {
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
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      data-component="premium-cta"
      data-visible={active ? "true" : "false"}
      aria-labelledby="premium-cta-heading"
    >
      <style>{`
        [data-component="premium-cta"] {
          position: relative;
          width: 100%;
          padding: 0;
        }

        [data-component="premium-cta"] .cta-shell {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          border-radius: 0;
          border: none;
          border-block: 1px solid rgba(129, 140, 248, 0.18);
          background-color: var(--hero-bg);
          background-image:
            radial-gradient(55% 50% at 12% 0%, rgba(99, 102, 241, 0.14) 0%, transparent 70%),
            radial-gradient(45% 45% at 88% 100%, rgba(56, 109, 255, 0.1) 0%, transparent 72%),
            linear-gradient(180deg, var(--footer-bg) 0%, var(--hero-bg) 100%);
          box-shadow:
            0 24px 48px -20px rgba(7, 11, 22, 0.55);
        }

        [data-component="premium-cta"] .cta-grid-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(99, 102, 241, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.14) 1px, transparent 1px);
          background-size: 44px 44px;
          -webkit-mask-image: radial-gradient(90% 85% at 50% 45%, #000 20%, transparent 100%);
          mask-image: radial-gradient(90% 85% at 50% 45%, #000 20%, transparent 100%);
        }

        [data-component="premium-cta"] .cta-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          padding: var(--space-5) clamp(var(--space-4), 4vw, var(--space-8));
        }

        [data-component="premium-cta"] .cta-card {
          position: relative;
          width: 100%;
          padding: clamp(1.25rem, 3vw, 2rem);
          border-radius: calc(var(--radius-lg) + 2px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.08);
        }

        [data-component="premium-cta"] .cta-main {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-5);
          align-items: center;
        }

        @media (min-width: 900px) {
          [data-component="premium-cta"] .cta-main {
            grid-template-columns: minmax(0, 1fr) auto;
            column-gap: var(--space-6);
          }
        }

        [data-component="premium-cta"] .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: 0.375rem 0.875rem;
          border-radius: var(--radius-pill);
          background: rgba(99, 102, 241, 0.18);
          border: 1px solid rgba(165, 180, 252, 0.32);
          color: var(--hero-badge-text);
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        [data-component="premium-cta"] .cta-badge::before {
          content: "";
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: var(--hero-accent);
          box-shadow: 0 0 0 3px rgba(165, 180, 252, 0.22);
        }

        [data-component="premium-cta"] .cta-heading {
          margin: var(--space-3) 0 0;
          max-width: none;
          font-size: clamp(1.375rem, 2.6vw, 1.875rem);
          line-height: 1.22;
          letter-spacing: -0.02em;
          font-weight: 700;
          color: var(--hero-text);
          text-wrap: balance;
        }

        [data-component="premium-cta"] .cta-lead {
          margin: var(--space-3) 0 0;
          max-width: none;
          font-size: 0.9375rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.72);
        }

        [data-component="premium-cta"] .cta-pills {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          margin: var(--space-4) 0 0;
          padding: 0;
          list-style: none;
        }

        @keyframes cta-accent-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes cta-icon-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.35), 0 0 10px -2px rgba(99, 102, 241, 0.45);
          }
          50% {
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12), 0 0 18px 0 rgba(99, 102, 241, 0.55);
          }
        }

        @keyframes cta-button-glow {
          0%, 100% {
            box-shadow:
              0 12px 30px -10px rgba(79, 70, 229, 0.7),
              0 0 0 1px var(--accent-border);
          }
          50% {
            box-shadow:
              0 16px 38px -8px rgba(79, 70, 229, 0.82),
              0 0 28px -4px rgba(99, 102, 241, 0.55),
              0 0 0 1px rgba(165, 180, 252, 0.5);
          }
        }

        [data-component="premium-cta"] .cta-pill {
          position: relative;
          isolation: isolate;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-pill);
          background: rgba(11, 17, 33, 0.72);
          border: 1px solid transparent;
          color: var(--hero-badge-text);
          font-size: 0.8125rem;
          font-weight: 600;
          white-space: nowrap;
          transition:
            transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
            color 0.32s ease;
        }

        [data-component="premium-cta"] .cta-pill::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(120deg, var(--accent) 0%, var(--accent-secondary) 35%, var(--accent-secondary) 70%, var(--accent-hover) 100%);
          background-size: 220% 100%;
          animation: cta-accent-flow 4.5s ease-in-out infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        [data-component="premium-cta"] .cta-pill:hover {
          transform: translateY(-2px);
          color: var(--hero-text);
        }

        [data-component="premium-cta"] .cta-pill:hover::before {
          animation-duration: 2.2s;
        }

        [data-component="premium-cta"] .cta-pill-icon {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.1rem;
          height: 1.1rem;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 50%, var(--accent-secondary) 100%);
          background-size: 200% 100%;
          animation:
            cta-accent-flow 4.5s ease-in-out infinite,
            cta-icon-glow 2.8s ease-in-out infinite;
          color: var(--hero-text);
          font-size: 0.625rem;
          font-weight: 800;
          line-height: 1;
          transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
        }

        [data-component="premium-cta"] .cta-pill:hover .cta-pill-icon {
          transform: scale(1.08);
          animation-duration: 2.2s, 1.6s;
        }

        [data-component="premium-cta"] .cta-action {
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }

        @media (min-width: 900px) {
          [data-component="premium-cta"] .cta-action {
            justify-content: flex-end;
            align-self: center;
            width: auto;
          }
        }

        [data-component="premium-cta"] .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-pill);
          border: none;
          background: linear-gradient(120deg, var(--accent) 0%, var(--accent-secondary) 50%, var(--accent-secondary) 100%);
          background-size: 200% 100%;
          color: var(--hero-text);
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          animation: cta-button-glow 3.5s ease-in-out infinite;
          transition:
            transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
            background-position 0.45s ease,
            filter 0.32s ease;
        }

        [data-component="premium-cta"] .cta-button:hover {
          transform: scale(1.05);
          background-position: 100% 50%;
          filter: brightness(1.06);
          animation: none;
          box-shadow:
            0 18px 44px -10px rgba(79, 70, 229, 0.85),
            0 0 36px -4px rgba(99, 102, 241, 0.75);
        }

        [data-component="premium-cta"] .cta-button-arrow {
          transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
        }

        [data-component="premium-cta"] .cta-button:hover .cta-button-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 899px) {
          [data-component="premium-cta"] .cta-button {
            width: 100%;
          }
        }

        [data-component="premium-cta"] .cta-support {
          position: relative;
          z-index: 1;
          margin: var(--space-4) 0 0;
          padding-top: var(--space-3);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.8125rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.62);
          text-align: center;
        }

        [data-component="premium-cta"] .cta-support a {
          color: rgba(255, 255, 255, 0.88);
          font-weight: 600;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        [data-component="premium-cta"] .cta-support a:hover {
          color: var(--hero-accent);
        }

        [data-component="premium-cta"] [data-reveal] {
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: calc(var(--reveal-i, 0) * 80ms);
        }

        [data-component="premium-cta"][data-visible="true"] [data-reveal] {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          [data-component="premium-cta"] [data-reveal],
          [data-component="premium-cta"] .cta-button,
          [data-component="premium-cta"] .cta-button-arrow,
          [data-component="premium-cta"] .cta-pill::before,
          [data-component="premium-cta"] .cta-pill-icon {
            opacity: 1;
            transform: none;
            transition: none;
            animation: none;
          }

          [data-component="premium-cta"] .cta-button {
            box-shadow:
              0 12px 30px -10px rgba(79, 70, 229, 0.7),
              0 0 0 1px var(--accent-border);
          }

          [data-component="premium-cta"] .cta-pill-icon {
            box-shadow: 0 0 10px -2px rgba(99, 102, 241, 0.45);
          }

          [data-component="premium-cta"] .cta-button:hover,
          [data-component="premium-cta"] .cta-pill:hover {
            transform: none;
          }
        }

        @media (max-width: 640px) {
          [data-component="premium-cta"] .cta-inner {
            padding-block: var(--space-4);
          }

          [data-component="premium-cta"] .cta-card {
            padding: var(--space-4);
            border-radius: var(--radius-md);
          }

          [data-component="premium-cta"] .cta-pill {
            white-space: normal;
            width: 100%;
          }
        }
      `}</style>

      <div className="cta-shell">
        <div className="cta-grid-bg" aria-hidden="true" />

        <div className="cta-inner">
          <div className="cta-card">
            <div className="cta-main">
              <div className="cta-content">
                <span className="cta-badge" data-reveal style={{ "--reveal-i": 0 }}>
                  Next step
                </span>

                <h2 id="premium-cta-heading" className="cta-heading" data-reveal style={{ "--reveal-i": 1 }}>
                  Ready to transform your technical architecture?
                </h2>

                <p className="cta-lead" data-reveal style={{ "--reveal-i": 2 }}>
                  Start with a complimentary 30-minute Architecture Exploration Call. We will
                  analyze your system requirements, evaluate your current frontend or backend
                  performance, and propose a reliable technology roadmap tailored to your
                  business scale.
                </p>

                <ul className="cta-pills" aria-label="Consultation benefits">
                  {TRUST_PILLS.map((label, index) => (
                    <li
                      key={label}
                      className="cta-pill"
                      data-reveal
                      style={{ "--reveal-i": index + 3 }}
                    >
                      <span className="cta-pill-icon" aria-hidden="true">
                        ✓
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cta-action" data-reveal style={{ "--reveal-i": 7 }}>
                <Link className="cta-button" href="/contact">
                  Book Technical Consultation
                  <span className="cta-button-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <p className="cta-support" data-reveal style={{ "--reveal-i": 8 }}>
              Questions before you book? Speak with our engineering team at{" "}
              <a href={SUPPORT_PHONE_HREF}>{SUPPORT_PHONE}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
