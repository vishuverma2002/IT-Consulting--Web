import AuthShell from "@/layouts/AuthShell";

// (auth) route group layout — wraps login/register in the minimal AuthShell.
export default function AuthGroupLayout({ children }) {
  return <AuthShell>{children}</AuthShell>;
}
