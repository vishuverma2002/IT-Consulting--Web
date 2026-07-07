// Container: the single horizontal-rhythm primitive.
// REUSABLE: every section wraps its content in <Container> so max-width and
// gutter spacing are defined once. This is the foundation of consistent spacing
// logic across both marketing and dashboard surfaces.
// STYLING LATER: this is where max-width, horizontal padding, and centering rules
// will be applied (e.g. a `.container` class or CSS module).

export default function Container({ as: Tag = "div", className, children }) {
  return (
    <Tag data-component="container" className={className}>
      {children}
    </Tag>
  );
}
