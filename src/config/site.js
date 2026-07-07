// Central, single-source-of-truth for static site metadata.
// Kept in `config/` (not hardcoded in components) so branding/contact details
// can change in ONE place. This mirrors how the reference site repeats the same
// company name, phone, and email across header, footer, and CTA blocks.

export const siteConfig = {
  name: "CodeForge Consulting",
  tagline: "Automation & Advisory Systems Your Team Can Trust",
  description:
    "We help businesses build robust web applications, high-performance Java backends, and secure WordPress systems to drive digital transformation and eliminate technical bottlenecks.",
  contact: {
    phone: "+91 7906115844",
    email: "vishuverma29122002@gmail.com",
  },
  // Surface-level marketing proof points (rendered by MetricsSection).
  stats: [
    { id: "projects", value: "500+", label: "Projects Delivered", note: "Excel, Access, integrations" },
    { id: "experience", value: "14+", label: "Years Experience", note: "since 2010" },
    { id: "clients", value: "Global", label: "Clients Served", note: "US, UK, Canada" },
    { id: "expertise", value: "Business", label: "Automation Experts", note: "operations & finance teams" },
  ],
};
