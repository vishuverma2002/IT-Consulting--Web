"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import {
  CASE_STUDIES,
  CASE_STUDIES_CTA,
  CASE_STUDIES_HERO,
  CASE_STUDY_FILTERS,
} from "@/config/caseStudies";

const EASE = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: EASE,
    },
  }),
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.98,
    transition: { duration: 0.28, ease: EASE },
  },
};

const filteredCaseVariants = {
  hidden: { opacity: 0, x: -36, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
  exit: {
    opacity: 0,
    x: -24,
    scale: 0.97,
    transition: { duration: 0.3, ease: EASE },
  },
};

const filteredTestimonialVariants = {
  hidden: { opacity: 0, x: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, delay: 0.08, ease: EASE },
  },
  exit: {
    opacity: 0,
    x: 24,
    scale: 0.97,
    transition: { duration: 0.3, ease: EASE },
  },
};

const innerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
};

const innerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: EASE },
  },
};

function FilterPills({ activeFilter, onChange, reducedMotion }) {
  return (
    <div className="cs-filters" role="tablist" aria-label="Filter case studies">
      {CASE_STUDY_FILTERS.map((filter) => {
        const isActive = activeFilter === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`cs-filter-pill${isActive ? " is-active" : ""}`}
            onClick={() => onChange(filter.id)}
          >
            {isActive && (
              <motion.span
                layoutId="cs-filter-glow"
                className="cs-filter-pill-glow"
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 420, damping: 32 }
                }
                aria-hidden="true"
              />
            )}
            <span className="cs-filter-pill-label">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function CaseStudyCard({ study, index, reducedMotion, isFilteredView }) {
  const cardRef = useRef(null);
  const variants = isFilteredView ? filteredCaseVariants : cardVariants;

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <motion.article
      ref={cardRef}
      className="cs-card"
      layout={!reducedMotion}
      variants={variants}
      initial={reducedMotion ? false : "hidden"}
      animate="visible"
      exit="exit"
      custom={index}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="cs-card-inner"
        variants={reducedMotion ? undefined : innerStagger}
        initial={reducedMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.div className="cs-card-top" variants={reducedMotion ? undefined : innerItem}>
          <span className="cs-card-category">{study.categoryBadge}</span>
          <ul className="cs-card-tags" aria-label="Technologies used">
            {study.techTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </motion.div>

        <motion.h2 className="cs-card-title" variants={reducedMotion ? undefined : innerItem}>
          {study.title}
        </motion.h2>

        <motion.p className="cs-card-benefit" variants={reducedMotion ? undefined : innerItem}>
          <span className="cs-card-benefit-label">Client benefit</span>
          {study.clientBenefit}
        </motion.p>

        <motion.div className="cs-card-body" variants={reducedMotion ? undefined : innerItem}>
          <div className="cs-card-block">
            <h3 className="cs-card-block-label">The Challenge</h3>
            <p>{study.challenge}</p>
          </div>
          <div className="cs-card-block">
            <h3 className="cs-card-block-label">Our Solution</h3>
            <p>{study.solution}</p>
          </div>
        </motion.div>

        <motion.div
          className="cs-card-metrics"
          aria-label="Project results"
          variants={reducedMotion ? undefined : innerItem}
        >
          {study.metrics.map((metric, metricIndex) => (
            <motion.div
              key={metric.label}
              className="cs-metric"
              variants={
                reducedMotion
                  ? undefined
                  : {
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: 0.35 + metricIndex * 0.07,
                          duration: 0.38,
                          ease: EASE,
                        },
                      },
                    }
              }
            >
              <span className="cs-metric-value">{metric.value}</span>
              <span className="cs-metric-label">{metric.label}</span>
              <span className="cs-metric-caption">{metric.caption}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.5l2.86 5.79 6.39.93-4.62 4.51 1.09 6.36L12 17.77l-5.72 3.01 1.09-6.36L2.75 9.22l6.39-.93L12 2.5z" />
  </svg>
);

const TagIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

function GoldenStars({ reducedMotion }) {
  return (
    <div className="cs-testimonial-stars" role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.span
          key={index}
          className="cs-testimonial-star"
          style={{ "--star-i": index }}
          initial={
            reducedMotion
              ? false
              : { opacity: 0, scale: 0, rotate: -30 }
          }
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  delay: 0.28 + index * 0.08,
                  duration: 0.45,
                  ease: EASE,
                  type: "spring",
                  stiffness: 480,
                  damping: 14,
                }
          }
        >
          <StarIcon />
        </motion.span>
      ))}
    </div>
  );
}

