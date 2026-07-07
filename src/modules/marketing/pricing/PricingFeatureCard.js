"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/motion";
import { useCardGlow } from "./useCardGlow";

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function PricingFeatureCard({ feature, index }) {
  const { cardRef, handleMouseMove } = useCardGlow();

  return (
    <motion.li
      className="pricing-benefit-card"
      style={{ "--card-i": index }}
      variants={staggerItem}
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <div className="pricing-benefit-card-inner">
        <span className="pricing-benefit-card-icon" aria-hidden="true">
          <CheckIcon />
        </span>
        <h3 className="pricing-benefit-card-title">{feature.title}</h3>
        <p className="pricing-benefit-card-desc">{feature.description}</p>
      </div>
    </motion.li>
  );
}
