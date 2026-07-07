// apiClient: the single low-level HTTP boundary for the whole app.
// ARCHITECTURE DECISION: ALL network access funnels through here so concerns like
// base URL, headers, auth tokens, and error normalization are defined ONCE. Feature
// services (clientService, etc.) build on top of this and never call fetch directly.
// This keeps data-access swappable (REST today, GraphQL/SDK tomorrow) without
// touching UI or feature code.

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "/api";

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });

  if (!res.ok) {
    // Normalize errors so callers handle one shape. (No business logic here.)
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json();
}

export const apiClient = {
  get: (path) => request(path),
  post: (path, body) => request(path, { method: "POST", body: JSON.stringify(body) }),
  put: (path, body) => request(path, { method: "PUT", body: JSON.stringify(body) }),
  delete: (path) => request(path, { method: "DELETE" }),
};
