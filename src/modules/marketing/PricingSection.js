"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import {
  EASE,
  fadeUp,
  inViewProps,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { useReveal } from "@/hooks/useReveal";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import PricingCard from "./pricing/PricingCard";
import PricingFeatureCard from "./pricing/PricingFeatureCard";
import PricingFaq from "./pricing/PricingFaq";

const HOURLY_SUITABLE_FOR = [
  "Small UI changes",
  "Bug fixing",
  "React frontend updates",
  "WordPress tweaks",
  "Java API fixes",
  "Performance improvements",
  "Technical consultation",
];

const HOURLY_INCLUDED = [
  "Clear time tracking and updates",
  "Direct communication during work",
  "Clean, production-ready code",
  "Documentation for changes made",
  "Follow-up on completed tasks",
];

const FIXED_SUITABLE_FOR = [
  "Business Websites",
  "Custom Web Applications",
  "WordPress Development",
  "Java Backend Systems",
  "Admin Dashboards",
  "Enterprise Integrations",
];

const PRICE_FACTORS = [
  "Number of pages & features",
  "Design complexity",
  "Timeline",
  "Integrations",
  "Ongoing support needs",
];

const FIXED_TIERS = [
  {
    id: "business-website",
    title: "Business Website",
    price: "$300",
    priceNote: "Starting from",
    description:
      "Perfect for startups, personal brands, and small businesses looking for a professional online presence.",
    features: [
      "Responsive website",
      "Up to 5 pages",
      "Contact form",
      "Mobile friendly",
      "SEO-ready structure",
      "Fast loading",
    ],
    cta: "Request Quote",
    featured: false,
  },
  {
    id: "custom-web-app",
    title: "Custom Web Application",
    price: "$800",
    priceNote: "Starting from",
    description:
      "Best for businesses that need custom workflows, dashboards, and automation.",
    features: [
      "Admin Dashboard",
      "User Authentication",
      "Database Integration",
      "REST API Integration",
      "Role-based Access",
      "Business Automation",
    ],
    cta: "Request Quote",
    featured: true,
  },
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    priceLabel: "Custom Quote",
    description:
      "Designed for growing businesses that require scalable and secure software solutions.",
    features: [
      "Java Backend Development",
      "Spring Boot APIs",
      "WordPress Custom Development",
      "Third-party Integrations",
      "Cloud Deployment",
      "Long-term Support",
    ],
    cta: "Let's Discuss",
    featured: false,
  },
];

const BENEFITS = [
  {
    title: "No Hidden Charges",
    description: "You see the cost upfront. No surprise fees after work has started.",
  },
  {
    title: "Clear Scope Before Development",
    description: "Every project starts with a written plan so everyone knows what is included.",
  },
  {
    title: "Flexible Engagement",
    description: "Choose hourly support for quick tasks or a fixed quote for full projects.",
  },
  {
    title: "Business-Focused Solutions",
    description: "Solutions are built around how your team actually works — not just technical specs.",
  },
  {
    title: "Secure Payments",
    description: "Simple, professional invoicing with clear payment terms agreed in advance.",
  },
  {
    title: "Transparent Communication",
    description: "Regular updates so you always know progress, timelines, and next steps.",
  },
  {
    title: "Ongoing Support",
    description: "Help does not stop at delivery. Maintenance and improvements are available.",
  },
];

const TIMELINE_STEPS = [
  { id: "consultation", title: "Free Consultation", icon: "chat" },
  { id: "requirements", title: "Requirement Discussion", icon: "list" },
  { id: "scope", title: "Scope & Quote", icon: "doc" },
  { id: "development", title: "Development", icon: "code" },
  { id: "testing", title: "Testing", icon: "check" },
  { id: "delivery", title: "Delivery", icon: "box" },
  { id: "support", title: "Support", icon: "heart" },
];

