"use client";

import { useCallback, useState } from "react";

// useDisclosure: open/close state for menus, modals, mobile sidebar.
// REUSABLE client hook. Encapsulating this prevents every component from
// re-implementing the same boolean toggle. STATE PLACEMENT: this is LOCAL UI state
// and should stay co-located with the component that uses it.
export default function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  return { isOpen, open, close, toggle };
}
