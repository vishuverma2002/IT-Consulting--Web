import Link from "next/link";
import Container from "@/components/layout/Container";
import NavMenu from "@/components/navigation/NavMenu";
import PageGuideWidget from "@/components/navigation/PageGuideWidget";
import Button from "@/components/ui/Button";
import { marketingNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

// Header: top-level marketing navigation bar.
// LAYOUT DECISION: three-zone flex row -> [brand] [primary nav] [contact + CTA].
// This is the dominant pattern on consulting marketing sites (logo left, nav
// center, conversion CTA right) and keeps the primary action always visible.
// REUSABLE: rendered by MarketingShell only; it is NOT used in the dashboard,
// which has its own Topbar.
// STYLING LATER: sticky positioning and backdrop.

export default function Header() {
  return (
    <header data-component="site-header">
      <Container as="div">
        {/* Brand / logo zone */}
        <Link href="/" data-slot="brand" className="brand-link">
          <span className="brand-link-mark" aria-hidden="true" />
          <span className="brand-link-text">{siteConfig.name}</span>
        </Link>

        <nav aria-label="Primary navigation">
          <NavMenu items={marketingNav} />
        </nav>

        <div data-slot="header-actions">
          <span className="header-divider" aria-hidden="true" />
          <PageGuideWidget />
          <Button as={Link} href="/contact" variant="primary">
            Book Automation Assessment
          </Button>
        </div>
      </Container>
    </header>
  );
}
