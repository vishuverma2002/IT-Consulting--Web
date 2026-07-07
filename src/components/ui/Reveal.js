"use client";

import { useReveal } from "@/hooks/useReveal";

/**
 * Scroll-reveal wrapper — matches the marketing section motion language.
 * Set `staggerIndex` on children via style={{ "--reveal-i": n }} for stagger.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  threshold,
  className,
  style,
  ...rest
}) {
  const [ref, visible] = useReveal(threshold);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-visible={visible ? "true" : "false"}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
