"use client";

import { useId } from "react";
import useDisclosure from "@/hooks/useDisclosure";
import { PageGuideModal } from "@/components/navigation/page-guide";

/** Header trigger that opens the premium Page Guide command palette. */
export default function PageGuideWidget() {
  const panelId = useId();
  const { isOpen, open, close } = useDisclosure();

  return (
    <>
      <div data-component="page-guide" data-open={isOpen ? "true" : "false"}>
        <button
          type="button"
          className="page-guide-trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-haspopup="dialog"
          onClick={open}
        >
          <span className="page-guide-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              <path d="M8 7h8M8 11h6" />
            </svg>
          </span>
          <span className="page-guide-copy">
            <span className="page-guide-title-row">
              <span className="page-guide-title">Page guide</span>
              <span className="page-guide-dot" aria-hidden="true" />
            </span>
            <span className="page-guide-subtitle">Shortcuts &amp; links</span>
          </span>
        </button>
      </div>

      <PageGuideModal isOpen={isOpen} onClose={close} />
    </>
  );
}
