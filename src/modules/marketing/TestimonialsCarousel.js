"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";

// TestimonialsCarousel: premium "What Clients Say" social-proof band.
// MOTION: reuses the shared reveal language (single IntersectionObserver toggling
// data-visible, staggered cards via --card-i) and the pointer-tracked border glow
// pattern (writes --mx/--my to CSS custom properties so React never re-renders on
// pointer move). All color is drawn from the shared theme tokens (--accent / --ink
// / --muted) plus the same var(--accent-secondary) blue used elsewhere — no new palette.
// LAYOUT: a 2×2 responsive grid (2 cols tablet, 1 col mobile) so all four
// enterprise testimonials read at a glance — equal-height glassmorphism cards.

const DEFAULT_TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "Working with Vishu Verma was a great experience. Our website redesign was delivered with excellent attention to detail, faster performance, and a much more professional user experience. The project helped us improve customer engagement and reduce manual follow-ups.",
    author: "Shefali Sihag",
    role: "Business Manager · InvestLytics",
    avatar: "SS",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Rajan Verma delivered a well-structured frontend and backend solution that exceeded expectations. Communication remained clear throughout the project and the final platform felt scalable, modern, and reliable for our business needs.",
    author: "Amit Sharma",
    role: "Product Manager",
    avatar: "AS",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Vishu Verma transformed our digital presence with a clean website architecture and smooth user experience. The final solution was easy to manage, optimized for growth, and delivered measurable business value.",
    author: "Rohit Kapoor",
    role: "Founder · GrowthEdge Solutions",
    avatar: "RK",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "We partnered with Rajan Verma for our platform modernization initiative and the execution was exceptional. The WordPress and backend implementation improved speed, usability, and operational efficiency across teams.",
    author: "Emily Morgan",
    role: "Operations Director · Nova Digital USA",
    avatar: "EM",
    rating: 5,
  },
];

// Build initials from a name: "Operations Lead" -> "OL".
function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.6l2.7 5.47 6.04.88-4.37 4.26 1.03 6.02L12 16.9l-5.4 2.84 1.03-6.02-4.37-4.26 6.04-.88L12 2.6Z" />
  </svg>
);

function TestimonialCard({ testimonial, index }) {
  const cardRef = useRef(null);
  const rating = testimonial.rating ?? 5;

  // Track the pointer so the glowing border + soft light pool follow the cursor.
  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      ref={cardRef}
      className="tm-card"
      style={{ "--card-i": index }}
      onMouseMove={handleMouseMove}
    >
      <div className="tm-card-inner">
        <div
          className="tm-rating"
          role="img"
          aria-label={`Rated ${rating} out of 5`}
        >
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        <blockquote className="tm-quote">{testimonial.quote}</blockquote>

        <figcaption className="tm-author">
          <span className="tm-avatar" aria-hidden="true">
            {testimonial.avatar ?? getInitials(testimonial.author)}
          </span>
          <span className="tm-author-meta">
            <span className="tm-author-name">{testimonial.author}</span>
            <span className="tm-author-role">{testimonial.role}</span>
          </span>
        </figcaption>
      </div>
    </article>
  );
}

export default function TestimonialsCarousel({ testimonials = DEFAULT_TESTIMONIALS }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [active, setActive] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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

  // Track scroll position so the prev/next arrows enable/disable at the edges.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const updateArrows = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      setCanScrollPrev(scrollLeft > 4);
      setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 4);
    };
    updateArrows();
    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [testimonials]);

  const scrollByCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector("li");
    const step = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      data-component="testimonials"
      data-visible={active ? "true" : "false"}
      aria-labelledby="testimonials-heading"
    >
      <div className="tm-bg" aria-hidden="true">
        <span className="tm-orb tm-orb--1" />
        <span className="tm-orb tm-orb--2" />
      </div>

      <Container as="div">
        <header className="tm-head">
          <span className="tm-heading-glow" aria-hidden="true" />
          <span className="tm-badge">Client Testimonials</span>
          <h2 id="testimonials-heading" className="tm-heading">
            Results from websites, backend systems, and digital transformation
            projects
          </h2>
          <p className="tm-lead">
            See how businesses improved performance, user experience, and
            operational efficiency through our solutions.
          </p>
        </header>

        <div className="tm-carousel">
          <button
            type="button"
            className="tm-nav tm-nav--prev"
            aria-label="Scroll to previous testimonials"
            onClick={() => scrollByCards(-1)}
            disabled={!canScrollPrev}
          >
            <span aria-hidden="true">&larr;</span>
          </button>

          <ul className="tm-grid" ref={trackRef}>
            {testimonials.map((testimonial, index) => (
              <li key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} index={index} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="tm-nav tm-nav--next"
            aria-label="Scroll to next testimonials"
            onClick={() => scrollByCards(1)}
            disabled={!canScrollNext}
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </Container>
    </section>
  );
}
