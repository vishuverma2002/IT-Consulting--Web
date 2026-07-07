"use client";

import { useSyncExternalStore } from "react";

// useMediaQuery: subscribe to a CSS media query from JS.
// Used for responsive BEHAVIOR that can't be expressed in CSS alone (e.g. whether
// to render the sidebar inline vs. as a toggled overlay on mobile).
export default function useMediaQuery(query) {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
