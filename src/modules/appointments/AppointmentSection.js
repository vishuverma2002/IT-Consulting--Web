import { Table, Badge, Button } from "@/components/ui";
import PageHeader from "@/components/layout/PageHeader";
import EmptyState from "@/components/feedback/EmptyState";
import { formatDate, formatTime } from "@/utils/formatters";
const COLUMNS = [
  { key: "title", label: "Title" },
  { key: "startsAt", label: "When" },
  { key: "durationMinutes", label: "Duration" },
  { key: "status", label: "Status" },
];
const STATUS_TONE = { scheduled: "info", completed: "success", cancelled: "neutral" };
export default function AppointmentSection({ appointments = [] }) {
  return (
    <div data-component="appointment-section">
      <PageHeader
        title="Appointments"
        description="Upcoming and past consulting sessions."
        actions={<Button variant="primary">New appointment</Button>}
      />

      {appointments.length === 0 ? (
        <EmptyState title="No appointments" description="Schedule a session to see it here." />
      ) : (
        <Table
          columns={COLUMNS}
          rows={appointments}
          renderCell={(row, col) => {
            if (col.key === "startsAt") {
              return `${formatDate(row.startsAt)} · ${formatTime(row.startsAt)}`;
            }
            if (col.key === "durationMinutes") {
              return `${row.durationMinutes} min`;
            }
            if (col.key === "status") {
              return <Badge tone={STATUS_TONE[row.status] ?? "neutral"}>{row.status}</Badge>;
            }
            return row[col.key];
          }}
        />
      )}
    </div>
  );
}
