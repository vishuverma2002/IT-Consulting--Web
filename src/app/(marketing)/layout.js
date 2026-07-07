import MarketingShell from "@/layouts/MarketingShell";

// (marketing) route group layout.
// The parentheses mean this folder does NOT add a URL segment — it only groups
// public pages so they SHARE the MarketingShell (Header + Footer) without nesting
// the URL under "/marketing". This thin layout just delegates to the shell.

export default function MarketingLayout({ children }) {
  return <MarketingShell>{children}</MarketingShell>;
}
