"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { SCROLL_HEADER_OFFSET } from "@/hooks/useScrollTo";

function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, lenis]);

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
      <ScrollToTopOnNavigate />
      {children}
    </ReactLenis>
  );
}
