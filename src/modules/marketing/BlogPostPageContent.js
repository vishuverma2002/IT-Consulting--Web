"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { EASE } from "@/lib/motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

const ARTICLE_BODIES = {
  "why-website-speed-matters": [
    {
      heading: "Speed is a first impression",
      text: "When someone clicks your link, they decide in seconds whether to stay or leave. If your site takes more than 3 seconds to load, many visitors bounce — often to a competitor. Speed isn't a nice-to-have; it's how you keep attention in a crowded market.",
    },
    {
      heading: "What actually slows sites down",
      text: "Huge unoptimized images, too many plugins, cheap hosting, and bloated code are the usual suspects. The good news: most fixes don't require rebuilding your entire site. Compression, caching, and a content delivery network (CDN) often cut load times in half.",
    },
    {
      heading: "Google cares about speed",
      text: "Search engines rank faster sites higher because they deliver a better experience. Core Web Vitals — Google's speed metrics — directly affect where you appear in search results. Faster sites get more organic traffic without spending more on ads.",
    },
    {
      heading: "What you can do today",
      text: "Start with a free speed test (Google PageSpeed Insights works well). Fix the biggest issues first: compress images, enable caching, and upgrade hosting if needed. If you're on WordPress, audit plugins and remove anything you don't actively use.",
    },
  ],
  "custom-vs-template-websites": [
    {
      heading: "Templates: fast and affordable",
      text: "Pre-made themes get you online quickly and cheaply. They're great for simple brochure sites, personal projects, or testing an idea. The trade-off: you share the same look as thousands of others, and customization hits limits fast.",
    },
    {
      heading: "Custom: built for your business",
      text: "Custom development costs more upfront but fits your exact workflow. Need a client portal, complex pricing, or integrations with your CRM? Custom handles it. You're not fighting a template — the site is designed around how you actually operate.",
    },
    {
      heading: "The honest middle ground",
      text: "Many businesses start with a polished WordPress custom design — not a $20 theme, but a tailored build on a solid framework. You get brand uniqueness, easy self-editing, and room to grow without a full rebuild later.",
    },
    {
      heading: "How to decide",
      text: "Ask: will this site need unique features in the next 12 months? If yes, lean custom. If it's mainly information and contact forms, a well-built template or custom WordPress site may be enough. We're happy to advise on a free call — no pressure.",
    },
  ],
  "wordpress-security-basics": [
    {
      heading: "WordPress is popular — and targeted",
      text: "Because WordPress powers so many sites, hackers automate attacks against common vulnerabilities. That doesn't mean WordPress is unsafe — it means security must be intentional, not an afterthought.",
    },
    {
      heading: "Keep software updated",
      text: "Outdated plugins and themes are the #1 entry point. We configure automatic updates for minor patches and schedule monthly reviews for major ones — so security fixes apply without you thinking about it.",
    },
    {
      heading: "Strong login protection",
      text: "Default login URLs, weak passwords, and unlimited login attempts invite brute-force attacks. We change login paths, enforce strong passwords, and add rate limiting so bots can't hammer your site.",
    },
    {
      heading: "Backups and monitoring",
      text: "Even with perfect security, backups are your safety net. Daily automated backups stored off-site mean you can recover from any incident in hours, not days. Monitoring alerts us if malware or downtime is detected.",
    },
  ],
  "when-to-invest-in-backend": [
    {
      heading: "Spreadsheets have a ceiling",
      text: "Excel and Google Sheets work until they don't — when multiple people edit at once, formulas break, files get corrupted, or reports take minutes to load. That's usually the signal you've outgrown manual tools.",
    },
    {
      heading: "Signs you need a backend",
      text: "You're re-entering the same data in multiple places. Customer info lives in five different files. You can't give clients a login to check their own orders. Your team waits on one person to run reports. Sound familiar?",
    },
    {
      heading: "What a backend actually gives you",
      text: "One central database everyone trusts. Automated workflows — order placed, invoice sent, inventory updated. Secure client portals. Reports that refresh in real time. Less copy-paste, fewer mistakes, more time for growth.",
    },
    {
      heading: "Starting doesn't mean building everything",
      text: "We often begin with an MVP focused on your biggest pain point — maybe order management or client billing. Prove value quickly, then expand. You don't need a Netflix-scale system on day one.",
    },
  ],
};

/**
 * @param {{ post: import("@/types").BlogPost }} props
 */
export default function BlogPostPageContent({ post }) {
  const reducedMotion = usePrefersReducedMotion();
  const sections = ARTICLE_BODIES[post.slug] ?? [];

  return (
    <article data-page={`blog-${post.slug}`}>
      <section className="relative overflow-hidden border-b border-[#e6e8ee] bg-gradient-to-br from-[#eef1ff] via-[#f8f9ff] to-[#f0f4ff] py-16 sm:py-20">
        <Container as="div" className="relative z-10">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              Back to blog
            </Link>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-[#64748b]">
              <span className="rounded-full bg-[#eef1ff] px-3 py-1 font-medium text-brand">
                {post.category}
              </span>
              <span>{post.readTime}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#64748b]">{post.excerpt}</p>
          </motion.div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container as="div">
          <div className="mx-auto max-w-3xl space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.heading}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px 0px" }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: EASE }}
              >
                <h2 className="text-xl font-bold text-[#0f172a] sm:text-2xl">
                  {section.heading}
                </h2>
                <p className="mt-3 leading-relaxed text-[#475569]">{section.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#e6e8ee] bg-[#f8f9ff] py-12">
        <Container as="div">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-bold text-[#0f172a]">Want help implementing this?</h2>
            <p className="mt-2 text-[#64748b]">
              We turn advice into working software. Book a free call to discuss your project.
            </p>
            <div className="mt-5">
              <Button as={Link} href="/contact" variant="primary">
                Get a Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
