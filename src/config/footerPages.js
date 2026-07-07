// Footer-linked landing pages — solutions, industries, and resource guides.
// Content is written in plain language for non-technical business owners.

/** @type {import("@/types").TopicPage[]} */
export const solutions = [
  {
    slug: "enterprise-web-applications",
    title: "Enterprise Web Applications",
    menuDescription:
      "Custom web apps that handle heavy traffic, complex workflows, and real business growth.",
    hero: {
      eyebrow: "Enterprise Web Applications",
      title: "Powerful web apps built for serious business — not just pretty homepages.",
      lead:
        "When spreadsheets and off-the-shelf tools stop working, you need a custom web application that fits how your team actually operates. We design and build secure, fast platforms your staff and customers can rely on every day — without the tech headaches.",
    },
    features: [
      {
        title: "Built Around Your Workflow",
        description:
          "We map how your team works today and build software that matches it — approvals, dashboards, reports, and customer flows included. No forcing your business into a generic template.",
      },
      {
        title: "Handles Real Traffic & Real Data",
        description:
          "Whether you have 50 users or 50,000, your app stays fast and stable. We engineer for growth from day one so a successful launch never becomes a crash.",
      },
      {
        title: "Secure by Design",
        description:
          "Role-based access, encrypted data, and audit trails — explained simply and built properly. Your sensitive business information stays protected.",
      },
    ],
    stats: [
      { value: "99.9%", label: "Uptime target" },
      { value: "3×", label: "Faster workflows" },
      { value: "24/7", label: "Monitoring ready" },
    ],
    faqs: [
      {
        id: "ent-timeline",
        question: "How long does an enterprise web app take?",
        answer:
          "Most projects take 8–16 weeks depending on complexity. We break work into weekly milestones so you see progress — not a black box for months.",
      },
      {
        id: "ent-legacy",
        question: "Can you connect to our existing systems?",
        answer:
          "Yes. We regularly integrate with CRMs, payment gateways, ERP tools, and legacy databases so your new app works with what you already use.",
      },
      {
        id: "ent-support",
        question: "Do you stay on after launch?",
        answer:
          "Absolutely. We offer post-launch support, monitoring, and enhancement plans so your platform keeps improving as your business grows.",
      },
    ],
  },
  {
    slug: "high-scale-backend-architectures",
    title: "High-Scale Backend Architectures",
    menuDescription:
      "Rock-solid server systems that stay fast when thousands of users hit at once.",
    hero: {
      eyebrow: "High-Scale Backend Architectures",
      title: "The invisible engine that keeps your app fast — even when everyone shows up at once.",
      lead:
        "Think of the backend as your business engine room. If it slows down or crashes during peak hours, you lose sales and trust. We build Java-powered backend systems designed to handle heavy loads, protect data, and scale smoothly as you grow.",
    },
    features: [
      {
        title: "Built for Peak Traffic",
        description:
          "Flash sales, payroll day, end-of-month reporting — your system stays responsive when demand spikes. No more 'server busy' messages during your busiest moments.",
      },
      {
        title: "Bank-Level Security",
        description:
          "We implement encryption, secure login, and strict access controls so customer and business data stays safe — without you needing to understand the technical details.",
      },
      {
        title: "Modular & Future-Proof",
        description:
          "Add new features, connect mobile apps, or expand to new markets without rebuilding from scratch. The architecture grows with you.",
      },
    ],
    stats: [
      { value: "10K+", label: "Concurrent users" },
      { value: "<200ms", label: "Response targets" },
      { value: "Zero", label: "Downtime launches" },
    ],
    faqs: [
      {
        id: "scale-java",
        question: "Why Java for high-scale systems?",
        answer:
          "Java powers Netflix, LinkedIn, and major banks because it handles heavy workloads reliably. It's proven, secure, and ideal for business-critical applications.",
      },
      {
        id: "scale-cloud",
        question: "Can this run on the cloud?",
        answer:
          "Yes. We deploy on AWS, Azure, or Google Cloud with auto-scaling so you only pay for what you use and never run out of capacity.",
      },
      {
        id: "scale-monitor",
        question: "How do you catch problems before users do?",
        answer:
          "We set up real-time monitoring and alerts. If something looks off, we're notified instantly — often before your customers ever notice.",
      },
    ],
  },
  {
    slug: "custom-business-portals",
    title: "Custom Business Portals",
    menuDescription:
      "Private online hubs where your team, partners, or clients log in and get work done.",
    hero: {
      eyebrow: "Custom Business Portals",
      title: "One secure login for your team, partners, or customers — everything they need in one place.",
      lead:
        "Stop emailing files back and forth or juggling five different tools. We build branded portals where the right people see the right information — invoices, project updates, documents, support tickets — all organized and easy to use.",
    },
    features: [
      {
        title: "Your Brand, Your Rules",
        description:
          "Custom design that looks like your company, with login areas tailored for employees, vendors, or clients. Each user sees only what they're allowed to see.",
      },
      {
        title: "Self-Service That Saves Time",
        description:
          "Let customers download invoices, track orders, or submit requests without calling your team. Less admin work, happier clients.",
      },
      {
        title: "Mobile-Friendly Access",
        description:
          "Works beautifully on phones and tablets so field teams and remote staff can stay productive from anywhere.",
      },
    ],
    stats: [
      { value: "60%", label: "Fewer support calls" },
      { value: "1 login", label: "All your tools" },
      { value: "100%", label: "Role-based access" },
    ],
    faqs: [
      {
        id: "portal-users",
        question: "Can different user types see different things?",
        answer:
          "Yes. Admins, managers, clients, and partners each get their own dashboard and permissions. You control exactly who sees what.",
      },
      {
        id: "portal-integrate",
        question: "Will it connect to our current software?",
        answer:
          "We integrate with accounting tools, CRMs, payment systems, and document storage so your portal pulls live data — not outdated copies.",
      },
      {
        id: "portal-training",
        question: "Will my team know how to use it?",
        answer:
          "We provide simple walkthroughs and training materials. Most teams are up and running within a day because we design for clarity, not complexity.",
      },
    ],
  },
  {
    slug: "api-integrations-microservices",
    title: "API Integrations & Microservices",
    menuDescription:
      "Make all your business tools talk to each other — automatically and reliably.",
    hero: {
      eyebrow: "API Integrations & Microservices",
      title: "Stop copying data between apps. Let your systems work together automatically.",
      lead:
        "Your CRM, payment processor, inventory tool, and website shouldn't live in silos. We connect them with secure APIs and smart microservices so data flows automatically — fewer errors, less manual work, and faster operations.",
    },
    features: [
      {
        title: "Plug-and-Play Connections",
        description:
          "Connect Stripe, Razorpay, Salesforce, HubSpot, shipping providers, and more. Orders, payments, and customer updates sync without anyone clicking 'export CSV.'",
      },
      {
        title: "Reliable & Monitored",
        description:
          "Integrations include error handling and alerts. If a connection hiccups, we know immediately and fix it before it affects your business.",
      },
      {
        title: "Room to Grow",
        description:
          "Microservices let you add new features independently — update payments without touching inventory, or launch a mobile app using the same backend.",
      },
    ],
    stats: [
      { value: "50+", label: "Integrations built" },
      { value: "Real-time", label: "Data sync" },
      { value: "80%", label: "Less manual entry" },
    ],
    faqs: [
      {
        id: "api-plain",
        question: "What is an API in simple terms?",
        answer:
          "An API is like a secure messenger between two apps. It lets your website ask your payment system to charge a card, or your CRM to update a customer record — instantly and automatically.",
      },
      {
        id: "api-break",
        question: "What if one service goes down?",
        answer:
          "We build fallback logic and retry systems. Critical operations queue safely and process when the connection recovers — so you don't lose orders or data.",
      },
      {
        id: "api-cost",
        question: "Is this expensive to maintain?",
        answer:
          "Well-built integrations actually save money by reducing manual labor and mistakes. We also offer maintenance plans to keep everything running smoothly.",
      },
    ],
  },
  {
    slug: "ecommerce-ecosystems",
    title: "E-commerce Ecosystems",
    menuDescription:
      "Online stores and marketplaces built to convert visitors into repeat buyers.",
    hero: {
      eyebrow: "E-commerce Ecosystems",
      title: "Online stores that load fast, look premium, and actually convert browsers into buyers.",
      lead:
        "A slow or confusing checkout loses sales every day. We build complete e-commerce experiences — product catalogs, secure payments, inventory sync, and admin dashboards — so you can sell online confidently and scale when demand grows.",
    },
    features: [
      {
        title: "Smooth Shopping Experience",
        description:
          "Fast product pages, easy search, and a checkout that works on mobile. We remove friction so customers complete purchases instead of abandoning carts.",
      },
      {
        title: "Payments & Shipping Built In",
        description:
          "Stripe, Razorpay, PayPal, and major shipping carriers connected and tested. Taxes, discounts, and order confirmations handled automatically.",
      },
      {
        title: "Inventory You Can Trust",
        description:
          "Real-time stock levels across your store and warehouse tools. No more overselling or manual spreadsheet updates.",
      },
    ],
    stats: [
      { value: "35%", label: "Higher conversion" },
      { value: "<2s", label: "Page load targets" },
      { value: "Multi", label: "Currency & region ready" },
    ],
    faqs: [
      {
        id: "ecom-platform",
        question: "Do you use Shopify or custom builds?",
        answer:
          "We recommend what's best for your business — custom platforms for unique workflows, or WordPress/WooCommerce when you want easy self-management. We explain the trade-offs clearly.",
      },
      {
        id: "ecom-seo",
        question: "Will my products show up on Google?",
        answer:
          "Yes. We implement SEO-friendly URLs, product schema, fast loading, and sitemaps so search engines can find and rank your catalog.",
      },
      {
        id: "ecom-scale",
        question: "Can it handle big sale events?",
        answer:
          "We stress-test before launch and configure auto-scaling for traffic spikes — so Black Friday-style rushes don't take your store offline.",
      },
    ],
  },
  {
    slug: "cloud-migration-solutions",
    title: "Cloud Migration Solutions",
    menuDescription:
      "Move your apps and data to the cloud safely — with zero drama and minimal downtime.",
    hero: {
      eyebrow: "Cloud Migration Solutions",
      title: "Move to the cloud without breaking what already works.",
      lead:
        "Still running on old servers or a cramped hosting plan? We migrate your websites, apps, and databases to modern cloud infrastructure — carefully, step by step — so you get better speed, security, and reliability without losing a day of business.",
    },
    features: [
      {
        title: "Zero-Downtime Planning",
        description:
          "We schedule migrations during low-traffic windows and use staged cutovers. Your customers keep shopping and your team keeps working while we move things behind the scenes.",
      },
      {
        title: "Cost Optimization",
        description:
          "Cloud doesn't have to mean expensive. We right-size resources and set up auto-scaling so you pay for what you use — not idle servers running 24/7.",
      },
      {
        title: "Security & Backups",
        description:
          "Automated daily backups, disaster recovery plans, and SSL certificates configured properly. Sleep better knowing your data is safe and recoverable.",
      },
    ],
    stats: [
      { value: "40%", label: "Avg. cost savings" },
      { value: "3×", label: "Faster page loads" },
      { value: "Daily", label: "Automated backups" },
    ],
    faqs: [
      {
        id: "cloud-why",
        question: "Why move to the cloud?",
        answer:
          "Better uptime, faster performance, easier scaling, and stronger security. You also reduce the headache of maintaining physical servers yourself.",
      },
      {
        id: "cloud-risk",
        question: "Is migration risky?",
        answer:
          "Not when done properly. We audit first, test in staging, and keep backups at every step. Rollback plans are always ready if anything unexpected happens.",
      },
      {
        id: "cloud-which",
        question: "AWS, Azure, or Google Cloud?",
        answer:
          "We help you choose based on your budget, existing tools, and compliance needs. All three are enterprise-grade — the best pick depends on your situation.",
      },
    ],
  },
];

