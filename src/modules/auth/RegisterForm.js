"use client";

import Link from "next/link";
import { Button } from "@/components/ui";

// RegisterForm: account creation for the /register route.
// CLIENT COMPONENT for the same reasons as LoginForm. Logic is intentionally a stub.

export default function RegisterForm() {
  function handleSubmit(event) {
    event.preventDefault();
    // TODO: call services/authService.register(...) then route to /dashboard.
  }

  return (
    <form data-component="register-form" onSubmit={handleSubmit}>
      <h1>Create account</h1>
      <label>
        Full name
        <input type="text" name="name" autoComplete="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" autoComplete="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" autoComplete="new-password" />
      </label>
      <Button type="submit" variant="primary">Create account</Button>
      <p>
        Already have an account? <Link href="/login">Sign in</Link>
      </p>
    </form>
  );
}
