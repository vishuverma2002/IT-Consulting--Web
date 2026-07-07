// Accordion: disclosure list built on native <details>/<summary>.
// LAYOUT DECISION: using native elements gives us open/close behavior with ZERO
// JavaScript and full accessibility for free. Perfect for the marketing FAQ.
// REUSABLE: any "list of expandable items" (FAQ, settings groups).

export default function Accordion({ items = [] }) {
  return (
    <div data-component="accordion">
      {items.map((item) => (
        <details key={item.id} data-slot="accordion-item">
          <summary>{item.question}</summary>
          <div data-slot="accordion-panel">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