/** @type {import("@/types").TopicPage[]} */
export const industries = [
  {
    slug: "finance-fintech",
    title: "Finance & Fintech",
    menuDescription:
      "Secure platforms for payments, dashboards, and financial workflows clients can trust.",
    hero: {
      eyebrow: "Finance & Fintech",
      title: "Financial software that earns trust — secure, compliant, and crystal clear.",
      lead:
        "Money moves fast and mistakes are costly. We build fintech portals, payment dashboards, and reporting tools with bank-grade security and audit-friendly design — so your clients feel confident and your team stays in control.",
    },
    features: [
      {
        title: "Security First",
        description:
          "Encrypted transactions, secure authentication, and detailed access logs. We follow industry best practices so sensitive financial data stays protected.",
      },
      {
        title: "Real-Time Reporting",
        description:
          "Live dashboards for balances, payouts, and transaction history. Decision-makers see accurate numbers without waiting for end-of-day exports.",
      },
      {
        title: "Compliance Ready",
        description:
          "Structured for audit trails, data retention policies, and regional requirements. We build with compliance in mind from the start.",
      },
    ],
    faqs: [
      {
        id: "fin-pci",
        question: "Can you handle payment processing?",
        answer:
          "We integrate with PCI-compliant providers like Stripe and Razorpay. Card data never touches your servers directly — reducing risk and compliance burden.",
      },
      {
        id: "fin-audit",
        question: "Will auditors be able to review activity?",
        answer:
          "Yes. We implement activity logs, exportable reports, and role-based permissions so every action is traceable.",
      },
    ],
  },
  {
    slug: "ecommerce-retail",
    title: "E-commerce & Retail",
    menuDescription:
      "Online and omnichannel retail systems that boost sales and simplify operations.",
    hero: {
      eyebrow: "E-commerce & Retail",
      title: "Sell more online — with stores that are fast, beautiful, and easy to manage.",
      lead:
        "Retail moves quickly. We help brands launch online stores, connect inventory systems, and create customer experiences that turn first-time buyers into loyal repeat customers — on desktop and mobile.",
    },
    features: [
      {
        title: "Conversion-Focused Design",
        description:
          "Clear product pages, trust badges, and streamlined checkout. Every element is designed to reduce hesitation and increase completed orders.",
      },
      {
        title: "Omnichannel Ready",
        description:
          "Sync online and in-store inventory, manage promotions across channels, and give staff a single view of customer history.",
      },
      {
        title: "Marketing Integrations",
        description:
          "Connect email tools, analytics, and ad pixels so you know what's working and can retarget shoppers who didn't finish checkout.",
      },
    ],
    faqs: [
      {
        id: "retail-mobile",
        question: "Do most customers shop on phones?",
        answer:
          "Often yes. Every store we build is mobile-first — fast loading, thumb-friendly navigation, and Apple Pay / Google Pay where supported.",
      },
      {
        id: "retail-inventory",
        question: "Can we manage products ourselves?",
        answer:
          "Absolutely. We set up simple admin panels so your team can add products, run sales, and update stock without calling a developer.",
      },
    ],
  },
  {
    slug: "healthcare-systems",
    title: "Healthcare Systems",
    menuDescription:
      "Patient portals, appointment tools, and secure health data platforms.",
    hero: {
      eyebrow: "Healthcare Systems",
      title: "Healthcare technology that puts patients first — and keeps data safe.",
      lead:
        "Clinics and healthcare providers need systems that are easy for patients to use and strict about privacy. We build appointment booking, patient portals, and internal dashboards with security and clarity at the center.",
    },
    features: [
      {
        title: "Patient-Friendly Portals",
        description:
          "Book appointments, view results, and message staff through simple, accessible interfaces — no confusing medical jargon in the UI.",
      },
      {
        title: "Privacy by Design",
        description:
          "Encrypted data storage, secure login, and access controls so only authorized staff see patient information.",
      },
      {
        title: "Staff Efficiency",
        description:
          "Reduce phone tag with online scheduling, automated reminders, and digital intake forms that save front-desk time.",
      },
    ],
    faqs: [
      {
        id: "health-hipaa",
        question: "Do you follow healthcare privacy standards?",
        answer:
          "We implement security practices aligned with HIPAA-style requirements — encryption, access logging, and secure hosting. Specific compliance depends on your region and we discuss that upfront.",
      },
      {
        id: "health-integrate",
        question: "Can this connect to our existing practice software?",
        answer:
          "Where APIs are available, we integrate with scheduling, billing, and EHR systems. We assess your stack during discovery and map what's possible.",
      },
    ],
  },
  {
    slug: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    menuDescription:
      "Tracking, dispatch, and inventory platforms that keep goods moving on time.",
    hero: {
      eyebrow: "Logistics & Supply Chain",
      title: "See every shipment, route, and warehouse update — in one live dashboard.",
      lead:
        "Late deliveries and lost inventory hurt margins and customer trust. We build logistics platforms with real-time tracking, driver apps, and warehouse tools so your team always knows where things are and what needs attention next.",
    },
    features: [
      {
        title: "Live Tracking",
        description:
          "Customers and managers see shipment status updated in real time — fewer 'where is my order?' calls and faster issue resolution.",
      },
      {
        title: "Route & Dispatch Tools",
        description:
          "Assign drivers, optimize routes, and capture proof of delivery digitally. Less paperwork, fewer missed deliveries.",
      },
      {
        title: "Inventory Visibility",
        description:
          "Know stock levels across warehouses and retail locations. Automatic alerts when items run low before you lose sales.",
      },
    ],
    faqs: [
      {
        id: "log-mobile",
        question: "Do drivers use this on their phones?",
        answer:
          "Yes. We build mobile-friendly driver interfaces for status updates, signatures, and photo proof — works on standard smartphones.",
      },
      {
        id: "log-erp",
        question: "Will it sync with our ERP?",
        answer:
          "We connect to major ERP and WMS systems via APIs so orders, inventory, and invoices stay aligned without duplicate entry.",
      },
    ],
  },
  {
    slug: "saas-tech-startups",
    title: "SaaS & Tech Startups",
    menuDescription:
      "MVPs and scalable platforms to launch fast and grow without rebuilding.",
    hero: {
      eyebrow: "SaaS & Tech Startups",
      title: "Launch your product idea fast — then scale without starting over.",
      lead:
        "Startups need speed and flexibility. We help founders go from concept to live MVP in weeks, with architecture that supports subscriptions, user accounts, and feature growth — so your first version isn't something you'll throw away in six months.",
    },
    features: [
      {
        title: "MVP in Weeks, Not Months",
        description:
          "Focused first release with core features that prove your idea. Ship quickly, gather real user feedback, and iterate based on data.",
      },
      {
        title: "Subscription Ready",
        description:
          "Billing, free trials, and plan upgrades built in from the start. Stripe integration and usage tracking included.",
      },
      {
        title: "Investor-Grade Quality",
        description:
          "Clean code, documented architecture, and professional UI — the kind of product demo that builds confidence with users and stakeholders.",
      },
    ],
    faqs: [
      {
        id: "saas-mvp",
        question: "How minimal can an MVP be?",
        answer:
          "We focus on the one problem you're solving best. Extra features wait until users confirm they want them — saving budget and time.",
      },
      {
        id: "saas-scale",
        question: "Will the MVP handle growth?",
        answer:
          "Yes. We use proven scalable stacks (Java, React, cloud hosting) so you won't need a full rewrite when users multiply.",
      },
    ],
  },
  {
    slug: "real-estate-professional-services",
    title: "Real Estate & Professional Services",
    menuDescription:
      "Client portals, booking systems, and lead-generating websites for service businesses.",
    hero: {
      eyebrow: "Real Estate & Professional Services",
      title: "Websites and portals that bring leads in — and make clients feel taken care of.",
      lead:
        "Agents, consultants, and professional firms need more than a brochure site. We build property listings, client portals, appointment booking, and document sharing — polished experiences that build credibility and save your team hours every week.",
    },
    features: [
      {
        title: "Lead-Capture Websites",
        description:
          "Property search, service pages, and contact forms optimized for conversions. Fast loading and mobile-perfect for buyers searching on the go.",
      },
      {
        title: "Client Portals",
        description:
          "Share contracts, milestones, and updates in a branded private area. Clients feel informed; your inbox stays cleaner.",
      },
      {
        title: "Booking & CRM Hooks",
        description:
          "Schedule consultations online and push leads into your CRM automatically — no more lost inquiries in email threads.",
      },
    ],
    faqs: [
      {
        id: "re-listings",
        question: "Can we manage property listings ourselves?",
        answer:
          "Yes. We set up easy admin tools to add photos, prices, and descriptions — or sync from your MLS feed where integrations are available.",
      },
      {
        id: "re-brand",
        question: "Will it look like our brand, not a template?",
        answer:
          "Every site is custom-designed to match your colors, typography, and tone — so you stand out from competitors using generic themes.",
      },
    ],
  },
];

