// Portfolio work samples — shown on the Tools page as client-friendly showcase cards.

/** @type {import("@/types").WorkShowcaseItem[]} */
export const WORK_SHOWCASE_ITEMS = [
  {
    id: "web-app-ui",
    badge: "Dashboard",
    badgeTone: "blue",
    title: "Fleet Management Dashboard",
    description:
      "See all your vehicles, routes, and daily updates in one simple screen. Easy to read charts and numbers help your team stay on top of every delivery.",
    image: "/images/work/fleety-tms-dashboard.png",
    imageAlt:
      "Fleet management dashboard showing vehicle tracking, routes, and daily business updates",
    stats: [
      { label: "Custom design", value: "Yes" },
      { label: "Dark mode", value: "Yes" },
      { label: "Ready to use", value: "Yes" },
    ],
    cta: { label: "Discuss This Project", href: "/contact" },
  },
  {
    id: "clario-crm-platform",
    badge: "CRM",
    badgeTone: "blue",
    title: "Customer Management System",
    description:
      "Keep all your customers, sales, and follow-ups in one place. Your team can see who to call, what stage each deal is at, and never miss an important update.",
    image: "/images/work/clario-crm-platform.jpg",
    imageAlt:
      "Customer management system with contact list, sales pipeline, and team activity tracking",
    stats: [
      { label: "Sales tracking", value: "Built-in" },
      { label: "Customer list", value: "Built-in" },
      { label: "Team ready", value: "Yes" },
    ],
    cta: { label: "Discuss This Project", href: "/contact" },
  },
  {
    id: "orders-management-table",
    badge: "Orders",
    badgeTone: "purple",
    title: "Order Management Panel",
    description:
      "View, search, and manage all your orders from one screen. Filter by status, sort by date, and handle multiple orders at once — no more messy spreadsheets.",
    image: "/images/work/orders-management-table.png",
    imageAlt:
      "Order management panel with searchable order list, status filters, and quick actions",
    stats: [
      { label: "Search & filter", value: "Built-in" },
      { label: "Bulk actions", value: "Yes" },
      { label: "Admin ready", value: "Yes" },
    ],
    cta: { label: "Discuss This Project", href: "/contact" },
  },
  {
    id: "sign-in-galaxy",
    badge: "Login Pages",
    badgeTone: "orange",
    title: "Login & Sign Up Pages",
    description:
      "Clean and modern pages where your users can log in or create an account. Looks great on phones, tablets, and computers — first impressions matter.",
    image: "/images/work/sign-in-galaxy-dark.png",
    imageAlt:
      "Login and sign up pages with a modern dark design that works on all devices",
    stats: [
      { label: "Dark mode", value: "Yes" },
      { label: "Login & signup", value: "Yes" },
      { label: "All devices", value: "Yes" },
    ],
    cta: { label: "Discuss This Project", href: "/contact" },
  },
  {
    id: "ai-podcast-authentication",
    badge: "Login Pages",
    badgeTone: "purple",
    title: "Login & Sign Up — Media App",
    description:
      "Simple login pages for your app or website. Users can sign in with email or their Google and social accounts — quick, familiar, and hassle-free.",
    image: "/images/work/ai-podcast-authentication.png",
    imageAlt:
      "Login and sign up page with email and social account options in a clean dark design",
    stats: [
      { label: "Login & signup", value: "Yes" },
      { label: "Social login", value: "Yes" },
      { label: "Dark theme", value: "Yes" },
    ],
    cta: { label: "Discuss This Project", href: "/contact" },
  },
  {
    id: "doctors-clinic-blog",
    badge: "Blog",
    badgeTone: "indigo",
    title: "Blog Page",
    description:
      "A clean blog page to share helpful articles and tips with your customers. Easy to read layout that builds trust and helps people find you on Google.",
    image: "/images/work/doctors-clinic-blog.png",
    imageAlt:
      "Blog page with article cards, helpful tips, and an easy-to-read layout",
    stats: [
      { label: "Blog posts", value: "Built-in" },
      { label: "Dark theme", value: "Yes" },
      { label: "Google friendly", value: "Yes" },
    ],
    cta: { label: "Discuss This Project", href: "/contact" },
  },
];

export const WORK_SHOWCASE_SECTION = {
  badge: "Our Work",
  title: "Real projects built for real business outcomes.",
  lead:
    "Take a look at sample pages we've built — dashboards, customer tools, order panels, login screens, and blogs. Each one is designed to be clear, fast, and easy for your customers to use.",
};

/** Tools page — capabilities section below the showcase cards */
export const TOOLS_FEATURES_SECTION = {
  badge: "What We Build",
  title: "We turn these sample pages into real tools for your business.",
  lead:
    "Everything you saw above — dashboards, customer systems, order panels, login pages, and blogs — we build it custom for you. No templates. No confusing tech talk. Just tools that help you sell more, serve customers better, and save time every day.",
};

/** @type {import("@/types").ServiceFeature[]} */
export const TOOLS_FEATURES = [
  {
    subtitle: "Dashboards & Business Tools",
    title: "Run your business from one easy screen",
    description:
      "Like the fleet dashboard, customer system, and order panel above — we build screens where your team can track deliveries, manage customers, and handle orders without messy spreadsheets or switching between apps.",
  },
  {
    subtitle: "Login & Sign Up Pages",
    title: "Let your customers log in without any hassle",
    description:
      "Clean, modern login pages that work on phones, tablets, and computers. Your users sign in with email or Google in seconds — safe, simple, and professional from the very first click.",
  },
  {
    subtitle: "Blog & Content Pages",
    title: "Share helpful content that brings in new customers",
    description:
      "A blog page like the one above helps you share tips, updates, and advice with your audience. Easy to read, looks trustworthy, and helps people discover your business on Google.",
  },
];
