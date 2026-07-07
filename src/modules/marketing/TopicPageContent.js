"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { useReveal } from "@/hooks/useReveal";
import {
  servicePricingSummary,
  serviceProcessSteps,
} from "@/config/services";
import {
  ServiceFaqAccordion,
  ServiceTrustedLogos,
} from "@/modules/marketing/ServicePageParts";

/**
 * @param {{ page: import("@/types").TopicPage }} props
 */
export default function TopicPageContent({ page }) {
  const [heroReady, setHeroReady] = useState(false);
  const [featuresRef, featuresVisible] = useReveal(0.14);
  const [statsRef, statsVisible] = useReveal(0.14);
  const [processRef, processVisible] = useReveal(0.14);
  const [pricingRef, pricingVisible] = useReveal(0.14);
  const [faqRef, faqVisible] = useReveal(0.1);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHeroReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      data-component="service-page"
      data-hero-ready={heroReady ? "true" : "false"}
    >
      <section className="service-hero" aria-labelledby="topic-hero-heading">
        <div className="service-hero-bg" aria-hidden="true">
          <span className="service-hero-grid" />
          <span className="service-hero-orb service-hero-orb--1" />
          <span className="service-hero-orb service-hero-orb--2" />
          <span className="service-hero-orb service-hero-orb--3" />
        </div>
        <Container as="div">
          <p className="service-hero-eyebrow service-hero-animate" style={{ "--hero-i": 0 }}>
            <span className="service-hero-eyebrow-dot" aria-hidden="true" />
            {page.hero.eyebrow}
          </p>
          <h1
            id="topic-hero-heading"
            className="service-hero-title service-hero-animate"
            style={{ "--hero-i": 1 }}
          >
            {page.hero.title}
          </h1>
          <p className="service-hero-lead service-hero-animate" style={{ "--hero-i": 2 }}>
            {page.hero.lead}
          </p>
          <div className="service-hero-animate" style={{ "--hero-i": 3 }}>
            <ServiceTrustedLogos />
          </div>
          <div className="service-hero-actions service-hero-animate" style={{ "--hero-i": 4 }}>
            <Button as={Link} href="/contact" variant="primary">
              Get a Free Consultation
            </Button>
            <Link href="/case-studies" className="service-hero-secondary-cta">
              See our work
            </Link>
          </div>
        </Container>
      </section>

      <section
        ref={featuresRef}
        className="service-features"
        data-section-visible={featuresVisible ? "true" : "false"}
        aria-labelledby="topic-features-heading"
      >
        <Container as="div">
          <header className="service-section-head">
            <span className="service-section-badge">Why it matters</span>
            <h2 id="topic-features-heading">What you get</h2>
            <p className="service-section-lead">
              Real benefits for your business — explained simply, no tech jargon.
            </p>
          </header>
          <ul className="service-features-grid">
            {page.features.map((feature, index) => (
              <GlowCard
                key={feature.title}
                as="li"
                className="service-feature-card"
                style={{ "--feature-i": index }}
              >
                <span className="service-feature-icon" aria-hidden="true">
                  {getFeatureIcon(index)}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </GlowCard>
            ))}
          </ul>
        </Container>
      </section>

      {page.stats?.length ? (
        <section
          ref={statsRef}
          className="service-pricing"
          data-section-visible={statsVisible ? "true" : "false"}
          aria-label="Key results"
        >
          <div className="service-pricing-bg" aria-hidden="true">
            <span className="service-pricing-orb service-pricing-orb--1" />
            <span className="service-pricing-orb service-pricing-orb--2" />
          </div>
          <Container as="div">
            <div className="service-pricing-card">
              <span className="service-pricing-glow" aria-hidden="true" />
              <header className="service-pricing-head">
                <span className="service-pricing-badge">Results</span>
                <h2>Numbers that matter</h2>
                <p>Typical outcomes our clients care about most.</p>
              </header>
              <ul className="service-pricing-rates">
                {page.stats.map((stat, index) => (
                  <li key={stat.label} style={{ "--rate-i": index }}>
                    <span className="service-pricing-label">{stat.label}</span>
                    <span className="service-pricing-value">{stat.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ) : null}

      <section
        ref={processRef}
        className="service-process"
        data-section-visible={processVisible ? "true" : "false"}
        aria-labelledby="topic-process-heading"
      >
        <div className="service-process-bg" aria-hidden="true">
          <span className="service-process-grid" />
          <span className="service-process-orb service-process-orb--1" />
          <span className="service-process-orb service-process-orb--2" />
          <span className="service-process-orb service-process-orb--3" />
        </div>
        <Container as="div">
          <header className="service-section-head service-process-head">
            <span className="service-process-heading-glow" aria-hidden="true" />
            <span className="service-process-badge">Process</span>
            <h2 id="topic-process-heading">How we work with you</h2>
            <p className="service-section-lead">
              Three simple steps from first conversation to live launch.
            </p>
          </header>
          <ol className="service-process-steps">
            {serviceProcessSteps.map((step, index, steps) => (
              <ProcessStepCard
                key={step.id}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </ol>
        </Container>
      </section>

      <section
        ref={pricingRef}
        className="service-pricing"
        data-section-visible={pricingVisible ? "true" : "false"}
        aria-labelledby="topic-pricing-heading"
      >
        <div className="service-pricing-bg" aria-hidden="true">
          <span className="service-pricing-orb service-pricing-orb--1" />
          <span className="service-pricing-orb service-pricing-orb--2" />
        </div>
        <Container as="div">
          <div className="service-pricing-card">
            <span className="service-pricing-glow" aria-hidden="true" />
            <header className="service-pricing-head">
              <span className="service-pricing-badge">Pricing</span>
              <h2 id="topic-pricing-heading">Fair pricing for great results</h2>
              <p>Clear, honest rates — no hidden fees or surprise invoices.</p>
            </header>
            <ul className="service-pricing-rates">
              {servicePricingSummary.map((rate, index) => (
                <li
                  key={rate.label}
                  className={rate.value.includes("FREE") ? "is-free" : undefined}
                  style={{ "--rate-i": index }}
                >
                  <span className="service-pricing-label">{rate.label}</span>
                  <span className="service-pricing-value">{rate.value}</span>
                </li>
              ))}
            </ul>
            <div className="service-pricing-cta">
              <Button as={Link} href="/contact" variant="primary">
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {page.faqs?.length ? (
        <section
          ref={faqRef}
          className="service-faq"
          data-section-visible={faqVisible ? "true" : "false"}
          aria-labelledby="topic-faq-heading"
        >
          <div className="service-faq-bg" aria-hidden="true" />
          <Container as="div">
            <header className="service-section-head">
              <span className="service-section-badge">FAQ</span>
              <h2 id="topic-faq-heading">Common questions</h2>
              <p className="service-section-lead">
                Straight answers to what clients ask us most.
              </p>
            </header>
            <ServiceFaqAccordion items={page.faqs} />
          </Container>
        </section>
      ) : null}
    </div>
  );
}

function ProcessStepCard({ step, index, isLast }) {
  const cardRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <li
      ref={cardRef}
      className="service-process-step"
      style={{ "--step-i": index }}
      onMouseMove={handleMouseMove}
    >
      <div className="service-process-step-inner">
        <span className="service-process-num" aria-hidden="true">
          {index + 1}
        </span>
        <div className="service-process-body">
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      </div>
      {!isLast ? <span className="service-process-connector" aria-hidden="true" /> : null}
    </li>
  );
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

function getFeatureIcon(index) {
  const icons = [
    <svg key="mobile" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>,
    <svg key="speed" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>,
    <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>,
    <svg key="server" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01M6 18h.01" />
    </svg>,
  ];
  return icons[index % icons.length];
}
