import Link from "next/link";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/config/navigation";

// Footer: premium 6-column sitemap — brand block + five link columns + legal bar.
// LAYOUT DECISION: a single responsive grid (1.4fr + 5×1fr on desktop) with dark
// theme styling in globals.css. Columns collapse gracefully on tablet/mobile.

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-component="site-footer">
      <Container as="div">
        <div data-slot="footer-grid">
          <div data-slot="footer-brand">
            <Link href="/" data-slot="footer-logo" aria-label={`${siteConfig.name} home`}>
              <span data-slot="footer-logo-mark" aria-hidden="true">
                CF
              </span>
              <span data-slot="footer-logo-text">{siteConfig.name}</span>
            </Link>
            <p data-slot="footer-brand-desc">{siteConfig.description}</p>
          </div>

          {footerNav.map((column) => (
            <nav key={column.title} data-slot="footer-col" aria-label={column.title}>
              <p data-slot="footer-col-title">{column.title}</p>
              <ul>
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      <div data-slot="footer-bottom">
        <Container as="div">
          <p data-slot="footer-legal">
            © {year} {siteConfig.name}. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
