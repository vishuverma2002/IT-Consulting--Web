"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const ROTATE_MS = 2500;

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const WebIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 9h18M9 4v14" />
  </svg>
);

const JavaIcon = () => (
  <svg {...iconProps}>
    <path d="M4 17a8 8 0 0 0 16 0M12 3v8m0 0 3-3m-3 3-3 3M5 21h14" />
  </svg>
);

const WordPressIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M4 9h16M7 9l3 9M17 9l-3 9" />
  </svg>
);

const CheckIcon = () => (
  <svg {...iconProps} width={13} height={13}>
    <path d="m5 12 3 3 7-7" />
  </svg>
);

const RateIcon = () => (
  <svg {...iconProps} width={15} height={15}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const DeliveredIcon = () => (
  <svg {...iconProps} width={15} height={15}>
    <path d="m12.83 2.18 8 3.99a1 1 0 0 1 0 1.82l-8 3.99a2 2 0 0 1-1.66 0l-8-3.99a1 1 0 0 1 0-1.82l8-3.99a2 2 0 0 1 1.66 0Z" />
  </svg>
);

const ClockIcon = () => (
  <svg {...iconProps} width={15} height={15}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const ChevronLeft = () => (
  <svg {...iconProps} width={16} height={16}>
    <path d="m14 6-6 6 6 6" />
  </svg>
);

const ChevronRight = () => (
  <svg {...iconProps} width={16} height={16}>
    <path d="m10 6 6 6-6 6" />
  </svg>
);

const SERVICE_SLIDES = [
  {
    id: "web-development",
    slug: "web-development",
    shortLabel: "Web",
    title: "Web Development",
    tagline: "Fast, conversion-ready websites & web apps",
    Icon: WebIcon,
    accent: "var(--hero-accent)",
    accentGlow: "var(--accent-glow)",
    badge: "Most booked",
    metrics: [
      { Icon: RateIcon, value: "$42/hr", label: "Hourly rate" },
      { Icon: DeliveredIcon, value: "85+", label: "Sites delivered" },
      { Icon: ClockIcon, value: "2–4 wks", label: "Typical launch" },
    ],
    highlights: [
      "React, Next.js & full-stack builds",
      "Core Web Vitals & SEO optimized",
      "API, CRM & payment integrations",
    ],
  },
  {
    id: "java-backend",
    slug: "java-backend",
    shortLabel: "Java",
    title: "Java Backend",
    tagline: "Scalable, secure enterprise systems",
    Icon: JavaIcon,
    accent: "var(--accent-secondary)",
    accentGlow: "var(--accent-glow)",
    badge: "Enterprise",
    metrics: [
      { Icon: RateIcon, value: "$42/hr", label: "Hourly rate" },
      { Icon: DeliveredIcon, value: "45+", label: "APIs delivered" },
      { Icon: ClockIcon, value: "99.9%", label: "Uptime SLA" },
    ],
    highlights: [
      "Spring Boot & microservices",
      "REST / GraphQL API engineering",
      "Bank-grade security & JWT auth",
    ],
  },
  {
    id: "wordpress",
    slug: "wordpress",
    shortLabel: "WP",
    title: "WordPress",
    tagline: "Custom sites you update yourself",
    Icon: WordPressIcon,
    accent: "var(--accent)",
    accentGlow: "var(--accent-glow)",
    badge: "No-code edits",
    metrics: [
      { Icon: RateIcon, value: "$42/hr", label: "Hourly rate" },
      { Icon: DeliveredIcon, value: "60+", label: "WP sites live" },
      { Icon: ClockIcon, value: "From $120", label: "Fixed projects" },
    ],
    highlights: [
      "Custom themes — no cheap templates",
      "Drag-and-drop — no coding needed",
      "Daily backups & firewall security",
    ],
  },
];

function ServiceSlide({ slide, isActive, slideIndex }) {
  const { Icon, title, tagline, metrics, highlights, slug, accent, badge } = slide;

  return (
    <article
      className="hrc-slide"
      data-active={isActive ? "true" : "false"}
      aria-hidden={!isActive}
      style={{ "--slide-accent": accent, "--slide-i": slideIndex }}
    >
      <header className="hrc-slide-head">
        <span className="hrc-slide-icon" aria-hidden="true">
          <Icon />
          <span className="hrc-icon-ring" />
        </span>
        <div className="hrc-slide-titles">
          <div className="hrc-title-row">
            <h3 className="hrc-slide-title">{title}</h3>
            <span className="hrc-slide-badge">{badge}</span>
          </div>
          <p className="hrc-slide-tagline">{tagline}</p>
        </div>
      </header>

      <ul className="hrc-metrics" aria-label={`${title} key figures`}>
        {metrics.map((metric, index) => (
          <li key={metric.label} style={{ "--metric-i": index }}>
            <span className="hrc-metric-icon" aria-hidden="true">
              <metric.Icon />
            </span>
            <span className="hrc-metric-value">{metric.value}</span>
            <span className="hrc-metric-label">{metric.label}</span>
          </li>
        ))}
      </ul>

      <div className="hrc-highlights-wrap">
        <p className="hrc-highlights-label">What you get</p>
        <ul className="hrc-highlights">
          {highlights.map((text, index) => (
            <li key={text} style={{ "--hi-i": index }}>
              <span className="hrc-check" aria-hidden="true">
                <CheckIcon />
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hrc-slide-actions">
        <Link href={`/services/${slug}`} className="hrc-slide-link hrc-slide-link--primary" tabIndex={isActive ? 0 : -1}>
          View {title}
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link href="/contact" className="hrc-slide-link hrc-slide-link--ghost" tabIndex={isActive ? 0 : -1}>
          Free consult
        </Link>
      </div>
    </article>
  );
}

export default function HeroResultsCard({ slides = SERVICE_SLIDES, intervalMs = ROTATE_MS }) {
  const cardRef = useRef(null);
  const [active, setActive] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const currentSlide = slides[current];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const delay = reduceMotion ? 0 : 520;
    const timer = window.setTimeout(() => setActive(true), delay);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  useEffect(() => {
    if (!active || reduceMotion || paused || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [active, reduceMotion, paused, slides.length, intervalMs]);

  const goTo = useCallback((index) => setCurrent(index), []);

  const goPrev = useCallback(() => {
    setCurrent((index) => (index - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => {
    setCurrent((index) => (index + 1) % slides.length);
  }, [slides.length]);

  const handleMouseMove = (event) => {
    if (reduceMotion) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    const mx = ((event.clientX - rect.left) / rect.width) * 100;
    const my = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${mx}%`);
    card.style.setProperty("--my", `${my}%`);
    card.style.setProperty("--rx", `${(-py * 5).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(px * 5).toFixed(2)}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    setPaused(false);
  };

  return (
    <aside
      ref={cardRef}
      className="hero-card hrc-card"
      data-visible={active ? "true" : "false"}
      style={{
        "--slide-accent": currentSlide.accent,
        "--slide-glow": currentSlide.accentGlow,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={handleMouseLeave}
      aria-label="Our services at a glance"
      aria-live="polite"
    >
      <span className="hrc-border-glow" aria-hidden="true" />
      <span className="hrc-grid" aria-hidden="true" />
      <span className="hrc-glow" aria-hidden="true" />

      <header className="hrc-top">
        <div className="hrc-top-left">
          <p className="card-eyebrow">
            <span className="hrc-live-dot" aria-hidden="true" />
            Our services
          </p>
          <span className="hrc-counter" aria-live="polite">
            {current + 1} / {slides.length}
          </span>
        </div>

        <div className="hrc-nav">
          <button
            type="button"
            className="hrc-nav-btn"
            aria-label="Previous service"
            onClick={goPrev}
          >
            <ChevronLeft />
          </button>
          <div className="hrc-tabs" role="tablist" aria-label="Service slides">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                className="hrc-tab"
                data-active={current === index ? "true" : "false"}
                aria-selected={current === index}
                aria-label={slide.title}
                onClick={() => goTo(index)}
              >
                {slide.shortLabel}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="hrc-nav-btn"
            aria-label="Next service"
            onClick={goNext}
          >
            <ChevronRight />
          </button>
        </div>
      </header>

      <div className="hrc-viewport">
        {slides.map((slide, index) => (
          <ServiceSlide
            key={slide.id}
            slide={slide}
            isActive={current === index}
            slideIndex={index}
          />
        ))}
      </div>

      <style>{`
        .hrc-card {
          --mx: 50%;
          --my: 50%;
          --rx: 0deg;
          --ry: 0deg;
          --slide-accent: var(--hero-accent);
          --slide-glow: var(--accent-glow);
          position: relative;
          overflow: hidden;
          gap: var(--space-5) !important;
          padding: var(--space-5) var(--space-5) !important;
          transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry));
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .hrc-card[data-visible="false"] {
          opacity: 0;
          transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry))
            translateY(20px) scale(0.98);
        }

        .hrc-card[data-visible="true"] {
          opacity: 1;
          transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry))
            translateY(0) scale(1);
          animation: hrcCardIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.45s both;
        }

        @keyframes hrcCardIn {
          from {
            opacity: 0;
            transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry))
              translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: perspective(1200px) rotateX(var(--rx)) rotateY(var(--ry))
              translateY(0) scale(1);
          }
        }

        .hrc-border-glow {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(
            135deg,
            var(--slide-accent) 0%,
            var(--accent) 50%,
            var(--slide-accent) 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.65;
          transition: opacity 0.5s ease;
          z-index: 0;
        }

        .hrc-card:hover .hrc-border-glow { opacity: 0; }

        .hrc-grid {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 24px 24px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, #000 20%, transparent 75%);
          z-index: 0;
        }

        .hrc-glow {
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          pointer-events: none;
          background:
            radial-gradient(380px circle at var(--mx) var(--my), var(--slide-glow), transparent 45%),
            radial-gradient(200px circle at 90% 10%, var(--slide-glow), transparent 60%);
          opacity: 0.55;
          transition: opacity 0.35s ease;
          z-index: 0;
        }

        .hrc-card:hover .hrc-glow { opacity: 0; }

        .hrc-top,
        .hrc-viewport {
          position: relative;
          z-index: 1;
        }

        .hrc-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-3);
          flex-wrap: wrap;
        }

        .hrc-top-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .hrc-top .card-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin: 0;
        }

        .hrc-counter {
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--hrc-muted);
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-pill);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hrc-live-dot {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: var(--success);
          box-shadow: 0 0 0 0 var(--success-soft);
          animation: hrcPulse 2.2s ease-in-out infinite;
        }

        @keyframes hrcPulse {
          0%, 100% { box-shadow: 0 0 0 0 var(--success-soft); }
          50% { box-shadow: 0 0 0 5px rgba(74, 222, 128, 0); }
        }

        .hrc-nav {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .hrc-nav-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.65rem;
          height: 1.65rem;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 0.4rem;
          background: rgba(255, 255, 255, 0.05);
          color: var(--hrc-muted);
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .hrc-nav-btn:hover {
          background: var(--hero-badge-bg);
          border-color: var(--accent-border);
          color: var(--hrc-text);
        }

        .hrc-tabs {
          display: flex;
          gap: 0.2rem;
          padding: 0.15rem;
          border-radius: 0.5rem;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hrc-tab {
          padding: 0.25rem 0.55rem;
          border: none;
          border-radius: 0.35rem;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: var(--hrc-muted);
          background: transparent;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
        }

        .hrc-tab[data-active="true"] {
          color: var(--hrc-text);
          background: linear-gradient(145deg, var(--slide-accent), var(--accent-secondary));
          box-shadow: 0 2px 8px -2px var(--slide-glow);
        }

        .hrc-tab:hover:not([data-active="true"]) {
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.08);
        }

        .hrc-viewport {
          position: relative;
          min-height: 19.5rem;
        }

        .hrc-slide {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          opacity: 0;
          transform: translateX(18px) scale(0.98);
          filter: blur(4px);
          pointer-events: none;
          transition:
            opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hrc-slide[data-active="true"] {
          opacity: 1;
          transform: translateX(0) scale(1);
          filter: blur(0);
          pointer-events: auto;
        }

        .hrc-slide-head {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .hrc-slide-icon {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 0.75rem;
          color: var(--accent-contrast);
          background: linear-gradient(145deg, var(--slide-accent), var(--accent));
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 6px 16px -6px var(--slide-glow);
        }

        .hrc-slide-icon svg {
          color: var(--accent-contrast);
          stroke: currentColor;
        }

        .hrc-icon-ring {
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          border: 1px solid var(--slide-accent);
          opacity: 0;
          animation: hrcRing 2.5s ease-out infinite;
        }

        @keyframes hrcRing {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.25); opacity: 0; }
        }

        .hrc-slide[data-active="true"] .hrc-icon-ring {
          animation-play-state: running;
        }

        .hrc-slide-titles { min-width: 0; flex: 1; }

        .hrc-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .hrc-slide-title {
          margin: 0;
          font-size: 1.125rem;
          font-weight: 700;
          line-height: 1.2;
          color: var(--hrc-text);
        }

        .hrc-slide-badge {
          padding: 0.12rem 0.45rem;
          border-radius: var(--radius-pill);
          font-size: 0.5625rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--hero-badge-text);
          background: var(--hero-badge-bg);
          border: 1px solid var(--accent-glow);
        }

        .hrc-slide-tagline {
          margin: 0.25rem 0 0;
          font-size: 0.8125rem;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.62);
        }

        .hrc-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .hrc-metrics li {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
          padding: 0.7rem 0.4rem;
          border-radius: 0.55rem;
          text-align: center;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        }

        .hrc-slide[data-active="true"] .hrc-metrics li {
          animation: hrcMetricIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: calc(0.08s + var(--metric-i, 0) * 0.07s);
        }

        @keyframes hrcMetricIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hrc-metrics li::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--slide-accent), transparent);
          opacity: 0.7;
        }

        .hrc-slide[data-active="true"] .hrc-metrics li:hover {
          border-color: var(--accent-border);
          background: rgba(99, 102, 241, 0.14);
          transform: translateY(-2px);
        }

        .hrc-metric-icon {
          display: inline-flex;
          color: var(--slide-accent);
        }

        .hrc-metric-value {
          font-size: 1.0625rem;
          font-weight: 800;
          line-height: 1.15;
          color: var(--hrc-text);
          font-variant-numeric: tabular-nums;
        }

        .hrc-metric-label {
          font-size: 0.625rem;
          line-height: 1.25;
          color: rgba(255, 255, 255, 0.52);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .hrc-highlights-wrap {
          padding: 0.6rem 0.7rem;
          border-radius: 0.55rem;
          background: rgba(0, 0, 0, 0.22);
        }

        .hrc-highlights-label {
          margin: 0 0 0.35rem;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.42);
        }

        .hrc-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .hrc-highlights li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.82);
        }

        .hrc-slide[data-active="true"] .hrc-highlights li {
          animation: hrcHiIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: calc(0.2s + var(--hi-i, 0) * 0.06s);
        }

        @keyframes hrcHiIn {
          from { opacity: 0; transform: translateX(-6px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .hrc-check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 1.15rem;
          height: 1.15rem;
          border-radius: 50%;
          background: rgba(74, 222, 128, 0.15);
          border: 1px solid rgba(74, 222, 128, 0.35);
          color: var(--success);
        }

        .hrc-slide-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.35rem;
          padding-bottom: 0.25rem;
        }

        .hrc-slide-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-pill);
          font-size: 0.8125rem;
          font-weight: 600;
          text-decoration: none;
          transition: gap 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .hrc-slide-link--primary {
          color: var(--hrc-text);
          background: linear-gradient(135deg, var(--slide-accent), var(--accent));
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 14px -4px var(--slide-glow);
        }

        .hrc-slide-link--primary:hover {
          gap: 0.5rem;
          transform: translateY(-1px);
          filter: brightness(1.08);
        }

        .hrc-slide-link--ghost {
          color: rgba(255, 255, 255, 0.75);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .hrc-slide-link--ghost:hover {
          color: var(--hrc-text);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.22);
        }

        @media (max-width: 480px) {
          .hrc-top {
            flex-direction: column;
            align-items: stretch;
          }

          .hrc-nav {
            justify-content: space-between;
          }

          .hrc-tabs { flex: 1; justify-content: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hrc-card,
          .hrc-card[data-visible="true"] {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .hrc-live-dot,
          .hrc-icon-ring {
            animation: none;
          }

          .hrc-slide {
            transition: none;
            filter: none;
          }

          .hrc-slide[data-active="true"] .hrc-metrics li,
          .hrc-slide[data-active="true"] .hrc-highlights li {
            animation: none;
          }
        }
      `}</style>
    </aside>
  );
}
