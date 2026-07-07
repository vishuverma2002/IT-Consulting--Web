// Stat: single metric display (big value + label, optional delta).
// REUSABLE: powers both the marketing MetricsSection ("500+ projects") and the
// dashboard AnalyticsSection KPI row. Same primitive, two contexts.

export default function Stat({ value, label, deltaPct }) {
  return (
    <div data-component="stat">
      <p data-slot="stat-value">{value}</p>
      <p data-slot="stat-label">{label}</p>
      {typeof deltaPct === "number" ? (
        <p data-slot="stat-delta" data-direction={deltaPct >= 0 ? "up" : "down"}>
          {deltaPct >= 0 ? "+" : ""}
          {deltaPct}%
        </p>
      ) : null}
    </div>
  );
}
