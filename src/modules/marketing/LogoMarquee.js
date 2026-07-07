"use client";

import CompanyLogo from "@/modules/marketing/CompanyLogo";

/**
 * @param {{ companies: import("@/types").ClientCompany[] }} props
 */
export default function LogoMarquee({ companies }) {
  const midpoint = Math.ceil(companies.length / 2);
  const topRow = companies.slice(0, midpoint);
  const bottomRow = companies.slice(midpoint);

  return (
    <div className="trusted-marquee" data-slot="trusted-marquee">
      <MarqueeRow companies={topRow} direction="forward" />
      {bottomRow.length > 0 ? (
        <MarqueeRow companies={bottomRow} direction="reverse" rowClass="trusted-marquee-row--offset" />
      ) : null}

      <ul className="trusted-marquee-accessible" aria-label="Companies we have served">
        {companies.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * @param {{
 *   companies: import("@/types").ClientCompany[];
 *   direction?: "forward" | "reverse";
 *   rowClass?: string;
 * }} props
 */
function MarqueeRow({ companies, direction = "forward", rowClass = "" }) {
  const trackItems = [...companies, ...companies];

  return (
    <div className={`trusted-marquee-row ${rowClass}`.trim()} data-direction={direction}>
      <div
        className={`trusted-marquee-track trusted-marquee-track--${direction}`}
        aria-hidden="true"
      >
        {trackItems.map((company, index) => (
          <article
            key={`${company.id}-${index}`}
            className="trusted-company-card"
            data-slot="trusted-company-card"
            style={{ "--card-i": index % companies.length }}
          >
            <span className="trusted-company-shine" aria-hidden="true" />
            <div className="trusted-company-logo" data-slot="trusted-company-logo">
              <CompanyLogo company={company} />
            </div>
            <p className="trusted-company-name">{company.name}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
