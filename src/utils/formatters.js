// Pure, framework-agnostic formatting helpers.
// Kept side-effect free so they are trivially unit-testable and reusable on both
// the server and client. No business logic lives here, only presentation shaping.

/** @param {string|Date} input */
export function formatDate(input) {
  const date = typeof input === "string" ? new Date(input) : input;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

/** @param {string|Date} input */
export function formatTime(input) {
  const date = typeof input === "string" ? new Date(input) : input;
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

/** @param {number} amount */
export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
