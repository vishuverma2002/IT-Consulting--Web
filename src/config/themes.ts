export type ThemeMode = "dark" | "light";

export interface Theme {
  id: string;
  name: string;
  description: string;
  mode: ThemeMode;
  recommended?: boolean;
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  card: string;
  text: string;
  heading: string;
  muted: string;
  border: string;
  gradient: string;
  heroBackground: string;
  heroOverlay: string;
  heroText: string;
  heroDarkOverlay?: boolean;
  buttonPrimary: string;
  buttonSecondary: string;
  buttonPrimaryHover: string;
  shadow: string;
  badge: string;
  success: string;
  warning: string;
  error: string;
}

function alpha(hex: string, opacity: number): string {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const DEFAULT_THEME_ID = "blue-white-saas";

export const themes: Theme[] = [
  {
    id: "current-dark-blue",
    name: "Current Dark Blue",
    description: "Dark navy hero with purple accents",
    mode: "light",
    primary: "#4F46E5",
    secondary: "#6366F1",
    background: "#F4F6FB",
    surface: "#FFFFFF",
    card: "#FFFFFF",
    text: "#0F172A",
    heading: "#0A1F4E",
    muted: "#5B6472",
    border: "#E6E8EE",
    gradient: "linear-gradient(135deg, #6366F1 0%, #4F46E5 50%, #4338CA 100%)",
    heroBackground: "#070B16",
    heroOverlay:
      "linear-gradient(90deg, rgba(11, 17, 33, 0.96) 0%, rgba(11, 17, 33, 0.78) 45%, rgba(11, 17, 33, 0.52) 100%), radial-gradient(60% 60% at 82% 18%, rgba(99, 102, 241, 0.16) 0%, transparent 70%), linear-gradient(180deg, rgba(11, 17, 33, 0.55) 0%, transparent 45%, rgba(11, 17, 33, 0.6) 100%)",
    heroText: "#FFFFFF",
    buttonPrimary: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
    buttonSecondary: "#F1F5F9",
    buttonPrimaryHover: "#4338CA",
    shadow: "0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.06)",
    badge: alpha("#4F46E5", 0.15),
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
  },
  {
    id: "classic-saas-blue",
    name: "Classic SaaS Blue",
    description: "White background with corporate blue accents",
    mode: "light",
    primary: "#2563EB",
    secondary: "#3B82F6",
    background: "#F8FAFC",
    surface: "#FFFFFF",
    card: "#FFFFFF",
    text: "#0F172A",
    heading: "#0A1F4E",
    muted: "#64748B",
    border: "#E2E8F0",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    heroBackground:
      "linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 40%, #F1F5F9 100%)",
    heroOverlay:
      "radial-gradient(70% 60% at 80% 10%, rgba(37, 99, 235, 0.08) 0%, transparent 70%), radial-gradient(50% 50% at 10% 80%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
    heroText: "#0F172A",
    buttonPrimary: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    buttonSecondary: "#F1F5F9",
    buttonPrimaryHover: "#1D4ED8",
    shadow: "0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.06)",
    badge: alpha("#2563EB", 0.1),
    success: "#059669",
    warning: "#D97706",
    error: "#DC2626",
  },
  {
    id: "modern-indigo",
    name: "Modern Indigo",
    description: "Premium startup with indigo accents",
    mode: "dark",
    primary: "#6366F1",
    secondary: "#818CF8",
    background: "#0F172A",
    surface: "#1E293B",
    card: "rgba(30, 41, 59, 0.85)",
    text: "#F1F5F9",
    heading: "#FFFFFF",
    muted: "#94A3B8",
    border: "rgba(148, 163, 184, 0.2)",
    gradient: "linear-gradient(135deg, #818CF8 0%, #6366F1 50%, #4F46E5 100%)",
    heroBackground: "#0F172A",
    heroOverlay:
      "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(99, 102, 241, 0.2) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 100%, rgba(79, 70, 229, 0.12) 0%, transparent 60%), linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, transparent 50%)",
    heroText: "#FFFFFF",
    buttonPrimary: "linear-gradient(135deg, #818CF8 0%, #6366F1 100%)",
    buttonSecondary: "rgba(148, 163, 184, 0.12)",
    buttonPrimaryHover: "#4F46E5",
    shadow: "0 8px 32px -8px rgba(15, 23, 42, 0.5)",
    badge: alpha("#6366F1", 0.18),
    success: "#34D399",
    warning: "#FBBF24",
    error: "#F87171",
  },
  {
    id: "emerald",
    name: "Emerald",
    description: "Dark background with trustworthy green accents",
    mode: "dark",
    primary: "#10B981",
    secondary: "#34D399",
    background: "#0A0F0D",
    surface: "#111916",
    card: "rgba(17, 25, 22, 0.9)",
    text: "#ECFDF5",
    heading: "#FFFFFF",
    muted: "#6EE7B7",
    border: "rgba(16, 185, 129, 0.2)",
    gradient: "linear-gradient(135deg, #34D399 0%, #10B981 50%, #059669 100%)",
    heroBackground: "#0A0F0D",
    heroOverlay:
      "radial-gradient(ellipse 70% 55% at 75% 15%, rgba(16, 185, 129, 0.18) 0%, transparent 65%), radial-gradient(ellipse 50% 45% at 15% 85%, rgba(52, 211, 153, 0.1) 0%, transparent 60%), linear-gradient(180deg, rgba(10, 15, 13, 0.5) 0%, transparent 50%)",
    heroText: "#FFFFFF",
    buttonPrimary: "linear-gradient(135deg, #34D399 0%, #10B981 100%)",
    buttonSecondary: "rgba(16, 185, 129, 0.12)",
    buttonPrimaryHover: "#059669",
    shadow: "0 8px 32px -8px rgba(5, 150, 105, 0.25)",
    badge: alpha("#10B981", 0.15),
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
  },
  {
    id: "orange-startup",
    name: "Orange Startup",
    description: "Energetic dark charcoal with orange accents",
    mode: "dark",
    primary: "#F97316",
    secondary: "#FB923C",
    background: "#18181B",
    surface: "#27272A",
    card: "rgba(39, 39, 42, 0.9)",
    text: "#FAFAFA",
    heading: "#FFFFFF",
    muted: "#A1A1AA",
    border: "rgba(249, 115, 22, 0.2)",
    gradient: "linear-gradient(135deg, #FB923C 0%, #F97316 50%, #EA580C 100%)",
    heroBackground: "#18181B",
    heroOverlay:
      "radial-gradient(ellipse 75% 60% at 80% 10%, rgba(249, 115, 22, 0.2) 0%, transparent 65%), radial-gradient(ellipse 55% 50% at 10% 90%, rgba(251, 146, 60, 0.12) 0%, transparent 60%), linear-gradient(180deg, rgba(24, 24, 27, 0.5) 0%, transparent 50%)",
    heroText: "#FFFFFF",
    buttonPrimary: "linear-gradient(135deg, #FB923C 0%, #F97316 100%)",
    buttonSecondary: "rgba(249, 115, 22, 0.12)",
    buttonPrimaryHover: "#EA580C",
    shadow: "0 8px 32px -8px rgba(234, 88, 12, 0.3)",
    badge: alpha("#F97316", 0.15),
    success: "#22C55E",
    warning: "#FBBF24",
    error: "#EF4444",
  },
  {
    id: "purple-gradient",
    name: "Purple Gradient",
    description: "Premium AI feel with purple and pink gradients",
    mode: "dark",
    primary: "#A855F7",
    secondary: "#EC4899",
    background: "#0C0A14",
    surface: "#1A1525",
    card: "rgba(26, 21, 37, 0.9)",
    text: "#F5F3FF",
    heading: "#FFFFFF",
    muted: "#C4B5FD",
    border: "rgba(168, 85, 247, 0.25)",
    gradient: "linear-gradient(135deg, #EC4899 0%, #A855F7 50%, #7C3AED 100%)",
    heroBackground: "#0C0A14",
    heroOverlay:
      "radial-gradient(ellipse 80% 65% at 70% 5%, rgba(168, 85, 247, 0.22) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 95%, rgba(236, 72, 153, 0.15) 0%, transparent 60%), linear-gradient(180deg, rgba(12, 10, 20, 0.5) 0%, transparent 50%)",
    heroText: "#FFFFFF",
    buttonPrimary: "linear-gradient(135deg, #EC4899 0%, #A855F7 100%)",
    buttonSecondary: "rgba(168, 85, 247, 0.12)",
    buttonPrimaryHover: "#7C3AED",
    shadow: "0 8px 32px -8px rgba(124, 58, 237, 0.35)",
    badge: alpha("#A855F7", 0.18),
    success: "#34D399",
    warning: "#FBBF24",
    error: "#F87171",
  },
  {
    id: "teal-professional",
    name: "Teal Professional",
    description: "Clean B2B with teal buttons and gray sections",
    mode: "light",
    primary: "#0D9488",
    secondary: "#14B8A6",
    background: "#F8FAFA",
    surface: "#FFFFFF",
    card: "#FFFFFF",
    text: "#134E4A",
    heading: "#0F3D3A",
    muted: "#5F7A78",
    border: "#D1E7E5",
    gradient: "linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)",
    heroBackground:
      "linear-gradient(180deg, #F0FDFA 0%, #F8FAFA 50%, #ECFDF5 100%)",
    heroOverlay:
      "radial-gradient(ellipse 70% 55% at 85% 15%, rgba(13, 148, 136, 0.1) 0%, transparent 70%), radial-gradient(ellipse 50% 45% at 10% 80%, rgba(20, 184, 166, 0.08) 0%, transparent 70%)",
    heroText: "#134E4A",
    buttonPrimary: "linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)",
    buttonSecondary: "#F0FDFA",
    buttonPrimaryHover: "#0F766E",
    shadow: "0 4px 6px -1px rgba(15, 61, 58, 0.08), 0 2px 4px -2px rgba(15, 61, 58, 0.06)",
    badge: alpha("#0D9488", 0.1),
    success: "#059669",
    warning: "#D97706",
    error: "#DC2626",
  },
  {
    id: "luxury-black-gold",
    name: "Luxury Black & Gold",
    description: "Premium enterprise with gold accents",
    mode: "dark",
    primary: "#D4AF37",
    secondary: "#F5D061",
    background: "#0A0A0A",
    surface: "#141414",
    card: "rgba(20, 20, 20, 0.92)",
    text: "#F5F5F5",
    heading: "#FFFFFF",
    muted: "#A3A3A3",
    border: "rgba(212, 175, 55, 0.25)",
    gradient: "linear-gradient(135deg, #F5D061 0%, #D4AF37 50%, #B8860B 100%)",
    heroBackground: "#0A0A0A",
    heroOverlay:
      "radial-gradient(ellipse 70% 55% at 75% 10%, rgba(212, 175, 55, 0.15) 0%, transparent 65%), radial-gradient(ellipse 50% 45% at 15% 90%, rgba(245, 208, 97, 0.08) 0%, transparent 60%), linear-gradient(180deg, rgba(10, 10, 10, 0.6) 0%, transparent 50%)",
    heroText: "#FFFFFF",
    buttonPrimary: "linear-gradient(135deg, #F5D061 0%, #D4AF37 100%)",
    buttonSecondary: "rgba(212, 175, 55, 0.1)",
    buttonPrimaryHover: "#B8860B",
    shadow: "0 8px 32px -8px rgba(212, 175, 55, 0.2)",
    badge: alpha("#D4AF37", 0.15),
    success: "#4ADE80",
    warning: "#FBBF24",
    error: "#F87171",
  },
  {
    id: "minimal-gray",
    name: "Minimal Gray",
    description: "Apple-like clean gray UI with blue highlights",
    mode: "light",
    primary: "#007AFF",
    secondary: "#5AC8FA",
    background: "#FAFAFA",
    surface: "#FFFFFF",
    card: "#FFFFFF",
    text: "#1D1D1F",
    heading: "#1D1D1F",
    muted: "#86868B",
    border: "#E5E5EA",
    gradient: "linear-gradient(135deg, #5AC8FA 0%, #007AFF 100%)",
    heroBackground:
      "linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 50%, #FAFAFA 100%)",
    heroOverlay:
      "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(0, 122, 255, 0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 15% 75%, rgba(90, 200, 250, 0.05) 0%, transparent 70%)",
    heroText: "#1D1D1F",
    buttonPrimary: "linear-gradient(135deg, #5AC8FA 0%, #007AFF 100%)",
    buttonSecondary: "#F5F5F7",
    buttonPrimaryHover: "#0066CC",
    shadow: "0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
    badge: alpha("#007AFF", 0.08),
    success: "#34C759",
    warning: "#FF9500",
    error: "#FF3B30",
  },
  {
    id: "blue-white-saas",
    name: "Blue + White",
    description: "Modern SaaS — Stripe, Vercel, Linear inspired",
    mode: "light",
    recommended: true,
    primary: "#0066FF",
    secondary: "#3B82F6",
    background: "#F7F9FC",
    surface: "#FFFFFF",
    card: "#FFFFFF",
    text: "#0A0A0A",
    heading: "#0A0A0A",
    muted: "#6B7280",
    border: "#E5E7EB",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #0066FF 100%)",
    heroBackground: "#0F172A",
    heroOverlay:
      "linear-gradient(90deg, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0.88) 45%, rgba(15, 23, 42, 0.84) 100%), linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
    heroText: "#FFFFFF",
    heroDarkOverlay: true,
    buttonPrimary: "linear-gradient(135deg, #3B82F6 0%, #0066FF 100%)",
    buttonSecondary: "#F3F4F6",
    buttonPrimaryHover: "#0052CC",
    shadow: "0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 102, 255, 0.08)",
    badge: alpha("#0066FF", 0.08),
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
  },
];

export function getThemeById(id: string): Theme {
  return themes.find((t) => t.id === id) ?? themes[0];
}

export function themeToCssVars(theme: Theme): Record<string, string> {
  const isDark = theme.mode === "dark";
  const heroOnDark = isDark || theme.heroDarkOverlay === true;
  const accentContrast = isDark ? "#FFFFFF" : "#FFFFFF";

  return {
    "--accent": theme.primary,
    "--accent-hover": theme.buttonPrimaryHover,
    "--accent-secondary": theme.secondary,
    "--accent-contrast": accentContrast,
    "--accent-soft": alpha(theme.primary, isDark ? 0.15 : 0.1),
    "--accent-glow": alpha(theme.primary, isDark ? 0.35 : 0.2),
    "--accent-soft-bg": alpha(theme.primary, isDark ? 0.12 : 0.06),
    "--accent-border": alpha(theme.primary, isDark ? 0.25 : 0.18),
    "--ink": theme.text,
    "--heading": theme.heading,
    "--muted": theme.muted,
    "--surface": theme.surface,
    "--bg": theme.background,
    "--bg-subtle": isDark ? theme.surface : alpha(theme.primary, 0.04),
    "--bg-elevated": theme.surface,
    "--border-soft": theme.border,
    "--line": `1px solid ${theme.border}`,
    "--section-border": `1px solid ${theme.border}`,
    "--gradient": theme.gradient,
    "--gradient-brand": theme.gradient,
    "--hero-bg": theme.heroBackground,
    "--hero-overlay": theme.heroOverlay,
    "--hero-text": theme.heroText,
    "--hero-accent": theme.secondary,
    "--hero-badge-bg": heroOnDark ? "rgba(255, 255, 255, 0.95)" : alpha(theme.primary, 0.08),
    "--hero-badge-border": heroOnDark ? "rgba(255, 255, 255, 0.25)" : alpha(theme.secondary, 0.25),
    "--hero-badge-text": heroOnDark ? theme.primary : theme.primary,
    "--hero-sub-text": heroOnDark ? "#94A3B8" : theme.muted,
    "--hero-check-text": heroOnDark ? "#FFFFFF" : theme.text,
    "--hero-micro-text": heroOnDark ? "#64748B" : theme.muted,
    "--hero-check-icon-bg": heroOnDark ? "rgba(34, 197, 94, 0.15)" : alpha(theme.success, 0.1),
    "--hero-check-icon-border": heroOnDark ? "rgba(34, 197, 94, 0.35)" : alpha(theme.success, 0.28),
    "--hero-check-icon-color": heroOnDark ? "#22C55E" : theme.success,
    "--hero-card-bg": heroOnDark ? "#0A0F1E" : theme.card,
    "--hero-card-border": heroOnDark ? "rgba(255, 255, 255, 0.08)" : theme.border,
    "--hero-card-shadow": heroOnDark
      ? "0 24px 48px -20px rgba(0, 0, 0, 0.7)"
      : theme.shadow,
    "--hero-accent-gradient": heroOnDark ? "linear-gradient(120deg, #FFFFFF 0%, #E2E8F0 100%)" : theme.gradient,
    "--hero-icon-opacity": heroOnDark ? "0.55" : "0.12",
    "--hero-secondary-bg": heroOnDark ? "#FFFFFF" : theme.buttonSecondary,
    "--hero-secondary-border": heroOnDark ? "#FFFFFF" : theme.border,
    "--hero-secondary-text": heroOnDark ? "#0F172A" : theme.text,
    "--hero-secondary-hover-bg": heroOnDark ? "#F1F5F9" : alpha(theme.primary, 0.06),
    "--hero-stat-bg": heroOnDark ? "rgba(255, 255, 255, 0.04)" : alpha(theme.primary, 0.03),
    "--hero-stat-border": heroOnDark ? "rgba(255, 255, 255, 0.08)" : theme.border,
    "--hero-eyebrow": heroOnDark ? "rgba(255, 255, 255, 0.55)" : theme.muted,
    "--hero-wave-fill": heroOnDark ? theme.heroBackground : theme.surface,
    "--hrc-text": heroOnDark ? "#ffffff" : theme.text,
    "--hrc-muted": heroOnDark ? "#94A3B8" : theme.muted,
    "--hrc-subtle": heroOnDark ? "#64748B" : theme.muted,
    "--hrc-surface": heroOnDark ? "rgba(255, 255, 255, 0.05)" : alpha(theme.primary, 0.03),
    "--hrc-surface-hover": heroOnDark ? "rgba(255, 255, 255, 0.08)" : alpha(theme.primary, 0.06),
    "--hrc-border": heroOnDark ? "rgba(255, 255, 255, 0.08)" : theme.border,
    "--hrc-border-strong": heroOnDark ? "rgba(255, 255, 255, 0.12)" : theme.border,
    "--hrc-badge-text": heroOnDark ? alpha(theme.secondary, 0.9) : theme.primary,
    "--hrc-live": theme.success,
    "--button-primary": theme.buttonPrimary,
    "--button-primary-hover": theme.buttonPrimaryHover,
    "--button-secondary": theme.buttonSecondary,
    "--card-bg": theme.card,
    "--card-gradient": isDark
      ? `linear-gradient(160deg, ${alpha(theme.surface, 0.95)}, ${alpha(theme.background, 0.85)})`
      : `linear-gradient(160deg, ${theme.card}, ${alpha(theme.primary, 0.02)})`,
    "--card-border-hover": alpha(theme.primary, isDark ? 0.22 : 0.15),
    "--card-shadow": theme.shadow,
    "--nav-bg": isDark ? alpha(theme.surface, 0.95) : theme.surface,
    "--nav-bg-gradient": isDark
      ? `linear-gradient(180deg, ${alpha(theme.surface, 1)} 0%, ${alpha(theme.surface, 0.98)} 100%)`
      : `linear-gradient(180deg, ${theme.surface} 0%, ${alpha(theme.surface, 0.98)} 100%)`,
    "--nav-menu-bg": alpha(theme.primary, isDark ? 0.12 : 0.06),
    "--nav-menu-border": alpha(theme.primary, isDark ? 0.15 : 0.1),
    "--footer-bg": isDark ? theme.background : theme.heading,
    "--footer-bg-gradient": isDark
      ? `radial-gradient(55% 50% at 12% 0%, ${alpha(theme.primary, 0.1)} 0%, transparent 70%), radial-gradient(45% 45% at 88% 100%, ${alpha(theme.secondary, 0.08)} 0%, transparent 72%), linear-gradient(180deg, ${theme.surface} 0%, ${theme.background} 100%)`
      : `linear-gradient(180deg, ${theme.heading} 0%, ${alpha(theme.heading, 0.95)} 100%)`,
    "--footer-text": isDark ? "rgba(255, 255, 255, 0.55)" : "rgba(255, 255, 255, 0.7)",
    "--footer-text-muted": isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.55)",
    "--footer-heading": isDark ? "rgba(255, 255, 255, 0.82)" : "rgba(255, 255, 255, 0.9)",
    "--footer-border": isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.1)",
    "--glass-bg": isDark ? alpha(theme.surface, 0.7) : alpha(theme.surface, 0.85),
    "--glass-border": alpha(theme.primary, isDark ? 0.2 : 0.12),
    "--input-bg": isDark ? alpha(theme.surface, 0.6) : theme.surface,
    "--input-border": theme.border,
    "--shadow-sm": isDark
      ? "0 1px 2px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.15)"
      : "0 1px 2px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.1)",
    "--shadow-md": theme.shadow,
    "--shadow-lg": isDark
      ? "0 24px 48px -12px rgba(0, 0, 0, 0.35), 0 8px 16px -8px rgba(0, 0, 0, 0.2)"
      : "0 24px 48px -12px rgba(15, 23, 42, 0.12), 0 8px 16px -8px rgba(15, 23, 42, 0.06)",
    "--shadow-card": theme.shadow,
    "--shadow-accent": `0 10px 24px -14px ${alpha(theme.primary, 0.65)}`,
    "--badge-bg": theme.badge,
    "--success": theme.success,
    "--success-soft": alpha(theme.success, 0.1),
    "--success-border": alpha(theme.success, 0.28),
    "--warning": theme.warning,
    "--warning-soft": alpha(theme.warning, 0.1),
    "--error": theme.error,
    "--error-soft": alpha(theme.error, 0.1),
    "--scrollbar-track": isDark ? alpha(theme.surface, 0.8) : alpha(theme.primary, 0.06),
    "--scrollbar-thumb": alpha(theme.secondary, isDark ? 0.5 : 0.4),
    "--header-shimmer": `linear-gradient(90deg, transparent 0%, ${alpha(theme.primary, 0.35)} 25%, ${alpha(theme.secondary, 0.55)} 50%, ${alpha(theme.primary, 0.35)} 75%, transparent 100%)`,
    "--brand-mark-gradient": `linear-gradient(135deg, ${theme.secondary}, ${theme.primary})`,
    "--brand-mark-glow": alpha(theme.primary, 0.15),
    "--brand-mark-glow-hover": alpha(theme.primary, 0.2),
    "--text-on-dark": "#FFFFFF",
    "--color-brand": theme.primary,
    "--color-brand-hover": theme.buttonPrimaryHover,
    "--color-brand-soft": alpha(theme.primary, 0.08),
    "--color-ink": theme.text,
    "--color-muted": theme.muted,
    "--section-gradient": isDark
      ? `linear-gradient(180deg, ${theme.surface} 0%, ${theme.background} 55%, ${theme.background} 100%)`
      : `linear-gradient(180deg, ${theme.background} 0%, ${alpha(theme.primary, 0.03)} 55%, ${theme.surface} 100%)`,
    "--section-gradient-alt": isDark
      ? `linear-gradient(180deg, ${theme.background} 0%, ${theme.surface} 50%, ${alpha(theme.primary, 0.05)} 100%)`
      : `linear-gradient(180deg, ${theme.surface} 0%, ${alpha(theme.primary, 0.04)} 50%, ${theme.background} 100%)`,
    "--section-surface": theme.surface,
    "--section-muted": isDark ? alpha(theme.surface, 0.5) : alpha(theme.primary, 0.04),
    "--section-card": isDark
      ? `linear-gradient(165deg, ${alpha(theme.surface, 0.95)} 0%, ${alpha(theme.background, 0.9)} 100%)`
      : `linear-gradient(165deg, ${theme.surface} 0%, ${alpha(theme.primary, 0.02)} 100%)`,
  };
}
