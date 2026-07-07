import SidebarNav from "@/components/navigation/SidebarNav";
import { dashboardNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

// Sidebar: the dashboard's primary vertical navigation rail.
// LAYOUT DECISION: a fixed-width left column that owns app-level navigation,
// freeing the main content area to scroll independently. This is the canonical
// "app shell" pattern for data-dense consultant dashboards.
// REUSABLE: consumed only by DashboardShell. Navigation items come from config,
// so the component itself never changes when routes are added.
// STYLING LATER: fixed width, full-height, collapse-to-icons behavior on mobile.

export default function Sidebar() {
  return (
    <aside data-component="dashboard-sidebar" aria-label="Dashboard navigation">
      <div data-slot="sidebar-brand">{siteConfig.name}</div>
      <SidebarNav items={dashboardNav} />
    </aside>
  );
}
