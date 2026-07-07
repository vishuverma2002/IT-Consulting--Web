import ConsultantProfile from "@/modules/consultant-profile/ConsultantProfile";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = { title: "Profile" };

export default function ProfilePage() {
  // Consultant data would be loaded here from services/consultantService.
  return (
    <>
      <PageHeader title="Profile" description="Your public consultant profile." />
      <ConsultantProfile consultant={null} />
    </>
  );
}
