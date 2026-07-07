import { Section } from "@/components/ui";

// ClientLogos: social-proof logo strip ("teams we've built systems for").
// LAYOUT DECISION: a single horizontal row/marquee of placeholder logo cells.
// REUSABLE: logos passed as data; the visual band stays generic.
// STYLING LATER: this is the natural place for a marquee/auto-scroll animation.

const DEFAULT_LOGOS = ["Northwind", "Globex", "Initech", "Umbrella", "Soylent", "Hooli"];

export default function ClientLogos({ logos = DEFAULT_LOGOS }) {
  return (
    <Section title="Teams we've built systems for">
      <ul data-slot="logo-strip" aria-label="Client logos">
        {logos.map((logo) => (
          <li key={logo} data-slot="logo-cell">
            {logo}
          </li>
        ))}
      </ul>
    </Section>
  );
}
