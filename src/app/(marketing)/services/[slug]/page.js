import { notFound } from "next/navigation";
import { coreServices, getServiceBySlug } from "@/config/services";
import ServicePageContent from "@/modules/marketing/ServicePageContent";

export function generateStaticParams() {
  return coreServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.menuDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div data-page={`service-${slug}`}>
      <ServicePageContent service={service} />
    </div>
  );
}
