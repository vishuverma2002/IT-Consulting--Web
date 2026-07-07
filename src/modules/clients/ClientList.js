import Link from "next/link";
import { Table, Badge } from "@/components/ui";
import EmptyState from "@/components/feedback/EmptyState";

// ClientList: tabular list of clients.
// REUSE NOTE: composes the shared <Table> primitive and maps client.status to a
// <Badge> tone. `renderCell` keeps cell rendering declarative.
// DATA FLOW: pure presentational — receives `clients`, renders rows, links each to
// its detail route /dashboard/clients/[clientId].

const COLUMNS = [
  { key: "name", label: "Client" },
  { key: "industry", label: "Industry" },
  { key: "status", label: "Status" },
  { key: "primaryContact", label: "Primary contact" },
];

const STATUS_TONE = { active: "success", prospect: "info", archived: "neutral" };

export default function ClientList({ clients = [] }) {
  if (clients.length === 0) {
    return <EmptyState title="No clients yet" description="Add your first client to get started." />;
  }

  return (
    <Table
      columns={COLUMNS}
      rows={clients}
      renderCell={(row, col) => {
        if (col.key === "name") {
          return <Link href={`/dashboard/clients/${row.id}`}>{row.name}</Link>;
        }
        if (col.key === "status") {
          return <Badge tone={STATUS_TONE[row.status] ?? "neutral"}>{row.status}</Badge>;
        }
        return row[col.key];
      }}
    />
  );
}
