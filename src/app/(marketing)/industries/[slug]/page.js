import { notFound } from "next/navigation";
import { getIndustryBySlug, industries } from "@/config/footerPages";
import TopicPageContent from "@/modules/marketing/TopicPageContent";

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getIndustryBySlug(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.menuDescription,
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const page = getIndustryBySlug(slug);
  if (!page) notFound();

  return (
    <div data-page={`industry-${slug}`}>
      <TopicPageContent page={page} />
    </div>
  );
}
