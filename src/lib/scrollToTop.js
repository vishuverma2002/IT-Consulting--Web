/** @typedef {{ smooth?: boolean }} ScrollToTopOptions */

export const SCROLL_TO_TOP_EVENT = "app:scroll-to-top";

let pendingSmoothScrollToTop = false;

/** Mark the next route transition to scroll to top smoothly (e.g. brand logo click). */
export function markPendingSmoothScrollToTop() {
  pendingSmoothScrollToTop = true;
}

/** Read and clear the pending smooth-scroll flag (one-time per navigation). */
export function consumePendingSmoothScrollToTop() {
  const pending = pendingSmoothScrollToTop;
  pendingSmoothScrollToTop = false;
  return pending;
}

/**
 * Scroll the document to the top and notify Lenis (when active) via a custom event.
 * @param {ScrollToTopOptions} [options]
 */
export function scrollDocumentToTop({ smooth = false } = {}) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent(SCROLL_TO_TOP_EVENT, { detail: { smooth } }),
  );

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: smooth ? "smooth" : "auto",
  });
}
