type AdSlotType = "banner" | "sidebar" | "native" | "footer" | "mobile";

type AdSlotProps = {
  id: string;
  type: AdSlotType;
  className?: string;
};

const SLOT_CONFIG: Record<AdSlotType, { label: string }> = {
  banner: { label: "Adsterra Ad - 728x90" },
  footer: { label: "Adsterra Ad - 728x90" },
  sidebar: { label: "Adsterra Ad - 300x250" },
  native: { label: "Adsterra Ad - 300x250" },
  mobile: { label: "Adsterra Ad - 320x50" },
};

function visibilityClasses(type: AdSlotType): string {
  switch (type) {
    case "banner":
    case "footer":
      return "hidden md:flex";
    case "mobile":
      return "flex md:hidden";
    default:
      return "flex";
  }
}

function sizeClasses(type: AdSlotType): string {
  switch (type) {
    case "banner":
    case "footer":
      return "h-[90px] w-full max-w-[728px]";
    case "mobile":
      return "h-[50px] w-full max-w-[320px]";
    case "sidebar":
      return "aspect-[300/250] w-full max-w-[300px]";
    case "native":
      return "mx-auto aspect-[300/250] w-full max-w-full md:max-w-[300px]";
    default:
      return "";
  }
}

export function AdSlot({ id, type, className = "" }: AdSlotProps) {
  const { label } = SLOT_CONFIG[type];

  return (
    <aside
      id={id}
      data-ad-slot={type}
      aria-label="Advertisement"
      className={`${visibilityClasses(type)} mx-auto w-full items-center justify-center ${className}`.trim()}
    >
      {/*
        Paste your Adsterra script / ad unit code here.
        Replace the placeholder div below with the snippet from your Adsterra dashboard.
        Keep the outer <aside> wrapper so layout and responsive visibility stay intact.
      */}
      <div
        className={`flex items-center justify-center rounded-lg border border-dashed border-zinc-300/60 bg-zinc-100/50 px-3 text-center dark:border-zinc-700/80 dark:bg-zinc-900/40 ${sizeClasses(type)}`}
      >
        <span className="text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
          {label}
        </span>
      </div>
    </aside>
  );
}

/** Desktop 728×90 + mobile 320×50 pair for article banners. */
export function ResponsiveBannerAd({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  return (
    <div className={`w-full space-y-3 ${className}`.trim()}>
      <AdSlot id={`${id}-desktop`} type="banner" />
      <AdSlot id={`${id}-mobile`} type="mobile" />
    </div>
  );
}