const PANEL_VARIANTS = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: { duration: 0.3, ease: EASE },
  },
};

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function TimelineIcon({ type }) {
  const icons = {
    chat: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
    list: (
      <>
        <path d="M8 6h13M8 12h13M8 18h13" />
        <path d="M3 6h.01M3 12h.01M3 18h.01" />
      </>
    ),
    doc: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </>
    ),
    code: (
      <>
        <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
      </>
    ),
    check: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </>
    ),
    box: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="m3.3 7 8.7 5 8.7-5M12 22V12" />
      </>
    ),
    heart: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  };

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type] ?? icons.chat}
    </svg>
  );
}

function PricingHero() {
  const [heroRef, heroActive] = useReveal(0.12);

  return (
    <section
      ref={heroRef}
      data-component="pricing-hero"
      data-visible={heroActive ? "true" : "false"}
      aria-labelledby="pricing-hero-heading"
    >
      <div className="pricing-hero-bg" aria-hidden="true">
        <span className="pricing-hero-grid" />
        <span className="pricing-hero-orb pricing-hero-orb--1" />
        <span className="pricing-hero-orb pricing-hero-orb--2" />
      </div>

      <Container as="div">
        <div className="pricing-hero-content">
          <span className="pricing-hero-badge">Simple &amp; transparent</span>
          <h1 id="pricing-hero-heading" className="pricing-hero-heading">
            Simple &amp; Transparent Pricing
          </h1>
          <p className="pricing-hero-lead">
            Choose the engagement model that best fits your project. Whether you need web
            development, Java backend work, or a WordPress site — pricing is clear and easy
            to understand.
          </p>

          <div className="pricing-hero-actions">
            <Button as={Link} href="/contact" variant="primary" className="pricing-hero-cta-primary">
              Book Free Consultation →
            </Button>
            <Button as={Link} href="#pricing-plans" variant="secondary" className="pricing-hero-cta-secondary">
              View pricing options
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PricingToggle({ mode, onChange }) {
  return (
    <div className="pricing-toggle" role="group" aria-label="Pricing model">
      <button
        type="button"
        className="pricing-toggle-btn"
        data-active={mode === "hourly" ? "true" : "false"}
        aria-pressed={mode === "hourly"}
        onClick={() => onChange("hourly")}
      >
        Hourly Support
      </button>
      <button
        type="button"
        className="pricing-toggle-btn"
        data-active={mode === "fixed" ? "true" : "false"}
        aria-pressed={mode === "fixed"}
        onClick={() => onChange("fixed")}
      >
        Fixed Price Project
      </button>
      <motion.span
        className="pricing-toggle-indicator"
        layoutId="pricing-toggle-indicator"
        data-mode={mode}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
      />
    </div>
  );
}

function HourlySupportPanel() {
  return (
    <motion.div
      key="hourly"
      className="pricing-panel"
      variants={PANEL_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PricingCard featured index={0} className="pricing-main-card">
        <header className="pricing-rate-card-head">
          <span className="pricing-card-eyebrow">Best for quick tasks</span>
          <h3 className="pricing-rate-card-title">Hourly Support</h3>
          <p className="pricing-card-intro">
            Perfect for quick tasks, bug fixes, UI tweaks, and ongoing support across web
            development, Java backends, and WordPress. Pay only for the hours you need.
          </p>
        </header>

        <div className="pricing-main-card-grid">
          <div className="pricing-main-card-col">
            <h4 className="pricing-card-subtitle">Suitable for</h4>
            <ul className="pricing-rate-card-features">
              {HOURLY_SUITABLE_FOR.map((item) => (
                <li key={item}>
                  <span className="pricing-rate-card-check" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pricing-main-card-col pricing-main-card-details">
            <div className="pricing-detail-row">
              <span className="pricing-detail-label">Hourly rate</span>
              <span className="pricing-detail-value">$42/hour</span>
            </div>
            <div className="pricing-detail-row">
              <span className="pricing-detail-label">Minimum booking</span>
              <span className="pricing-detail-value">2 hours</span>
            </div>
            <div className="pricing-detail-row">
              <span className="pricing-detail-label">Response time</span>
              <span className="pricing-detail-value">Within 1 business day</span>
            </div>
            <div className="pricing-detail-row">
              <span className="pricing-detail-label">Delivery</span>
              <span className="pricing-detail-value">Same day or next business day</span>
            </div>

            <h4 className="pricing-card-subtitle">What&apos;s included</h4>
            <ul className="pricing-rate-card-features pricing-rate-card-features--compact">
              {HOURLY_INCLUDED.map((item) => (
                <li key={item}>
                  <span className="pricing-rate-card-check" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="pricing-rate-card-footer">
          <Button as={Link} href="/contact" variant="primary">
            Book Consultation
          </Button>
        </footer>
      </PricingCard>
    </motion.div>
  );
}

function FixedProjectsPanel() {
  return (
    <motion.div
      key="fixed"
      className="pricing-panel"
      variants={PANEL_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="pricing-fixed-intro">
        <h3 className="pricing-fixed-intro-title">Fixed Price Projects</h3>
        <p className="pricing-fixed-intro-lead">
          Clear packages for websites, custom applications, and enterprise solutions — so you
          know what you&apos;re getting before we start.
        </p>

        <div className="pricing-fixed-suitable">
          <h4 className="pricing-card-subtitle">What we build</h4>
          <ul className="pricing-tag-list">
            {FIXED_SUITABLE_FOR.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pricing-factors">
          <h4 className="pricing-card-subtitle">Final price depends on</h4>
          <ul className="pricing-tag-list pricing-tag-list--muted">
            {PRICE_FACTORS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pricing-fixed-tier-grid">
        {FIXED_TIERS.map((tier, index) => (
          <PricingCard key={tier.id} featured={tier.featured} index={index}>
            <header className="pricing-rate-card-head">
              <h3 className="pricing-rate-card-title">{tier.title}</h3>
              <div className="pricing-rate-card-price">
                {tier.price ? (
                  <>
                    <span className="pricing-rate-card-note">{tier.priceNote}</span>
                    <span className="pricing-rate-card-amount">{tier.price}</span>
                  </>
                ) : (
                  <span className="pricing-rate-card-amount pricing-rate-card-amount--quote">
                    {tier.priceLabel}
                  </span>
                )}
              </div>
            </header>

            <p className="pricing-card-intro">{tier.description}</p>

            <ul className="pricing-rate-card-features">
              {tier.features.map((feature) => (
                <li key={feature}>
                  <span className="pricing-rate-card-check" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <footer className="pricing-rate-card-footer">
              <Button as={Link} href="/contact" variant={tier.featured ? "primary" : "secondary"}>
                {tier.cta}
              </Button>
            </footer>
          </PricingCard>
        ))}
      </div>
    </motion.div>
  );
}

function PricingPlansSection() {
  const reducedMotion = usePrefersReducedMotion();
  const [mode, setMode] = useState("hourly");

  return (
    <AnimatedSection
      id="pricing-plans"
      className="pricing-plans-section"
      aria-labelledby="pricing-plans-heading"
    >
      <Container as="div">
        <motion.header
          className="pricing-section-head"
          variants={fadeUp}
          {...inViewProps(reducedMotion)}
        >
          <span className="pricing-section-badge">Choose your model</span>
          <h2 id="pricing-plans-heading" className="pricing-section-heading">
            Flexible pricing that fits your project
          </h2>
          <p className="pricing-section-lead">
            Hourly support or fixed-price projects for web development, Java backend, and
            WordPress — switch to see what works best for you.
          </p>
        </motion.header>

        <motion.div variants={fadeUp} {...inViewProps(reducedMotion)}>
          <PricingToggle mode={mode} onChange={setMode} />
        </motion.div>

        <div className="pricing-panels-wrap">
          <AnimatePresence mode="wait">
            {mode === "hourly" ? <HourlySupportPanel /> : <FixedProjectsPanel />}
          </AnimatePresence>
        </div>
      </Container>
    </AnimatedSection>
  );
}

function PricingBenefitsSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <AnimatedSection
      className="pricing-benefits-section"
      aria-labelledby="pricing-benefits-heading"
    >
      <Container as="div">
        <motion.header
          className="pricing-section-head"
          variants={fadeUp}
          {...inViewProps(reducedMotion)}
        >
          <span className="pricing-section-badge">Why clients choose us</span>
          <h2 id="pricing-benefits-heading" className="pricing-section-heading">
            Why clients like this pricing
          </h2>
          <p className="pricing-section-lead">
            Fair, honest, and easy to understand — built for business owners who want clarity.
          </p>
        </motion.header>

        <motion.ul
          className="pricing-benefits-grid"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px 0px" }}
        >
          {BENEFITS.map((feature, index) => (
            <PricingFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.ul>
      </Container>
    </AnimatedSection>
  );
}

function TimelineStep({ step, index }) {
  return (
    <motion.li
      className="pricing-timeline-step"
      style={{ "--step-i": index }}
      variants={staggerItem}
    >
      <div className="pricing-timeline-step-inner">
        <span className="pricing-timeline-icon" aria-hidden="true">
          <TimelineIcon type={step.icon} />
        </span>
        <span className="pricing-timeline-num">{index + 1}</span>
        <h3 className="pricing-timeline-title">{step.title}</h3>
      </div>
      {index < TIMELINE_STEPS.length - 1 ? (
        <span className="pricing-timeline-connector" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </span>
      ) : null}
    </motion.li>
  );
}

function PricingTimelineSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <AnimatedSection
      className="pricing-timeline-section"
      aria-labelledby="pricing-timeline-heading"
    >
      <div className="pricing-timeline-bg" aria-hidden="true">
        <span className="pricing-hourly-texture" />
      </div>

      <Container as="div">
        <motion.header
          className="pricing-section-head"
          variants={fadeUp}
          {...inViewProps(reducedMotion)}
        >
          <span className="pricing-section-badge">How it works</span>
          <h2 id="pricing-timeline-heading" className="pricing-section-heading">
            Project process timeline
          </h2>
          <p className="pricing-section-lead">
            A simple, step-by-step path from first conversation to finished solution.
          </p>
        </motion.header>

        <motion.ol
          className="pricing-timeline-track"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px 0px" }}
        >
          {TIMELINE_STEPS.map((step, index) => (
            <TimelineStep key={step.id} step={step} index={index} />
          ))}
        </motion.ol>
      </Container>
    </AnimatedSection>
  );
}

function PricingFinalCta() {
  const [ctaRef, ctaActive] = useReveal(0.15);

  return (
    <section
      ref={ctaRef}
      data-component="pricing-final-cta"
      data-visible={ctaActive ? "true" : "false"}
      aria-labelledby="pricing-final-cta-heading"
    >
      <div className="pricing-final-cta-bg" aria-hidden="true">
        <span className="pricing-hero-grid" />
        <span className="pricing-hero-orb pricing-hero-orb--1" />
        <span className="pricing-hero-orb pricing-hero-orb--2" />
      </div>

      <Container as="div">
        <div className="pricing-final-cta-card">
          <span className="pricing-hero-badge" data-reveal style={{ "--reveal-i": 0 }}>
            Let&apos;s get started
          </span>
          <h2 id="pricing-final-cta-heading" className="pricing-final-cta-heading" data-reveal style={{ "--reveal-i": 1 }}>
            Let&apos;s Build Your Next Web Solution
          </h2>
          <p className="pricing-final-cta-lead" data-reveal style={{ "--reveal-i": 2 }}>
            Need help choosing the right pricing model for your website, backend, or WordPress
            project? Let&apos;s discuss and recommend the best option.
          </p>
          <div className="pricing-final-cta-actions" data-reveal style={{ "--reveal-i": 3 }}>
            <Button as={Link} href="/contact" variant="primary">
              Book Free Consultation
            </Button>
            <Button as={Link} href="/contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function PricingSection() {
  return (
    <div data-component="pricing-page">
      <PricingHero />
      <PricingPlansSection />
      <PricingBenefitsSection />
      <PricingTimelineSection />
      <PricingFaq />
      <PricingFinalCta />
    </div>
  );
}
