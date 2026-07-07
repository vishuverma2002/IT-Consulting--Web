import Container from "@/components/layout/Container";
import { clientCompanies } from "@/config/clients";
import LogoMarquee from "@/modules/marketing/LogoMarquee";

const TRUST_STATS = [
  { value: "13+", label: "Active clients" },
  { value: "4", label: "Industries" },
  { value: "500+", label: "Projects delivered" },
];

export default function TrustedCompaniesSection({ companies = clientCompanies }) {
  return (
    <section data-component="trusted-companies" aria-labelledby="trusted-companies-heading">
      <div className="trusted-companies-bg" aria-hidden="true">
        <span className="trusted-orb trusted-orb--1" />
        <span className="trusted-orb trusted-orb--2" />
        <span className="trusted-orb trusted-orb--3" />
        <span className="trusted-grid-pattern" />
      </div>
      <Container as="div">
        <header data-slot="trusted-companies-head">
          <span className="trusted-companies-badge">Trusted Partners</span>
          <h2 id="trusted-companies-heading">
            Teams we have built{" "}
            <span className="trusted-heading-accent">systems for</span>
          </h2>
          <p className="trusted-companies-lead">
            Manufacturing, services, retail, and healthcare — real databases in production, not demos.
          </p>
          <ul className="trusted-companies-stats" aria-label="Trust indicators">
            {TRUST_STATS.map((stat) => (
              <li key={stat.label} className="trusted-stat-pill">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </header>
        <LogoMarquee companies={companies} />
      </Container>
    </section>
  );
}
