import ClientList from "@/modules/clients/ClientList";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui";

// ClientSection: the top-level composition for the Clients page.
// ARCHITECTURE DECISION: a "section" module orchestrates smaller presentational
// pieces (PageHeader + ClientList). Pages stay thin by rendering one section.
// DATA FLOW: `clients` arrives from the page (server fetch). Filtering/search state
// would live in a CLIENT child (e.g. a ClientToolbar) — kept out of the page so
// the page can remain a server component.

export default function ClientSection({ clients = [] }) {
  return (
    <div data-component="client-section">
      <PageHeader
        title="Clients"
        description="Accounts, prospects, and engagement status."
        actions={<Button variant="primary">Add client</Button>}
      />
      <ClientList clients={clients} />
    </div>
  );
}
