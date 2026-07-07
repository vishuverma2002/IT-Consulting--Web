"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import AboutHeroStyles from "@/modules/marketing/AboutHeroStyles";
import {
  EASE,
  inViewProps,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

const EXPERTISE = [
  {
    id: "web-apps",
    icon: "layers",
    title: "Custom Websites & Web Apps",
    text: "We build fast, easy-to-use websites and online tools that look great on phones, tablets, and computers — so your customers enjoy a smooth experience every time they visit.",
    points: [
      "Pages that load quickly and look professional",
      "Built around your brand, not a generic template",
      "Simple for your team to use every day",
    ],
    accent: "var(--accent-secondary)",
    tag: "Websites",
  },
  {
    id: "backends",
    icon: "database",
    title: "Backend Systems That Power Your Business",
    text: "Every website needs a strong engine behind the scenes. We build the secure system that stores your data, handles logins, and keeps everything running — even when more customers show up at once.",
    points: [
      "Keeps your customer and business data safe",
      "Handles growth without slowing down or crashing",
      "Makes future updates easier and less costly",
    ],
    accent: "var(--accent-secondary)",
    tag: "Backend",
  },
  {
    id: "wordpress",
    icon: "globe",
    title: "WordPress Sites You Can Update Yourself",
    text: "Need a website you can change without calling a developer every time? We build custom WordPress sites that load fast, show up well on Google, and let you edit text and images on your own.",
    points: [
      "Update pages, blogs, and images without coding",
      "Built to help you rank on search engines",
      "Secure, fast, and easy to maintain long term",
    ],
    accent: "var(--accent-hover)",
    tag: "WordPress",
  },
  {
    id: "integrations",
    icon: "plug",
    title: "Connect Your Business Tools Together",
    text: "When your CRM, payment tool, inventory, and website do not talk to each other, work piles up. We connect your systems so information flows automatically and your team stops copying and pasting.",
    points: [
      "Sync orders, customers, and stock across tools",
      "Reduce manual work and costly mistakes",
      "One connected setup instead of scattered systems",
    ],
    accent: "var(--accent)",
    tag: "Integrations",
  },
];

const CLIENT_DELIVERABLES = [
  {
    id: "business-outcomes",
    icon: "target",
    title: "Scoped Around Business Outcomes",
    text: "We don\u2019t just deliver code or a generic website; we design solutions around your real business goals\u2014whether it\u2019s accelerating page load speeds, boosting user conversions, or bulletproofing security to keep your business running smoothly 24/7.",
    accent: "var(--accent-secondary)",
  },
  {
    id: "high-performance",
    icon: "zap",
    title: "High-Performance Architecture",
    text: "Powered by a robust Java Backend, we build lightning-fast, enterprise-grade secure systems. Even if your traffic scales 10x or encounters hundreds of thousands of concurrent users, your platform stays reliable without a single glitch.",
    accent: "var(--accent-secondary)",
  },
  {
    id: "right-tool",
    icon: "wrench",
    title: "The Right Tool for the Job",
    text: "We don\u2019t believe in a one-size-fits-all approach. We leverage WordPress for highly flexible, user-friendly marketing sites and blogs, while building heavy-duty Java architectures for secure data processing and custom APIs.",
    accent: "var(--accent-hover)",
  },
  {
    id: "enterprise-standards",
    icon: "briefcase",
    title: "Proven Enterprise Standards",
    text: "With deep-rooted experience in complex web ecosystems, modern API integrations, and clean database engineering, we deliver flawless technical structures that are tester-certified and ready to scale immediately.",
    accent: "var(--accent)",
  },
  {
    id: "clear-pricing",
    icon: "gem",
    title: "Crystal Clear Pricing",
    text: "No hidden costs, no surprise retainers. We operate on milestone-based flat pricing or highly transparent hourly models, backed by documented project scopes, clear written deliverables, and rapid response times.",
    accent: "var(--accent)",
  },
  {
    id: "partnership",
    icon: "handshake",
    title: "End-to-End Lifelong Partnership",
    text: "Our job doesn\u2019t end at launch. From initial requirement blueprinting and custom UI design to final deployment and ongoing optimization, we act as your dedicated, long-term technical backbone.",
    accent: "var(--accent)",
  },
];

const ABOUT_HERO_POINTS = [
  "Production-ready code — no brittle workarounds",
  "Secure, scalable architecture from day one",
  "One team for design, development & long-term support",
];

const ABOUT_CLIENT_BENEFITS = [
  {
    id: "consultation",
    title: "Free 30-min architecture call",
    detail: "Scope, feasibility & next steps — before you commit to anything.",
    icon: "call",
    accent: { from: "var(--accent-secondary)", to: "var(--accent)", glow: "rgba(99, 102, 241, 0.5)", soft: "rgba(99, 102, 241, 0.14)" },
  },
  {
    id: "nda",
    title: "NDA & full IP ownership",
    detail: "Your code, your data, your product — protected from day one.",
    icon: "shield",
    accent: { from: "var(--accent-secondary)", to: "var(--accent)", glow: "rgba(56, 109, 255, 0.5)", soft: "rgba(56, 109, 255, 0.14)" },
  },
  {
    id: "roadmap",
    title: "Transparent roadmap upfront",
    detail: "Clear milestones, timeline & cost estimate before development starts.",
    icon: "map",
    accent: { from: "var(--accent-hover)", to: "var(--accent-secondary)", glow: "rgba(124, 58, 237, 0.5)", soft: "rgba(124, 58, 237, 0.14)" },
  },
  {
    id: "support",
    title: "Post-launch partnership",
    detail: "Monitoring, updates & dedicated support long after go-live.",
    icon: "heart",
    accent: { from: "var(--accent)", to: "var(--accent-secondary)", glow: "rgba(79, 70, 229, 0.5)", soft: "rgba(79, 70, 229, 0.14)" },
  },
];

const ABOUT_HERO_LOGOS = [
  "Northwind",
  "Globex",
  "Initech",
  "Umbrella",
  "Soylent",
  "Hooli",
];

function AboutPageStyles() {
  return (
    <style>{`
      @keyframes about-orb-float {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(12px, -18px) scale(1.05); }
        66% { transform: translate(-8px, 10px) scale(0.97); }
      }

      @keyframes about-gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      @keyframes about-shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }

      @keyframes about-cta-glow {
        0%, 100% {
          box-shadow: 0 14px 32px -10px rgba(79, 70, 229, 0.55);
        }
        50% {
          box-shadow:
            0 18px 40px -8px rgba(79, 70, 229, 0.72),
            0 0 32px -4px rgba(99, 102, 241, 0.45);
        }
      }

      [data-component="about-page"] .about-orb {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        filter: blur(60px);
        animation: about-orb-float 9s ease-in-out infinite;
      }

      [data-component="about-page"] .about-orb--1 {
        top: -4rem;
        right: -2rem;
        width: 18rem;
        height: 18rem;
        background: rgba(79, 70, 229, 0.18);
        animation-delay: 0s;
      }

      [data-component="about-page"] .about-orb--2 {
        bottom: -5rem;
        left: -3rem;
        width: 16rem;
        height: 16rem;
        background: rgba(56, 109, 255, 0.14);
        animation-delay: -3s;
      }

      [data-component="about-page"] .about-orb--3 {
        top: 40%;
        left: 55%;
        width: 10rem;
        height: 10rem;
        background: rgba(124, 58, 237, 0.1);
        animation-delay: -5s;
      }

      [data-component="about-expertise"] {
        position: relative;
        isolation: isolate;
        overflow: hidden;
        background:
          linear-gradient(180deg, transparent 0%, transparent 20%),
          linear-gradient(180deg, #eef1fb 0%, #ffffff 45%, #f5f7ff 100%);
      }

      [data-component="about-expertise"] .about-expertise-dot-pattern {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(circle, rgba(79, 70, 229, 0.06) 1px, transparent 1px);
        background-size: 20px 20px;
        mask-image: radial-gradient(ellipse 85% 75% at 50% 40%, #000 15%, transparent 100%);
      }

      [data-component="about-expertise"] .about-expertise-orb--3 {
        top: 35%;
        left: 50%;
        width: 14rem;
        height: 14rem;
        transform: translateX(-50%);
        background: rgba(124, 58, 237, 0.1);
        animation-delay: -8s;
      }

      [data-component="about-expertise"] .about-expertise-bg {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 0;
      }

      [data-component="about-expertise"] .about-expertise-grid-texture {
        position: absolute;
        inset: 0;
        opacity: 0.45;
        background-image:
          linear-gradient(rgba(79, 70, 229, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79, 70, 229, 0.05) 1px, transparent 1px);
        background-size: 40px 40px;
        mask-image: radial-gradient(ellipse 80% 70% at 50% 40%, #000 20%, transparent 75%);
      }

      [data-component="about-expertise"] .about-expertise-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(70px);
        animation: about-expertise-orb-drift 14s ease-in-out infinite;
      }

      [data-component="about-expertise"] .about-expertise-orb--1 {
        top: -4rem;
        left: -3rem;
        width: 20rem;
        height: 20rem;
        background: rgba(99, 102, 241, 0.14);
      }

      [data-component="about-expertise"] .about-expertise-orb--2 {
        bottom: -5rem;
        right: -2rem;
        width: 18rem;
        height: 18rem;
        background: rgba(56, 109, 255, 0.12);
        animation-delay: -5s;
      }

      @keyframes about-expertise-orb-drift {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(16px, -12px); }
      }

      [data-component="about-expertise"] .about-expertise-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        margin-bottom: 0.75rem;
        padding: 0.4375rem 1rem;
        border-radius: var(--radius-pill);
        background: rgba(255, 255, 255, 0.85);
        border: 1px solid var(--hero-badge-bg);
        box-shadow:
          0 4px 20px -6px rgba(79, 70, 229, 0.18);
        color: var(--accent);
        font-size: 0.6875rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      [data-component="about-expertise"] .about-expertise-badge-dot {
        width: 0.35rem;
        height: 0.35rem;
        border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 0 3px var(--brand-mark-glow);
        animation: about-badge-pulse 2.4s ease-in-out infinite;
      }

      @keyframes about-badge-pulse {
        0%, 100% { box-shadow: 0 0 0 3px var(--brand-mark-glow); }
        50% { box-shadow: 0 0 0 6px rgba(79, 70, 229, 0.06); }
      }

      [data-component="about-expertise"] .about-expertise-headline {
        position: relative;
        display: inline-block;
        font-size: clamp(1.75rem, 3.5vw, 2.625rem);
        font-weight: 800;
        letter-spacing: -0.04em;
        line-height: 1.12;
      }

      [data-component="about-expertise"] .about-expertise-accent {
        background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 50%, var(--accent-secondary) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      [data-component="about-expertise"] .about-expertise-headline::after {
        content: "";
        display: block;
        width: min(52%, 14rem);
        height: 3px;
        margin: 0.875rem auto 0;
        border-radius: 3px;
        background: linear-gradient(90deg, transparent, var(--accent), var(--hero-accent), var(--accent-secondary), transparent);
      }

      [data-component="about-expertise"] .about-expertise-stats {
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        margin: 1.25rem 0 0;
        padding: 0;
        list-style: none;
      }

      [data-component="about-expertise"] .about-expertise-stat {
        display: inline-flex;
        align-items: center;
        gap: 0.4375rem;
        padding: 0.4375rem 0.875rem;
        border-radius: var(--radius-pill);
        border: 1px solid var(--accent-soft);
        background: rgba(255, 255, 255, 0.75);
        box-shadow: 0 2px 12px -6px var(--brand-mark-glow);
        font-size: 0.8125rem;
        color: var(--muted);
        transition:
          transform 0.25s ease,
          border-color 0.25s ease,
          box-shadow 0.25s ease;
      }

      [data-component="about-expertise"] .about-expertise-stat strong {
        font-weight: 700;
        color: var(--accent);
        letter-spacing: -0.02em;
      }

      [data-component="about-expertise"] .about-expertise-stat:hover {
        transform: translateY(-2px);
        border-color: var(--accent-border);
        box-shadow: 0 6px 18px -8px var(--accent-border);
      }

      [data-component="about-page"] .about-expertise-card {
        --mx: 50%;
        --my: 0%;
        --card-accent: var(--accent-secondary);
        position: relative;
        border-radius: 20px;
        padding: 1px;
        background: linear-gradient(160deg, color-mix(in srgb, var(--card-accent) 18%, #e6e8ee), rgba(230, 232, 238, 0.35));
        box-shadow:
          0 4px 6px -2px rgba(15, 23, 42, 0.04),
          0 14px 36px -20px rgba(15, 23, 42, 0.22);
        transition:
          transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
          box-shadow 0.45s ease;
      }

      [data-component="about-page"] .about-expertise-card[data-featured] {
        background: linear-gradient(160deg, color-mix(in srgb, var(--card-accent) 42%, transparent), color-mix(in srgb, var(--card-accent) 22%, #e6e8ee));
        box-shadow:
          0 8px 20px -8px color-mix(in srgb, var(--card-accent) 30%, transparent),
          0 16px 40px -16px color-mix(in srgb, var(--card-accent) 25%, transparent);
      }

      [data-component="about-page"] .about-expertise-card[data-featured]:not(:hover) {
        transform: translateY(-4px);
      }

      [data-component="about-page"] .about-expertise-card[data-featured] .about-expertise-card-glow {
        opacity: 0.55;
      }

      [data-component="about-page"] .about-expertise-card[data-featured] .about-card-icon {
        background: linear-gradient(
          145deg,
          var(--card-accent),
          color-mix(in srgb, var(--card-accent) 75%, var(--accent-secondary))
        );
        color: var(--hero-text);
        box-shadow: 0 10px 24px -8px color-mix(in srgb, var(--card-accent) 55%, transparent);
      }

      [data-component="about-page"] .about-expertise-card-glow {
        position: absolute;
        top: -20%;
        right: -10%;
        width: 55%;
        height: 55%;
        border-radius: 50%;
        background: color-mix(in srgb, var(--card-accent) 18%, transparent);
        filter: blur(28px);
        opacity: 0;
        transition: opacity 0.45s ease;
        pointer-events: none;
        z-index: 0;
      }

      [data-component="about-page"] .about-expertise-card:hover .about-expertise-card-glow {
        opacity: 1;
      }

      [data-component="about-page"] .about-expertise-card:hover {
        box-shadow:
          0 8px 16px -6px rgba(79, 70, 229, 0.12),
          0 24px 48px -16px color-mix(in srgb, var(--card-accent) 35%, transparent);
      }

      [data-component="about-page"] .about-expertise-card::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px;
        background: radial-gradient(
          220px circle at var(--mx) var(--my),
          var(--card-accent),
          transparent 65%
        );
        -webkit-mask:
          linear-gradient(#000 0 0) content-box,
          linear-gradient(#000 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.35s ease;
        pointer-events: none;
      }

      [data-component="about-page"] .about-expertise-card:hover::before {
        opacity: 1;
      }

      [data-component="about-page"] .about-expertise-card-inner {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 1.5rem;
        border-radius: 19px;
        background: linear-gradient(165deg, rgba(255, 255, 255, 0.99), rgba(248, 250, 255, 0.94));
        overflow: hidden;
      }

      [data-component="about-page"] .about-expertise-card-inner::before {
        content: "";
        position: absolute;
        top: 0;
        left: 1.25rem;
        right: 1.25rem;
        height: 3px;
        border-radius: 0 0 4px 4px;
        background: linear-gradient(90deg, var(--card-accent), color-mix(in srgb, var(--card-accent) 35%, var(--hero-accent)), color-mix(in srgb, var(--card-accent) 40%, transparent));
        opacity: 0.85;
        transition: opacity 0.35s ease, height 0.35s ease;
      }

      [data-component="about-page"] .about-expertise-card:hover .about-expertise-card-inner::before {
        opacity: 1;
        height: 4px;
      }

      @media (min-width: 640px) {
        [data-component="about-page"] .about-expertise-card-inner {
          padding: 2rem;
        }
      }

      [data-component="about-page"] .about-expertise-card-inner::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: radial-gradient(
          260px circle at var(--mx) var(--my),
          color-mix(in srgb, var(--card-accent) 12%, transparent),
          transparent 60%
        );
        opacity: 0;
        transition: opacity 0.35s ease;
        pointer-events: none;
      }

      [data-component="about-page"] .about-expertise-card:hover .about-expertise-card-inner::after {
        opacity: 1;
      }

      [data-component="about-page"] .about-card-index {
        position: absolute;
        top: 0.75rem;
        right: 1rem;
        font-family: var(--font-sora), system-ui, sans-serif;
        font-size: clamp(2.5rem, 5vw, 3.25rem);
        font-weight: 800;
        line-height: 1;
        letter-spacing: -0.04em;
        color: color-mix(in srgb, var(--card-accent) 10%, transparent);
        opacity: 1;
        transition: color 0.35s ease, transform 0.35s ease;
        pointer-events: none;
        user-select: none;
      }

      [data-component="about-page"] .about-expertise-card:hover .about-card-index {
        color: color-mix(in srgb, var(--card-accent) 18%, transparent);
        transform: scale(1.05);
      }

      [data-component="about-page"] .about-card-tag {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-self: flex-start;
        margin-bottom: 0.875rem;
        padding: 0.25rem 0.625rem;
        border-radius: var(--radius-pill);
        border: 1px solid color-mix(in srgb, var(--card-accent) 20%, transparent);
        background: color-mix(in srgb, var(--card-accent) 8%, #fff);
        font-size: 0.6875rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--card-accent);
        transition:
          background 0.3s ease,
          border-color 0.3s ease,
          color 0.3s ease;
      }

      [data-component="about-page"] .about-expertise-card:hover .about-card-tag {
        background: color-mix(in srgb, var(--card-accent) 14%, #fff);
        border-color: color-mix(in srgb, var(--card-accent) 35%, transparent);
      }

      [data-component="about-page"] .about-card-icon {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 3.5rem;
        height: 3.5rem;
        margin-bottom: 1rem;
        border-radius: 16px;
        border: 1px solid color-mix(in srgb, var(--card-accent) 28%, transparent);
        background: linear-gradient(
          145deg,
          color-mix(in srgb, var(--card-accent) 14%, #fff),
          #ffffff
        );
        color: var(--card-accent);
        box-shadow: 0 6px 16px -8px color-mix(in srgb, var(--card-accent) 45%, transparent);
        transition:
          transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
          box-shadow 0.45s ease,
          background 0.45s ease;
        overflow: hidden;
      }

      [data-component="about-page"] .about-expertise-card:hover .about-card-icon {
        transform: scale(1.08) rotate(-4deg);
        background: linear-gradient(
          145deg,
          var(--card-accent),
          color-mix(in srgb, var(--card-accent) 75%, var(--accent-secondary))
        );
        color: var(--hero-text);
        box-shadow: 0 10px 24px -8px color-mix(in srgb, var(--card-accent) 55%, transparent);
      }

      [data-component="about-page"] .about-card-title {
        position: relative;
        z-index: 1;
        margin-bottom: 0.5rem;
        font-family: var(--font-sora), system-ui, sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: var(--heading);
        transition: color 0.3s ease;
      }

      @media (min-width: 640px) {
        [data-component="about-page"] .about-card-title {
          font-size: 1.25rem;
        }
      }

      [data-component="about-page"] .about-expertise-card:hover .about-card-title {
        color: color-mix(in srgb, var(--card-accent) 80%, var(--heading));
      }

      [data-component="about-page"] .about-card-text {
        position: relative;
        z-index: 1;
        margin: 0 0 1rem;
        font-size: 0.9375rem;
        line-height: 1.65;
        color: var(--muted);
      }

      [data-component="about-page"] .about-card-points {
        position: relative;
        z-index: 1;
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      [data-component="about-page"] .about-card-points li {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        font-size: 0.8125rem;
        line-height: 1.5;
        color: rgba(51, 65, 85, 0.88);
      }

      [data-component="about-page"] .about-card-points li::before {
        content: "";
        flex-shrink: 0;
        width: 0.375rem;
        height: 0.375rem;
        margin-top: 0.4375rem;
        border-radius: 50%;
        background: var(--card-accent);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--card-accent) 18%, transparent);
      }

      [data-component="about-page"] .about-expertise-card:hover .about-card-points li {
        color: rgba(15, 23, 42, 0.82);
      }

      @media (prefers-reduced-motion: reduce) {
        [data-component="about-expertise"] .about-expertise-orb {
          animation: none;
        }

        [data-component="about-expertise"] .about-expertise-badge-dot {
          animation: none;
        }

        [data-component="about-page"] .about-expertise-card[data-featured]:not(:hover) {
          transform: none;
        }
      }

      [data-component="about-page"] .about-card-icon::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          105deg,
          transparent 35%,
          rgba(255, 255, 255, 0.75) 50%,
          transparent 65%
        );
        transform: translateX(-120%);
        transition: transform 0.6s ease;
      }

      [data-component="about-page"] .about-expertise-card:hover .about-card-icon::after {
        transform: translateX(120%);
      }

      [data-component="about-cta"] {
        position: relative;
        isolation: isolate;
        overflow: hidden;
      }

      [data-component="about-cta"] .about-cta-grid {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background-image:
          linear-gradient(rgba(99, 102, 241, 0.14) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.14) 1px, transparent 1px);
        background-size: 44px 44px;
        -webkit-mask-image: radial-gradient(85% 80% at 50% 50%, #000 15%, transparent 100%);
        mask-image: radial-gradient(85% 80% at 50% 50%, #000 15%, transparent 100%);
      }

      [data-component="about-cta"] .about-cta-card {
        position: relative;
        overflow: hidden;
        border-radius: 1.5rem;
        border: 1px solid rgba(255, 255, 255, 0.14);
        background:
          linear-gradient(165deg, transparent 0%, rgba(255, 255, 255, 0.04) 100%);
        box-shadow:
          0 24px 60px -24px rgba(0, 0, 0, 0.55);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
      }

      [data-component="about-cta"] .about-cta-card::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(
          120deg,
          rgba(99, 102, 241, 0.65),
          rgba(56, 109, 255, 0.25),
          rgba(124, 58, 237, 0.5)
        );
        background-size: 200% 100%;
        animation: about-gradient-shift 6s ease-in-out infinite;
        -webkit-mask:
          linear-gradient(#000 0 0) content-box,
          linear-gradient(#000 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      [data-component="about-cta"] .about-cta-shimmer {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.08),
          transparent
        );
        animation: about-shimmer 4s ease-in-out infinite;
        pointer-events: none;
      }

      [data-component="about-cta"] .about-cta-badge {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        margin-bottom: 1rem;
        padding: 0.4375rem 1rem;
        border-radius: var(--radius-pill);
        border: 1px solid var(--accent-glow);
        background: rgba(79, 70, 229, 0.18);
        color: var(--hero-badge-text);
        font-size: 0.6875rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      [data-component="about-cta"] .about-cta-badge-dot {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background: var(--hero-accent);
        box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.2);
        animation: about-badge-pulse 2.4s ease-in-out infinite;
      }

      [data-component="about-cta"] .about-cta-heading {
        position: relative;
        z-index: 1;
        margin: 0 0 1rem;
        font-family: var(--font-sora), system-ui, sans-serif;
        font-size: clamp(1.5rem, 3.5vw, 2.125rem);
        font-weight: 800;
        line-height: 1.18;
        letter-spacing: -0.035em;
        color: var(--hero-text);
      }

      [data-component="about-cta"] .about-cta-heading-accent {
        background: linear-gradient(135deg, #ffffff 0%, var(--hero-badge-text) 45%, #93c5fd 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      [data-component="about-cta"] .about-cta-lead {
        position: relative;
        z-index: 1;
        margin: 0 auto 1.25rem;
        max-width: 34rem;
        font-size: clamp(1rem, 1.6vw, 1.125rem);
        line-height: 1.65;
        color: rgba(226, 232, 240, 0.88);
      }

      [data-component="about-cta"] .about-cta-perks {
        position: relative;
        z-index: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.625rem;
        margin: 0 0 1.75rem;
        padding: 0;
        list-style: none;
      }

      [data-component="about-cta"] .about-cta-perk {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        padding: 0.4375rem 0.875rem;
        border-radius: var(--radius-pill);
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.06);
        font-size: 0.8125rem;
        color: rgba(226, 232, 240, 0.9);
      }

      [data-component="about-cta"] .about-cta-perk svg {
        flex-shrink: 0;
        color: var(--hero-accent);
      }

      [data-component="about-cta"] .about-cta-actions {
        position: relative;
        z-index: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 0.875rem;
      }

      [data-component="about-cta"] .about-cta-btn {
        animation: about-cta-glow 3.5s ease-in-out infinite;
        min-height: 3.25rem;
        min-width: 14rem;
        padding-inline: 2rem;
        border-radius: 0.875rem;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: -0.01em;
        box-shadow:
          0 12px 32px -8px rgba(79, 70, 229, 0.65),
          0 0 0 1px transparent inset;
      }

      [data-component="about-cta"] .about-cta-btn-arrow {
        display: inline-block;
        transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      }

      [data-component="about-cta"] .about-cta-btn:hover .about-cta-btn-arrow {
        transform: translateX(5px);
      }

      [data-component="about-cta"] .about-cta-secondary {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        padding: 0.75rem 1.25rem;
        border-radius: 0.875rem;
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(255, 255, 255, 0.04);
        color: rgba(255, 255, 255, 0.88);
        font-size: 0.9375rem;
        font-weight: 600;
        text-decoration: none;
        transition:
          background 0.25s ease,
          border-color 0.25s ease,
          color 0.25s ease,
          transform 0.25s ease;
      }

      [data-component="about-cta"] .about-cta-secondary:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(129, 140, 248, 0.45);
        color: var(--hero-text);
        transform: translateY(-1px);
      }

      [data-component="about-page"] .about-cta-grid {
        position: absolute;
        inset: 0;
        pointer-events: none;
        background-image:
          linear-gradient(rgba(99, 102, 241, 0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.12) 1px, transparent 1px);
        background-size: 44px 44px;
        -webkit-mask-image: radial-gradient(85% 80% at 50% 50%, #000 15%, transparent 100%);
        mask-image: radial-gradient(85% 80% at 50% 50%, #000 15%, transparent 100%);
      }

      /* Legacy selectors kept for compatibility — about-cta block above is canonical */
      [data-component="about-page"] .about-cta-card {
        position: relative;
        overflow: hidden;
      }

      [data-component="about-page"] .about-cta-card::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(
          120deg,
          rgba(99, 102, 241, 0.5),
          rgba(56, 109, 255, 0.2),
          rgba(124, 58, 237, 0.4)
        );
        background-size: 200% 100%;
        animation: about-gradient-shift 6s ease-in-out infinite;
        -webkit-mask:
          linear-gradient(#000 0 0) content-box,
          linear-gradient(#000 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      [data-component="about-page"] .about-cta-shimmer {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.06),
          transparent
        );
        animation: about-shimmer 4s ease-in-out infinite;
        pointer-events: none;
      }

      [data-component="about-page"] .about-cta-btn {
        animation: about-cta-glow 3.5s ease-in-out infinite;
      }

      [data-component="about-page"] .about-cta-btn-arrow {
        display: inline-block;
        transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      }

      [data-component="about-page"] .about-cta-btn:hover .about-cta-btn-arrow {
        transform: translateX(5px);
      }

      /* ---- Client deliverables (theme-matched premium grid) ---- */
      [data-component="about-client-deliverables"] {
        position: relative;
        isolation: isolate;
        overflow: hidden;
        background: linear-gradient(180deg, #ffffff 0%, #f8f9ff 38%, #f4f6fb 100%);
      }

      [data-component="about-client-deliverables"] .about-deliverables-bg {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 0;
      }

      [data-component="about-client-deliverables"] .about-deliverables-grid-texture {
        position: absolute;
        inset: 0;
        opacity: 0.4;
        background-image:
          linear-gradient(rgba(79, 70, 229, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79, 70, 229, 0.04) 1px, transparent 1px);
        background-size: 44px 44px;
        mask-image: radial-gradient(ellipse 85% 75% at 50% 45%, #000 15%, transparent 78%);
      }

      [data-component="about-client-deliverables"] .about-deliverables-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(72px);
        animation: about-deliverables-orb-drift 16s ease-in-out infinite;
      }

      [data-component="about-client-deliverables"] .about-deliverables-orb--1 {
        top: -5rem;
        right: -4rem;
        width: 22rem;
        height: 22rem;
        background: rgba(99, 102, 241, 0.12);
      }

      [data-component="about-client-deliverables"] .about-deliverables-orb--2 {
        bottom: -6rem;
        left: -3rem;
        width: 20rem;
        height: 20rem;
        background: rgba(56, 109, 255, 0.1);
        animation-delay: -6s;
      }

      [data-component="about-client-deliverables"] .about-deliverables-orb--3 {
        top: 42%;
        left: 50%;
        width: 14rem;
        height: 14rem;
        background: rgba(124, 58, 237, 0.08);
        animation-delay: -10s;
      }

      @keyframes about-deliverables-orb-drift {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(-14px, 10px) scale(1.04); }
        66% { transform: translate(10px, -16px) scale(0.96); }
      }

      [data-component="about-client-deliverables"] .about-deliverables-headline {
        position: relative;
        display: inline-block;
      }

      [data-component="about-client-deliverables"] .about-deliverables-headline::after {
        content: "";
        display: block;
        width: 3.5rem;
        height: 3px;
        margin: 0.75rem auto 0;
        border-radius: 3px;
        background: linear-gradient(90deg, var(--accent), var(--hero-accent), transparent);
      }

      @media (prefers-reduced-motion: reduce) {
        [data-component="about-client-deliverables"] .about-deliverables-orb {
          animation: none;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        [data-component="about-page"] .about-orb,
        [data-component="about-cta"] .about-cta-card::before,
        [data-component="about-cta"] .about-cta-shimmer,
        [data-component="about-cta"] .about-cta-btn,
        [data-component="about-cta"] .about-cta-badge-dot,
        [data-component="about-page"] .about-cta-card::before,
        [data-component="about-page"] .about-cta-shimmer,
        [data-component="about-page"] .about-cta-btn {
          animation: none;
        }
      }
    `}</style>
  );
}

function ExpertiseIcon({ type }) {
  const icons = {
    layers: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    plug: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <path d="M9 2v6" />
        <path d="M15 2v6" />
        <path d="M6 8h12v3a6 6 0 0 1-12 0V8Z" />
        <path d="M12 17v5" />
      </svg>
    ),
  };

  return icons[type] ?? icons.layers;
}

