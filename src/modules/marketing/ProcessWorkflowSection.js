"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";

// ProcessWorkflowSection: premium "Our Process" band placed directly below the
// testimonials proof section and above the FAQ. It clones the inline numbered-
// card layout (blue numerical badges + connecting rail) and maps it to our web
// development lifecycle.
// MOTION: reveal is gated on a single IntersectionObserver (data-visible) with a
// per-card stagger driven by the --step-i custom property. All motion collapses
// to final state under prefers-reduced-motion.

const STEPS = [
  {
    id: "assessment",
    title: "Tech Assessment & Consulting",
    description:
      "We audit your existing architecture, understand bottlenecks, analyze requirements, and consult on the right tech stack for your business growth.",
  },
  {
    id: "architecture",
    title: "Architecture & Solution Design",
    description:
      "We design production-ready secure wireframes, reliable database architectures, and secure API data flows tailored to your workflow.",
  },
  {
    id: "engineering",
    title: "Full-Stack Engineering",
    description:
      "Our team engineers responsive React/modern frontends, highly scalable Java Spring Boot backends, or premium business-driven WordPress systems.",
  },
  {
    id: "qa-deployment",
    title: "Rigorous QA & Cloud Deployment",
    description:
      "We execute end-to-end load testing, security vulnerability checks, and seamlessly deploy optimized applications to production cloud environments.",
  },
  {
    id: "support",
    title: "Managed Support & Scaling",
    description:
      "We ensure 24/7 technical stability with regular security patching, continuous performance optimization, and scale architecture as user volume grows.",
  },
];

function ProcessStepCard({ step, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <li
      ref={cardRef}
      className="process-card"
      style={{ "--step-i": index }}
      onMouseMove={handleMouseMove}
    >
      <div className="process-card-inner">
        <span className="process-num" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="process-card-title">{step.title}</h3>
        <p className="process-card-desc">{step.description}</p>
      </div>
    </li>
  );
}

export default function ProcessWorkflowSection({ steps = STEPS }) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      data-component="process"
      data-visible={active ? "true" : "false"}
      aria-labelledby="process-heading"
    >
      <div className="process-bg" aria-hidden="true">
        <span className="process-grid-texture" />
        <span className="process-orb process-orb--1" />
        <span className="process-orb process-orb--2" />
        <span className="process-orb process-orb--3" />
      </div>

      <Container as="div">
        <header className="process-head">
          <span className="process-heading-glow" aria-hidden="true" />
          <span className="process-badge">How We Work</span>
          <h2 id="process-heading" className="process-heading">
            A clear path from complex tech challenges to scalable digital
            solutions
          </h2>
          <p className="process-lead">
            We don&apos;t just write code. We analyze your business architecture,
            consult on the best engineering practices, and deliver
            high-performing web systems.
          </p>
        </header>

        <ol className="process-track">
          {steps.map((step, index) => (
            <ProcessStepCard key={step.id} step={step} index={index} />
          ))}
        </ol>
      </Container>
    </section>
  );
}
