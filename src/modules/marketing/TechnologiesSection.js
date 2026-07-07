"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";

// TechnologiesSection: premium "Technologies We Deliver On" band.
// PLACEMENT: sits directly below SolutionsGrid ("How we fix it") and reuses the
// same motion + glassmorphism language (IntersectionObserver reveal, staggered
// cards, pointer-tracked border glow on CSS custom properties so React never
// re-renders on pointer move). All color comes from the shared theme tokens
// (--accent / --ink / --muted) plus the same var(--accent-secondary) blue used by the orbs.

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

const WebIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 8h18" />
    <path d="M7 6.01h.01M9.5 6.01h.01" />
    <path d="M9 22h6" />
    <path d="M12 18v4" />
  </svg>
);

const JavaBackendIcon = () => (
  <svg {...iconProps}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </svg>
);

const WordPressIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M4 9h6" />
    <path d="m8 9 2.5 8L13 9" />
    <path d="m13 9 2.5 8L18 11" />
  </svg>
);

const ApiIcon = () => (
  <svg {...iconProps}>
    <path d="M9 2v6" />
    <path d="M15 2v6" />
    <path d="M6 8h12v3a6 6 0 0 1-12 0V8Z" />
    <path d="M12 17v5" />
  </svg>
);

const PerformanceIcon = () => (
  <svg {...iconProps}>
    <path d="M3.5 18a9 9 0 1 1 17 0" />
    <path d="m9 13 2.5-2.5L13 12l3-3" />
    <path d="M16 9h-2.5" />
  </svg>
);

const SupportIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3 5 6v5c0 4.2 2.9 7.7 7 8.9 4.1-1.2 7-4.7 7-8.9V6l-7-3Z" />
    <path d="M14.7 9.3a2.4 2.4 0 1 0-3.4 3.4l-2.9 2.9 1.4 1.4 2.9-2.9a2.4 2.4 0 0 0 2-4.8Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const TECHNOLOGIES = [
  {
    id: "web-development",
    Icon: WebIcon,
    title: "Web Development",
    description:
      "Fast, responsive, and conversion-focused websites designed to improve user experience and support business growth.",
  },
  {
    id: "java-backend",
    Icon: JavaBackendIcon,
    title: "Java Backend Development",
    description:
      "Secure, scalable, and high-performance backend systems built for APIs, business logic, and enterprise applications.",
  },
  {
    id: "wordpress",
    Icon: WordPressIcon,
    title: "WordPress Development",
    description:
      "Custom WordPress websites that are easy to manage, SEO-ready, and built for long-term flexibility.",
  },
  {
    id: "api-automation",
    Icon: ApiIcon,
    title: "API Integrations & Automation",
    description:
      "Connect websites with CRMs, payment systems, and automate repetitive workflows.",
  },
  {
    id: "performance",
    Icon: PerformanceIcon,
    title: "Performance & Optimization",
    description:
      "Improve speed, security, reliability, and overall website performance.",
  },
  {
    id: "maintenance",
    Icon: SupportIcon,
    title: "Maintenance & Support",
    description:
      "Continuous updates, monitoring, and technical support to keep systems running smoothly.",
  },
];

function TechCard({ tech, index }) {
  const { Icon, title, description } = tech;
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
      className="tech-card"
      style={{ "--card-i": index }}
      onMouseMove={handleMouseMove}
    >
      <div className="tech-card-inner">
        <span className="tech-card-icon" aria-hidden="true">
          <Icon />
        </span>
        <h3 className="tech-card-title">{title}</h3>
        <p className="tech-card-desc">{description}</p>
        <a className="tech-card-cta" href="/contact">
          <span>Explore Solutions</span>
          <span className="tech-card-cta-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </article>
  );
}

export default function TechnologiesSection({ technologies = TECHNOLOGIES }) {
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
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-component="technologies"
      data-visible={active ? "true" : "false"}
      aria-labelledby="technologies-heading"
    >
      <div className="tech-bg" aria-hidden="true">
        <span className="tech-grid-texture" />
        <span className="tech-orb tech-orb--1" />
        <span className="tech-orb tech-orb--2" />
      </div>

      <Container as="div">
        <header className="tech-head">
          <span className="tech-heading-glow" aria-hidden="true" />
          <span className="tech-badge">Our Expertise</span>
          <h2 id="technologies-heading" className="tech-heading">
            Technologies We Deliver On
          </h2>
          <p className="tech-lead">
            Modern websites, scalable backend systems, and reliable digital
            solutions built for long-term business growth.
          </p>
        </header>

        <div className="tech-card-grid">
          {technologies.map((tech, index) => (
            <TechCard key={tech.id} tech={tech} index={index} />
          ))}
        </div>

        <div className="tech-footer">
          <a className="tech-footer-cta" href="/contact">
            <span>Browse All Services &amp; Solutions</span>
            <span className="tech-footer-cta-arrow" aria-hidden="true">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
