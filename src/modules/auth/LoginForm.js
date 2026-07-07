"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

// LoginForm: credential entry for the /login route.
// CLIENT COMPONENT: forms own local input state and submit handling, which is
// inherently client-side. STATE PLACEMENT: keep field state local to this form
// (no global store) — auth result/session belongs in a higher-level provider later.
// NOTE: no real auth logic — onSubmit is a stub to be wired to services/auth.

export default function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault();
    // TODO: call services/authService.login(...) and route to /dashboard.
  }

  return (
    <form data-component="login-form" onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <label>
        Email
        <input type="email" name="email" autoComplete="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" autoComplete="current-password" />
      </label>
      <Button type="submit" variant="primary">Sign in</Button>
      <p>
        No account? <Link href="/register">Create one</Link>
      </p>
    </form>
  );
}
