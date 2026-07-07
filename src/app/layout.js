import { Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site";
import AppProviders from "@/providers/AppProviders";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

// Root layout: REQUIRED by the App Router and the only place <html>/<body> live.
// ARCHITECTURE DECISION: keep the root layout intentionally minimal. It does NOT
// render any chrome (no Header/Sidebar) because the app has THREE distinct shells
// (marketing, dashboard, auth) selected per route group. Global providers (theme,
// auth/session, query client) would be mounted here so they wrap every route.

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.variable} data-theme="blue-white-saas" data-theme-mode="light" suppressHydrationWarning>
      <head>
        <Script src="/theme-boot.js" strategy="beforeInteractive" />
      </head>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
