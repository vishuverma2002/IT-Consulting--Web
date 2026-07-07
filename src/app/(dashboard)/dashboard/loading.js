import LoadingState from "@/components/feedback/LoadingState";

// loading.js: automatic Suspense boundary for the dashboard segment.
// Next.js shows this instantly during server rendering/navigation so the shell
// (Sidebar/Topbar) stays interactive while page data streams in.
export default function DashboardLoading() {
  return <LoadingState label="Loading dashboard…" />;
}
