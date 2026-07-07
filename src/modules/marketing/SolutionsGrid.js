"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";

// SolutionsGrid: premium "How we fix it" band.
// NARRATIVE: directly answers the pain points named in ProblemsGrid, so it is
// designed to read as a continuation of that section (shared spacing, type, and
// card system) rather than a standalone block. The background gradient picks up
// where ProblemsGrid leaves off (no hard top border) to keep the flow seamless.
// MOTION: mirrors ProblemsGrid — a single IntersectionObserver drives the reveal,
// and the pointer-tracked border glow runs on CSS custom properties so React
// never re-renders on mouse move.

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

const ZapIcon = () => (
  <svg {...iconProps}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
  </svg>
);

const CodeIcon = () => (
  <svg {...iconProps}>
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
    <path d="m14.5 4-5 16" />
  </svg>
);

const ScaleIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <path d="M14 17.5h7" />
    <path d="M17.5 14v7" />
  </svg>
);

const PlugIcon = () => (
  <svg {...iconProps}>
    <path d="M9 2v6" />
    <path d="M15 2v6" />
    <path d="M6 8h12v3a6 6 0 0 1-12 0V8Z" />
    <path d="M12 17v5" />
  </svg>
);

const GaugeUpIcon = () => (
  <svg {...iconProps}>
    <path d="M3.5 18a9 9 0 1 1 17 0" />
    <path d="m9 13 2.5-2.5L13 12l3-3" />
    <path d="M16 9h-2.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3 5 6v5c0 4.2 2.9 7.7 7 8.9 4.1-1.2 7-4.7 7-8.9V6l-7-3Z" />
    <path d="m9.5 12 1.8 1.8 3.4-3.6" />
  </svg>
);

const SOLUTIONS = [
  {
    id: "web-dev",
    Icon: ZapIcon,
    title: "High-Performance Web Development",
    description: "Fast, optimized websites focused on speed, SEO, and conversion.",
  },
  {
    id: "web-apps",
    Icon: CodeIcon,
    title: "Custom Web Applications",
    description: "Tailored web solutions built specifically for business workflows and operations.",
  },
  {
    id: "architecture",
    Icon: ScaleIcon,
    title: "Scalable Architecture Design",
    description: "Future-proof system design that grows without performance issues or rebuilds.",
  },
  {
    id: "integration",
    Icon: PlugIcon,
    title: "API & System Integration",
    description: "Seamless integration of CRM, ERP, databases, and third-party tools.",
  },
  {
    id: "optimization",
    Icon: GaugeUpIcon,
    title: "Performance Optimization",
    description: "Improve loading speed, code efficiency, caching, and overall UX.",
  },
  {
    id: "support",
    Icon: ShieldIcon,
    title: "Maintenance & Support",
    description: "Ongoing updates, monitoring, and improvements for long-term stability.",
  },
];

function SolutionCard({ solution, index }) {
  const { Icon, title, description } = solution;
  const cardRef = useRef(null);

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
      className="solution-card"
      style={{ "--card-i": index }}
      onMouseMove={handleMouseMove}
    >
      <div className="solution-card-inner">
        <span className="solution-card-icon" aria-hidden="true">
          <Icon />
        </span>
        <h3 className="solution-card-title">{title}</h3>
        <p className="solution-card-desc">{description}</p>
      </div>
    </article>
  );
}

export default function SolutionsGrid({ solutions = SOLUTIONS }) {
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
      id="services"
      ref={sectionRef}
      data-component="solutions-fix"
      data-visible={active ? "true" : "false"}
      aria-labelledby="solutions-fix-heading"
    >
      <div className="solutions-bg" aria-hidden="true">
        <span className="solutions-grid-texture" />
        <span className="solutions-orb solutions-orb--1" />
        <span className="solutions-orb solutions-orb--2" />
      </div>

      <Container as="div">
        <header className="solutions-head">
          <span className="solutions-badge">Our solutions</span>
          <h2 id="solutions-fix-heading" className="solutions-heading">
            How we fix it
          </h2>
          <p className="solutions-lead">
            Modern, scalable solutions designed to eliminate inefficiencies and
            accelerate business growth.
          </p>
        </header>

        <div className="solutions-card-grid">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
