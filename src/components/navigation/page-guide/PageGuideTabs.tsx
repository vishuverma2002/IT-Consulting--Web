"use client";

import { motion } from "framer-motion";
import { PAGE_GUIDE_TABS, type GuideTabId } from "@/config/pageGuide";

type PageGuideTabsProps = {
  activeTab: GuideTabId;
  onTabChange: (tab: GuideTabId) => void;
};

/** Compact animated tabs with sliding underline indicator. */
export default function PageGuideTabs({ activeTab, onTabChange }: PageGuideTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Page guide sections"
      className="relative inline-flex w-fit items-center gap-1"
    >
      {PAGE_GUIDE_TABS.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <motion.button
            key={tab.id}
            type="button"
            role="tab"
            id={`page-guide-tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`page-guide-panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onTabChange(tab.id)}
            className={[
              "relative flex shrink-0 flex-col items-center px-3 pb-2 pt-1.5 text-[13px] font-medium leading-none whitespace-nowrap outline-none",
              "focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F8FC]",
              isActive ? "text-brand" : "text-[#64748B] hover:text-[#1E293B]",
            ].join(" ")}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 480, damping: 28 }}
          >
            <span className="relative z-[1] flex items-center gap-1.5">
              <motion.span
                className="text-[13px] leading-none"
                aria-hidden
                animate={{
                  scale: isActive ? 1.12 : 1,
                  rotate: isActive ? [0, -8, 8, 0] : 0,
                }}
                transition={
                  isActive
                    ? { scale: { type: "spring", stiffness: 500, damping: 22 }, rotate: { duration: 0.4 } }
                    : { type: "spring", stiffness: 500, damping: 28 }
                }
              >
                {tab.emoji}
              </motion.span>

              <motion.span
                animate={{ fontWeight: isActive ? 600 : 500 }}
                transition={{ duration: 0.2 }}
              >
                {tab.label}
              </motion.span>
            </span>

            {isActive ? (
              <motion.span
                layoutId="page-guide-tab-underline"
                className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-brand shadow-[0_0_8px_rgba(0,102,255,0.45)]"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            ) : (
              <motion.span
                className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-brand/0"
                whileHover={{ backgroundColor: "rgba(0, 102, 255, 0.2)" }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
