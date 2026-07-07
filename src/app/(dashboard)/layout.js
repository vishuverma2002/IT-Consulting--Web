import DashboardShell from "@/layouts/DashboardShell";

// (dashboard) route group layout.
// Wraps every authenticated page in the DashboardShell (Sidebar + Topbar). Because
// this is a Next.js layout, the shell is NOT remounted between dashboard routes —
// navigation state and scroll position in the sidebar persist (no flicker).
// AUTH LATER: this is the natural place to enforce a session guard / redirect to
// /login for unauthenticated users.

export default function DashboardGroupLayout({ children }) {
  return <DashboardShell>{children}</DashboardShell>;
}
