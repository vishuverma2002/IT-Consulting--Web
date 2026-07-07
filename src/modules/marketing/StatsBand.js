"use client";

import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

// StatsBand: solid accent-colored proof band placed below ProvenResultsSection.
// LAYOUT DECISION: a full-width branded strip with four evenly divided columns
// (value + label + supporting detail).

const STATS = [
  {
    id: "projects",
    value: "500+",
    label: "Projects Delivered",
    detail: "Excel, Access, integrations",
  },
  {
    id: "experience",
    value: "14+",
    label: "Years Experience",
    detail: "since 2010",
  },
  {
    id: "clients",
    value: "Global",
    label: "Clients Served",
    detail: "US, UK, Canada",
  },
  {
    id: "expertise",
    value: "Business",
    label: "Automation Experts",
    detail: "operations & finance teams",
  },
];

export default function StatsBand({ stats = STATS }) {
  return (
    <AnimatedSection data-component="stats-band" aria-label="Company results at a glance">
      <Container as="div">
        <ul data-slot="stats-band-row">
          {stats.map((stat, index) => (
            <li
              key={stat.id}
              data-slot="stats-band-item"
              data-animate-item=""
              style={{ "--reveal-i": index }}
            >
              <p data-slot="stats-band-value">{stat.value}</p>
              <p data-slot="stats-band-label">{stat.label}</p>
              <p data-slot="stats-band-detail">{stat.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
    </AnimatedSection>
  );
}
