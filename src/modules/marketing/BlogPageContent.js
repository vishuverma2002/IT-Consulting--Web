"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/config/footerPages";
import {
  EASE,
  fadeUp,
  staggerContainer,
  staggerItem,
  inViewProps,
} from "@/lib/motion";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function BlogPageContent() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div data-page="blog">
      <section
        className="relative overflow-hidden border-b border-[#e6e8ee] bg-gradient-to-br from-[#eef1ff] via-[#f8f9ff] to-[#f0f4ff] py-16 sm:py-20 lg:py-24"
        aria-labelledby="blog-hero-heading"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[var(--accent)]/15 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[var(--accent-secondary)]/10 blur-3xl" />
        </div>
        <Container as="div" className="relative z-10">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Tech Blog
            </span>
            <h1
              id="blog-hero-heading"
              className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl"
            >
              Ideas & insights — in plain English
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#64748b]">
              Practical articles on websites, backends, and security. No jargon —
              just clear advice for business owners who want better results online.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-label="Blog articles">
        <Container as="div">
          <motion.ul
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
            variants={staggerContainer}
            initial={reducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-40px 0px" }}
          >
            {blogPosts.map((post) => (
              <motion.li key={post.slug} variants={staggerItem}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e8ee] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30 hover:shadow-lg">
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-[#64748b]">
                      <span className="rounded-full bg-[#eef1ff] px-3 py-1 font-medium text-brand">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="text-xl font-bold text-[#0f172a] transition-colors group-hover:text-brand sm:text-2xl">
                      <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 relative">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 leading-relaxed text-[#64748b]">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-transform group-hover:translate-x-1"
                    >
                      Read article
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </section>

      <section className="border-t border-[#e6e8ee] bg-[#f8f9ff] py-16">
        <Container as="div">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={fadeUp}
            {...inViewProps(reducedMotion)}
          >
            <h2 className="text-2xl font-bold text-[#0f172a]">Have a project in mind?</h2>
            <p className="mt-3 text-[#64748b]">
              Book a free consultation — we&apos;ll listen to your goals and suggest
              practical next steps.
            </p>
            <div className="mt-6">
              <Button as={Link} href="/contact" variant="primary">
                Get a Free Consultation
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
