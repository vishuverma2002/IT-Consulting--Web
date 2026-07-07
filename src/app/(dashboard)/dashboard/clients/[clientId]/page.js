import ClientDetail from "@/modules/clients/ClientDetail";

// /dashboard/clients/[clientId] — dynamic client detail route.
// `params` is awaited (Next.js 16). The resolved id would drive a service fetch.
export default async function ClientDetailPage({ params }) {
  const { clientId } = await params;
  // const client = await clientService.getById(clientId);
  return <ClientDetail client={{ id: clientId, name: `Client ${clientId}`, industry: "—", status: "active", primaryContact: "—" }} />;
}
