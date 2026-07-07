"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import {
  markPendingSmoothScrollToTop,
  scrollDocumentToTop,
} from "@/lib/scrollToTop";

/**
 * Brand logo link: navigates home and smoothly scrolls to the top on click.
 * When already on the home page, prevents navigation and only scrolls up.
 */
export default function BrandLink({ children, className, ...props }) {
  const pathname = usePathname();
  const router = useRouter();
  const prefersReducedMotion = usePrefersReducedMotion();

  function handleClick(event) {
    const smooth = !prefersReducedMotion;

    if (pathname === "/") {
      event.preventDefault();
      scrollDocumentToTop({ smooth });
      return;
    }

    event.preventDefault();
    markPendingSmoothScrollToTop();
    router.push("/");
  }

  return (
    <Link
      href="/"
      scroll={false}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
