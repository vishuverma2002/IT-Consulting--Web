// Navigation is DATA, not markup.
// Defining nav trees as plain config means Header/Footer/Sidebar simply map over
// arrays. Adding a route never requires touching the navigation components, only
// this file.
// Public marketing header navigation.
export const marketingNav = [
  { label: "Services", href: "/services", megaMenu: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Tools", href: "/tools" },
  { label: "Pricing", href: "/pricing" },
];

export const pageGuideLinks = [
  { label: "Services overview", href: "/services" },
  { label: "Case studies & results", href: "/case-studies" },
  { label: "Pricing plans", href: "/pricing" },
  { label: "About us", href: "/about" },
  { label: "Development process", href: "/process" },
  { label: "Web development tools", href: "/tools" },
  { label: "Contact us", href: "/contact" },
];

// Footer link columns — 5 nav columns + brand block rendered in Footer.js.
export const footerNav = [
  {
    title: "Solutions",
    items: [
      { label: "Enterprise Web Applications", href: "/solutions/enterprise-web-applications" },
      { label: "High-Scale Backend Architectures", href: "/solutions/high-scale-backend-architectures" },
      { label: "Custom Business Portals", href: "/solutions/custom-business-portals" },
      { label: "API Integrations & Microservices", href: "/solutions/api-integrations-microservices" },
      { label: "E-commerce Ecosystems", href: "/solutions/ecommerce-ecosystems" },
      { label: "Cloud Migration Solutions", href: "/solutions/cloud-migration-solutions" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Full-Stack Web Development", href: "/services/web-development" },
      { label: "Java Spring Boot Development", href: "/services/java-backend" },
      { label: "Custom WordPress Design", href: "/services/wordpress" },
      { label: "Database Architecture & Optimization", href: "/services/database-architecture" },
      { label: "Restful & GraphQL API Engineering", href: "/services/api-engineering" },
      { label: "Website Speed & Security Hardening", href: "/services/speed-security" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Finance & Fintech", href: "/industries/finance-fintech" },
      { label: "E-commerce & Retail", href: "/industries/ecommerce-retail" },
      { label: "Healthcare Systems", href: "/industries/healthcare-systems" },
      { label: "Logistics & Supply Chain", href: "/industries/logistics-supply-chain" },
      { label: "SaaS & Tech Startups", href: "/industries/saas-tech-startups" },
      { label: "Real Estate & Professional Services", href: "/industries/real-estate-professional-services" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Tech Blog", href: "/blog" },
      { label: "Case Studies / Portfolio", href: "/case-studies" },
      { label: "Frequently Asked Questions (FAQ)", href: "/faq" },
      { label: "System Architecture Guides", href: "/resources/architecture" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Our Agency", href: "/about" },
      { label: "Contact & Support", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

// Authenticated dashboard sidebar navigation.
// `icon` is intentionally a string token (not a component) so the presentation
// layer decides how to render it later when an icon system is introduced.
export const dashboardNav = [
  { label: "Overview", href: "/dashboard", icon: "grid" },
  { label: "Profile", href: "/dashboard/profile", icon: "user" },
  { label: "Clients", href: "/dashboard/clients", icon: "users" },
  { label: "Analytics", href: "/dashboard/analytics", icon: "chart" },
  { label: "Appointments", href: "/dashboard/appointments", icon: "calendar" },
  { label: "Settings", href: "/dashboard/settings", icon: "settings" },
];
