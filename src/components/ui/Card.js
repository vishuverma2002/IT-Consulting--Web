// Card: generic surface/container primitive.
// REUSABLE: the workhorse block for the entire app -> service tiles, metric cards,
// client rows, dashboard widgets all compose from Card. Subcomponents keep the
// internal regions (header/body/footer) consistent everywhere.
// STYLING LATER: border, radius, padding, elevation/shadow tokens.

export default function Card({ as: Tag = "section", children }) {
  return (
    <Tag data-component="card">{children}</Tag>
  );
}

export function CardHeader({ children }) {
  return <div data-slot="card-header">{children}</div>;
}

export function CardBody({ children }) {
  return <div data-slot="card-body">{children}</div>;
}

export function CardFooter({ children }) {
  return <div data-slot="card-footer">{children}</div>;
}
