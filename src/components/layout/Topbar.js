import Avatar from "@/components/ui/Avatar";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

// Topbar: the dashboard's contextual top bar.
// LAYOUT DECISION: pairs with Sidebar to form the classic two-axis app shell.
// Holds breadcrumbs/contextual title on the left and user/account controls on the
// right. Kept separate from Sidebar so each can evolve independently.
// STYLING LATER: sticky top, subtle border, and responsive hamburger trigger that
// toggles the Sidebar on mobile.

export default function Topbar() {
  return (
    <header data-component="dashboard-topbar">
      <div data-slot="topbar-context">
        <Breadcrumbs />
      </div>
      <div data-slot="topbar-actions">
        {/* Placeholder controls: search, notifications, account menu */}
        <button type="button" aria-label="Search">
          Search
        </button>
        <button type="button" aria-label="Notifications">
          Notifications
        </button>
        <Avatar name="Consultant" />
      </div>
    </header>
  );
}
