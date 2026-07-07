"use client";

import { useEffect, useMemo, type ReactNode } from "react";
import {
  DEFAULT_THEME_ID,
  getThemeById,
  themeToCssVars,
} from "@/config/themes";

function applyThemeToDocument() {
  const theme = getThemeById(DEFAULT_THEME_ID);
  const root = document.documentElement;
  const vars = themeToCssVars(theme);

  root.setAttribute("data-theme", theme.id);
  root.setAttribute("data-theme-mode", theme.mode);

  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useMemo(() => getThemeById(DEFAULT_THEME_ID), []);

  useEffect(() => {
    applyThemeToDocument();
  }, [theme]);

  return <>{children}</>;
}
