"use client";

import { useLenis } from "lenis/react";

/** Matches globals.css scroll-padding-top: calc(5.25rem + var(--space-4)) */
export const SCROLL_HEADER_OFFSET = -100;

export default function useScrollTo() {
  const lenis = useLenis();

  return function scrollTo(target, options = {}) {
    const offset = options.offset ?? SCROLL_HEADER_OFFSET;

    if (lenis) {
      lenis.scrollTo(target, { offset, ...options });
      return;
    }

    const element =
      typeof target === "string"
        ? document.querySelector(target.startsWith("#") ? target : `#${target}`)
        : target;

    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}
