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
          ? "bg-gradient-to-br from-[#5B5FF8] to-[#7C7FFF] text-white shadow-[0_4px_12px_-4px_rgba(91,95,248,0.45)]"
          : "bg-gradient-to-br from-[#EEF0FF] to-[#E8EAFF] text-[#5B5FF8] group-hover:from-[#5B5FF8] group-hover:to-[#7C7FFF] group-hover:text-white group-hover:shadow-[0_4px_12px_-4px_rgba(91,95,248,0.35)]",
      ].join(" ")}
      animate={{ scale: isSelected ? 1.06 : 1 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 480, damping: 26 }}
    >
      <Icon className="h-4 w-4" aria-hidden strokeWidth={2} />
    </motion.span>
  );
}
