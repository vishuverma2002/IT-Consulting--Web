"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { footerNav, marketingNav, pageGuideLinks } from "@/config/navigation";
import { coreServices } from "@/config/services";
import { solutions, industries } from "@/config/footerPages";
import { EASE, staggerContainer, staggerItem } from "@/lib/motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const EXTRA_SECTIONS = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      ...marketingNav.map((item) => ({ label: item.label, href: item.href })),
    ],
  },
  {
    title: "Services",
    links: coreServices.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    title: "Solutions",
    links: solutions.map((item) => ({
      label: item.title,
      href: `/solutions/${item.slug}`,
    })),
  },
  {
    title: "Industries",
    links: industries.map((item) => ({
      label: item.title,
      href: `/industries/${item.slug}`,
    })),
  },
  {
    title: "Resources",
    links: [
      { label: "Tech Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "FAQ", href: "/faq" },
      { label: "Architecture Guides", href: "/resources/architecture" },
      { label: "Tools", href: "/tools" },
    ],
  },
  {
    title: "Company & Legal",
    links: footerNav
      .find((col) => col.title === "Company")
      ?.items.map((item) => ({ label: item.label, href: item.href })) ?? [],
  },
  {
    title: "Quick Links",
    links: pageGuideLinks,
  },
];

export default function SitemapPageContent() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div data-page="sitemap">
      <section className="border-b border-[#e6e8ee] bg-gradient-to-br from-[#eef1ff] via-[#f8f9ff] to-[#f0f4ff] py-14 sm:py-16">
        <Container as="div">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <h1 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Sitemap
            </h1>
            <p className="mt-3 text-[#64748b]">
              Every page on {EXTRA_SECTIONS.length > 0 ? "our website" : "the site"} —
              organized for easy browsing.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container as="div">
          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-40px 0px" }}
          >
            {EXTRA_SECTIONS.map((section) => (
              <motion.nav
                key={section.title}
                variants={staggerItem}
                aria-label={section.title}
                className="rounded-2xl border border-[#e6e8ee] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand">
                  {section.title}
                </h2>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={`${section.title}-${link.href}`}>
                      <Link
                        href={link.href}
                        className="text-[#475569] transition-colors hover:text-brand hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            ))}
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
