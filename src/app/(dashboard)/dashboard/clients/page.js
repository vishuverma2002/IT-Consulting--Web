import ClientSection from "@/modules/clients/ClientSection";

export const metadata = { title: "Clients" };

export default function ClientsPage() {
  // clients would be fetched from services/clientService and passed down.
  const clients = [];
  return <ClientSection clients={clients} />;
}
