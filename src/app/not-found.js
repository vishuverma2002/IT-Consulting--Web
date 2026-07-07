import Link from "next/link";

// Global 404 boundary. Rendered for unmatched routes app-wide.
export default function NotFound() {
  return (
    <main data-component="not-found">
      <h1>Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">Back to home</Link>
    </main>
  );
}
