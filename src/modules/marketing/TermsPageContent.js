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

const TERMS_SECTIONS = [
  {
    id: "agreement",
    title: "Agreement to Terms",
    icon: AgreementIcon,
    body: [
      `By using our website or hiring ${siteConfig.name}, you agree to these terms.`,
      "If anything here doesn't work for you, please don't use our services or start a project with us.",
      "We'll always confirm project-specific details — scope, timeline, and cost — in writing before work begins.",
    ],
  },
  {
    id: "services",
    title: "Services We Provide",
    icon: ServicesIcon,
    body: [
      "We build custom websites, React and Next.js applications, Java backends with Spring Boot, REST APIs, and WordPress sites.",
      "We also develop WordPress themes and plugins, fix bugs, optimize performance, integrate databases, and deploy to the cloud.",
      "Every project starts with a clear proposal so you know exactly what you're getting.",
    ],
    highlights: [
      "Custom Web Development",
      "React.js & Next.js",
      "Java Backend (Spring Boot)",
      "REST API Development",
      "WordPress Development",
      "Maintenance & Bug Fixes",
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Payments",
    icon: PricingIcon,
    body: [
      "Our standard development rate is $42 USD per hour. Fixed-price projects are quoted based on scope and complexity.",
      "For fixed-price work, we require a 50% advance payment before starting. The remaining balance is due upon project or milestone completion.",
      "Work begins only after the initial payment is received. Invoices are sent promptly, and late payments may pause active work.",
    ],
    callout: {
      label: "Hourly Rate",
      value: "$42 USD / hour",
    },
  },
  {
    id: "timeline",
    title: "Project Timeline",
    icon: TimelineIcon,
    body: [
      "We provide an estimated timeline before work starts, based on project scope and your feedback speed.",
      "Timelines may shift if requirements change, third-party tools cause delays, or client materials arrive late.",
      "We'll keep you updated on progress and flag any delays as early as possible.",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    icon: ClientIcon,
    body: [
      "Please provide content, brand assets, login credentials, and feedback within agreed timeframes.",
      "Delays on your end may extend the project timeline — we'll communicate openly if that happens.",
      "You confirm that any content or materials you supply don't violate someone else's rights.",
    ],
  },
  {
    id: "revisions",
    title: "Revisions",
    icon: RevisionsIcon,
    body: [
      "Each project includes a reasonable number of revisions, defined in your proposal.",
      "Revisions cover adjustments within the agreed scope — not entirely new features or redesigns.",
      "Extra revisions beyond what's included may be billed at our hourly rate.",
    ],
  },
  {
    id: "scope-changes",
    title: "Scope Changes",
    icon: ScopeIcon,
    body: [
      "Need something outside the original plan? No problem — we'll discuss it first.",
      "Scope changes are documented in writing with updated pricing and timeline before we proceed.",
      "Work on new features starts only after you approve the revised terms.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: IpIcon,
    body: [
      "Once you've paid in full, you own the custom work we created specifically for your project.",
      "We keep rights to our pre-existing tools, frameworks, and general methods used across projects.",
      "Third-party assets — fonts, plugins, stock images — remain under their original licenses.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    icon: ThirdPartyIcon,
    body: [
      "Projects may use third-party tools for hosting, payments, analytics, or APIs.",
      "You're responsible for any fees, accounts, and terms tied to those services.",
      "We're not liable for outages, policy changes, or issues caused by third-party providers.",
    ],
  },
  {
    id: "hosting",
    title: "Hosting & Domain",
    icon: HostingIcon,
    body: [
      "Unless agreed otherwise, you own and manage your hosting and domain accounts.",
      "We can recommend providers and help with setup, migration, and deployment.",
      "Renewal fees and downtime from your hosting provider are outside our control.",
    ],
  },
  {
    id: "warranty",
    title: "Warranty & Bug Fixes",
    icon: WarrantyIcon,
    body: [
      "We stand behind our work. If we introduce a bug, we'll fix it at no extra charge within 30 days of delivery.",
      "This covers issues caused by our code — not changes you or others make afterward.",
      "New features, redesigns, or third-party updates fall outside this warranty period.",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    icon: MaintenanceIcon,
    body: [
      "Ongoing maintenance — updates, monitoring, backups, and small fixes — is available as a separate service.",
      "Support terms and response times are defined in your maintenance agreement.",
      "Without an active plan, support is billed at our standard hourly rate.",
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    icon: ConfidentialityIcon,
    body: [
      "Your business information, project details, and data are treated as confidential.",
      "We won't share your project publicly or use it in our portfolio without your written permission.",
      "We're happy to sign an NDA if your project requires it.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: LiabilityIcon,
    body: [
      "Our total liability for any claim is limited to the amount you paid us for that specific service.",
      "We're not responsible for indirect losses like lost revenue, data, or business opportunities.",
      "Some jurisdictions don't allow these limits — where required by law, they may not apply.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation & Refund Policy",
    icon: CancellationIcon,
    body: [
      "You may cancel a project by notifying us in writing. Work completed up to that point will be invoiced.",
      "Advance payments for work not yet started may be partially refunded, minus any costs already incurred.",
      "Refunds are processed within 14 business days of the cancellation agreement.",
    ],
  },
  {
    id: "termination",
    title: "Project Termination",
    icon: TerminationIcon,
    body: [
      "We may pause or end a project if payments are overdue, requirements become unclear, or terms are repeatedly breached.",
      "We'll always try to resolve issues through conversation before taking this step.",
      "Upon termination, you receive all completed deliverables after outstanding invoices are settled.",
    ],
  },
  {
    id: "changes",
    title: "Changes to Terms",
    icon: ChangesIcon,
    body: [
      "We may update these terms from time to time. The date at the top of this page shows when they last changed.",
      "Continued use of our website or services after updates means you accept the revised terms.",
      "For active projects, previously agreed project terms take priority over general updates.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    icon: LawIcon,
    body: [
      "These terms are governed by the laws of India, without regard to conflict-of-law principles.",
      "Any disputes will be handled through good-faith negotiation first.",
      "If needed, disputes shall be resolved in courts located in India, unless we agree otherwise in writing.",
    ],
  },
  {
    id: "contact",
    title: "Contact Information",
    icon: ContactIcon,
    body: [
      "Questions about these terms? We're here to help.",
      `Email us at ${siteConfig.contact.email} or call ${siteConfig.contact.phone}.`,
      "We typically respond within one business day.",
    ],
  },
];

function AgreementIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServicesIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PricingIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TimelineIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClientIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function RevisionsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M3 12a9 9 0 0115.5-6.7L21 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 3v5h-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 12a9 9 0 01-15.5 6.7L3 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 21v-5h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScopeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IpIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ThirdPartyIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HostingIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WarrantyIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MaintenanceIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ConfidentialityIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LiabilityIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 9v4M12 17h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CancellationIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9l-6 6M9 9l6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TerminationIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
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

function LawIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M12 3v18M4 7h16M8 7l-2 14M16 7l2 14" strokeLinecap="round" strokeLinejoin="round" />
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

function TermsSectionCard({ section, index }) {
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
            {section.body.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-[#475569]">
                {paragraph}
              </p>
            ))}
          </div>

          {section.callout ? (
            <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-[var(--hero-badge-text)] bg-[#f5f7ff] px-4 py-3">
              <span className="text-sm font-medium text-[#64748b]">{section.callout.label}</span>
              <span className="text-base font-bold text-brand">{section.callout.value}</span>
            </div>
          ) : null}

          {section.highlights ? (
            <ul className="mt-5 flex flex-wrap gap-2">
              {section.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#e6e8ee] bg-[#f8f9ff] px-3 py-1 text-xs font-medium text-[#475569]"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function TermsOverviewGrid({ onNavigate }) {
  return (
    <div className="rounded-2xl border border-[#e6e8ee] bg-white p-5 shadow-sm sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-lg font-bold tracking-tight text-[#0f172a] sm:text-xl">
            All sections at a glance
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#64748b] sm:text-[15px]">
            Tap any topic to jump straight to it, or scroll down to read everything in order.
          </p>
        </div>
        <p className="shrink-0 text-sm font-medium text-[#94a3b8]">
          {TERMS_SECTIONS.length} sections
        </p>
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {TERMS_SECTIONS.map((section, index) => (
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

export default function TermsPageContent() {
  const reducedMotion = usePrefersReducedMotion();
  const scrollTo = useScrollTo();

  const handleNavigate = useCallback(
    (id) => {
      scrollTo(`#${id}`);
    },
    [scrollTo],
  );

  return (
    <div data-page="terms">
      <AboutHeroStyles />

      {/* Hero */}
      <section
        data-component="about-hero"
        data-hero-layout="simple"
        data-hero-bg="outcomes"
        aria-labelledby="terms-page-heading"
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

                  <h1 id="terms-page-heading">Terms of Service</h1>
                  <p className="hero-sub">
                    Clear, honest terms for working with us — written in plain English so you
                    know exactly what to expect before we start your project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="border-t border-[#e6e8ee] bg-[#f8f9fc] py-10 sm:py-14 lg:py-16">
        <Container as="div">
          <div className="space-y-8 lg:space-y-10">
            <TermsOverviewGrid onNavigate={handleNavigate} />

            <motion.div
              className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2"
              variants={staggerContainer}
              initial={reducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-40px 0px" }}
            >
              {TERMS_SECTIONS.map((section, index) => (
                <TermsSectionCard
                  key={section.id}
                  section={section}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Divider + CTA */}
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
              Ready to start a project?
            </h2>
            <p className="mt-4 leading-relaxed text-[#64748b]">
              We&apos;d love to hear about your idea. Book a free call and we&apos;ll
              walk through scope, timeline, and pricing together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button as={Link} href="/contact" variant="primary">
                Get in Touch
              </Button>
              <Button as={Link} href="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
            <p className="mt-8 text-sm text-[#94a3b8]">
              Also see our{" "}
              <Link href="/privacy" className="font-medium text-brand hover:underline">
                Privacy Policy
              </Link>
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
