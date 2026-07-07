// LoadingState: generic placeholder while async data resolves.
// REUSABLE: pair with React Suspense / route `loading.js` files. Kept presentation
// only — no timers or fetching logic.

export default function LoadingState({ label = "Loading…" }) {
  return (
    <div data-component="loading-state" role="status" aria-live="polite">
      <span data-slot="spinner" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
