"use client";

import Container from "@/components/layout/Container";
import { useReveal } from "@/hooks/useReveal";

// Section: vertical-rhythm primitive for marketing pages.
// LAYOUT DECISION: marketing pages are a vertical STACK of full-width bands, each
// with an optional eyebrow/title/lead intro. Centralizing that pattern here means
// every section has identical vertical spacing and a consistent header treatment.
// STYLING LATER: this owns the vertical padding scale between page bands.

export default function Section({ eyebrow, title, lead, children, animate = false }) {
  const [revealRef, visible] = useReveal(0.12);

  let revealIndex = 0;
  const nextRevealStyle = () => ({ "--reveal-i": revealIndex++ });

  const headItems = [];
  if (eyebrow) {
    headItems.push(
      <p
        key="eyebrow"
        data-slot="section-eyebrow"
        {...(animate ? { "data-animate-item": "", style: nextRevealStyle() } : {})}
      >
        {eyebrow}
      </p>,
    );
  }
  if (title) {
    headItems.push(
      <h2 key="title" {...(animate ? { "data-animate-item": "", style: nextRevealStyle() } : {})}>
        {title}
      </h2>,
    );
  }
  if (lead) {
    headItems.push(
      <p
        key="lead"
        data-slot="section-lead"
        {...(animate ? { "data-animate-item": "", style: nextRevealStyle() } : {})}
      >
        {lead}
      </p>,
    );
  }

  return (
    <section
      ref={animate ? revealRef : undefined}
      data-component="section"
      {...(animate
        ? {
            "data-animate-section": "",
            "data-visible": visible ? "true" : "false",
          }
        : {})}
    >
      <Container as="div">
        {headItems.length > 0 ? <div data-slot="section-head">{headItems}</div> : null}
        {animate ? (
          <div data-animate-item style={nextRevealStyle()}>
            {children}
          </div>
        ) : (
          children
        )}
      </Container>
    </section>
  );
}
