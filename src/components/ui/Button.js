// Button: the core interactive primitive.
// REUSABLE: a polymorphic button via the `as` prop so the SAME visual element can
// render as a <button> (actions) or a Next.js <Link> (navigation) without
// duplicating styling. `variant` is a presentation hook consumed later by CSS.
// STYLING LATER: map `variant` (primary | secondary | ghost) to class names.
// NOTE: no business logic here. onClick is forwarded, never handled internally.

export default function Button({
  as: Tag = "button",
  variant = "primary",
  type,
  children,
  ...rest
}) {
  // Only native <button> elements get a default type to avoid accidental submits.
  const nativeType = Tag === "button" ? type || "button" : undefined;
  return (
    <Tag data-component="button" data-variant={variant} type={nativeType} {...rest}>
      {children}
    </Tag>
  );
}
