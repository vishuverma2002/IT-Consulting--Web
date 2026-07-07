import { Card, CardHeader, CardBody, Stat } from "@/components/ui";
import PageHeader from "@/components/layout/PageHeader";

// AnalyticsSection: KPI + chart composition for /dashboard/analytics.
// LAYOUT DECISION: a KPI Stat row over a grid of chart placeholders. Chart
// rendering itself is intentionally a <figure> placeholder — chart libraries are a
// later concern and would be wrapped in their own client component.
// REUSE NOTE: reuses the same <Stat> primitive as the marketing MetricsSection.

export default function AnalyticsSection({ metrics = [], charts = [] }) {
  return (
    <div data-component="analytics-section">
      <PageHeader title="Analytics" description="Engagement performance and delivery metrics." />

      <section data-slot="analytics-kpis" aria-label="Key metrics">
        {metrics.map((m) => (
          <Stat key={m.id} value={m.value} label={m.label} deltaPct={m.deltaPct} />
        ))}
      </section>

      <section data-slot="analytics-charts" aria-label="Charts">
        {charts.map((chart) => (
          <Card key={chart.id}>
            <CardHeader><h3>{chart.title}</h3></CardHeader>
            <CardBody>
              {/* STYLING/LIBRARY LATER: mount a chart here (client component). */}
              <figure data-slot="chart-placeholder" aria-label={chart.title} />
            </CardBody>
          </Card>
        ))}
      </section>
    </div>
  );
}
