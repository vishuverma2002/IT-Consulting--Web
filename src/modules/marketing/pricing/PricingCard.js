"use client";

import { useCardGlow } from "./useCardGlow";

export default function PricingCard({
  children,
  className = "",
  featured = false,
  index = 0,
  as: Tag = "article",
  ...rest
}) {
  const { cardRef, handleMouseMove } = useCardGlow();

  return (
    <Tag
      ref={cardRef}
      className={`pricing-rate-card ${className}`.trim()}
      data-featured={featured ? "true" : "false"}
      style={{ "--card-i": index }}
      onMouseMove={handleMouseMove}
      {...rest}
    >
      <div className="pricing-rate-card-inner">{children}</div>
    </Tag>
  );
}
