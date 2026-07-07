import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

// DashboardShell: the composable shell for the AUTHENTICATED app.
//
// LAYOUT DECISION: two-axis "app shell" -> persistent Sidebar (vertical nav) +
// Topbar (horizontal context) wrapping a scrollable content region. Because this
// shell is rendered by `app/(dashboard)/dashboard/layout.js`, the Sidebar/Topbar
// PRESERVE STATE across route changes (Next.js layouts do not remount), which is
// exactly what a dashboard needs (no nav flash between pages).
//
// STYLING LATER: CSS grid with a fixed sidebar column and a flexible content
// column; the content region gets independent overflow scrolling.

export default function DashboardShell({ children }) {
  return (
    <div data-shell="dashboard">
      <Sidebar />
      <div data-slot="dashboard-main">
        <Topbar />
        {/* Content region: each page renders its own PageHeader + sections here */}
        <main data-slot="dashboard-content">{children}</main>
      </div>
    </div>
  );
}
