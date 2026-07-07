import Link from "next/link";
import { siteConfig } from "@/config/site";

// AuthShell: minimal, distraction-free shell for login/register flows.
//
// LAYOUT DECISION: auth pages deliberately drop the marketing Header and the
// dashboard Sidebar. A centered single-column card focuses the user on one task
// (sign in / sign up). Isolating this as its own shell keeps that intent explicit.

export default function AuthShell({ children }) {
  return (
    <div data-shell="auth">
      <Link href="/" data-slot="auth-brand">
        {siteConfig.name}
      </Link>
      <main data-slot="auth-card">{children}</main>
    </div>
  );
}
