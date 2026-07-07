"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import {
  EASE,
  fadeUp,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import { useReveal } from "@/hooks/useReveal";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const TRUST_POINTS = [
  "Free 30-minute discovery call",
  "Honest pricing before any work starts",
  "Reply within one business hour",
];

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service" },
  { value: "web-development", label: "Website or Web App" },
  { value: "java-backend", label: "Backend & Business Systems" },
  { value: "wordpress", label: "WordPress Website" },
  { value: "other", label: "Not sure — help me decide" },
];

function ContactHero() {
  const [heroRef, heroActive] = useReveal(0.12);

  return (
    <section
      ref={heroRef}
      className="contact-hero"
      aria-labelledby="contact-hero-heading"
      data-visible={heroActive ? "true" : "false"}
    >
      <div className="contact-hero-bg" aria-hidden="true">
        <span className="contact-hero-grid" />
        <span className="contact-hero-orb contact-hero-orb--1" />
        <span className="contact-hero-orb contact-hero-orb--2" />
      </div>

      <Container as="div">
        <div className="contact-hero-content">
          <span className="contact-hero-badge">Free Assessment</span>
          <h1 id="contact-hero-heading" className="contact-hero-heading">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="contact-hero-lead">
            Tell us what you want to achieve — a professional website, a custom business
            app, or a WordPress site you can update yourself. We&apos;ll reply with a
            simple plan, clear pricing, and practical next steps. No technical knowledge
            needed on your end.
          </p>
          <p className="contact-hero-note">
            Confidential. Typical reply within one business hour on business days.
          </p>
        </div>
      </Container>
    </section>
  );
}

function ContactInfoPanel({ reducedMotion }) {
  const phone = siteConfig.contact.phone;
  const phoneHref = `tel:+${phone.replace(/\D/g, "")}`;
  const email = siteConfig.contact.email;
  const emailHref = `mailto:${email}`;

  return (
    <motion.aside
      className="contact-sidebar"
      variants={staggerContainer}
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px 0px" }}
      aria-labelledby="contact-sidebar-heading"
    >
      <div className="contact-sidebar-bg" aria-hidden="true">
        <span className="contact-sidebar-grid" />
        <span className="contact-sidebar-orb contact-sidebar-orb--1" />
        <span className="contact-sidebar-orb contact-sidebar-orb--2" />
        <span className="contact-sidebar-orb contact-sidebar-orb--3" />
      </div>

      <div className="contact-sidebar-inner">
        <motion.header className="contact-sidebar-head" variants={staggerItem}>
          <h2 id="contact-sidebar-heading" className="contact-sidebar-title">
            <span className="contact-sidebar-badge">Contact</span>
          </h2>
          <p className="contact-sidebar-lead">
            Prefer a direct conversation? Call or email — we&apos;re happy to help.
          </p>
        </motion.header>

        <motion.div className="contact-info-card contact-info-card--highlight" variants={staggerItem}>
          <span className="contact-info-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          <div>
            <p className="contact-info-label">Phone</p>
            <a href={phoneHref} className="contact-info-value">
              {phone}
            </a>
          </div>
        </motion.div>

        <motion.div className="contact-info-card" variants={staggerItem}>
          <span className="contact-info-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="m22 6-10 7L2 6" />
            </svg>
          </span>
          <div>
            <p className="contact-info-label">Email</p>
            <a href={emailHref} className="contact-info-value">
              {email}
            </a>
          </div>
        </motion.div>

        <motion.div className="contact-info-card" variants={staggerItem}>
          <span className="contact-info-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </span>
          <div>
            <p className="contact-info-label">Reply time</p>
            <p className="contact-info-value contact-info-value--text">
              Usually within 1 business hour
            </p>
          </div>
        </motion.div>

        <motion.ul className="contact-trust-list" variants={staggerItem}>
          {TRUST_POINTS.map((point) => (
            <li key={point}>
              <span className="contact-trust-check" aria-hidden="true">✓</span>
              {point}
            </li>
          ))}
        </motion.ul>

        <motion.div className="contact-info-links" variants={staggerItem}>
          <Link href="/pricing" className="contact-info-link">
            View pricing <span aria-hidden="true">→</span>
          </Link>
          <Link href="/services" className="contact-info-link">
            Explore services <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </motion.aside>
  );
}

