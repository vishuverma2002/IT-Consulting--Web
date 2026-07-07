"use client";

// useCurrentUser: placeholder accessor for the authenticated consultant.
// STATE PLACEMENT: session/identity is GLOBAL state — it would be provided by an
// auth context mounted in the root layout, and this hook would read from it.
// Returning a stub keeps consuming components renderable before auth exists.
export default function useCurrentUser() {
  return {
    user: { id: "me", name: "Consultant", title: "Automation Consultant" },
    isAuthenticated: true,
    isLoading: false,
  };
}
