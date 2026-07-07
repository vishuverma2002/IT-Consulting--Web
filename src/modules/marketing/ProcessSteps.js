import { Section } from "@/components/ui";

// ProcessSteps: numbered "how we work" timeline.
// LAYOUT DECISION: an ordered list (<ol>) so the sequence is semantic, not just
// visual. Renders as a horizontal stepper on wide screens, vertical on mobile.

const DEFAULT_STEPS = [
  { id: 1, title: "Discovery", description: "Understand workflows, pain points, and success criteria." },
  { id: 2, title: "Solution Design", description: "Define architecture and data flow before any build." },
  { id: 3, title: "Development", description: "Build automation, reporting, and integrations." },
  { id: 4, title: "Deployment", description: "Roll out, train users, validate against real operations." },
  { id: 5, title: "Support", description: "Ongoing fixes, enhancements, and scaling." },
];

export default function ProcessSteps({ steps = DEFAULT_STEPS }) {
  return (
    <Section eyebrow="How we work" title="A clear path from manual work to automated systems">
      <ol data-slot="process-steps">
        {steps.map((step) => (
          <li key={step.id} data-slot="process-step">
            <span data-slot="step-number">{step.id}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
