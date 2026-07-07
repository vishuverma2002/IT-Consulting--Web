"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Breadcrumbs: derives a trail from the current URL segments.
// CLIENT COMPONENT: depends on `usePathname`. Derivation is intentionally kept
// here (local, URL-derived) rather than threaded through props from every page —
// that keeps page components free of breadcrumb bookkeeping.
// STYLING LATER: separators and truncation for deep trails.

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  // Build cumulative hrefs: ["dashboard","clients"] -> /dashboard, /dashboard/clients
  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment.replace(/-/g, " ");
    return { href, label };
  });

  return (
    <nav data-component="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {crumbs.map((crumb, index) => (
          <li key={crumb.href}>
            {index < crumbs.length - 1 ? (
              <Link href={crumb.href}>{crumb.label}</Link>
            ) : (
              <span aria-current="page">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
