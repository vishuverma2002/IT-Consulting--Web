import CaseStudiesPageContent from "@/modules/marketing/CaseStudiesPageContent";

export const metadata = {
  title: "Case Studies",
  description:
    "Real business outcomes from custom websites, enterprise backends, and WordPress platforms — faster growth, fewer manual headaches, and systems that stay online when it matters.",
};

export default function CaseStudiesPage() {
  return (
    <div data-page="case-studies">
      <CaseStudiesPageContent />
    </div>
  );
}
