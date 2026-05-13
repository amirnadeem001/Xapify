import { AdsterraDisplay } from "@/components/AdsterraDisplay";
import {
  resolveAdsterraUnit,
  resolveAdsterraUnitKey,
  type AdsterraUnitKey,
} from "@/config/adsterra";

type AdSlotType = "banner" | "sidebar" | "native" | "footer" | "mobile";

type AdSlotProps = {
  id: string;
  type: AdSlotType;
  className?: string;
  unit?: AdsterraUnitKey;
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
      return "mx-auto w-full max-w-full md:max-w-[300px]";
    default:
      return "";
  }
}

export function AdSlot({ id, type, className = "", unit }: AdSlotProps) {
  const adUnit = resolveAdsterraUnit(id, type, unit);
  const unitKey = resolveAdsterraUnitKey(id, type, unit);

  return (
    <aside
      id={id}
      data-ad-slot={type}
      data-adsterra-unit={adUnit.name}
      aria-label="Advertisement"
      className={`${visibilityClasses(type)} mx-auto w-full items-center justify-center ${className}`.trim()}
    >
      <div className={`w-full ${sizeClasses(type)}`}>
        <AdsterraDisplay placementId={id} unitKey={unitKey} slotType={type} />
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
