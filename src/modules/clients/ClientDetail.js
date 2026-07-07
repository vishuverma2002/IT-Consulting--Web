import { Card, CardHeader, CardBody, Badge } from "@/components/ui";
import PageHeader from "@/components/layout/PageHeader";

// ClientDetail: single-client view rendered by /dashboard/clients/[clientId].
// LAYOUT DECISION: PageHeader (name + status) over a grid of detail cards
// (overview, contacts, engagements). Designed for the dynamic route's params.
// DATA FLOW: receives a resolved `client` object from the page.

export default function ClientDetail({ client }) {
  const data = client ?? { name: "Client", industry: "—", status: "prospect", primaryContact: "—" };

  return (
    <div data-component="client-detail">
      <PageHeader
        title={data.name}
        description={data.industry}
        actions={<Badge tone="info">{data.status}</Badge>}
      />
      <div data-slot="client-detail-grid">
        <Card>
          <CardHeader><h3>Overview</h3></CardHeader>
          <CardBody>
            <p>Primary contact: {data.primaryContact}</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader><h3>Engagements</h3></CardHeader>
          <CardBody>
            <p>Engagement history placeholder.</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