/** @type {import("@/types").TopicPage} */
export const architectureGuide = {
  slug: "architecture",
  title: "System Architecture Guides",
  menuDescription:
      "Plain-English guides to how modern web systems are built — no jargon required.",
  hero: {
    eyebrow: "System Architecture Guides",
    title: "Understand how great software is built — explained like you're talking to a friend.",
    lead:
      "Architecture sounds intimidating, but it's really just the blueprint for how your app works behind the scenes. These guides break down common patterns in simple language so you can make smarter decisions — and know what you're paying for.",
  },
  features: [
    {
      title: "Frontend vs Backend — What's the Difference?",
      description:
        "The frontend is what users see and click (your website or app screen). The backend is the engine room — databases, business logic, and security. Both need to work together for a smooth experience.",
    },
    {
      title: "Why APIs Matter",
      description:
        "APIs let your website talk to payment systems, shipping tools, and mobile apps. Think of them as standardized plugs — once connected, data flows automatically between services.",
    },
    {
      title: "Scaling Without Panic",
      description:
        "Good architecture handles 100 users today and 100,000 tomorrow by using cloud auto-scaling, caching, and modular services — instead of one giant fragile system.",
    },
    {
      title: "Security Layers Explained",
      description:
        "Firewalls, HTTPS, encrypted passwords, and role-based access each play a part. We explain what each layer does so you know your customer data is protected.",
    },
  ],
  faqs: [
    {
      id: "arch-need",
      question: "Do I need to understand architecture to hire you?",
      answer:
        "Not at all. These guides are optional reading. We handle the technical decisions and explain trade-offs in plain English during our discovery call.",
    },
    {
      id: "arch-audit",
      question: "Can you review our current system's architecture?",
      answer:
        "Yes. We offer architecture audits that identify bottlenecks, security gaps, and cost savings — delivered as a clear report with prioritized recommendations.",
    },
  ],
};

