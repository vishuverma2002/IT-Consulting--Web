import { notFound } from "next/navigation";
import { getSolutionBySlug, solutions } from "@/config/footerPages";
import TopicPageContent from "@/modules/marketing/TopicPageContent";

export function generateStaticParams() {
  return solutions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getSolutionBySlug(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.menuDescription,
  };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const page = getSolutionBySlug(slug);
  if (!page) notFound();

  return (
    <div data-page={`solution-${slug}`}>
      <TopicPageContent page={page} />
    </div>
  );
}
