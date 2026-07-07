import { Card, CardHeader, CardBody, Stat } from "@/components/ui";
import EmptyState from "@/components/feedback/EmptyState";

// DashboardOverview: the landing widget grid for /dashboard.
// LAYOUT DECISION: a KPI stat row across the top, then a responsive grid of
// summary widgets (recent appointments, active clients, etc.). This "summary
// first, detail later" composition is the standard operational-dashboard pattern.
// DATA FLOW: metrics/widgets injected as props by the page (server fetch). This
// module is presentational and stateless.

export default function DashboardOverview({ metrics = [], widgets = [] }) {
  return (
    <div data-component="dashboard-overview">
      <section data-slot="kpi-row" aria-label="Key metrics">
        {metrics.length > 0 ? (
          metrics.map((m) => (
            <Stat key={m.id} value={m.value} label={m.label} deltaPct={m.deltaPct} />
          ))
        ) : (
          <EmptyState title="No metrics yet" description="Connect a data source to populate KPIs." />
        )}
      </section>

      <section data-slot="widget-grid" aria-label="Summary widgets">
        {widgets.map((widget) => (
          <Card key={widget.id}>
            <CardHeader>
              <h3>{widget.title}</h3>
            </CardHeader>
            <CardBody>{widget.content}</CardBody>
          </Card>
        ))}
      </section>
    </div>
  );
}
