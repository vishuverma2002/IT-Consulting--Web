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
import ConsultancyFeaturesSection from "@/modules/marketing/ConsultancyFeaturesSection";

/**
 * @param {{ service: import("@/types").ServiceOffering }} props
 */
export default function ServicePageContent({ service }) {
  const [heroReady, setHeroReady] = useState(false);
  const [featuresRef, featuresVisible] = useReveal(0.14);
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
      {/* Section 1: Hero */}
      <section className="service-hero" aria-labelledby="service-hero-heading">
        <div className="service-hero-bg" aria-hidden="true">
          <span className="service-hero-grid" />
          <span className="service-hero-orb service-hero-orb--1" />
          <span className="service-hero-orb service-hero-orb--2" />
          <span className="service-hero-orb service-hero-orb--3" />
        </div>
        <Container as="div">
          <p className="service-hero-eyebrow service-hero-animate" style={{ "--hero-i": 0 }}>
            <span className="service-hero-eyebrow-dot" aria-hidden="true" />
            {service.hero.eyebrow}
          </p>
          <h1
            id="service-hero-heading"
            className="service-hero-title service-hero-animate"
            style={{ "--hero-i": 1 }}
          >
            {service.hero.title}
          </h1>
          <p className="service-hero-lead service-hero-animate" style={{ "--hero-i": 2 }}>
            {service.hero.lead}
          </p>
          <div className="service-hero-animate" style={{ "--hero-i": 3 }}>
            <ServiceTrustedLogos />
          </div>
          <div className="service-hero-actions service-hero-animate" style={{ "--hero-i": 4 }}>
            <Button as={Link} href="/contact" variant="primary">
              Get a Free Consultation
            </Button>
            <Link href="/pricing" className="service-hero-secondary-cta">
              View pricing
            </Link>
          </div>
        </Container>
      </section>

      {/* Section 2: Features */}
      {service.featuresSection ? (
        <ConsultancyFeaturesSection
          featuresSection={service.featuresSection}
          features={service.features}
          slug={service.slug}
          headingId="service-features-heading"
        />
      ) : (
        <section
          ref={featuresRef}
          className="service-features"
          data-section-visible={featuresVisible ? "true" : "false"}
          aria-labelledby="service-features-heading"
        >
          <Container as="div">
            <header className="service-section-head">
              <span className="service-section-badge">Benefits</span>
              <h2 id="service-features-heading">What you get</h2>
              <p className="service-section-lead">
                Everything included — explained in plain English, no tech jargon.
              </p>
            </header>
            <ul className="service-features-grid">
              {service.features.map((feature, index) => (
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
      )}

      {/* Section 3: How It Works */}
      <section
        ref={processRef}
        className="service-process"
        data-section-visible={processVisible ? "true" : "false"}
        aria-labelledby="service-process-heading"
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
            <h2 id="service-process-heading">How it works</h2>
            <p className="service-section-lead">
              Three simple steps from first call to live launch.
            </p>
          </header>
          <ol className="service-process-steps">
            {(service.processSteps ?? serviceProcessSteps).map((step, index, steps) => (
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

      {/* Section 4: Pricing */}
      <section
        ref={pricingRef}
        className="service-pricing"
        data-section-visible={pricingVisible ? "true" : "false"}
        aria-labelledby="service-pricing-heading"
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
              <h2 id="service-pricing-heading">Fair Pricing for Great Results.</h2>
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

      {/* Section 5: FAQ */}
      <section
        ref={faqRef}
        className="service-faq"
        data-section-visible={faqVisible ? "true" : "false"}
        aria-labelledby="service-faq-heading"
      >
        <div className="service-faq-bg" aria-hidden="true" />
        <Container as="div">
          <header className="service-section-head">
            <span className="service-section-badge">FAQ</span>
            <h2 id="service-faq-heading">Common questions</h2>
            <p className="service-section-lead">
              Straight answers to what clients ask us most.
            </p>
          </header>
          <ServiceFaqAccordion items={service.faqs} />
        </Container>
      </section>
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
    <svg key="search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>,
    <svg key="shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>,
    <svg key="server" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01M6 18h.01" />
    </svg>,
    <svg key="plug" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 22v-5" />
      <path d="M9 8V2M15 8V2" />
      <path d="M7 8h10v4a5 5 0 0 1-10 0V8z" />
    </svg>,
  ];
  return icons[index % icons.length];
}
