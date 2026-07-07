"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import AboutHeroStyles from "@/modules/marketing/AboutHeroStyles";
import ConsultancyFeaturesSection from "@/modules/marketing/ConsultancyFeaturesSection";
import WorkShowcaseSection from "@/modules/marketing/WorkShowcaseSection";
import {
  TOOLS_FEATURES,
  TOOLS_FEATURES_SECTION,
} from "@/config/workShowcase";

export default function ToolsPageContent() {
  return (
    <div data-page="tools" data-component="tools-page">
      <AboutHeroStyles />

      <section
        data-component="about-hero"
        data-hero-layout="simple"
        data-hero-bg="outcomes"
        aria-labelledby="tools-hero-heading"
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
                  <span className="hero-badge">Web Development Tools</span>

                  <h1 id="tools-hero-heading">
                    See what we can build for your business.
                  </h1>

                  <p className="hero-sub">
                    Browse real examples of dashboards, customer tools, order panels,
                    login pages, and blogs. Every project is custom-built to help you
                    grow — not copied from a template.
                  </p>

                  <div className="hero-cta">
                    <Button as={Link} href="/contact" variant="primary">
                      Book a Consultation
                    </Button>
                    <Button as={Link} href="/services/web-development" variant="secondary">
                      View full service page
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <WorkShowcaseSection />

      <ConsultancyFeaturesSection
        featuresSection={TOOLS_FEATURES_SECTION}
        features={TOOLS_FEATURES}
        slug="tools"
        headingId="tools-features-heading"
      />
    </div>
  );
}
