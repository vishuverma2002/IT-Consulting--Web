import AnalyticsSection from "@/modules/analytics/AnalyticsSection";

export const metadata = { title: "Analytics" };

export default function AnalyticsPage() {
  const metrics = [];
  const charts = [];
  return <AnalyticsSection metrics={metrics} charts={charts} />;
}
