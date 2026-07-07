import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import MarketingCta from "@/modules/marketing/MarketingCta";

// MarketingShell: the composable shell for all PUBLIC marketing pages.
//
// ARCHITECTURE DECISION: route-level `app/(marketing)/layout.js` files stay thin
// and delegate composition to this shell. Keeping the shell in `layouts/` (rather
// than inline in the route file) means it can be reused/tested independently and
// the route file remains a pure wiring point. Header + Footer are constant; only
// `children` (the page body) changes between routes.

export default function MarketingShell({ children }) {
  return (
    <SmoothScroll>
      <div data-shell="marketing">
        <Header />
        {/* <main> is the single landmark for page-specific content */}
        <main>{children}</main>
        <MarketingCta />
        <Footer />
      </div>
    </SmoothScroll>
  );
}
