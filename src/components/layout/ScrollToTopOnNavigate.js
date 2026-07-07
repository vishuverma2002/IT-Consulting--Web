"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import {
  consumePendingSmoothScrollToTop,
  scrollDocumentToTop,
} from "@/lib/scrollToTop";

/**
 * Resets scroll position on every route change and initial load.
 * Uses instant scrolling by default; honors a one-shot smooth-scroll request
 * (e.g. from the brand logo) unless the user prefers reduced motion.
 */
export default function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasDisabledRestoration = useRef(false);

  useLayoutEffect(() => {
    if (!hasDisabledRestoration.current && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
      hasDisabledRestoration.current = true;
    }
  }, []);

  useLayoutEffect(() => {
    const requestedSmooth = consumePendingSmoothScrollToTop();
    const smooth = requestedSmooth && !prefersReducedMotion;
    scrollDocumentToTop({ smooth });
  }, [pathname, prefersReducedMotion]);

  return null;
}
