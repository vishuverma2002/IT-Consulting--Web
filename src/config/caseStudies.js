// Case study portfolio — shared by the case studies page and homepage teasers.

export const CASE_STUDIES_HERO = {
  badge: "Real Client Wins",
  heading: "Real Results for Real Businesses",
  lead:
    "No tech jargon — just what happened when three businesses hired us to fix their biggest problems.",
};

export const CASE_STUDY_FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Websites & Web Apps" },
  { id: "java", label: "Enterprise Backends" },
  { id: "wordpress", label: "WordPress Platforms" },
];

/** @type {import("@/types").CaseStudy[]} */
export const CASE_STUDIES = [
  {
    id: "sales-engine",
    filter: "web",
    categoryBadge: "E-Commerce & Retail",
    techTags: ["React", "Node.js", "Cloud Deployment"],
    title: "One Place for Orders, Tracking & Customers",
    clientBenefit:
      "Their team got a full work week back — every week. No more chasing spreadsheets.",
    challenge:
      "Leads were slipping through the cracks. Orders lived in messy files and updates took days.",
    solution:
      "We built one simple portal — place an order, track it live, and never touch a spreadsheet again.",
    teaser:
      "40 hours saved every week and 3× more deals closed — less paperwork, more selling.",
    cardCta: "See how we saved them 40 hours a week",
    testimonial: {
      tag: "Sales Growth",
      headline: "3× more deals closed in the first month",
      quote:
        "Before, we were drowning in spreadsheets and losing leads every week. Now everything runs from one place — our team actually has time to sell again.",
      initials: "SM",
      authorName: "Sarah M.",
      authorRole: "Operations Director",
    },
    metrics: [
      {
        value: "40 hrs/week",
        label: "Time saved",
        caption: "One full work week back, every week",
      },
      {
        value: "3×",
        label: "More deals",
        caption: "Closed in the first month alone",
      },
      {
        value: "Live",
        label: "Running today",
        caption: "Orders flowing, team selling",
      },
    ],
  },
  {
    id: "equity-engine",
    filter: "java",
    categoryBadge: "FinTech / Enterprise",
    techTags: ["Java Spring Boot", "Microservices", "Secure API"],
    title: "A Payment System That Never Slows Down",
    clientBenefit:
      "Money moves in a blink — even on their busiest days when thousands of people pay at once.",
    challenge:
      "Payments were freezing during rush hours. Customers got frustrated and revenue was at risk.",
    solution:
      "We rebuilt the engine behind the scenes so payments go through instantly — no matter how busy it gets.",
    teaser:
      "Payments in 0.2 seconds, system up 24/7 — they stopped losing money on busy days.",
    cardCta: "See how we fixed their payment slowdowns",
    testimonial: {
      tag: "Reliability",
      headline: "Not a single crash since launch — even at peak hours",
      quote:
        "We used to hold our breath every time traffic spiked. Now payments just work — fast, safe, and without a single hiccup since day one.",
      initials: "DK",
      authorName: "David K.",
      authorRole: "Chief Technology Officer",
    },
    metrics: [
      {
        value: "0.2 sec",
        label: "Per payment",
        caption: "Customers never wait at checkout",
      },
      {
        value: "24/7",
        label: "Always on",
        caption: "No downtime, even at peak hours",
      },
      {
        value: "Live",
        label: "Running today",
        caption: "Millions of payments, zero crashes",
      },
    ],
  },
  {
    id: "lead-platform",
    filter: "wordpress",
    categoryBadge: "Professional Services",
    techTags: ["WordPress Custom", "SEO Engine", "Speed Optimization"],
    title: "A Website Fast Enough to Keep Visitors — and Win Customers",
    clientBenefit:
      "Site opens in under 1.5 seconds — visitors stay instead of clicking away.",
    challenge:
      "Their old site took 8 seconds to load. People left before it even opened, and Google buried them in search results.",
    solution:
      "We rebuilt it to open instantly and added clear paths so visitors become paying inquiries.",
    teaser:
      "From 8 seconds to under 1.5 — and 2× more people filling out the contact form.",
    cardCta: "See how we doubled their customer inquiries",
    testimonial: {
      tag: "More Customers",
      headline: "Twice as many inquiries — and the phone actually rings now",
      quote:
        "People used to leave before our site even loaded. Now it opens instantly, they stick around, and our inbox fills up with real leads every week.",
      initials: "AA",
      authorName: "Apex Agency",
      authorRole: "Management Team",
    },
    metrics: [
      {
        value: "Under 1.5s",
        label: "Opens in",
        caption: "Visitors stay instead of leaving",
      },
      {
        value: "2×",
        label: "More inquiries",
        caption: "Twice as many people reaching out",
      },
      {
        value: "Live",
        label: "Running today",
        caption: "Showing up higher on Google",
      },
    ],
  },
];

export const CASE_STUDIES_CTA = {
  servicesTitle: "Want results like these for your business?",
  servicesLead:
    "Tell us what's slowing you down — we'll show you exactly how to fix it, in words you can actually understand.",
  servicesButton: "Let's talk about your project",
  portfolioButton: "See more client success stories",
  portfolioNote: "Not sure where to start?",
};
