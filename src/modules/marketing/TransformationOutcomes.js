"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import {
  CASE_STUDIES,
  CASE_STUDIES_CTA,
  CASE_STUDIES_HERO,
} from "@/config/caseStudies";

// TransformationOutcomes: homepage teaser for the full case studies portfolio.
// MOTION: reuses the shared reveal language (single IntersectionObserver toggling
// data-visible, staggered cards via --card-i) and the pointer-tracked border glow
// pattern (writes --mx/--my to CSS custom properties so React never re-renders on
// pointer move).

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

const OUTCOMES = CASE_STUDIES.map((study) => ({
  id: study.id,
  metric: study.metrics[0].value,
  metricSuffix: study.clientBenefit,
  title: study.title,
  description: study.teaser,
  cta: study.cardCta,
  href: "/case-studies",
}));

function OutcomeCard({ outcome, index }) {
  const cardRef = useRef(null);

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
      className="outcome-card"
      style={{ "--card-i": index }}
      onMouseMove={handleMouseMove}
    >
      <div className="outcome-card-inner">
        <span className="outcome-card-metric">
          <span className="outcome-card-metric-value">{outcome.metric}</span>
          <span className="outcome-card-metric-suffix">{outcome.metricSuffix}</span>
        </span>
        <h3 className="outcome-card-title">{outcome.title}</h3>
        <p className="outcome-card-desc">{outcome.description}</p>
        <Link className="outcome-card-cta" href={outcome.href}>
          <span>{outcome.cta}</span>
          <span className="outcome-card-cta-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function TransformationOutcomes({ outcomes = OUTCOMES }) {
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
      data-component="case-outcomes"
      data-visible={active ? "true" : "false"}
      aria-labelledby="case-outcomes-heading"
    >
      <div className="outcome-bg" aria-hidden="true">
        <span className="outcome-grid-texture" />
        <span className="outcome-orb outcome-orb--1" />
        <span className="outcome-orb outcome-orb--2" />
        <span className="outcome-orb outcome-orb--3" />
      </div>

      <Container as="div">
        <div className="outcome-panel">
          <header className="outcome-head">
            <span className="outcome-heading-glow" aria-hidden="true" />
            <span className="outcome-badge">{CASE_STUDIES_HERO.badge}</span>
            <h2 id="case-outcomes-heading" className="outcome-heading">
              {CASE_STUDIES_HERO.heading}
            </h2>
            <p className="outcome-lead">{CASE_STUDIES_HERO.lead}</p>
          </header>

          <div className="outcome-card-grid outcome-card-grid--three">
            {outcomes.map((outcome, index) => (
              <OutcomeCard key={outcome.id} outcome={outcome} index={index} />
            ))}
          </div>

          <div className="outcome-footer">
            <Link className="outcome-footer-cta" href="/case-studies">
              <span>{CASE_STUDIES_CTA.portfolioButton}</span>
              <span className="outcome-footer-cta-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
            <p className="outcome-footer-note">
              {CASE_STUDIES_CTA.portfolioNote}{" "}
              <Link href="/services">View our services</Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
