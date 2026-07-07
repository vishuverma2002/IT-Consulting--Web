"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

// ProvenResultsSection: premium, conversion-focused proof band placed directly
// below the "Teams we have built systems for" social-proof section.
// MOTION: framer-motion is not a dependency, so reveal + count-up are driven by a
// single IntersectionObserver and requestAnimationFrame. All motion is gated on a
// prefers-reduced-motion check, falling back to final values instantly.

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const TrendUpIcon = () => (
  <svg {...iconProps}>
    <path d="M3.5 18a9 9 0 1 1 17 0" />
    <path d="m9 13 2.5-2.5L13 12l3-3" />
    <path d="M16 9h-2.5" />
  </svg>
);

const HeartIcon = () => (
  <svg {...iconProps}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const LayersIcon = () => (
  <svg {...iconProps}>
    <path d="m12.83 2.18 8 3.99a1 1 0 0 1 0 1.82l-8 3.99a2 2 0 0 1-1.66 0l-8-3.99a1 1 0 0 1 0-1.82l8-3.99a2 2 0 0 1 1.66 0Z" />
    <path d="m2.5 10.5 8 4.01a2 2 0 0 0 1.66 0l8-4.01" />
    <path d="m2.5 15.5 8 4.01a2 2 0 0 0 1.66 0l8-4.01" />
  </svg>
);

const RESULTS = [
  {
    id: "conversions",
    Icon: TrendUpIcon,
    prefix: "+",
    value: 180,
    suffix: "%",
    title: "Average increase in conversions",
    description: "Conversion-focused website experience",
  },
  {
    id: "retention",
    Icon: HeartIcon,
    prefix: "",
    value: 95,
    suffix: "%",
    title: "Client retention rate",
    description: "Long-term support & growth",
  },
  {
    id: "delivered",
    Icon: LayersIcon,
    prefix: "",
    value: 150,
    suffix: "+",
    title: "Websites delivered",
    description: "Across multiple industries",
  },
];

// easeOutExpo — fast start, gentle settle, ideal for count-up readouts.
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

function AnimatedMetric({ result, active, reduceMotion }) {
  const { prefix, value, suffix } = result;
  const [animatedValue, setAnimatedValue] = useState(0);
  const display = !active || reduceMotion ? value : animatedValue;
  const fullLabel = `${prefix}${value}${suffix}`;

  useEffect(() => {
    if (!active || reduceMotion) return;

    let frame;
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setAnimatedValue(Math.round(easeOutExpo(progress) * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduceMotion, value]);

  return (
    <span className="proven-card-metric" aria-label={fullLabel}>
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
    </span>
  );
}

function ResultCard({ result, index, active, reduceMotion }) {
  const { Icon } = result;
  // Pointer-driven tilt: write rotation into CSS custom properties so the GPU
  // handles the transform and React never re-renders on mouse move.
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    if (reduceMotion) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty("--rx", `${(-py * 6).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(px * 6).toFixed(2)}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      ref={cardRef}
      className="proven-card"
      data-visible={active ? "true" : "false"}
      style={{ "--card-i": index }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="proven-card-inner">
        <span className="proven-card-icon" aria-hidden="true">
          <Icon />
        </span>
        <AnimatedMetric result={result} active={active} reduceMotion={reduceMotion} />
        <h3 className="proven-card-title">{result.title}</h3>
        <p className="proven-card-desc">{result.description}</p>
      </div>
    </article>
  );
}

export default function ProvenResultsSection() {
  const sectionRef = useRef(null);
  const reduceMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="results"
      ref={sectionRef}
      data-component="proven-results"
      data-visible={active ? "true" : "false"}
      aria-labelledby="proven-results-heading"
    >
      <div className="proven-bg" aria-hidden="true">
        <span className="proven-grid" />
        <span className="proven-orb proven-orb--1" />
        <span className="proven-orb proven-orb--2" />
        <span className="proven-orb proven-orb--3" />
      </div>

      <Container as="div">
        <header className="proven-head">
          <span className="proven-badge">Proven Results</span>
          <h2 id="proven-results-heading" className="proven-heading">
            Real business growth through websites that perform
          </h2>
          <p className="proven-lead">
            Every website we build is designed to improve speed, conversions,
            visibility, and long-term business impact.
          </p>
        </header>

        <div className="proven-grid-cards">
          {RESULTS.map((result, index) => (
            <ResultCard
              key={result.id}
              result={result}
              index={index}
              active={active}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <div className="proven-cta-row">
          <Button as={Link} href="/case-studies" className="proven-cta">
            See Our Success Stories
            <span className="proven-cta-arrow" aria-hidden="true">
              &rarr;
            </span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
