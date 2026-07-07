"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ServicesMegaMenu from "@/components/navigation/ServicesMegaMenu";
import useScrollTo from "@/hooks/useScrollTo";

// NavMenu: renders the marketing header's primary links as flat navigation.
// REUSABLE: purely data-driven from `items`.

export default function NavMenu({ items = [] }) {
  const pathname = usePathname();
  const scrollTo = useScrollTo();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  function isActive(href) {
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.slice(1);
    }
    return pathname === href;
  }

  function handleHashClick(event, href) {
    if (!href.startsWith("/#") || pathname !== "/") return;

    const targetId = href.slice(2);
    const target = document.getElementById(targetId);
    if (!target) return;

    event.preventDefault();
    scrollTo(`#${targetId}`);
    window.history.pushState(null, "", href);
    setHash(`#${targetId}`);
  }

  return (
    <ul data-component="nav-menu">
      {items.map((item) =>
        item.megaMenu ? (
          <ServicesMegaMenu
            key={item.label}
            label={item.label}
            viewAllHref={item.href}
          />
        ) : (
          <li key={item.href}>
            <Link
              href={item.href}
              className="nav-link"
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={(event) => handleHashClick(event, item.href)}
            >
              <span className="nav-link-text">{item.label}</span>
              <span className="nav-link-indicator" aria-hidden="true" />
            </Link>
          </li>
        ),
      )}
    </ul>
  );
}
