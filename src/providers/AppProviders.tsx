"use client";

import type { ReactNode } from "react";
import FloatingChatWidget from "@/components/chat/FloatingChatWidget";
import ScrollToTopOnNavigate from "@/components/layout/ScrollToTopOnNavigate";
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ScrollToTopOnNavigate />
      {children}
      <FloatingChatWidget />
    </ThemeProvider>
  );
}
