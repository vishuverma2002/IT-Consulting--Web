// EmptyState: shown when a list/section has no data yet.
// REUSABLE: clients with no records, empty appointment days, etc. Standardizing
// the empty experience prevents each feature from inventing its own.

export default function EmptyState({ title = "Nothing here yet", description, action }) {
  return (
    <div data-component="empty-state" role="status">
      <p data-slot="empty-title">{title}</p>
      {description ? <p data-slot="empty-description">{description}</p> : null}
      {action ? <div data-slot="empty-action">{action}</div> : null}
    </div>
  );
}
