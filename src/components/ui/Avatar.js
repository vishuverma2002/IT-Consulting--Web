// Avatar: user/entity identity primitive.
// REUSABLE: Topbar, ConsultantProfile, and client lists. Falls back to initials
// when no image is provided so it is safe to render with partial data.

function initials(name = "") {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Avatar({ name = "", src }) {
  return (
    <span data-component="avatar" aria-label={name}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element -- placeholder skeleton, swap for next/image when assets exist
        <img src={src} alt={name} />
      ) : (
        <span data-slot="avatar-initials">{initials(name)}</span>
      )}
    </span>
  );
}
