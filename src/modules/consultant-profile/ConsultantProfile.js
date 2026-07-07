import { Card, CardHeader, CardBody, Avatar, Badge } from "@/components/ui";

// ConsultantProfile: identity + expertise summary for the logged-in consultant.
// LAYOUT DECISION: a header band (avatar + name + title) over a two-column body
// (bio + expertise tags). Built as a self-contained feature module so it can drop
// into the profile page OR a public consultant page later.
// DATA FLOW: receives a `consultant` object (typedef in @/types). No fetching here.

export default function ConsultantProfile({ consultant }) {
  // Defensive default keeps the skeleton renderable with no data wired up yet.
  const data = consultant ?? {
    name: "Unnamed Consultant",
    title: "Automation & Reporting Consultant",
    bio: "Bio placeholder — describe focus areas and engagement style.",
    expertise: ["Reporting", "Integrations", "Dashboards"],
  };

  return (
    <Card>
      <CardHeader>
        <div data-slot="profile-identity">
          <Avatar name={data.name} src={data.avatarUrl} />
          <div>
            <h2>{data.name}</h2>
            <p data-slot="profile-title">{data.title}</p>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div data-slot="profile-body">
          <p>{data.bio}</p>
          <ul data-slot="profile-expertise" aria-label="Expertise">
            {data.expertise.map((skill) => (
              <li key={skill}>
                <Badge>{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </CardBody>
    </Card>
  );
}
