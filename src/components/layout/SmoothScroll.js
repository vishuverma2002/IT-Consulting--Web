"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { SCROLL_HEADER_OFFSET } from "@/hooks/useScrollTo";
import { SCROLL_TO_TOP_EVENT } from "@/lib/scrollToTop";

/** Keeps Lenis in sync when the global scroll-to-top utility runs. */
function LenisScrollSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    function handleScrollToTop(event) {
      const smooth = event.detail?.smooth ?? false;
      lenis.scrollTo(0, { immediate: !smooth });
    }

    window.addEventListener(SCROLL_TO_TOP_EVENT, handleScrollToTop);
    return () => window.removeEventListener(SCROLL_TO_TOP_EVENT, handleScrollToTop);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: 1.2,
        wheelMultiplier: 1,
        allowNestedScroll: true,
        stopInertiaOnNavigate: true,
        autoRaf: true,
        anchors: {
          offset: SCROLL_HEADER_OFFSET,
        },
      }}
    >
      <LenisScrollSync />
      {children}
    </ReactLenis>
  );
}
