"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import {
  EASE,
  inViewProps,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";
import {
  processClientBenefits,
  processRoadmapSteps,
} from "@/config/process";

function BenefitIcon({ type }) {
  const icons = {
    transparency: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    scalability: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <path d="M3 17l6-6 4 4 8-10" />
        <path d="M14 5h7v7" />
      </svg>
    ),
    expertise: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h4M7 11h10" />
      </svg>
    ),
  };

  return icons[type] ?? icons.expertise;
}

function ProcessHero({ reducedMotion }) {
  return (
    <section
      className="relative overflow-hidden border-b border-[#e6e8ee] bg-gradient-to-br from-[#eef1ff] via-[#f8f9ff] to-[#f0f4ff] px-0 py-16 sm:py-20 lg:py-24"
      aria-labelledby="process-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[var(--accent)]/15 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[var(--accent-secondary)]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container as="div" className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand shadow-sm backdrop-blur-sm"
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_0_3px_var(--brand-mark-glow-hover)]" />
            Our Process
          </motion.span>

          <motion.h1
            id="process-hero-heading"
            className="mb-5 text-pretty font-[family-name:var(--font-sora)] text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold leading-[1.2] tracking-[-0.03em] text-[var(--heading)]"
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: EASE }}
          >
            Aapka Business Idea, Hamari Technical Zimmedari – Bina Kisi Tension Ke!
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-pretty text-lg leading-[1.7] text-muted sm:text-xl sm:leading-[1.75]"
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34, ease: EASE }}
          >
            Hum sirf coding nahi karte. Hum aapke business ko samajhte hain, sahi
            strategy banate hain, aur ek aisi website taiyar karte hain jo aapke
            liye 24/7 naye clients lekar aaye.
          </motion.p>
        </div>

        <div className="mx-auto mt-12 flex justify-center" aria-hidden="true">
          <svg
            width="48"
            height="120"
            viewBox="0 0 48 120"
            fill="none"
            className="text-brand/50"
          >
            <motion.path
              d="M24 0 C24 40, 8 50, 8 70 C8 90, 24 100, 24 120"
              stroke="url(#hero-path-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              initial={reducedMotion ? false : { pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
            />
            <defs>
              <linearGradient id="hero-path-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="var(--accent-secondary)" />
                <stop offset="100%" stopColor="var(--accent-secondary)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </section>
  );
}

function RoadmapStepCard({ step, reducedMotion }) {
  return (
    <motion.li className="relative list-none" variants={staggerItem}>
      <motion.article
        className="group relative rounded-2xl border border-[#e6e8ee] bg-white p-6 shadow-[0_4px_16px_-6px_rgba(15,23,42,0.08)] transition-[transform,box-shadow,border-color] duration-300 hover:border-[var(--accent)]/35 hover:shadow-[0_0_0_1px_rgba(79,70,229,0.12),0_20px_48px_-12px_rgba(79,70,229,0.28)] sm:p-8"
        initial={false}
        whileHover={reducedMotion ? undefined : { scale: 1.02, y: -4 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <div className="mb-4 flex items-start gap-4">
          <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-secondary)] text-sm font-extrabold text-white shadow-[0_6px_20px_-4px_rgba(99,102,241,0.65)]">
            {step.step}
          </span>
          <h3 className="pt-1.5 text-pretty font-[family-name:var(--font-sora)] text-[1.125rem] font-bold leading-snug tracking-[-0.02em] text-[var(--heading)] sm:text-[1.35rem]">
            {step.title}
          </h3>
        </div>

        <div className="rounded-xl border border-[var(--accent)]/10 bg-[var(--accent-soft-bg)]/60 px-4 py-4 sm:px-5 sm:py-4.5">
          <p className="mb-1.5 text-xs font-bold uppercase tracking-widest text-brand">
            Client Benefit
          </p>
          <p className="text-pretty text-[0.9375rem] leading-[1.7] text-muted sm:text-base sm:leading-[1.75]">
            {step.benefit}
          </p>
        </div>
      </motion.article>
    </motion.li>
  );
}