function FormField({ label, htmlFor, children, index, reducedMotion, fullWidth = false }) {
  return (
    <motion.label
      className="contact-field"
      data-span={fullWidth ? "full" : undefined}
      htmlFor={htmlFor}
      variants={fadeUp}
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-20px 0px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
    >
      <span className="contact-field-label">
        {label}
        <span className="contact-field-required" aria-hidden="true">
          *
        </span>
      </span>
      {children}
    </motion.label>
  );
}

function ContactForm({ reducedMotion }) {
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        className="contact-success"
        initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        role="status"
      >
        <span className="contact-success-icon" aria-hidden="true">✓</span>
        <h2>Thank you — we&apos;ve got your message</h2>
        <p>
          We&apos;ll review your details and get back to you within one business hour on
          business days with a clear plan and honest next steps.
        </p>
        <Button type="button" variant="secondary" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  const fieldProps = (name) => ({
    onFocus: () => setFocused(name),
    onBlur: () => setFocused(null),
    "data-focused": focused === name ? "true" : "false",
  });

  return (
    <motion.form
      className="contact-form-card"
      data-component="contact-form"
      onSubmit={handleSubmit}
      variants={fadeUp}
      initial={reducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-40px 0px" }}
    >
      <div className="contact-form-card-glow" aria-hidden="true" />

      <div className="contact-form-grid">
        <FormField label="Full name" htmlFor="contact-name" index={0} reducedMotion={reducedMotion}>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Jane Smith"
            required
            autoComplete="name"
            {...fieldProps("name")}
          />
        </FormField>

        <FormField label="Work email" htmlFor="contact-email" index={1} reducedMotion={reducedMotion}>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="jane@company.com"
            required
            autoComplete="email"
            {...fieldProps("email")}
          />
        </FormField>

        <FormField label="Company" htmlFor="contact-company" index={2} reducedMotion={reducedMotion}>
          <input
            id="contact-company"
            type="text"
            name="company"
            placeholder="Acme Corp"
            required
            autoComplete="organization"
            {...fieldProps("company")}
          />
        </FormField>

        <FormField label="Service needed" htmlFor="contact-service" index={3} reducedMotion={reducedMotion}>
          <select
            id="contact-service"
            name="service"
            defaultValue=""
            required
            {...fieldProps("service")}
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value || "placeholder"} value={opt.value} disabled={!opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="What are you looking to build?"
          htmlFor="contact-message"
          index={4}
          reducedMotion={reducedMotion}
          fullWidth
        >
          <textarea
            id="contact-message"
            name="message"
            placeholder="Share your goals, timeline, and any challenges in your own words — we'll translate that into a solid technical plan."
            required
            {...fieldProps("message")}
          />
        </FormField>
      </div>

      <motion.footer
        className="contact-form-footer"
        variants={fadeUp}
        initial={reducedMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.35, ease: EASE }}
      >
        <Button type="submit" variant="primary" className="contact-submit-btn">
          Book Free Assessment
          <span className="contact-submit-arrow" aria-hidden="true">→</span>
        </Button>
        <p className="contact-form-note">
          Confidential. Typical reply within one business hour on business days.
        </p>
      </motion.footer>
    </motion.form>
  );
}

export default function ContactPageContent() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div data-component="contact-page">
      <ContactHero />

      <section className="contact-main" aria-label="Contact form and details">
        <Container as="div">
          <div className="contact-main-grid">
            <ContactForm reducedMotion={reducedMotion} />
            <ContactInfoPanel reducedMotion={reducedMotion} />
          </div>
        </Container>
      </section>
    </div>
  );
}
