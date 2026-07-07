// PageHeader: standard title block for any dashboard or content page.
// REUSABLE: gives every page a consistent title + description + actions row so we
// don't re-implement page headers per feature. `actions` is a slot for buttons.
// STYLING LATER: typography scale, spacing below, and alignment of the actions slot.

export default function PageHeader({ title, description, actions }) {
  return (
    <div data-component="page-header">
      <div data-slot="page-header-text">
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
      {actions ? <div data-slot="page-header-actions">{actions}</div> : null}
    </div>
  );
}
