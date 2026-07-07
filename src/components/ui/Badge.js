// Badge: compact status/label pill.
// REUSABLE: used for client status (active/prospect/archived), appointment state,
// and tags. `tone` is a presentation hook resolved by CSS later.

export default function Badge({ tone = "neutral", children }) {
  return (
    <span data-component="badge" data-tone={tone}>
      {children}
    </span>
  );
}
