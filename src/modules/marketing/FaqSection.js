"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";

// FaqSection: premium, SaaS-style tabbed FAQ.
// STRUCTURE: three categories surfaced as tabs (Web Dev / Java / WordPress).
// Each tab renders an accordion where only ONE answer is open at a time.
// MOTION: reveal is gated on a single IntersectionObserver (data-visible). The
// accordion open/close animates via the grid-template-rows 0fr -> 1fr trick so
// height transitions are smooth without measuring DOM. All color is drawn from
// the shared theme tokens (--accent / --ink / --muted) plus the same var(--accent-secondary) blue.

const CATEGORIES = [
  {
    id: "web",
    label: "Web Development",
    blurb: "Design, responsiveness, and our delivery process.",
    items: [
      {
        id: "web-process",
        question:
          "What is your typical web development process, and how long will my project take?",
        answer: (
          <>
            We follow an <strong>agile 4-stage process</strong>: Discovery &amp;
            Wireframing, UI/UX Design, Development, and QA Testing. A standard
            business website takes about <strong>3 to 6 weeks</strong>, while
            complex web applications can take <strong>8 to 12 weeks</strong>. We
            provide <strong>weekly sprint updates</strong> so you are always in
            the loop.
          </>
        ),
      },
      {
        id: "web-seo",
        question: "Will my website be mobile-friendly and optimized for SEO?",
        answer: (
          <>
            Absolutely. Every website we build is{" "}
            <strong>100% responsive</strong> (works perfectly on mobile, tablets,
            and desktops) and follows modern{" "}
            <strong>SEO best practices</strong> like clean semantic code,{" "}
            <strong>fast loading speeds</strong>, and proper meta-tagging to help
            you rank higher on Google.
          </>
        ),
      },
      {
        id: "web-support",
        question: "Do you provide post-launch support and maintenance?",
        answer: (
          <>
            Yes, we don&rsquo;t just launch and leave. We offer{" "}
            <strong>30 days of complimentary post-launch support</strong> to fix
            any unexpected bugs. Afterward, we have flexible{" "}
            <strong>monthly maintenance plans</strong> to handle security
            updates, backups, and content changes.
          </>
        ),
      },
    ],
  },
  {
    id: "java",
    label: "Java Backend",
    blurb: "Robustness, security, and integration.",
    items: [
      {
        id: "java-why",
        question: "Why should I choose Java for my application's backend?",
        answer: (
          <>
            Java is the <strong>industry standard for enterprise-level
            applications</strong> due to its <strong>robust security</strong>,
            exceptional performance, and <strong>high scalability</strong>. If
            your business expects high user traffic or requires secure data
            processing (like fintech or e-commerce), a Java backend ensures your
            system never crashes.
          </>
        ),
      },
      {
        id: "java-frameworks",
        question:
          "Which frameworks do you use, and how do you ensure API security?",
        answer: (
          <>
            We primarily use <strong>Spring Boot</strong> and{" "}
            <strong>Spring Cloud</strong> for building microservices or monolithic
            architectures. For security, we implement robust industry standards
            including <strong>OAuth2</strong>, <strong>JWT (JSON Web Tokens)</strong>,{" "}
            <strong>role-based access control (RBAC)</strong>, and{" "}
            <strong>data encryption</strong> both at rest and in transit.
          </>
        ),
      },
      {
        id: "java-integrate",
        question:
          "Can you integrate our backend with third-party services and existing databases?",
        answer: (
          <>
            Yes, we specialize in building <strong>RESTful and GraphQL APIs</strong>{" "}
            that seamlessly connect with any third-party services (Payment
            gateways, CRM, ERP) and legacy databases (<strong>PostgreSQL,
            MySQL, Oracle</strong>, or NoSQL solutions like{" "}
            <strong>MongoDB</strong>).
          </>
        ),
      },
    ],
  },
  {
    id: "wordpress",
    label: "WordPress",
    blurb: "Speed, security, and full ownership.",
    items: [
      {
        id: "wp-edit",
        question:
          "Will I be able to update content on my WordPress site easily without any coding knowledge?",
        answer: (
          <>
            Yes, that&rsquo;s the beauty of WordPress. We build websites using{" "}
            <strong>user-friendly page builders</strong> (like Elementor Pro) or
            native <strong>Gutenberg blocks</strong>. We also provide a{" "}
            <strong>free 30-minute video walkthrough training</strong> so your
            team can easily change text, images, and blogs without needing a
            developer.
          </>
        ),
      },
      {
        id: "wp-security",
        question:
          "WordPress sites are often targeted by hackers. How do you keep the website secure?",
        answer: (
          <>
            We implement <strong>strict hardening measures</strong>: installing{" "}
            <strong>premium security plugins</strong>, setting up{" "}
            <strong>automated daily backups</strong>, changing default login
            paths, enforcing <strong>strong password policies</strong>, and
            configuring <strong>firewalls</strong> to block malicious traffic.
          </>
        ),
      },
      {
        id: "wp-themes",
        question:
          "Do you use bloated pre-made themes, or do you build custom designs?",
        answer: (
          <>
            We avoid heavy, bloated themes that slow down your site. We either
            develop a <strong>custom theme from scratch</strong> or use{" "}
            <strong>lightweight, highly optimized frameworks</strong>. This
            ensures your site <strong>loads under 2 seconds</strong> and provides
            a premium user experience.
          </>
        ),
      },
    ],
  },
];

