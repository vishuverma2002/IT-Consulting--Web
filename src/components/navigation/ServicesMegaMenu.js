"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Drawer from "@/components/ui/Drawer";
import { coreServices } from "@/config/services";

const CLOSE_DELAY_MS = 400;

const ICONS = {
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M2 7h20" />
    </svg>
  ),
  java: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  wordpress: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
};

function isInsideDrawer(node) {
  if (!(node instanceof Element)) return false;
  return Boolean(node.closest('[data-component="drawer"]'));
}

function isInsideTrigger(node) {
  if (!(node instanceof Element)) return false;
  return Boolean(node.closest('[data-component="nav-services-trigger"]'));
}

export default function ServicesMegaMenu({ label = "Services", viewAllHref = "/services" }) {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const closeTimerRef = useRef(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (isOpen) setIsOpen(false);
    if (isPinned) setIsPinned(false);
  }

  const isActive =
    pathname === "/services" ||
    pathname.startsWith("/services/");

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const handleClose = useCallback(() => {
    clearCloseTimer();
    setIsPinned(false);
    setIsOpen(false);
  }, [clearCloseTimer]);

  const handleOpen = useCallback(() => {
    clearCloseTimer();
    setIsOpen(true);
  }, [clearCloseTimer]);

  const scheduleClose = useCallback(() => {
    if (isPinned) return;
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, CLOSE_DELAY_MS);
  }, [clearCloseTimer, isPinned]);

  const handleTriggerMouseLeave = useCallback(
    (event) => {
      if (isPinned) return;
      if (isInsideDrawer(event.relatedTarget)) return;
      scheduleClose();
    },
    [isPinned, scheduleClose],
  );

  const handlePanelMouseLeave = useCallback(
    (event) => {
      if (isPinned) return;
      if (isInsideTrigger(event.relatedTarget)) return;
      scheduleClose();
    },
    [isPinned, scheduleClose],
  );

  const handleTriggerClick = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      clearCloseTimer();

      if (isOpen && isPinned) {
        handleClose();
        return;
      }

      setIsPinned(true);
      setIsOpen(true);
    },
    [clearCloseTimer, handleClose, isOpen, isPinned],
  );

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  const handleCardMouseMove = useCallback((event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  const drawerFooter = useMemo(
    () => (
      <Link href={viewAllHref} className="services-drawer-cta" onClick={handleClose}>
        <span>View All Services</span>
        <span className="services-drawer-cta-arrow" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      </Link>
    ),
    [handleClose, viewAllHref],
  );

  const drawerContent = useMemo(
    () => (
      <>
        <p className="services-drawer-count">{coreServices.length} offerings</p>
        <ul className="services-drawer-list">
          {coreServices.map((service, index) => {
            const serviceHref = `/services/${service.slug}`;
            const isServiceActive = pathname === serviceHref;
            const iconKey = service.icon in ICONS ? service.icon : "web";

            return (
              <li key={service.slug}>
                <Link
                  href={serviceHref}
                  className="services-drawer-item"
                  data-active={isServiceActive ? "true" : "false"}
                  style={{ "--item-i": index }}
                  onClick={handleClose}
                  onMouseMove={handleCardMouseMove}
                >
                  <span className="services-drawer-item-glow" aria-hidden="true" />
                  <span className="services-drawer-item-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="services-drawer-item-icon">{ICONS[iconKey]}</span>
                  <span className="services-drawer-item-body">
                    <span className="services-drawer-item-title">{service.title}</span>
                    <span className="services-drawer-item-desc">{service.menuDescription}</span>
                  </span>
                  <span className="services-drawer-item-arrow" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    ),
    [handleCardMouseMove, handleClose, pathname],
  );

  return (
    <>
      <li
        data-component="nav-services-trigger"
        data-open={isOpen ? "true" : "false"}
        onMouseEnter={handleOpen}
        onMouseLeave={handleTriggerMouseLeave}
      >
        <button
          type="button"
          className="nav-link nav-mega-trigger"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          data-active={isActive ? "true" : "false"}
          aria-current={isActive ? "page" : undefined}
          onClick={handleTriggerClick}
        >
          <span className="nav-link-text">{label}</span>
          <span className="nav-mega-chevron" aria-hidden="true">
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2.5 4.5L6 8l3.5-3.5" />
            </svg>
          </span>
          <span className="nav-link-indicator" aria-hidden="true" />
        </button>
      </li>

      <Drawer
        isOpen={isOpen}
        onClose={handleClose}
        side="left"
        panelClassName="drawer-panel--services"
        badge="Services"
        title="What we build for you"
        description="Pick a service to explore how we can help your business grow."
        showOverlay={isPinned}
        lockScroll={isPinned}
        onPanelMouseEnter={handleOpen}
        onPanelMouseLeave={handlePanelMouseLeave}
        footer={drawerFooter}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
