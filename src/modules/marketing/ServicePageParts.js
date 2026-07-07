"use client";

import { useState } from "react";
import { clientCompanies } from "@/config/clients";
import CompanyLogo from "@/modules/marketing/CompanyLogo";

export function ServiceTrustedLogos({ companies = clientCompanies.slice(0, 8) }) {
  return (
    <div data-component="service-trusted-logos">
      <div className="service-trusted-band">
        <p className="service-trusted-label">Trusted by teams like</p>
        <ul className="service-trusted-row" aria-label="Companies we have served">
          {companies.map((company, index) => (
            <li
              key={company.id}
              className="service-trusted-slot"
              style={{ "--logo-i": index }}
            >
              <div className="service-trusted-logo" data-slot="trusted-company-logo">
                <CompanyLogo company={company} />
              </div>
              <span className="service-trusted-name">{company.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ServiceFaqItem({ item, isOpen, onToggle }) {
  const panelId = `${item.id}-panel`;
  const buttonId = `${item.id}-button`;

  return (
    <div className="faq-item" data-open={isOpen ? "true" : "false"}>
      <h3 className="faq-item-heading">
        <button
          type="button"
          id={buttonId}
          className="faq-question"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="faq-question-text">{item.question}</span>
          <span className="faq-chevron" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="faq-answer"
      >
        <div className="faq-answer-inner">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function ServiceFaqAccordion({ items = [] }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  const toggleItem = (itemId) => {
    setOpenId((current) => (current === itemId ? null : itemId));
  };

  return (
    <div className="service-faq-list faq-list">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="service-faq-item-wrap"
          style={{ "--faq-i": index }}
        >
          <ServiceFaqItem
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggleItem(item.id)}
          />
        </div>
      ))}
    </div>
  );
}
