"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type GuideItemIconProps = {
  icon: LucideIcon;
  isSelected?: boolean;
};

/** Gradient rounded icon badge for guide cards. */
export default function GuideItemIcon({ icon: Icon, isSelected = false }: GuideItemIconProps) {
  return (
    <motion.span
      className={[
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px]",
        isSelected
          ? "bg-gradient-to-br from-[#3b82f6] to-[#0066ff] text-white shadow-[0_4px_12px_-4px_rgba(0,102,255,0.45)]"
          : "bg-gradient-to-br from-[rgba(0,102,255,0.08)] to-[rgba(0,102,255,0.12)] text-brand group-hover:from-[#3b82f6] group-hover:to-[#0066ff] group-hover:text-white group-hover:shadow-[0_4px_12px_-4px_rgba(0,102,255,0.35)]",
      ].join(" ")}
      animate={{ scale: isSelected ? 1.06 : 1 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 480, damping: 26 }}
    >
      <Icon className="h-4 w-4" aria-hidden strokeWidth={2} />
    </motion.span>
  );
}
