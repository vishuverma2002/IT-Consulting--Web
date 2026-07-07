"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";

// ProblemsGrid: premium "Problems we solve" pain-point band.
// NARRATIVE: names the cost of inefficient systems in business terms (not tech
// jargon) to set up the Solutions/Services sections that follow.
// MOTION: framer-motion is not a dependency, so the reveal is driven by a single
// IntersectionObserver, gated on a prefers-reduced-motion check. The card border
// glow tracks the pointer via CSS custom properties so the GPU does the work and
// React never re-renders on mouse move.

// Minimal, single-stroke line icons (Lucide/Linear flavour). currentColor lets the
// gradient icon treatment in CSS take over without per-icon color logic.
const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const GaugeIcon = () => (
  <svg {...iconProps}>
    <path d="M12 14a2 2 0 0 0 2-2c0-1.1-2-5-2-5s-2 3.9-2 5a2 2 0 0 0 2 2Z" />
    <path d="M3.5 18a9 9 0 1 1 17 0" />
  </svg>
);

const LayersIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
    <path d="m3 12 9 4.5L21 12" />
    <path d="m3 16.5 9 4.5 9-4.5" />
  </svg>
);

const RepeatIcon = () => (
  <svg {...iconProps}>
    <path d="m17 2 4 4-4 4" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <path d="m7 22-4-4 4-4" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

const UnlinkIcon = () => (
  <svg {...iconProps}>
    <path d="m18.84 12.25 1.72-1.71a4 4 0 0 0-5.66-5.66l-1.71 1.72" />
    <path d="m5.17 11.75-1.71 1.71a4 4 0 0 0 5.65 5.66l1.72-1.72" />
    <path d="m9 6-1-3" />
    <path d="m18 21-1-3" />
    <path d="m3 9 3-1" />
    <path d="m21 16-3-1" />
  </svg>
);

const FrownIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <path d="M9 9h.01" />
    <path d="M15 9h.01" />
  </svg>
);

const WrenchIcon = () => (
  <svg {...iconProps}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.8 2.8-2.4-2.4 2.8-2.8Z" />
  </svg>
);

const PROBLEMS = [
  {
    id: "speed",
    Icon: GaugeIcon,
    title: "Slow & Unoptimized Websites",
    description: "Sluggish load times quietly drive visitors away and cost you conversions every day.",
  },
  {
    id: "scale",
    Icon: LayersIcon,
    title: "Lack of Scalable Architecture",
    description: "Systems that buckle under growth force costly rebuilds right when momentum matters most.",
  },
  {
    id: "manual",
    Icon: RepeatIcon,
    title: "Manual & Repetitive Processes",
    description: "Hours lost to repetitive busywork that should run automatically in the background.",
  },
  {
    id: "disconnected",
    Icon: UnlinkIcon,
    title: "Disconnected Business Tools",
    description: "Data trapped in silos means teams reconcile by hand instead of acting on insight.",
  },
  {
    id: "ux",
    Icon: FrownIcon,
    title: "Poor User Experience",
    description: "Confusing flows frustrate customers and erode trust before they reach checkout.",
  },
  {
    id: "maintain",
    Icon: WrenchIcon,
    title: "Hard to Maintain Systems",
    description: "Fragile, tangled code makes every small change slow, risky, and expensive.",
  },
];

function ProblemCard({ problem, index }) {
  const { Icon, title, description } = problem;
  const cardRef = useRef(null);
  const isFeatured = index === 1;

  // Track the pointer so the border highlight + glow follow the cursor.
  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      ref={cardRef}
      className="problem-card"
      data-featured={isFeatured ? "true" : undefined}
      style={{ "--card-i": index }}
      onMouseMove={handleMouseMove}
    >
      <span className="problem-card-index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="problem-card-inner">
        <span className="problem-card-icon" aria-hidden="true">
          <Icon />
        </span>
        <h3 className="problem-card-title">{title}</h3>
        <p className="problem-card-desc">{description}</p>
      </div>
    </article>
  );
}

export default function ProblemsGrid({ problems = PROBLEMS }) {
  const sectionRef = useRef(null);
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
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-component="problems-solve"
      data-visible={active ? "true" : "false"}
      aria-labelledby="problems-solve-heading"
    >
      <div className="problems-bg" aria-hidden="true">
        <span className="problems-grid-texture" />
        <span className="problems-dot-pattern" />
        <span className="problems-orb problems-orb--1" />
        <span className="problems-orb problems-orb--2" />
        <span className="problems-orb problems-orb--3" />
      </div>

      <Container as="div">
        <header className="problems-head">
          <span className="problems-badge">Problems we solve</span>
          <h2 id="problems-solve-heading" className="problems-heading">
            Where inefficient systems are holding{" "}
            <span className="problems-heading-accent">your business</span> back
          </h2>
          <p className="problems-lead">
            Outdated tools and tangled workflows slow teams down and cap growth.
            These are the bottlenecks we help businesses move past.
          </p>
          <ul className="problems-stats" aria-label="Problem areas covered">
            <li className="problems-stat">
              <strong>6</strong>
              <span>Common bottlenecks</span>
            </li>
            <li className="problems-stat">
              <strong>Every</strong>
              <span>Industry we serve</span>
            </li>
            <li className="problems-stat">
              <strong>Real</strong>
              <span>Production pain points</span>
            </li>
          </ul>
        </header>

        <div className="problems-card-grid">
          {problems.map((problem, index) => (
            <ProblemCard key={problem.id} problem={problem} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