/** @type {import("@/types").BlogPost[]} */
export const blogPosts = [
  {
    slug: "why-website-speed-matters",
    title: "Why Website Speed Matters More Than You Think",
    excerpt:
      "A 1-second delay can cost you customers. Here's what slow sites really mean for your business — and how to fix it without a full rebuild.",
    category: "Performance",
    readTime: "5 min read",
    date: "2026-03-15",
  },
  {
    slug: "custom-vs-template-websites",
    title: "Custom Website vs Template: Which Is Right for You?",
    excerpt:
      "Templates are cheap and fast. Custom builds cost more but fit your business perfectly. We break down the honest pros and cons of each.",
    category: "Web Development",
    readTime: "6 min read",
    date: "2026-02-28",
  },
  {
    slug: "wordpress-security-basics",
    title: "WordPress Security: 5 Things Every Business Owner Should Know",
    excerpt:
      "WordPress powers millions of sites — and attracts hackers. Simple steps we take on every project to keep your business site safe.",
    category: "WordPress",
    readTime: "4 min read",
    date: "2026-02-10",
  },
  {
    slug: "when-to-invest-in-backend",
    title: "When Does Your Business Need a Custom Backend?",
    excerpt:
      "Spreadsheets worked fine — until they didn't. Signs that it's time to invest in a proper backend system, explained without the tech buzzwords.",
    category: "Backend",
    readTime: "7 min read",
    date: "2026-01-22",
  },
];

/** @param {string} slug */
export function getSolutionBySlug(slug) {
  return solutions.find((item) => item.slug === slug) ?? null;
}

/** @param {string} slug */
export function getIndustryBySlug(slug) {
  return industries.find((item) => item.slug === slug) ?? null;
}

/** @param {string} slug */
export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
