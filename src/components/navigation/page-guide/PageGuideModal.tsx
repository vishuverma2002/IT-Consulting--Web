"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import useIsClient from "@/hooks/useIsClient";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import useScrollTo from "@/hooks/useScrollTo";
import {
  getItemsForTab,
  type GuideItem,
  type GuideTabId,
} from "@/config/pageGuide";
import GuideCard from "./GuideCard";
import PageGuideTabs from "./PageGuideTabs";

type PageGuideModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const OVERLAY_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

const MODAL_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
};

const LIST_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.06 },
  },
};

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
};

const PANEL_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] },
  },
};

function KeyboardKeycap({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex min-h-[20px] min-w-[20px] items-center justify-center rounded border border-[#E6EAF2] bg-[#F8FAFC] px-1.5 text-[10px] font-medium text-[#64748B] shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      {children}
    </kbd>
  );
}

/** Premium command-palette modal for site navigation. */
export default function PageGuideModal({ isOpen, onClose }: PageGuideModalProps) {
  const titleId = useId();
  const modalRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const scrollTo = useScrollTo();
  const reducedMotion = usePrefersReducedMotion();
  const isClient = useIsClient();

  const [activeTab, setActiveTab] = useState<GuideTabId>("shortcuts");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = useMemo(() => getItemsForTab(activeTab), [activeTab]);
  const activeIndex =
    items.length === 0 ? 0 : Math.min(selectedIndex, items.length - 1);

  const handleClose = useCallback(() => {
    setActiveTab("shortcuts");
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  const handleNavigate = useCallback(
    (item: GuideItem) => {
      const [path, hash = ""] = item.href.split("#");
      const targetPath = path || "/";
      const hashId = hash || item.scrollTarget;

      if (hashId && pathname === targetPath) {
        scrollTo(`#${hashId}`);
        window.history.pushState(null, "", item.href);
        handleClose();
        return;
      }

      if (item.scrollTarget && pathname === "/" && targetPath === "/") {
        scrollTo(`#${item.scrollTarget}`);
        window.history.pushState(null, "", `/#${item.scrollTarget}`);
        handleClose();
        return;
      }

      router.push(item.href);
      handleClose();
    },
    [handleClose, pathname, router, scrollTo],
  );

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((current) =>
          items.length === 0 ? 0 : (current + 1) % items.length,
        );
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((current) =>
          items.length === 0 ? 0 : (current - 1 + items.length) % items.length,
        );
        return;
      }

      if (event.key === "Enter" && items.length > 0) {
        event.preventDefault();
        handleNavigate(items[activeIndex]);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, handleClose, handleNavigate, isOpen, items]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    function handleTabKey(event: KeyboardEvent) {
      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  if (!isClient) return null;

  const motionProps = reducedMotion
    ? { initial: false, animate: "visible", exit: "exit" }
    : {};

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div
          key="page-guide-overlay"
          className="fixed inset-0 z-[500] flex items-center justify-center p-4 sm:p-6"
          role="presentation"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={OVERLAY_VARIANTS}
          {...motionProps}
        >
          <motion.button
            type="button"
            aria-label="Close page guide"
            className="absolute inset-0 bg-[#0F172A]/50 backdrop-blur-md"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative flex max-h-[80vh] w-[90vw] max-w-[800px] flex-col overflow-hidden rounded-[28px] border border-[#E8EAF2] bg-[#F7F8FC] shadow-[0_32px_80px_-20px_rgba(15,23,42,0.14),0_8px_24px_-8px_rgba(15,23,42,0.06)]"
            variants={MODAL_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            {...motionProps}
          >
            {/* Header */}
            <header className="shrink-0 px-5 pt-3 pb-3 sm:px-6">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <motion.h2
                    id={titleId}
                    className="!m-0 !text-[20px] font-bold leading-none tracking-tight text-[#1E293B]"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Page Guide
                  </motion.h2>
                  <motion.p
                    className="!m-0 -mt-0.5 text-[13px] leading-none text-[#64748B]"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Quickly navigate to every important page of our website.
                  </motion.p>
                </div>

                <motion.button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close page guide"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#64748B] transition-colors duration-200 hover:bg-[#EBEDF3] hover:text-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FF8]/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.22, delay: 0.06 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <X className="h-4 w-4" aria-hidden strokeWidth={2} />
                </motion.button>
              </div>

              <div className="mt-3 h-px w-full bg-[#E6EAF2]" aria-hidden />

              <motion.div
                className="mt-3"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <PageGuideTabs
                  activeTab={activeTab}
                  onTabChange={(tab) => {
                    setActiveTab(tab);
                    setSelectedIndex(0);
                  }}
                />
              </motion.div>
            </header>

            {/* Scrollable content */}
            <div className="relative min-h-0 flex-1 overflow-y-auto px-5 pb-3 sm:px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  role="tabpanel"
                  id={`page-guide-panel-${activeTab}`}
                  aria-labelledby={`page-guide-tab-${activeTab}`}
                  variants={reducedMotion ? undefined : PANEL_VARIANTS}
                  initial={reducedMotion ? false : "hidden"}
                  animate={reducedMotion ? false : "visible"}
                  exit={reducedMotion ? undefined : "exit"}
                >
                  <motion.ul
                    role="listbox"
                    aria-label={`${activeTab} results`}
                    className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
                    variants={reducedMotion ? undefined : LIST_VARIANTS}
                    initial={reducedMotion ? false : "hidden"}
                    animate={reducedMotion ? false : "visible"}
                  >
                    {items.map((item, index) => {
                      const isSelected = index === activeIndex;

                      return (
                        <motion.li
                          key={item.id}
                          role="presentation"
                          variants={reducedMotion ? undefined : ITEM_VARIANTS}
                        >
                          <GuideCard
                            item={item}
                            isSelected={isSelected}
                            onSelect={handleNavigate}
                            tabIndex={isSelected ? 0 : -1}
                          />
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sticky footer */}
            <footer className="shrink-0 border-t border-[#E6EAF2] bg-white px-5 py-2.5 sm:px-6">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[12px] text-[#64748B]">
                <span className="inline-flex items-center gap-1.5">
                  <KeyboardKeycap>ESC</KeyboardKeycap>
                  <span>Close</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <KeyboardKeycap>↑↓</KeyboardKeycap>
                  <span>Navigate</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <KeyboardKeycap>↵</KeyboardKeycap>
                  <span>Open</span>
                </span>
              </div>
            </footer>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