function ClientTestimonialCard({ testimonial, filterId, reducedMotion }) {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <motion.aside
      ref={cardRef}
      key={`testimonial-${filterId}`}
      className="cs-testimonial"
      layout={!reducedMotion}
      variants={filteredTestimonialVariants}
      initial={reducedMotion ? false : "hidden"}
      animate="visible"
      exit="exit"
      aria-label="Client feedback"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="cs-testimonial-inner"
        variants={reducedMotion ? undefined : innerStagger}
        initial={reducedMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.div className="cs-testimonial-tag" variants={reducedMotion ? undefined : innerItem}>
          <TagIcon />
          <span>{testimonial.tag}</span>
        </motion.div>

        <motion.div variants={reducedMotion ? undefined : innerItem}>
          <GoldenStars reducedMotion={reducedMotion} />
        </motion.div>

        <motion.h3 className="cs-testimonial-headline" variants={reducedMotion ? undefined : innerItem}>
          {testimonial.headline}
        </motion.h3>

        <motion.blockquote className="cs-testimonial-quote" variants={reducedMotion ? undefined : innerItem}>
          <p>{testimonial.quote}</p>
        </motion.blockquote>

        <motion.div className="cs-testimonial-divider" variants={reducedMotion ? undefined : innerItem} role="separator" />

        <motion.footer className="cs-testimonial-author" variants={reducedMotion ? undefined : innerItem}>
          <span className="cs-testimonial-avatar" aria-hidden="true">
            {testimonial.initials}
          </span>
          <div className="cs-testimonial-author-info">
            <strong>{testimonial.authorName}</strong>
            <span>{testimonial.authorRole}</span>
          </div>
        </motion.footer>
      </motion.div>
    </motion.aside>
  );
}

export default function CaseStudiesPageContent() {
  const [activeFilter, setActiveFilter] = useState("all");
  const reducedMotion = useReducedMotion();
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  const filteredStudies =
    activeFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.filter === activeFilter);

  const isFilteredView = activeFilter !== "all";
  const activeStudy = isFilteredView ? filteredStudies[0] : null;

  return (
    <div data-component="case-studies-page">
      <section className="cs-hero" aria-labelledby="cs-hero-heading">
        <div className="cs-hero-bg" aria-hidden="true">
          <span className="cs-hero-grid" />
          <span className="cs-hero-orb cs-hero-orb--1" />
          <span className="cs-hero-orb cs-hero-orb--2" />
        </div>

        <Container as="div" className="cs-hero-inner">
          <motion.span
            className="cs-hero-badge"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {CASE_STUDIES_HERO.badge}
          </motion.span>

          <motion.h1
            id="cs-hero-heading"
            className="cs-hero-heading"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          >
            {CASE_STUDIES_HERO.heading}
          </motion.h1>

          <motion.p
            className="cs-hero-lead"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: EASE }}
          >
            {CASE_STUDIES_HERO.lead}
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: EASE }}
          >
            <FilterPills
              activeFilter={activeFilter}
              onChange={setActiveFilter}
              reducedMotion={reducedMotion}
            />
          </motion.div>
        </Container>
      </section>

      <section
        ref={gridRef}
        className="cs-grid-section"
        aria-label="Case study projects"
        data-visible={gridInView ? "true" : "false"}
      >
        <Container as="div">
          <div className={`cs-card-grid-wrap${isFilteredView ? " cs-card-grid-wrap--filtered" : ""}`}>
            <motion.div
              key={activeFilter}
              className={`cs-card-grid${isFilteredView ? " cs-card-grid--filtered" : ""}`}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <AnimatePresence mode="popLayout">
                {filteredStudies.map((study, index) => (
                  <CaseStudyCard
                    key={study.id}
                    study={study}
                    index={index}
                    reducedMotion={reducedMotion}
                    isFilteredView={isFilteredView}
                  />
                ))}
                {isFilteredView && activeStudy?.testimonial ? (
                  <ClientTestimonialCard
                    testimonial={activeStudy.testimonial}
                    filterId={activeFilter}
                    reducedMotion={reducedMotion}
                  />
                ) : null}
              </AnimatePresence>
            </motion.div>
          </div>

          <motion.div
            className="cs-services-banner"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.55, delay: 0.35, ease: EASE }}
          >
            <div className="cs-services-banner-copy">
              <h2 className="cs-services-banner-title">
                {CASE_STUDIES_CTA.servicesTitle}
              </h2>
              <p className="cs-services-banner-lead">
                {CASE_STUDIES_CTA.servicesLead}
              </p>
            </div>
            <Button as={Link} href="/services" variant="primary" className="cs-services-banner-cta">
              {CASE_STUDIES_CTA.servicesButton}
              <span className="cs-services-banner-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
