import ServicesIndexContent from "@/modules/marketing/ServicesIndexContent";

export const metadata = {
  title: "Services",
  description:
    "Web development, Java backend engineering, and WordPress solutions — built for businesses that want results, not jargon.",
};

export default function ServicesPage() {
  return (
    <div data-page="services">
      <ServicesIndexContent />
    </div>
  );
}
