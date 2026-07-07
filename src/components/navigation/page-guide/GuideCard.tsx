"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { GuideItem } from "@/config/pageGuide";
import GuideItemIcon from "./GuideItemIcon";

export type GuideCardProps = {
  item: GuideItem;
  isSelected?: boolean;
  onSelect: (item: GuideItem) => void;
  tabIndex?: number;
};

/** Premium navigation card used across all Page Guide tabs. */
export default function GuideCard({
  item,
  isSelected = false,
  onSelect,
  tabIndex = -1,
}: GuideCardProps) {
  return (
    <motion.button
      type="button"
      role="option"
      aria-selected={isSelected}
      aria-label={`${item.title} — ${item.description}`}
      tabIndex={tabIndex}
      onClick={() => onSelect(item)}
      className={[
        "group flex h-[58px] w-full cursor-pointer items-center gap-3 rounded-[14px] border bg-white px-3 text-left outline-none transition-[border-color,box-shadow,transform] duration-200",
        "focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F8FC]",
        isSelected
          ? "border-brand/40 shadow-[0_4px_16px_-6px_rgba(0,102,255,0.18)]"
          : "border-[#E6EAF2] shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-[0_8px_24px_-8px_rgba(15,23,42,0.1)]",
      ].join(" ")}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 500, damping: 32 }}
    >
      <GuideItemIcon icon={item.icon} isSelected={isSelected} />

      <span className="min-w-0 flex-1">
        <span className="block truncate text-[14px] font-medium leading-tight text-[#1E293B]">
          {item.title}
        </span>
        <span className="mt-0.5 block truncate text-[12px] leading-snug text-[#64748B]">
          {item.description}
        </span>
      </span>

      <motion.span
        className="shrink-0 text-[#CBD5E1] group-hover:text-brand"
        initial={false}
        animate={{ x: isSelected ? 2 : 0 }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 24 }}
      >
        <ChevronRight className="h-4 w-4" aria-hidden strokeWidth={2} />
      </motion.span>
    </motion.button>
  );
}
