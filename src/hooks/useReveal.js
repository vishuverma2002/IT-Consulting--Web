"use client";

import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

/**
 * Toggles visibility when the element enters the viewport.
 * Respects prefers-reduced-motion (reveals immediately).
 * @returns {[React.RefObject<HTMLElement | null>, boolean]}
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);
  const visible = prefersReducedMotion || inView;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, prefersReducedMotion]);

  return [ref, visible];
}
