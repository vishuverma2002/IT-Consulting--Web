"use client";

import { useRef } from "react";
import Container from "@/components/layout/Container";
import { useReveal } from "@/hooks/useReveal";

const WEB_DEV_ICONS = [
  <svg key="stack" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
    <path d="m14.5 4-5 16" />
  </svg>,
  <svg key="speed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>,
  <svg key="api" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="M12 22v-5" />
    <path d="M9 8V2M15 8V2" />
    <path d="M7 8h10v4a5 5 0 0 1-10 0V8z" />
  </svg>,
];

const TOOLS_ICONS = [
  <svg key="dashboard" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <rect x="3" y="3" width="7" height="9" rx="1.5" />
    <rect x="14" y="3" width="7" height="5" rx="1.5" />
    <rect x="14" y="12" width="7" height="9" rx="1.5" />
    <rect x="3" y="16" width="7" height="5" rx="1.5" />
  </svg>,
  <svg key="login" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>,
  <svg key="blog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    <path d="M7 9h10" />
    <path d="M7 13h7" />
    <path d="M7 17h4" />
  </svg>,
];

function getFeatureIcon(index, slug) {
  if (slug === "tools") {
    return TOOLS_ICONS[index % TOOLS_ICONS.length];
  }

  if (slug === "web-development") {
    return WEB_DEV_ICONS[index % WEB_DEV_ICONS.length];
  }

  const icons = [
    <svg key="mobile" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>,
    <svg key="speed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>,
    <svg key="search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>,
  ];
  return icons[index % icons.length];
}

function GlowCard({ as: Tag = "li", className, style, children }) {
  const cardRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <Tag
      ref={cardRef}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
    >
      <span className="service-card-glow" aria-hidden="true" />
      {children}
    </Tag>
  );
}

/**
 * Premium three-grid consultancy capabilities section with scroll reveal.
 * @param {{
 *   featuresSection: import("@/types").ServiceFeaturesSection,
 *   features: import("@/types").ServiceFeature[],
 *   slug?: string,
 *   headingId?: string,
 * }} props
 */
export default function ConsultancyFeaturesSection({
  featuresSection,
  features,
  slug = "web-development",
  headingId = "consultancy-features-heading",
}) {
  const [sectionRef, sectionVisible] = useReveal(0.14);

  return (
    <section
      ref={sectionRef}
      className="service-features service-features--consultancy"
      data-section-visible={sectionVisible ? "true" : "false"}
      aria-labelledby={headingId}
    >
      <Container as="div">
        <header className="service-section-head service-section-head--consultancy">
          <span className="service-section-badge">{featuresSection.badge}</span>
          <h2 id={headingId}>{featuresSection.title}</h2>
          <p className="service-section-lead">{featuresSection.lead}</p>
        </header>
        <ul className="service-features-grid">
          {features.map((feature, index) => (
            <GlowCard
              key={feature.title}
              as="li"
              className="service-feature-card service-feature-card--consultancy"
              style={{ "--feature-i": index }}
            >
              <div className="service-feature-card-inner">
                <span className="service-feature-icon" aria-hidden="true">
                  {getFeatureIcon(index, slug)}
                </span>
                {feature.subtitle ? (
                  <p className="service-feature-eyebrow">{feature.subtitle}</p>
                ) : null}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </GlowCard>
          ))}
        </ul>
      </Container>
    </section>
  );
}
