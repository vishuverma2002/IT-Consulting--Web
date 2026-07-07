"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { coreServices } from "@/config/services";

export default function ServicesIndexContent() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setHeroReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div data-component="services-index" data-hero-ready={heroReady ? "true" : "false"}>
      <section className="services-index-hero" aria-labelledby="services-index-heading">
        <Container as="div">
          <p className="services-index-eyebrow" data-hero-item style={{ "--hero-i": 0 }}>
            Our Services
          </p>
          <h1 id="services-index-heading" data-hero-item style={{ "--hero-i": 1 }}>
            Expert engineering for every stage of your business
          </h1>
          <p className="services-index-lead" data-hero-item style={{ "--hero-i": 2 }}>
            From beautiful websites to bulletproof backends — we build systems that
            help you grow, explained in plain language you can actually understand.
          </p>
        </Container>
      </section>

      <AnimatedSection
        className="services-index-grid-section"
        aria-label="Service offerings"
      >
        <Container as="div">
          <ul className="services-index-grid">
            {coreServices.map((service, index) => (
              <li key={service.slug} data-animate-item style={{ "--reveal-i": index }}>
                <Link href={`/services/${service.slug}`} className="services-index-card">
                  <h2>{service.title}</h2>
                  <p>{service.menuDescription}</p>
                  <span className="services-index-card-link">
                    Learn more <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="services-index-cta"
            data-animate-item
            style={{ "--reveal-i": coreServices.length }}
          >
            <Button as={Link} href="/contact" variant="primary">
              Get a Free Consultation
            </Button>
          </div>
        </Container>
      </AnimatedSection>
    </div>
  );
}
