import HeroSection from "@/modules/marketing/HeroSection";
import TrustedCompaniesSection from "@/modules/marketing/TrustedCompaniesSection";
import ProvenResultsSection from "@/modules/marketing/ProvenResultsSection";
import StatsBand from "@/modules/marketing/StatsBand";
import GrowthEngineSection from "@/modules/marketing/GrowthEngineSection";
import ProblemsGrid from "@/modules/marketing/ProblemsGrid";
import SolutionsGrid from "@/modules/marketing/SolutionsGrid";
import TechnologiesSection from "@/modules/marketing/TechnologiesSection";
import TransformationOutcomes from "@/modules/marketing/TransformationOutcomes";
import TestimonialsCarousel from "@/modules/marketing/TestimonialsCarousel";
import ProcessWorkflowSection from "@/modules/marketing/ProcessWorkflowSection";
import FaqSection from "@/modules/marketing/FaqSection";

// Marketing home page ("/").
// COMPOSITION DECISION: the page is a pure ASSEMBLY of feature modules in a
// deliberate narrative order (hook -> what -> proof -> problem -> outcome ->
// process -> objections -> social proof -> convert). The page holds NO markup of
// its own beyond ordering, which keeps each section independently editable.
// Server Component by default — ideal for static, content-driven marketing pages.

export default function HomePage() {
  return (
    <div data-page="home">
      <HeroSection />
      <TrustedCompaniesSection />
      <ProvenResultsSection />
      <StatsBand />
      <GrowthEngineSection />
      <ProblemsGrid />
      <SolutionsGrid />
      <TechnologiesSection />
      <TransformationOutcomes />
      <TestimonialsCarousel />
      <FaqSection />
      <ProcessWorkflowSection />
    </div>
  );
}
