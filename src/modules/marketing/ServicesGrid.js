import { Section, Card, CardHeader, CardBody } from "@/components/ui";

// ServicesGrid: "what we build" card grid.
// LAYOUT DECISION: equal-weight Card tiles in a responsive grid. Each tile carries
// a title, short description, and an outcome metric — the same scannable pattern
// the reference site uses for its services overview.
// DATA FLOW: services arrive as a prop (later from a CMS/service). The component
// stays presentational and does no fetching.

const DEFAULT_SERVICES = [
  { id: "reporting", title: "Automated Reporting", description: "Scheduled reports and leadership dashboards without manual assembly.", metric: "Days saved monthly" },
  { id: "workflow", title: "Workflow Automation", description: "Reliable, scheduled workflows that cut repetitive operational work.", metric: "60%+ work cut" },
  { id: "integration", title: "Systems Integration", description: "Connect accounting, CRM, and operations data into one flow.", metric: "One source of truth" },
  { id: "dashboards", title: "Operational Dashboards", description: "Live view of throughput, backlog, and team performance.", metric: "Live KPIs" },
];

export default function ServicesGrid({ services = DEFAULT_SERVICES }) {
  return (
    <Section eyebrow="What we build" title="Services scoped to the work that slows you down">
      <div data-slot="services-grid">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <h3>{service.title}</h3>
            </CardHeader>
            <CardBody>
              <p>{service.description}</p>
              <p data-slot="service-metric">{service.metric}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
}
