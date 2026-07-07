"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/config/site";
import { EASE, staggerContainer, staggerItem } from "@/lib/motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const PRIVACY_SECTIONS = [
  {
    title: "Information we collect",
    body: "When you contact us through our website, email, or phone, we may collect your name, email address, phone number, company name, and project details you choose to share. We also collect basic technical data like browser type and pages visited to improve our website experience.",
  },
  {
    title: "How we use your information",
    body: "We use your information solely to respond to inquiries, provide consulting and development services, send project updates, and improve our website. We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
  },
  {
    title: "Data security",
    body: "We implement industry-standard security measures including encrypted connections (HTTPS), secure hosting, and access controls to protect your data. While no online system is 100% immune, we take reasonable steps to safeguard information against unauthorized access.",
  },
  {
    title: "Third-party services",
    body: "We may use trusted third-party tools for hosting, analytics, email delivery, and payment processing. These providers access data only as needed to perform their services and are bound by their own privacy policies.",
  },
  {
    title: "Your rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us. You can also opt out of non-essential communications. We will respond to valid requests within a reasonable timeframe.",
  },
  {
    title: "Cookies",
    body: "Our website may use cookies and similar technologies to remember preferences and understand how visitors use our site. You can control cookies through your browser settings. Disabling cookies may affect some site functionality.",
  },
  {
    title: "Contact us",
    body: `If you have questions about this Privacy Policy, contact us at ${siteConfig.contact.email} or ${siteConfig.contact.phone}.`,
  },
];

const TERMS_SECTIONS = [
  {
    title: "Agreement to terms",
    body: `By accessing our website or engaging ${siteConfig.name} for services, you agree to these Terms & Conditions. If you disagree with any part, please do not use our services.`,
  },
  {
    title: "Services",
    body: "We provide web development, backend engineering, WordPress solutions, consulting, and related digital services. Specific deliverables, timelines, and pricing are defined in individual project proposals or statements of work agreed upon before work begins.",
  },
  {
    title: "Payment terms",
    body: "Payment schedules are outlined in your project agreement. Unless otherwise stated, we require a deposit before work begins and milestone payments throughout the project. Late payments may pause work until accounts are current.",
  },
  {
    title: "Intellectual property",
    body: "Upon full payment, you receive ownership of custom work product created specifically for your project (designs, code, content). We retain rights to pre-existing tools, frameworks, and general methodologies. Third-party licenses (fonts, plugins, stock assets) remain subject to their original terms.",
  },
  {
    title: "Client responsibilities",
    body: "You agree to provide timely feedback, content, and access needed to complete your project. Delays in client-provided materials may extend timelines. You represent that content you supply does not infringe on third-party rights.",
  },
  {
    title: "Limitation of liability",
    body: "Our liability is limited to the amount paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential damages including lost profits or data, except where prohibited by law.",
  },
  {
    title: "Confidentiality",
    body: "We treat your business information and project details as confidential. We are happy to sign NDAs upon request. We do not disclose client project details publicly without your written permission.",
  },
  {
    title: "Changes to terms",
    body: "We may update these terms periodically. Continued use of our website or services after changes constitutes acceptance. Material changes will be noted on this page with an updated date.",
  },
  {
    title: "Contact",
    body: `Questions about these terms? Reach us at ${siteConfig.contact.email} or ${siteConfig.contact.phone}.`,
  },
];

/**
 * @param {{ type: "privacy" | "terms", title: string, lastUpdated: string }} props
 */
export default function LegalPageContent({ type, title, lastUpdated }) {
  const reducedMotion = usePrefersReducedMotion();
  const sections = type === "privacy" ? PRIVACY_SECTIONS : TERMS_SECTIONS;

  return (
    <div data-page={type}>
      <section className="border-b border-[#e6e8ee] bg-gradient-to-br from-[#eef1ff] via-[#f8f9ff] to-[#f0f4ff] py-14 sm:py-16">
        <Container as="div">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              Home
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-[#64748b]">Last updated: {lastUpdated}</p>
          </motion.div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container as="div">
          <motion.div
            className="mx-auto max-w-3xl space-y-10"
            variants={staggerContainer}
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-40px 0px" }}
          >
            {sections.map((section) => (
              <motion.section key={section.title} variants={staggerItem}>
                <h2 className="text-lg font-bold text-[#0f172a] sm:text-xl">
                  {section.title}
                </h2>
                <p className="mt-3 leading-relaxed text-[#475569]">{section.body}</p>
              </motion.section>
            ))}
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
