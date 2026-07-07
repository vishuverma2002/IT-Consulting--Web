import DashboardOverview from "@/modules/dashboard/DashboardOverview";

export const metadata = { title: "Dashboard" };

// /dashboard — overview landing.
// DATA FLOW: as a server component, this page is where data would be fetched (via
// services/) and passed DOWN to the presentational DashboardOverview module.
export default function DashboardPage() {
  // Placeholder data shapes; replace with services/analyticsService calls.
  const metrics = [];
  const widgets = [];

  return <DashboardOverview metrics={metrics} widgets={widgets} />;
}
