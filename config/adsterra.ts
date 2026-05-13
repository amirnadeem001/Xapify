/**
 * Adsterra units for xapify.netlify.app — names match your dashboard.
 * Paste each unit's "GET CODE" snippet in the matching slot (see comments in AdSlot / AdsterraGlobal).
 */
export const ADSTERRA_UNITS = {
  popunder: {
    name: "Popunder_1",
    format: "popunder" as const,
    description: "Site-wide popunder — load once in AdsterraGlobal",
  },
  nativeBanner: {
    name: "NativeBanner_1",
    format: "native" as const,
    size: "native",
    description: "In-feed & in-article native placements",
  },
  smartlink: {
    name: "Smartlink_1",
    format: "smartlink" as const,
    description: "Global smartlink — load once in AdsterraGlobal",
  },
  socialBar: {
    name: "SocialBar_1",
    format: "socialbar" as const,
    description: "Floating social bar — load once in AdsterraGlobal",
  },
  banner468x60: {
    name: "468x60_1",
    format: "banner" as const,
    size: "468x60",
    description: "Optional compact banner (unused by default)",
  },
  banner160x300: {
    name: "160x300_1",
    format: "banner" as const,
    size: "160x300",
    description: "Optional narrow sidebar (240px column)",
  },
  banner320x50: {
    name: "320x50_1",
    format: "banner" as const,
    size: "320x50",
    description: "Mobile leaderboard",
  },
  banner728x90: {
    name: "728x90_1",
    format: "banner" as const,
    size: "728x90",
    description: "Desktop horizontal leaderboard",
  },
  banner160x600: {
    name: "160x600_1",
    format: "banner" as const,
    size: "160x600",
    description: "Optional skyscraper (unused by default)",
  },
  banner300x250: {
    name: "300x250_1",
    format: "banner" as const,
    size: "300x250",
    description: "Sidebar medium rectangle",
  },
} as const;

export type AdsterraUnitKey = keyof typeof ADSTERRA_UNITS;

/** Default unit per AdSlot type when no placement override exists. */
export const TYPE_DEFAULT_UNITS: Record<
  "banner" | "sidebar" | "native" | "footer" | "mobile",
  AdsterraUnitKey
> = {
  banner: "banner728x90",
  footer: "banner728x90",
  mobile: "banner320x50",
  sidebar: "banner300x250",
  native: "nativeBanner",
};

/**
 * Maps each on-page placement id → Adsterra unit.
 * Keys must match the `id` prop passed to <AdSlot /> / ResponsiveBannerAd suffixes.
 */
export const PLACEMENT_UNITS: Record<string, AdsterraUnitKey> = {
  // Homepage
  "hero-banner": "banner728x90",
  "hero-banner-mobile": "banner320x50",
  "footer-banner": "banner728x90",
  "footer-banner-mobile": "banner320x50",
  "sidebar-left-popular": "banner300x250",
  "sidebar-right-follow": "banner300x250",
  "sidebar-right-reviews": "banner300x250",
  "feed-native-1": "nativeBanner",
  "feed-native-2": "nativeBanner",
  "feed-native-3": "nativeBanner",

  // Article page (ResponsiveBannerAd adds -desktop / -mobile)
  "article-header-desktop": "banner728x90",
  "article-header-mobile": "banner320x50",
  "article-mid-native": "nativeBanner",
  "article-end-native": "nativeBanner",
  "article-author-native": "nativeBanner",
  "article-sidebar-left": "banner300x250",
  "article-sidebar-right-follow": "banner300x250",
};

export function resolveAdsterraUnit(
  placementId: string,
  type: keyof typeof TYPE_DEFAULT_UNITS,
  override?: AdsterraUnitKey,
): (typeof ADSTERRA_UNITS)[AdsterraUnitKey] {
  const key =
    override ?? PLACEMENT_UNITS[placementId] ?? TYPE_DEFAULT_UNITS[type];
  return ADSTERRA_UNITS[key];
}

export function resolveAdsterraUnitKey(
  placementId: string,
  type: keyof typeof TYPE_DEFAULT_UNITS,
  override?: AdsterraUnitKey,
): AdsterraUnitKey {
  return override ?? PLACEMENT_UNITS[placementId] ?? TYPE_DEFAULT_UNITS[type];
}
