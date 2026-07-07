import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  CreditCard,
  Home,
  Layers,
  Mail,
  Newspaper,
  Scale,
  Shield,
  UserCircle,
  Wrench,
  Zap,
  LayoutGrid,
} from "lucide-react";

/** Shared shape for searchable guide entries across tabs. */
export type GuideItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  /** Optional home-page section anchor for smooth scroll when already on "/". */
  scrollTarget?: string;
  icon: LucideIcon;
  keywords?: string[];
};

export type GuideTabId = "shortcuts" | "pages" | "legal";

export const PAGE_GUIDE_TABS: {
  id: GuideTabId;
  label: string;
  emoji: string;
  icon: LucideIcon;
}[] = [
  { id: "pages", label: "All Pages", emoji: "📄", icon: LayoutGrid },
  { id: "shortcuts", label: "Shortcuts", emoji: "⚡", icon: Zap },
  { id: "legal", label: "Legal", emoji: "⚖", icon: Scale },
];

export const SHORTCUT_ITEMS: GuideItem[] = [
  {
    id: "home",
    title: "Home",
    description: "Return to the main landing page.",
    href: "/",
    icon: Home,
    keywords: ["landing", "start"],
  },
  {
    id: "about",
    title: "About",
    description: "Learn about our team and mission.",
    href: "/about",
    icon: UserCircle,
    keywords: ["team", "company", "story"],
  },
  {
    id: "services",
    title: "Services",
    description: "Explore all development services.",
    href: "/services",
    scrollTarget: "services",
    icon: Layers,
    keywords: ["development", "web", "solutions"],
  },
  {
    id: "pricing",
    title: "Pricing",
    description: "See hourly and fixed pricing.",
    href: "/pricing",
    icon: CreditCard,
    keywords: ["plans", "rates", "cost"],
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "View successful client projects.",
    href: "/case-studies",
    icon: Briefcase,
    keywords: ["portfolio", "results", "projects"],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Explore available development tools.",
    href: "/tools",
    icon: Wrench,
    keywords: ["utilities", "resources"],
  },
];

export const ALL_PAGE_ITEMS: GuideItem[] = [
  {
    id: "home",
    title: "Home",
    description: "Return to the main landing page.",
    href: "/",
    icon: Home,
  },
  {
    id: "about",
    title: "About",
    description: "Learn about our team and mission.",
    href: "/about",
    icon: UserCircle,
  },
  {
    id: "services",
    title: "Services",
    description: "Browse our full service catalog.",
    href: "/services",
    icon: Layers,
  },
  {
    id: "pricing",
    title: "Pricing",
    description: "Compare hourly and fixed project plans.",
    href: "/pricing",
    icon: CreditCard,
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "See real client outcomes and work.",
    href: "/case-studies",
    icon: Briefcase,
  },
  {
    id: "tools",
    title: "Tools",
    description: "Development tools and resources.",
    href: "/tools",
    icon: Wrench,
  },
  {
    id: "blog",
    title: "Blog",
    description: "Read insights, guides, and updates.",
    href: "/blog",
    icon: Newspaper,
  },
  {
    id: "contact",
    title: "Contact",
    description: "Reach out for a project consultation.",
    href: "/contact",
    icon: Mail,
  },
];

export const LEGAL_ITEMS: GuideItem[] = [
  {
    id: "privacy",
    title: "Privacy Policy",
    description: "How we collect and protect your data.",
    href: "/privacy",
    icon: Shield,
  },
  {
    id: "refund",
    title: "Refund Policy",
    description: "Cancellation and refund terms.",
    href: "/terms#cancellation",
    icon: CreditCard,
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    description: "Full terms for using our services.",
    href: "/terms",
    icon: Scale,
  },
];

/** Filter guide items by search query (title, description, keywords). */
export function filterGuideItems(items: GuideItem[], query: string): GuideItem[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return items;

  return items.filter((item) => {
    const haystack = [item.title, item.description, ...(item.keywords ?? [])]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
}

/** Resolve items for the active tab. */
export function getItemsForTab(tab: GuideTabId): GuideItem[] {
  switch (tab) {
    case "shortcuts":
      return SHORTCUT_ITEMS;
    case "pages":
      return ALL_PAGE_ITEMS;
    case "legal":
      return LEGAL_ITEMS;
    default:
      return [];
  }
}