function ProcessRoadmap({ reducedMotion }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="process-roadmap-heading"
    >
      <Container as="div">
        <motion.header
          className="mx-auto mb-14 max-w-2xl text-center"
          variants={staggerContainer}
          {...inViewProps(reducedMotion)}
        >
          <motion.span
            className="mb-3 inline-block rounded-full bg-[var(--accent-soft-bg)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand"
            variants={staggerItem}
          >
            The Roadmap
          </motion.span>
          <motion.h2
            id="process-roadmap-heading"
            className="mb-4 font-[family-name:var(--font-sora)] text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.025em] text-[var(--heading)]"
            variants={staggerItem}
          >
            Idea se launch tak — har kadam crystal clear
          </motion.h2>
          <motion.p className="text-base leading-relaxed text-muted sm:text-lg" variants={staggerItem}>
            Paanch simple phases jo aapko har stage par confidence deti hain.
            Koi tech jargon nahi — sirf aapke business ke liye asli value.
          </motion.p>
        </motion.header>

        <div className="relative mx-auto max-w-3xl">
          <div
            className="pointer-events-none absolute bottom-8 left-1/2 top-8 hidden w-px -translate-x-1/2 lg:block"
            aria-hidden="true"
          >
            <svg
              className="h-full w-12 overflow-visible"
              viewBox="0 0 48 800"
              preserveAspectRatio="none"
              fill="none"
            >
              <motion.path
                d="M24 0 C24 120, 4 160, 4 220 C4 280, 24 320, 24 400 C24 480, 44 520, 44 580 C44 640, 24 680, 24 800"
                stroke="url(#roadmap-path-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                style={{ pathLength: reducedMotion ? 1 : pathLength }}
              />
              <defs>
                <linearGradient id="roadmap-path-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-secondary)" />
                  <stop offset="50%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="var(--accent-secondary)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.ol
            className="relative z-10 flex flex-col gap-6 sm:gap-8"
            variants={staggerContainer}
            {...inViewProps(reducedMotion)}
          >
            {processRoadmapSteps.map((step) => (
              <RoadmapStepCard
                key={step.id}
                step={step}
                reducedMotion={reducedMotion}
              />
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}

function ProcessBenefits({ reducedMotion }) {
  return (
    <section
      className="border-y border-[#e6e8ee] bg-[#f4f6fb] py-16 sm:py-20"
      aria-labelledby="process-benefits-heading"
    >
      <Container as="div">
        <motion.header
          className="mx-auto mb-12 max-w-2xl text-center"
          variants={staggerContainer}
          {...inViewProps(reducedMotion)}
        >
          <motion.span
            className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand shadow-sm"
            variants={staggerItem}
          >
            Why It Works
          </motion.span>
          <motion.h2
            id="process-benefits-heading"
            className="mb-4 font-[family-name:var(--font-sora)] text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.025em] text-[var(--heading)]"
            variants={staggerItem}
          >
            Why Our Process Benefits You
          </motion.h2>
          <motion.p className="text-base leading-relaxed text-muted" variants={staggerItem}>
            Humara process aapke liye banaya gaya hai — taaki aap confident feel
            karein, surprises na aayein, aur results milein.
          </motion.p>
        </motion.header>

        <motion.ul
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={staggerContainer}
          {...inViewProps(reducedMotion)}
        >
          {processClientBenefits.map((benefit) => (
            <motion.li key={benefit.id} className="list-none" variants={staggerItem}>
              <motion.div
                className="flex h-full flex-col rounded-2xl border border-[#e6e8ee] bg-white p-6 shadow-[0_4px_16px_-6px_rgba(15,23,42,0.06)]"
                initial={false}
                whileHover={reducedMotion ? undefined : { scale: 1.02, y: -3 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-soft-bg)] to-[var(--hero-badge-text)] text-brand">
                  <BenefitIcon type={benefit.icon} />
                </span>
                <h3 className="mb-2 font-[family-name:var(--font-sora)] text-lg font-bold tracking-[-0.02em] text-[var(--heading)]">
                  {benefit.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

function ProcessCta({ reducedMotion }) {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="process-cta-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--footer-bg)] via-[#111827] to-[var(--footer-bg)]" />
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[var(--accent)]/20 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-[var(--accent-secondary)]/15 blur-3xl" />
      </div>

      <Container as="div" className="relative z-10">
        <motion.div
          className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-12 text-center backdrop-blur-sm sm:px-10 sm:py-14"
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <h2
            id="process-cta-heading"
            className="mb-8 font-[family-name:var(--font-sora)] text-[clamp(1.35rem,3vw,1.875rem)] font-bold leading-snug tracking-[-0.02em] text-white"
          >
            Kya aap apne idea ko validate karna chahte hain? Aaj hi ek free
            consultation book karein.
          </h2>

          <motion.div
            whileHover={reducedMotion ? undefined : { scale: 1.03 }}
            whileTap={reducedMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="inline-block"
          >
            <Button
              as={Link}
              href="/contact"
              variant="primary"
              className="!inline-flex !min-h-[3.25rem] !min-w-[14rem] !items-center !justify-center !rounded-xl !px-8 !text-base !font-bold !tracking-[-0.01em] !no-underline !shadow-[0_14px_32px_-10px_rgba(79,70,229,0.55)] transition-all duration-300 hover:!-translate-y-0.5 hover:!shadow-[0_18px_40px_-10px_rgba(79,70,229,0.65)]"
            >
              Apna Project Shuru Karein
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function ProcessPageContent() {
  const reducedMotion = useReducedMotion();

  return (
    <div data-component="process-page" data-page="process">
      <ProcessHero reducedMotion={reducedMotion} />
      <ProcessRoadmap reducedMotion={reducedMotion} />
      <ProcessBenefits reducedMotion={reducedMotion} />
      <ProcessCta reducedMotion={reducedMotion} />
    </div>
  );
}
