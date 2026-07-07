"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { fadeUp, inViewProps } from "@/lib/motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const FAQ_ITEMS = [
  {
    id: "pricing-calculated",
    question: "How is pricing calculated?",
    answer:
      "For hourly work, you pay $42/hour for the time spent on your task. For fixed projects, I review your requirements first and share a clear quote based on scope, complexity, and timeline — so you know the cost before work begins.",
  },
  {
    id: "hourly-work",
    question: "Do you work hourly?",
    answer:
      "Yes. Hourly support at $42/hour is ideal for small changes, bug fixes, quick improvements, and ongoing help on web, Java, or WordPress projects. You book the hours you need, and I keep you updated as work progresses.",
  },
  {
    id: "request-changes",
    question: "Can I request changes?",
    answer:
      "Absolutely. Small adjustments within the agreed scope are included. If you want to add new features or expand the project, we discuss it first and agree on any updated timeline or cost.",
  },
  {
    id: "payments",
    question: "How do payments work?",
    answer:
      "Hourly work is invoiced after the agreed session or billing period. Fixed projects typically use a simple milestone structure — often a deposit to start and the balance on delivery. All terms are confirmed in writing before work begins.",
  },
  {
    id: "nda",
    question: "Do you sign NDA?",
    answer:
      "Yes. I treat your business data and files with confidentiality. An NDA can be signed before we discuss sensitive details or access your systems.",
  },
  {
    id: "maintain-existing",
    question: "Can you maintain existing projects?",
    answer:
      "Yes. I regularly help clients improve, fix, and extend existing websites, Java backends, and WordPress sites — even if someone else built them originally.",
  },
  {
    id: "project-duration",
    question: "How long does a project take?",
    answer:
      "It depends on the scope. Small tasks may take a few days. A standard website often takes 3–6 weeks. Larger web apps or Java backends can take 8–12+ weeks. You receive a realistic timeline during the free consultation.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  const panelId = `${item.id}-panel`;
  const buttonId = `${item.id}-button`;

  return (
    <div className="faq-item" data-open={isOpen ? "true" : "false"}>
      <h3 className="faq-item-heading">
        <button
          type="button"
          id={buttonId}
          className="faq-question"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="faq-question-text">{item.question}</span>
          <span className="faq-icon" aria-hidden="true">
            <span className="faq-icon-bar" />
            <span className="faq-icon-bar faq-icon-bar--v" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="faq-answer"
      >
        <div className="faq-answer-inner">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function PricingFaq() {
  const reducedMotion = usePrefersReducedMotion();
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id ?? null);

  return (
    <AnimatedSection
      id="pricing-faq"
      className="pricing-faq-section"
      aria-labelledby="pricing-faq-heading"
    >
      <Container as="div">
        <motion.header
          className="pricing-section-head"
          variants={fadeUp}
          {...inViewProps(reducedMotion)}
        >
          <span className="pricing-section-badge">FAQ</span>
          <h2 id="pricing-faq-heading" className="pricing-section-heading">
            Common questions about pricing
          </h2>
          <p className="pricing-section-lead">
            Straight answers in plain language — so you can decide with confidence.
          </p>
        </motion.header>

        <div className="pricing-faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="pricing-faq-item-wrap"
              variants={fadeUp}
              initial={reducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-40px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <FaqItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
