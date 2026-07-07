import { architectureGuide } from "@/config/footerPages";
import TopicPageContent from "@/modules/marketing/TopicPageContent";

export const metadata = {
  title: architectureGuide.title,
  description: architectureGuide.menuDescription,
};

export default function ArchitectureGuidePage() {
  return (
    <div data-page="resources-architecture">
      <TopicPageContent page={architectureGuide} />
    </div>
  );
}