function FaqItem({ item, isOpen, onToggle }) {
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
          <span className="faq-icon" aria-hidden="true">
            <span className="faq-icon-bar" />
            <span className="faq-icon-bar faq-icon-bar--v" />
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

export default function FaqSection({ categories = CATEGORIES }) {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState(categories[0]?.id);
  const [openId, setOpenId] = useState(categories[0]?.items[0]?.id ?? null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const currentCategory =
    categories.find((category) => category.id === activeTab) ?? categories[0];

  const handleTabChange = (categoryId) => {
    if (categoryId === activeTab) return;
    const nextCategory = categories.find((c) => c.id === categoryId);
    setActiveTab(categoryId);
    // Open the first question of the newly selected category for instant context.
    setOpenId(nextCategory?.items[0]?.id ?? null);
  };

  const toggleItem = (itemId) => {
    setOpenId((current) => (current === itemId ? null : itemId));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      data-component="faq"
      data-visible={active ? "true" : "false"}
      aria-labelledby="faq-heading"
    >
      <div className="faq-bg" aria-hidden="true">
        <span className="faq-grid-texture" />
        <span className="faq-orb faq-orb--1" />
        <span className="faq-orb faq-orb--2" />
        <span className="faq-orb faq-orb--3" />
      </div>

      <Container as="div">
        <header className="faq-head">
          <span className="faq-heading-glow" aria-hidden="true" />
          <span className="faq-badge">FAQ</span>
          <h2 id="faq-heading" className="faq-heading">
            Frequently asked questions
          </h2>
          <p className="faq-lead">
            Everything you need to know about how we design, build, and support
            your product across web, backend, and WordPress.
          </p>
        </header>

        <div
          className="faq-tabs"
          role="tablist"
          aria-label="FAQ categories"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`faq-tab-${category.id}`}
              aria-selected={category.id === activeTab}
              aria-controls={`faq-panel-${category.id}`}
              className="faq-tab"
              data-active={category.id === activeTab ? "true" : "false"}
              onClick={() => handleTabChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div
          className="faq-panel"
          role="tabpanel"
          id={`faq-panel-${currentCategory.id}`}
          aria-labelledby={`faq-tab-${currentCategory.id}`}
          key={currentCategory.id}
        >
          <p className="faq-panel-blurb">{currentCategory.blurb}</p>
          <div className="faq-list">
            {currentCategory.items.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
