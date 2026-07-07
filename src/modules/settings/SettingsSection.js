import { Card, CardHeader, CardBody, Button } from "@/components/ui";
import PageHeader from "@/components/layout/PageHeader";

// SettingsSection: grouped account/preferences forms for /dashboard/settings.
// LAYOUT DECISION: a vertical stack of titled Card groups (Profile, Notifications,
// Security). Each group is a placeholder <form> with no submit logic — forms are a
// CLIENT concern and would each become their own client component with local state
// (state placement: keep form state co-located in each form, not global).

const GROUPS = [
  { id: "profile", title: "Profile", description: "Name, title, and public bio." },
  { id: "notifications", title: "Notifications", description: "Email and in-app alerts." },
  { id: "security", title: "Security", description: "Password and sessions." },
];

export default function SettingsSection() {
  return (
    <div data-component="settings-section">
      <PageHeader title="Settings" description="Manage your account and preferences." />

      <div data-slot="settings-groups">
        {GROUPS.map((group) => (
          <Card key={group.id}>
            <CardHeader>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </CardHeader>
            <CardBody>
              {/* Placeholder form — fields + submit handler added later (client). */}
              <form data-slot="settings-form">
                <p>Form fields placeholder for {group.title}.</p>
                <Button type="submit" variant="primary">Save changes</Button>
              </form>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
