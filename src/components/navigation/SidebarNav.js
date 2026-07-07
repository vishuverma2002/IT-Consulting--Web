"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// SidebarNav: active-aware vertical nav list for the dashboard.
// CLIENT COMPONENT: it reads the current pathname (`usePathname`) to mark the
// active link, which requires client-side reactivity. This is the ONLY part of
// the sidebar that needs to be a client component; the surrounding Sidebar shell
// stays a server component. (State placement: keep "is active" derivation local
// here, not in a global store — it is purely a function of the URL.)
// STYLING LATER: active-state highlight via the data-active attribute.

export default function SidebarNav({ items = [] }) {
  const pathname = usePathname();

  return (
    <nav data-component="sidebar-nav" aria-label="Primary">
      <ul>
        {items.map((item) => {
          // Exact match for the index route, prefix match for nested sections.
          const isActive =
            item.href === "/dashboard"
              ? pathname === item.href
              : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                data-active={isActive ? "true" : undefined}
                aria-current={isActive ? "page" : undefined}
              >
                <span data-slot="nav-icon" data-icon={item.icon} aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
