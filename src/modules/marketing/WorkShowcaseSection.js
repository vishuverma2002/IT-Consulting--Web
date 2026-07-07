"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { useReveal } from "@/hooks/useReveal";
import {
  WORK_SHOWCASE_ITEMS,
  WORK_SHOWCASE_SECTION,
} from "@/config/workShowcase";

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const DashboardIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="7" height="9" rx="1.5" />
    <rect x="14" y="3" width="7" height="5" rx="1.5" />
    <rect x="14" y="12" width="7" height="9" rx="1.5" />
    <rect x="3" y="16" width="7" height="5" rx="1.5" />
  </svg>
);

const CrmIcon = () => (
  <svg {...iconProps}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TableIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 10h18" />
    <path d="M9 4v16" />
  </svg>
);

const AuthIcon = () => (
  <svg {...iconProps}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    <circle cx="12" cy="16" r="1" />
  </svg>
);

const SignInIcon = () => (
  <svg {...iconProps}>
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <path d="M10 17l5-5-5-5" />
    <path d="M15 12H3" />
  </svg>
);

const BlogIcon = () => (
  <svg {...iconProps}>
    <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    <path d="M7 9h10" />
    <path d="M7 13h7" />
    <path d="M7 17h4" />
  </svg>
);

const CARD_ICONS = {
  "web-app-ui": DashboardIcon,
  "clario-crm-platform": CrmIcon,
  "orders-management-table": TableIcon,
  "sign-in-galaxy": SignInIcon,
  "ai-podcast-authentication": AuthIcon,
  "doctors-clinic-blog": BlogIcon,
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="18" height="18">
      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
    </svg>
  );
}

/**
 * Portfolio work cards — heading on top, screenshot, stats, and CTA.
 * @param {{ items?: import("@/types").WorkShowcaseItem[] }} props
 */
export default function WorkShowcaseSection({
  items = WORK_SHOWCASE_ITEMS,
}) {
  const [sectionRef, sectionVisible] = useReveal(0.1);

  return (
    <section
      ref={sectionRef}
      className="work-showcase"
      data-section-visible={sectionVisible ? "true" : "false"}
      aria-labelledby="work-showcase-heading"
    >
      <Container as="div">
        <header className="work-showcase-head">
          <span className="work-showcase-badge">{WORK_SHOWCASE_SECTION.badge}</span>
          <h2 id="work-showcase-heading">{WORK_SHOWCASE_SECTION.title}</h2>
          <p className="work-showcase-lead">{WORK_SHOWCASE_SECTION.lead}</p>
        </header>

        <ul className="work-showcase-grid">
          {items.map((item, index) => {
            const Icon = CARD_ICONS[item.id] ?? DashboardIcon;

            return (
              <li
                key={item.id}
                className="work-showcase-card"
                style={{ "--card-i": index }}
              >
                <div className="work-showcase-card__top">
                  <div className="work-showcase-card__head">
                    <span
                      className="work-showcase-card__icon"
                      data-tone={item.badgeTone}
                    >
                      <Icon />
                    </span>
                    <div className="work-showcase-card__intro">
                      <span
                        className="work-showcase-card__badge"
                        data-tone={item.badgeTone}
                      >
                        {item.badge}
                      </span>
                      <h3>{item.title}</h3>
                      <p className="work-showcase-card__desc">{item.description}</p>
                    </div>
                  </div>
                </div>

                <div className="work-showcase-card__media">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    className="work-showcase-card__image"
                  />
                </div>

                <div className="work-showcase-card__footer">
                  <div className="work-showcase-card__stats">
                    {item.stats.map((stat, statIndex) => (
                      <div
                        key={stat.label}
                        className="work-showcase-stat"
                        style={{ "--stat-i": statIndex }}
                      >
                        <span className="work-showcase-stat__label">{stat.label}</span>
                        <span className="work-showcase-stat__value">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={item.cta.href} className="work-showcase-card__cta">
                    <ArrowIcon />
                    {item.cta.label}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
