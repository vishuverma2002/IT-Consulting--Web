import Link from "next/link";
import { Section, Card, CardHeader, CardBody, CardFooter, Badge } from "@/components/ui";
import { CASE_STUDIES } from "@/config/caseStudies";

// CaseStudiesGrid: outcome-led project cards with a headline result metric.
// LAYOUT DECISION: each card leads with the RESULT then context, then a link
// into the case studies page.

export default function CaseStudiesGrid({ items = CASE_STUDIES }) {
  return (
    <Section eyebrow="Case studies" title="Real project outcomes">
      <div data-slot="case-grid">
        {items.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <Badge tone="success">{item.metrics[0].value}</Badge>
            </CardHeader>
            <CardBody>
              <h3>{item.title}</h3>
              <p>{item.teaser}</p>
            </CardBody>
            <CardFooter>
              <Link href="/case-studies">{item.cardCta}</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
