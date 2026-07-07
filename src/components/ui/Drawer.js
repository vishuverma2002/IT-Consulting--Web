"use client";

import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import useIsClient from "@/hooks/useIsClient";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

export default function Drawer({
  isOpen,
  onClose,
  side = "left",
  title,
  description,
  badge,
  children,
  footer,
  className = "",
  panelClassName = "",
  onPanelMouseEnter,
  onPanelMouseLeave,
  closeLabel = "Close panel",
  showOverlay = true,
  lockScroll = true,
}) {
  const titleId = useId();
  const descriptionId = useId();
  const reducedMotion = usePrefersReducedMotion();
  const isClient = useIsClient();

  useEffect(() => {
    if (!isOpen || !lockScroll) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, lockScroll]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isClient) return null;

  return createPortal(
    <div
      className={`drawer-root${className ? ` ${className}` : ""}`}
      data-component="drawer"
      data-open={isOpen ? "true" : "false"}
      data-side={side}
      data-motion={reducedMotion ? "reduced" : "full"}
      data-overlay={showOverlay ? "true" : "false"}
      aria-hidden={!isOpen}
    >
      {showOverlay ? (
        <button
          type="button"
          className="drawer-overlay"
          aria-label={closeLabel}
          tabIndex={isOpen ? 0 : -1}
          onClick={onClose}
        />
      ) : null}

      <aside
        className={`drawer-panel${panelClassName ? ` ${panelClassName}` : ""}`}
        role="dialog"
        aria-modal={showOverlay ? "true" : "false"}
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        onMouseEnter={onPanelMouseEnter}
        onMouseLeave={onPanelMouseLeave}
      >
        <div className="drawer-panel-glow" aria-hidden="true" />
        <div className="drawer-panel-inner">
          <header className="drawer-header">
            <div className="drawer-header-copy">
              {badge ? <span className="drawer-badge">{badge}</span> : null}
              {title ? (
                <h2 id={titleId} className="drawer-title">
                  {title}
                </h2>
              ) : null}
              {description ? (
                <p id={descriptionId} className="drawer-description">
                  {description}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              className="drawer-close"
              aria-label={closeLabel}
              onClick={onClose}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </header>

          <div className="drawer-body">{children}</div>

          {footer ? <footer className="drawer-footer">{footer}</footer> : null}
        </div>
      </aside>
    </div>,
    document.body,
  );
}
