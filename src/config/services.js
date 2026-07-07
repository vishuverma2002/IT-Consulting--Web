// Core service offerings — shared by the navbar mega-menu and individual pages.

/** @type {import("@/types").ServiceOffering[]} */
export const coreServices = [
  {
    slug: "web-development",
    title: "Web Development",
    menuDescription:
      "Modern, fast, and responsive websites that grow your business.",
    icon: "web",
    hero: {
      eyebrow: "Web Development",
      title:
        "We build beautiful, fast websites that turn your visitors into paying clients.",
      lead:
        "Your website is your 24/7 digital storefront. We don't just build pretty pages; we engineer fast, secure, and custom websites designed to grab attention on phones or laptops, build instant trust, and guide your visitors to call or buy from you.",
    },
    featuresSection: {
      badge: "Core Capabilities",
      title:
        "Custom Web Applications Engineered for Scale, Speed, and Business Growth.",
      lead:
        "We build more than just websites. We design and engineer enterprise-grade, custom web ecosystems that align perfectly with your business goals—ensuring heavy-traffic stability, modern user experiences, and seamless feature integration.",
    },
    features: [
      {
        title: "Full-Stack Engineering & Custom Architectures",
        subtitle: "Bespoke Digital Ecosystems",
        description:
          "Tailored frontend experiences built on robust, production-ready tech stacks. From heavy-data dashboards to dynamic customer portals, we write clean, performant code designed to solve your unique business bottlenecks and operational workflows.",
      },
      {
        title: "Optimization, Blazing Speed & Core Web Vitals",
        subtitle: "Zero-Lag Performance",
        description:
          "Slow load times destroy conversion rates. We run deep code-level optimizations, asset compression, and modern caching strategies to ensure your web applications load instantly on any device, boosting your retention and Google SEO rankings natively.",
      },
      {
        title: "Secure API Ecosystems & Third-Party Integrations",
        subtitle: "Seamless Infrastructure Connection",
        description:
          "Bridge your web platform with any internal or external service. We engineer custom API connectors, secure payment gateways, automated CRMs, and database architectures that talk to each other without latency or security vulnerabilities.",
      },
    ],
    faqs: [
      {
        id: "web-edit",
        question: "Will I be able to edit this later?",
        answer:
          "Yes, completely. We build with user-friendly dashboards so you can easily update text, change images, or add blogs yourself in just 2 clicks—no coding skills or developer dependencies needed.",
      },
      {
        id: "web-timeline",
        question: "How long does a typical website take?",
        answer:
          "A standard business website takes about 2 to 4 weeks from strategy to launch. For complex web applications, we provide a milestone-based timeline so you know exactly what is being delivered each week.",
      },
      {
        id: "web-support",
        question: "Do you provide support after launch?",
        answer:
          "Absolutely. We provide a complimentary post-launch support period to ensure everything runs smoothly. We also offer monthly maintenance plans to handle technical updates while you focus on your business.",
      },
      {
        id: "web-seo",
        question: "Will my site show up on Google?",
        answer:
          "Yes. Every site we build follows strict Google indexing standards. We set up your basic SEO structure, sitemaps, and speed metrics so Google can crawl, read, and list your business correctly.",
      },
    ],
  },
  {
    slug: "java-backend",
    title: "Java Backend Engineering",
    menuDescription:
      "Heavy-duty, secure, and scalable systems built for enterprise performance.",
    icon: "java",
    hero: {
      eyebrow: "Java Backend Engineering",
      title:
        "Rock-solid backend systems that keep your business running — even when traffic spikes.",
      lead:
        "Think of the backend as the engine of your digital business. If your app handles heavy data, payments, or thousands of users at once, you need a system that won't freeze or crash. We build powerful Java engines that make sure your business stays online, fast, and secure 24/7.",
    },
    features: [
      {
        title: "Bank-Grade Data Protection",
        description:
          "Your customer data and payments are heavily guarded. We implement security setups similar to online banks, making sure your platform is safe from hackers and data leaks from day one.",
      },
      {
        title: "Built for High Speed & Growth",
        description:
          "Whether you have 10 users or 10,000 accessing your app at the exact same time, your platform won't slow down, freeze, or give loading errors. It scales effortlessly as your business grows.",
      },
      {
        title: "Plays Well with Every Tool",
        description:
          "Need to connect payment gateways (like Stripe or Razorpay), SMS services, or CRM tools? Our backend links everything together smoothly behind the scenes so your business tools talk to each other without errors.",
      },
    ],
    processSteps: [
      {
        id: "discovery",
        title: "Discovery Call",
        description:
          "We discuss your business goals, target audience, and feature ideas. No complex tech talk—just a simple chat to map out a clear, custom blueprint for your platform.",
      },
      {
        id: "design",
        title: "Design & Engineering",
        description:
          "While we build your robust backend system, we send you simple weekly progress updates. You see exactly how your product is shaping up without getting lost in the code.",
      },
      {
        id: "launch",
        title: "Testing & Launch",
        description:
          "We run rigorous stress-tests to ensure everything is unbreakable. Once certified perfect, we safely push your platform live to the world with zero downtime.",
      },
    ],
    faqs: [
      {
        id: "java-secure",
        question: "How secure is my backend?",
        answer:
          "Extremely secure. We use enterprise-grade encryption and secure access tokens. In plain terms: only authorized people can see your data, and malicious attacks are blocked automatically.",
      },
      {
        id: "java-scale",
        question: "Can it handle growth as my user base expands?",
        answer:
          "Yes, absolutely. Java is trusted by companies like Netflix and Uber for this exact reason. The architecture we build expands automatically when more users visit, so your site never feels sluggish.",
      },
      {
        id: "java-integrate",
        question: "Will it work with my existing tools?",
        answer:
          "Yes. We design our backend to be highly flexible. Whether you have an existing frontend website, a mobile app, or third-party CRM tools, our system connects with them seamlessly.",
      },
      {
        id: "java-support",
        question: "Do you provide support after launch?",
        answer:
          "We don't just build and disappear. We provide dedicated post-launch monitoring and technical support to ensure your system continues to run perfectly as your business operates day-to-day.",
      },
    ],
  },
  {
    slug: "wordpress",
    title: "WordPress Solutions",
    menuDescription:
      "Premium, secure, and easy-to-manage business websites with zero coding needed from your end.",
    icon: "wordpress",
    hero: {
      eyebrow: "WordPress Solutions",
      title:
        "A stunning business website you can update yourself — no coding required.",
      lead:
        "Stop waiting days for a developer just to change a line of text or swap an image. We build custom, ultra-secure WordPress websites that give you 100% control, look incredibly premium, and work flawlessly to bring you more leads every single day.",
    },
    features: [
      {
        title: "Total Control, No Code",
        description:
          "Manage your business content completely on your own. We set up an incredibly simple drag-and-drop dashboard where you can edit text, publish blogs, or add products in seconds—no tech skills needed.",
      },
      {
        title: "Built from Scratch for Your Brand",
        description:
          "No cheap, slow, cookie-cutter templates here. We design your site from the ground up to reflect your brand's unique identity, ensuring it looks like a high-end enterprise solution.",
      },
      {
        title: "Bulletproof Security & Backups",
        description:
          "WordPress needs the right armor. We set up military-grade firewalls, automatic malware scans, and daily cloud backups so your business data stays 100% safe from hackers and downtime.",
      },
    ],
    faqs: [
      {
        id: "wp-edit",
        question: "Will I be able to edit this later?",
        answer:
          "Absolutely! We don't just hand over the site and disappear. We provide a tailored, step-by-step video walkthrough showing you exactly how to edit your unique website in under 5 minutes.",
      },
      {
        id: "wp-security",
        question: "How do you keep WordPress sites safe from hackers?",
        answer:
          "We install premium security plugins, change standard database prefixes to block bots, implement custom login URLs, and set up automated weekly software updates to instantly patch any vulnerabilities.",
      },
      {
        id: "wp-templates",
        question: "Do you use cheap pre-made themes?",
        answer:
          "Never. Cheap themes slow down your site and crash during updates. We use lightweight, professional developer frameworks to build a completely custom design that is uniquely yours and blazing fast.",
      },
      {
        id: "wp-support",
        question: "Do you provide support after launch?",
        answer:
          "Yes! Every project comes with a dedicated post-launch support period to fix any teething issues. We also offer hassle-free monthly care plans to keep your plugins, security, and backups up-to-date automatically.",
      },
    ],
  },
  {
    slug: "database-architecture",
    title: "Database Architecture & Optimization",
    menuDescription:
      "Fast, organized data storage that keeps your app snappy and your reports accurate.",
    icon: "database",
    hero: {
      eyebrow: "Database Architecture & Optimization",
      title: "Your data, organized and lightning-fast — no more slow reports or lost records.",
      lead:
        "Every app depends on its database — the place where customer info, orders, and business records live. When it's messy or slow, everything suffers. We design clean database structures and optimize queries so your team gets instant answers and your app never chokes under load.",
    },
    features: [
      {
        title: "Clean, Logical Structure",
        description:
          "We organize your data so it makes sense — no duplicate entries, no mystery tables. Your team finds what they need quickly and reports stay accurate.",
      },
      {
        title: "Speed Optimization",
        description:
          "Slow searches and timeouts disappear. We tune indexes, queries, and caching so dashboards load in seconds, even with years of historical data.",
      },
      {
        title: "Safe Migrations",
        description:
          "Moving from spreadsheets or an old system? We migrate data carefully with backups at every step — nothing lost, nothing corrupted.",
      },
    ],
    faqs: [
      {
        id: "db-audit",
        question: "Can you fix our existing slow database?",
        answer:
          "Yes. We start with a performance audit, identify bottlenecks, and implement fixes — often without rebuilding your entire application.",
      },
      {
        id: "db-backup",
        question: "How do you protect our data?",
        answer:
          "Automated daily backups, encryption at rest, and access controls. We also document recovery procedures so you're never stuck if something goes wrong.",
      },
      {
        id: "db-scale",
        question: "Will it handle growth?",
        answer:
          "We design for your next 3–5 years of growth. When you outgrow current capacity, scaling plans are already mapped out.",
      },
    ],
  },
  {
    slug: "api-engineering",
    title: "RESTful & GraphQL API Engineering",
    menuDescription:
      "Secure connections that let your website, mobile app, and tools share data seamlessly.",
    icon: "api",
    hero: {
      eyebrow: "RESTful & GraphQL API Engineering",
      title: "Connect everything — your website, mobile app, and business tools working as one team.",
      lead:
        "APIs are the bridges between your systems. We build secure REST and GraphQL APIs so your frontend, mobile apps, partners, and third-party services all access the same reliable data — fast, documented, and easy to maintain.",
    },
    features: [
      {
        title: "Developer-Friendly Documentation",
        description:
          "Clear API docs mean your team or partners can integrate quickly. No endless back-and-forth emails asking 'how does this work?'",
      },
      {
        title: "Secure Access Control",
        description:
          "API keys, OAuth tokens, and rate limiting protect your data from abuse. Only authorized apps can access sensitive endpoints.",
      },
      {
        title: "REST or GraphQL — Your Choice",
        description:
          "REST is simple and universal. GraphQL lets apps request exactly the data they need. We recommend the best fit for your use case.",
      },
    ],
    faqs: [
      {
        id: "api-mobile",
        question: "Can our mobile app use the same API?",
        answer:
          "Absolutely. One well-built API serves web, iOS, Android, and partner integrations — single source of truth for all platforms.",
      },
      {
        id: "api-version",
        question: "What happens when we add new features?",
        answer:
          "We version APIs carefully so existing integrations keep working while new capabilities roll out smoothly.",
      },
      {
        id: "api-test",
        question: "How do you ensure reliability?",
        answer:
          "Automated tests, monitoring, and staging environments catch issues before they reach production. Uptime is tracked 24/7.",
      },
    ],
  },
  {
    slug: "speed-security",
    title: "Website Speed & Security Hardening",
    menuDescription:
      "Make your site faster, safer, and trusted by Google and your customers.",
    icon: "shield",
    hero: {
      eyebrow: "Website Speed & Security Hardening",
      title: "A website that's fast to load and tough to hack — your customers notice both.",
      lead:
        "Slow sites lose visitors. Hacked sites lose trust. We audit your website's performance and security, then apply proven fixes — caching, compression, firewalls, SSL, and malware protection — so you rank better on Google and sleep better at night.",
    },
    features: [
      {
        title: "Blazing Load Times",
        description:
          "Image optimization, code minification, CDN setup, and smart caching cut load times dramatically. Google rewards fast sites with better rankings.",
      },
      {
        title: "Security Hardening",
        description:
          "Firewalls, malware scanning, secure headers, and login protection block common attacks. We close the doors hackers usually walk through.",
      },
      {
        title: "Ongoing Monitoring",
        description:
          "Uptime checks and security alerts notify us instantly if something looks wrong — often before your customers ever notice.",
      },
    ],
    faqs: [
      {
        id: "speed-measure",
        question: "How much faster will my site get?",
        answer:
          "Most clients see 40–70% improvement in load times. We measure before and after with real tools so you see concrete results.",
      },
      {
        id: "speed-wordpress",
        question: "Do you work on existing WordPress sites?",
        answer:
          "Yes. WordPress sites often have plugin bloat and caching misconfigurations. We clean up and optimize without breaking your content.",
      },
      {
        id: "speed-ssl",
        question: "Is SSL included?",
        answer:
          "We ensure HTTPS is properly configured with modern certificates. The padlock icon builds customer trust and is required for good SEO.",
      },
    ],
  },
];

/** Shared 3-step process for all service pages. */
export const serviceProcessSteps = [
  {
    id: "discovery",
    title: "Discovery Call",
    description:
      "We talk about your business goals and map out a clear plan.",
  },
  {
    id: "design",
    title: "Design & Engineering",
    description:
      "We design layouts and build your robust system while giving you weekly updates.",
  },
  {
    id: "launch",
    title: "Testing & Launch",
    description:
      "We run rigorous quality checks and launch your platform safely to the world.",
  },
];

/** Shared pricing summary for service pages. */
export const servicePricingSummary = [
  { label: "Standard Rate", value: "$42/hr" },
  { label: "Complex Systems", value: "$75/hr" },
  { label: "Fixed Scope Projects", value: "From $120+" },
  { label: "Strategy Call", value: "100% FREE" },
];

/** @param {string} slug */
export function getServiceBySlug(slug) {
  return coreServices.find((service) => service.slug === slug) ?? null;
}
