"use client";

import { useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import AboutHeroStyles from "@/modules/marketing/AboutHeroStyles";
import { siteConfig } from "@/config/site";
import { EASE, staggerContainer, staggerItem } from "@/lib/motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import useScrollTo from "@/hooks/useScrollTo";

const LAST_UPDATED = "July 7, 2026";

const PRIVACY_SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    icon: IntroIcon,
    paragraphs: [
      `${siteConfig.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`,
      "Please read this policy carefully. By using our website or services, you agree to the collection and use of information in accordance with this policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: CollectIcon,
    subsections: [
      {
        title: "Information You Provide",
        paragraphs: ["When you contact us or use our services, we may collect:"],
        bullets: [
          "Name and contact information (email, phone number)",
          "Company name and job title",
          "Project details and requirements",
          "Files and documents you upload",
          "Any other information you choose to provide",
        ],
      },
      {
        title: "Automatically Collected Information",
        paragraphs: [
          "We may automatically collect certain information about your device and usage patterns, including IP address, pages visited, referring URLs, and device information.",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    icon: UseIcon,
    paragraphs: ["We use the information we collect to:"],
    bullets: [
      "Provide, maintain, and improve our services",
      "Respond to inquiries and provide customer support",
      "Send project estimates and proposals",
      "Communicate about your projects",
      "Send marketing communications (with your consent)",
      "Comply with legal obligations and prevent fraud",
    ],
  },
  {
    id: "data-security",
    title: "Data Confidentiality and Security",
    icon: SecurityIcon,
    paragraphs: [
      "We treat client information as confidential and use appropriate technical and organizational measures to protect data. Files are accessed only by authorized personnel and transmitted over encrypted connections (HTTPS).",
    ],
    subsections: [
      {
        title: "Non-Disclosure Agreements (NDAs)",
        paragraphs: [
          "We are happy to sign NDAs for sensitive projects. Mention this when contacting us.",
        ],
      },
    ],
  },
  {
    id: "information-sharing",
    title: "Information Sharing and Disclosure",
    icon: ShareIcon,
    paragraphs: [
      "We do not sell your personal information. We may share information only with your consent, to comply with law, to protect rights and safety, or with service providers under confidentiality agreements.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: RightsIcon,
    paragraphs: [
      `You may request access, correction, deletion, restriction, or portability of your personal information. Contact us at ${siteConfig.contact.email}.`,
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    icon: RetentionIcon,
    paragraphs: [
      "We retain personal information only as long as necessary for the purposes described in this policy or as required by law.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    icon: CookieIcon,
    paragraphs: [
      "We use cookies and similar technologies to understand how our site is used. You can control cookies through your browser settings.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    icon: LinkIcon,
    paragraphs: [
      "Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    icon: ChildrenIcon,
    paragraphs: [
      "Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.",
    ],
  },
  {
    id: "policy-changes",
    title: "Changes to This Privacy Policy",
    icon: ChangesIcon,
    paragraphs: [
      "We may update this policy and will revise the last updated date when we do.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: ContactIcon,
    paragraphs: ["If you have questions about this Privacy Policy, reach us at:"],
    bullets: [
      `Email: ${siteConfig.contact.email}`,
      `Phone: ${siteConfig.contact.phone}`,
    ],
  },
];

function IntroIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CollectIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h10M4 17h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SecurityIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShareIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RightsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RetentionIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CookieIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1010 10 4 4 0 00-4-4 4 4 0 01-4-4 4 4 0 00-4-4z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChildrenIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChangesIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PrivacySectionBody({ section }) {
  return (
    <>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="text-[15px] leading-relaxed text-[#475569]">
          {paragraph}
        </p>
      ))}

      {section.bullets ? (
        <ul className="mt-3 space-y-2">
          {section.bullets.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#475569]"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.subsections?.map((sub) => (
        <div key={sub.title} className="mt-5 rounded-xl border border-[#e6e8ee] bg-[#f8f9ff] p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-[#0f172a] sm:text-[15px]">{sub.title}</h3>
          <div className="mt-3 space-y-3">
            {sub.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-[#475569]">
                {paragraph}
              </p>
            ))}
            {sub.bullets ? (
              <ul className="space-y-2">
                {sub.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#475569]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
}

function PrivacySectionCard({ section, index }) {
  const Icon = section.icon;

  return (
    <motion.article
      id={section.id}
      variants={staggerItem}
      className="group scroll-mt-24 flex h-full flex-col rounded-2xl border border-[#e6e8ee] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[var(--hero-badge-text)] hover:shadow-md sm:p-7"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft-bg)] text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white sm:h-12 sm:w-12">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="text-lg font-bold tracking-tight text-[#0f172a] sm:text-xl">
              {section.title}
            </h2>
          </div>

          <div className="mt-4 space-y-3">
            <PrivacySectionBody section={section} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function PrivacyOverviewGrid({ onNavigate }) {
  return (
    <div className="rounded-2xl border border-[#e6e8ee] bg-white p-5 shadow-sm sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-lg font-bold tracking-tight text-[#0f172a] sm:text-xl">
            All sections at a glance
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#64748b] sm:text-[15px]">
            Tap any topic to jump straight to it, or scroll down to read the full policy.
          </p>
        </div>
        <p className="shrink-0 text-sm font-medium text-[#94a3b8]">
          {PRIVACY_SECTIONS.length} sections
        </p>
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PRIVACY_SECTIONS.map((section, index) => (
          <li key={section.id}>
            <motion.button
              type="button"
              onClick={() => onNavigate(section.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 480, damping: 28 }}
              className="flex w-full items-center gap-2.5 rounded-xl border border-[#e6e8ee] bg-[#f8f9ff] px-3.5 py-3 text-left text-sm font-medium text-[#475569] transition-colors duration-200 hover:border-[var(--hero-badge-text)] hover:bg-white hover:text-brand"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft-bg)] text-[11px] font-bold text-brand">
                {index + 1}
              </span>
              <span className="leading-snug">{section.title}</span>
            </motion.button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PrivacyPageContent() {
  const reducedMotion = usePrefersReducedMotion();
  const scrollTo = useScrollTo();

  const handleNavigate = useCallback(
    (id) => {
      scrollTo(`#${id}`);
    },
    [scrollTo],
  );

  return (
    <div data-page="privacy">
      <AboutHeroStyles />

      <section
        data-component="about-hero"
        data-hero-layout="simple"
        data-hero-bg="outcomes"
        aria-labelledby="privacy-page-heading"
      >
        <div className="outcome-bg" aria-hidden="true">
          <span className="outcome-grid-texture" />
          <span className="outcome-orb outcome-orb--1" />
          <span className="outcome-orb outcome-orb--2" />
          <span className="outcome-orb outcome-orb--3" />
        </div>

        <Container as="div">
          <div className="hero-inner">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-copy">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="hero-badge">Legal</span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Updated {LAST_UPDATED}
                    </span>
                  </div>

                  <h1 id="privacy-page-heading">Privacy Policy</h1>
                  <p className="hero-sub">
                    How {siteConfig.name} collects, uses, and protects your information —
                    written in plain English so you always know where your data goes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#e6e8ee] bg-[#f8f9fc] py-10 sm:py-14 lg:py-16">
        <Container as="div">
          <div className="space-y-8 lg:space-y-10">
            <PrivacyOverviewGrid onNavigate={handleNavigate} />

            <motion.div
              className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2"
              variants={staggerContainer}
              initial={reducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-40px 0px" }}
            >
              {PRIVACY_SECTIONS.map((section, index) => (
                <PrivacySectionCard
                  key={section.id}
                  section={section}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="border-t border-[#e6e8ee] bg-[#f8f9ff] py-16 sm:py-20">
        <Container as="div">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
              Questions about your data?
            </h2>
            <p className="mt-4 leading-relaxed text-[#64748b]">
              We&apos;re happy to explain how we handle your information. Reach out anytime
              — we typically respond within one business day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button as={Link} href="/contact" variant="primary">
                Contact Us
              </Button>
              <Button as={Link} href="/terms" variant="secondary">
                View Terms of Service
              </Button>
            </div>
            <p className="mt-8 text-sm text-[#94a3b8]">
              Email us directly at{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-medium text-brand hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
