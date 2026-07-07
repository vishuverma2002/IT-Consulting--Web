"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { forwardRef } from "react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
};

/** Command-palette style search with animated focus ring. */
const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(
    { value, onChange, placeholder = "Search pages...", id = "page-guide-search" },
    ref,
  ) {
    return (
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#94a3b8]"
          aria-hidden
        />
        <motion.input
          ref={ref}
          id={id}
          type="search"
          role="searchbox"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck={false}
          className="w-full rounded-2xl border border-[#e6e8ee]/80 bg-white/70 py-3.5 pl-11 pr-4 text-[15px] text-[#0f172a] shadow-[inset_0_1px_0_transparent] outline-none backdrop-blur-sm transition-[border-color,box-shadow,background-color] placeholder:text-[#94a3b8] focus:border-[var(--accent)]/40 focus:bg-white focus:shadow-[0_0_0_4px_rgba(79,70,229,0.12),inset_0_1px_0_transparent]"
          whileFocus={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 420, damping: 28 }}
        />
      </div>
    );
  },
);

export default SearchInput;
