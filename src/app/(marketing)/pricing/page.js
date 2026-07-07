import PricingSection from "@/modules/marketing/PricingSection";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for web development, Java backend engineering, and WordPress — $42/hr hourly support or fixed-price projects.",
};

export default function PricingPage() {
  return (
    <div data-page="pricing">
      <PricingSection />
    </div>
  );
}
