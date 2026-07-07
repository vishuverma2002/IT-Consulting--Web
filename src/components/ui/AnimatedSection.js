"use client";

import { useReveal } from "@/hooks/useReveal";

/**
 * Scroll-reveal section wrapper. Children use data-animate-item and
 * style={{ "--reveal-i": n }} for staggered fade-up.
 */
export default function AnimatedSection({
  as: Tag = "section",
  children,
  threshold = 0.12,
  className,
  style,
  ...rest
}) {
  const [ref, visible] = useReveal(threshold);

  return (
    <Tag
      ref={ref}
      data-animate-section=""
      data-visible={visible ? "true" : "false"}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