function ClientDeliverableIcon({ type }) {
  const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-6 w-6",
    "aria-hidden": true,
  };

  const icons = {
    target: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    zap: (
      <svg {...iconProps}>
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
    wrench: (
      <svg {...iconProps}>
        <path d="M14.7 6.3a1 1 0 0 0 0 .6l1.1 1.1a1 1 0 0 0 .6 0l2.1-2.1a1 1 0 0 0 0-.6l-1.1-1.1a1 1 0 0 0-.6 0l-2.1 2.1Z" />
        <path d="m3 21 8.5-8.5" />
        <path d="m12.5 3.5 2 2" />
        <path d="M3 21v-3l3 3-3 3" />
      </svg>
    ),
    briefcase: (
      <svg {...iconProps}>
        <path d="M16 20V8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v12" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
        <path d="M12 6V4a2 2 0 0 0-2-2H8" />
      </svg>
    ),
    gem: (
      <svg {...iconProps}>
        <path d="M6 3h12l4 6-10 13L2 9l4-6Z" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </svg>
    ),
    handshake: (
      <svg {...iconProps}>
        <path d="m11 17 2 2a1 1 0 1 0 3-3" />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
        <path d="m21 3 1 11h-2" />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
        <path d="M3 4h8" />
      </svg>
    ),
  };

  return icons[type] ?? icons.target;
}

