"use client";

import { usePathname } from "next/navigation";
import CtaSection from "@/modules/marketing/CtaSection";

const HIDDEN_ON = ["/contact"];

export default function MarketingCta() {
  const pathname = usePathname();

  if (HIDDEN_ON.includes(pathname)) {
    return null;
  }

  return <CtaSection />;
}
