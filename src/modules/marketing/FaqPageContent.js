"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import FaqSection from "@/modules/marketing/FaqSection";
import { EASE } from "@/lib/motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function FaqPageContent() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div data-page="faq">
      <section
        className="relative overflow-hidden border-b border-[#e6e8ee] bg-gradient-to-br from-[#eef1ff] via-[#f8f9ff] to-[#f0f4ff] py-16 sm:py-20 lg:py-24"
        aria-labelledby="faq-page-heading"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[var(--accent)]/15 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[var(--accent-secondary)]/10 blur-3xl" />
        </div>
        <Container as="div" className="relative z-10">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand" />
              FAQ
            </span>
            <h1
              id="faq-page-heading"
              className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl"
            >
              Questions? We&apos;ve got straight answers.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#64748b]">
              Everything you might want to know about our services, process, and pricing —
              explained in plain English, no tech jargon.
            </p>
          </motion.div>
        </Container>
      </section>

      <FaqSection />

      <section className="border-t border-[#e6e8ee] bg-[#f8f9ff] py-16">
        <Container as="div">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <h2 className="text-2xl font-bold text-[#0f172a]">Still have questions?</h2>
            <p className="mt-3 text-[#64748b]">
              We&apos;re happy to chat. Book a free 30-minute call and we&apos;ll walk
              through your project together.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button as={Link} href="/contact" variant="primary">
                Contact Us
              </Button>
              <Button as={Link} href="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