function PromiseBenefitIcon({ type }) {
  const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    call: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    shield: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M12 3 5 6v5c0 4.2 2.9 7.7 7 8.9 4.1-1.2 7-4.7 7-8.9V6l-7-3Z" />
        <path d="m9.5 12 1.8 1.8 3.4-3.6" />
      </svg>
    ),
    map: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M3 6.5 9 4l6 2.5 6-2.5v13l-6 2.5-6-2.5-6 2.5V6.5Z" />
        <path d="M9 4v13M15 6.5v13" />
      </svg>
    ),
    heart: (
      <svg {...iconProps} aria-hidden="true">
        <path d="M19.5 12.572c-1.5 2.5-4.5 5-7.5 5s-6-2.5-7.5-5C3.5 9.5 5 6 8 6c1.7 0 3 1 4 2 1-1 2.3-2 4-2 3 0 4.5 3.5 3.5 6.572Z" />
      </svg>
    ),
  };

  return icons[type] ?? icons.shield;
}

function AboutHero() {
  const heroRef = useRef(null);
  const hangerRef = useRef(null);

  useLayoutEffect(() => {
    function updateCableLength() {
      const hero = heroRef.current;
      const hanger = hangerRef.current;
      if (!hero || !hanger) return;

      const swing = hanger.querySelector(".about-promise-swing");
      if (!swing) return;

      const heroTop = hero.getBoundingClientRect().top;
      const cardTop = swing.getBoundingClientRect().top;
      const length = Math.max(cardTop - heroTop, 48);

      hanger.style.setProperty("--cable-length", `${length}px`);
    }

    updateCableLength();
    const t = window.setTimeout(updateCableLength, 750);
    window.addEventListener("resize", updateCableLength);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", updateCableLength);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      data-component="about-hero"
      aria-labelledby="about-hero-heading"
    >
      <Container as="div">
        <div className="hero-inner">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-copy">
                <span className="hero-badge">About Our Agency</span>

                <h1 id="about-hero-heading">
                  About CodeForge
                  <br />
                  Consulting
                </h1>

                <p className="hero-sub">
                  CodeForge Consulting designs and maintains business-critical web solutions.
                  From smooth consumer storefronts to high-velocity financial backends, we deliver
                  production-ready code that operates securely without technical headaches or
                  brittle workarounds.
                </p>

                <ul className="hero-check">
                  {ABOUT_HERO_POINTS.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="hero-cta">
                  <Button as={Link} href="/contact" variant="primary">
                    Book Technical Consultation →
                  </Button>
                  <Button as={Link} href="/services" variant="secondary">
                    Our Services
                  </Button>
                </div>

                <p className="hero-microcopy">
                  500+ projects delivered&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;14+ years
                  experience&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;Reply within one business hour
                </p>
              </div>
            </div>

            <div ref={hangerRef} className="hero-card-wrap about-promise-hanger">
              <div className="about-promise-swing">
                <div className="about-promise-cables" aria-hidden="true">
                  <span className="about-promise-cable about-promise-cable--left" />
                  <span className="about-promise-cable about-promise-cable--right" />
                </div>

                <aside className="about-promise-card" aria-labelledby="about-promise-heading">
                <p className="card-eyebrow">What you get</p>
                <h2 id="about-promise-heading" className="about-promise-title">
                  A partner invested in your success
                </h2>

                <div className="about-promise-viewport" aria-live="polite">
                  {ABOUT_CLIENT_BENEFITS.map((benefit, index) => (
                    <div
                      key={benefit.id}
                      className="about-promise-slide"
                      style={{
                        "--slide-i": index,
                        "--accent-from": benefit.accent.from,
                        "--accent-to": benefit.accent.to,
                        "--accent-glow": benefit.accent.glow,
                        "--accent-soft": benefit.accent.soft,
                      }}
                      aria-hidden={index !== 0}
                    >
                      <div className="about-promise-item">
                        <span
                          className="about-promise-icon"
                          style={{ "--slide-i": index }}
                          aria-hidden="true"
                        >
                          <PromiseBenefitIcon type={benefit.icon} />
                        </span>
                        <span className="about-promise-text">
                          <strong>{benefit.title}</strong>
                          <span>{benefit.detail}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="about-promise-dots" aria-hidden="true">
                  {ABOUT_CLIENT_BENEFITS.map((benefit, index) => (
                    <span
                      key={benefit.id}
                      className="about-promise-dot"
                      style={{
                        "--dot-i": index,
                        "--dot-color": benefit.accent.from,
                        "--dot-glow": benefit.accent.soft,
                      }}
                    />
                  ))}
                </div>

                <div className="about-promise-footer">
                  <p className="about-promise-assurance">
                    No surprise costs · NDA protected
                  </p>
                  <Link href="/case-studies" className="about-promise-link">
                    View Case Study
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </aside>
              </div>
            </div>
          </div>

          <div className="hero-logos">
            <span className="logos-label">Trusted by</span>
            <ul className="logos-list" aria-label="Trusted by leading teams">
              {ABOUT_HERO_LOGOS.map((logo) => (
                <li key={logo}>{logo}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ExpertiseCard({ item, index, reducedMotion }) {
  const cardRef = useRef(null);
  const isFeatured = index === 1;

  function handleMouseMove(event) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <motion.li
      className="list-none"
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.94 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: EASE },
        },
      }}
      custom={index}
    >
      <motion.article
        ref={cardRef}
        className="about-expertise-card group h-full"
        data-featured={isFeatured ? "true" : undefined}
        style={{ "--card-accent": item.accent, "--card-i": index }}
        onMouseMove={handleMouseMove}
        initial={false}
        whileHover={reducedMotion ? undefined : { y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <span className="about-expertise-card-glow" aria-hidden="true" />
        <div className="about-expertise-card-inner">
          <span className="about-card-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="about-card-tag">{item.tag}</span>
          <span className="about-card-icon" aria-hidden="true">
            <ExpertiseIcon type={item.icon} />
          </span>
          <h3 className="about-card-title">{item.title}</h3>
          <p className="about-card-text">{item.text}</p>
          {item.points?.length ? (
            <ul className="about-card-points">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </motion.article>
    </motion.li>
  );
}

function ExpertiseGrid({ reducedMotion }) {
  return (
    <section
      data-component="about-expertise"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-expertise-heading"
    >
      <div className="about-expertise-bg" aria-hidden="true">
        <div className="about-expertise-grid-texture" />
        <div className="about-expertise-dot-pattern" />
        <div className="about-expertise-orb about-expertise-orb--1" />
        <div className="about-expertise-orb about-expertise-orb--2" />
        <div className="about-expertise-orb about-expertise-orb--3" />
      </div>

      <Container as="div" className="relative z-[1]">
        <motion.header
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
          variants={staggerContainer}
          {...inViewProps(reducedMotion)}
        >
          <motion.span className="about-expertise-badge" variants={staggerItem}>
            <span className="about-expertise-badge-dot" aria-hidden="true" />
            What We Deliver
          </motion.span>
          <motion.h2
            id="about-expertise-heading"
            className="about-expertise-headline mb-4 font-[family-name:var(--font-sora)] text-[var(--heading)]"
            variants={staggerItem}
          >
            Our Core{" "}
            <span className="about-expertise-accent">Technical Expertise</span>
          </motion.h2>
          <motion.p
            className="text-base leading-relaxed text-muted sm:text-lg"
            variants={staggerItem}
          >
            Four pillars of engineering excellence — built to scale with your business.
          </motion.p>
          <motion.ul
            className="about-expertise-stats"
            aria-label="Expertise highlights"
            variants={staggerItem}
          >
            <li className="about-expertise-stat">
              <strong>4</strong>
              <span>Core pillars</span>
            </li>
            <li className="about-expertise-stat">
              <strong>Full-stack</strong>
              <span>End to end</span>
            </li>
            <li className="about-expertise-stat">
              <strong>Production</strong>
              <span>Grade systems</span>
            </li>
          </motion.ul>
        </motion.header>

        <motion.ul
          className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-8"
          variants={staggerContainer}
          {...inViewProps(reducedMotion)}
        >
          {EXPERTISE.map((item, index) => (
            <ExpertiseCard
              key={item.id}
              item={item}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

function ClientDeliverableCard({ item, index, reducedMotion }) {
  const cardRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <motion.li
      className="list-none"
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.94 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: EASE, delay: index * 0.06 },
        },
      }}
    >
      <motion.article
        ref={cardRef}
        className="about-expertise-card group h-full"
        style={{ "--card-accent": item.accent, "--card-i": index }}
        onMouseMove={handleMouseMove}
        initial={false}
        whileHover={reducedMotion ? undefined : { y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <span className="about-expertise-card-glow" aria-hidden="true" />
        <div className="about-expertise-card-inner">
          <span className="about-card-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="about-card-icon" aria-hidden="true">
            <ClientDeliverableIcon type={item.icon} />
          </span>
          <h3 className="about-card-title">{item.title}</h3>
          <p className="about-card-text">{item.text}</p>
        </div>
      </motion.article>
    </motion.li>
  );
}

function ClientDeliverablesGrid({ reducedMotion }) {
  return (
    <section
      data-component="about-client-deliverables"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-client-deliverables-heading"
    >
      <div className="about-deliverables-bg" aria-hidden="true">
        <div className="about-deliverables-grid-texture" />
        <div className="about-deliverables-orb about-deliverables-orb--1" />
        <div className="about-deliverables-orb about-deliverables-orb--2" />
        <div className="about-deliverables-orb about-deliverables-orb--3" />
      </div>

      <Container as="div" className="relative z-[1]">
        <motion.header
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
          variants={staggerContainer}
          {...inViewProps(reducedMotion)}
        >
          <motion.span className="about-expertise-badge" variants={staggerItem}>
            <span className="about-expertise-badge-dot" aria-hidden="true" />
            Why Choose Our Engineering Team
          </motion.span>
          <motion.h2
            id="about-client-deliverables-heading"
            className="about-deliverables-headline mb-4 font-[family-name:var(--font-sora)] text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.025em] text-[var(--heading)]"
            variants={staggerItem}
          >
            What Clients Get Working With Us
          </motion.h2>
          <motion.p
            className="text-base leading-relaxed text-muted sm:text-lg"
            variants={staggerItem}
          >
            Web Development, Java Backend, and WordPress—engineered for outcomes,
            not just deliverables.
          </motion.p>
        </motion.header>

        <motion.ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
          variants={staggerContainer}
          {...inViewProps(reducedMotion)}
        >
          {CLIENT_DELIVERABLES.map((item, index) => (
            <ClientDeliverableCard
              key={item.id}
              item={item}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

const CTA_PERKS = [
  { id: "free-call", label: "Free 30-min call" },
  { id: "no-pressure", label: "No obligation" },
  { id: "fast-reply", label: "Reply within 1 business day" },
];

function AboutCta({ reducedMotion }) {
  return (
    <section
      data-component="about-cta"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-cta-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--footer-bg)] via-[#111827] to-[var(--footer-bg)]" />
        <span className="about-orb about-orb--1 !top-0 !right-[-5rem] !bg-[var(--accent)]/25" />
        <span className="about-orb about-orb--2 !bottom-[-3rem] !left-[-2rem] !bg-[var(--accent-secondary)]/20" />
        <span className="about-orb about-orb--3 !top-[35%] !left-1/2 !h-56 !w-56 !-translate-x-1/2 !bg-[var(--accent-hover)]/15" />
        <div className="about-cta-grid" />
      </div>

      <Container as="div" className="relative z-10">
        <motion.div
          className="about-cta-card mx-auto max-w-3xl px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-12 lg:py-16"
          initial={reducedMotion ? false : { opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <div className="about-cta-shimmer" aria-hidden="true" />

          <motion.span
            className="about-cta-badge"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
          >
            <span className="about-cta-badge-dot" aria-hidden="true" />
            Let&apos;s talk
          </motion.span>

          <motion.h2
            id="about-cta-heading"
            className="about-cta-heading"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          >
            Ready to build something{" "}
            <span className="about-cta-heading-accent">you can rely on?</span>
          </motion.h2>

          <motion.p
            className="about-cta-lead"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
          >
            Tell us what you need — we&apos;ll listen, explain your options in plain
            English, and help you pick the right path forward. No pressure, no
            confusing tech talk.
          </motion.p>

          <motion.ul
            className="about-cta-perks"
            aria-label="Consultation benefits"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32, ease: EASE }}
          >
            {CTA_PERKS.map((perk) => (
              <li key={perk.id} className="about-cta-perk">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 6 9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {perk.label}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="about-cta-actions"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
          >
            <motion.div
              className="inline-block"
              whileHover={reducedMotion ? undefined : { scale: 1.04 }}
              whileTap={reducedMotion ? undefined : { scale: 0.97 }}
            >
              <Button
                as={Link}
                href="/contact"
                variant="primary"
                className="about-cta-btn !inline-flex !items-center !justify-center !gap-2 !no-underline"
              >
                Book a Free Consultation
                <span className="about-cta-btn-arrow" aria-hidden="true">
                  →
                </span>
              </Button>
            </motion.div>
            <Link href="/case-studies" className="about-cta-secondary">
              See our work
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default function AboutPageContent() {
  const reducedMotion = useReducedMotion();

  return (
    <div data-component="about-page" data-page="about">
      <AboutPageStyles />
      <AboutHeroStyles />
      <AboutHero />
      <ExpertiseGrid reducedMotion={reducedMotion} />
      <ClientDeliverablesGrid reducedMotion={reducedMotion} />
      <AboutCta reducedMotion={reducedMotion} />
    </div>
  );
}
