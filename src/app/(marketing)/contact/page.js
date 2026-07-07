import ContactPageContent from "@/modules/marketing/ContactPageContent";

export const metadata = {
  title: "Contact",
  description:
    "Book a free project assessment. Tell us your goals in plain language — we reply within one business hour with a clear plan and honest pricing.",
};

export default function ContactPage() {
  return (
    <div data-page="contact">
      <ContactPageContent />
    </div>
  );
}
