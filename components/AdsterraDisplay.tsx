"use client";

import { useEffect, useRef, useState } from "react";
import type { AdsterraUnitKey } from "@/config/adsterra";
import {
  BANNER_300x250,
  BANNER_320x50,
  BANNER_468x60,
  BANNER_728x90,
  NATIVE_BANNER,
  type BannerScriptConfig,
} from "@/config/adsterraScripts";

export type AdSlotType = "banner" | "sidebar" | "native" | "footer" | "mobile";

type AdsterraDisplayProps = {
  placementId: string;
  unitKey: AdsterraUnitKey;
  slotType: AdSlotType;
};

const MOBILE_MQ = "(max-width: 767px)";
const DESKTOP_MQ = "(min-width: 768px)";

/** Serialize banner loads that share the same invoke URL to avoid atOptions races. */
const bannerQueues = new Map<string, Promise<void>>();

let nativeScriptInjected = false;
let nativePlacementId: string | null = null;

function useAdSlotActive(slotType: AdSlotType): boolean {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (slotType === "sidebar" || slotType === "native") {
      setActive(true);
      return;
    }

    const query = slotType === "mobile" ? MOBILE_MQ : DESKTOP_MQ;
    const mq = window.matchMedia(query);
    const update = () => setActive(mq.matches);

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [slotType]);

  return active;
}

function bannerConfigForUnit(unitKey: AdsterraUnitKey): BannerScriptConfig | null {
  switch (unitKey) {
    case "banner728x90":
      return BANNER_728x90;
    case "banner320x50":
      return BANNER_320x50;
    case "banner300x250":
      return BANNER_300x250;
    case "banner468x60":
      return BANNER_468x60;
    default:
      return null;
  }
}

function enqueueBannerLoad(
  invokeUrl: string,
  task: () => Promise<void>,
): Promise<void> {
  const prev = bannerQueues.get(invokeUrl) ?? Promise.resolve();
  const next = prev.then(task).catch(() => undefined);
  bannerQueues.set(invokeUrl, next);
  return next;
}

function loadBannerAd(
  host: HTMLDivElement,
  placementId: string,
  config: BannerScriptConfig,
): Promise<void> {
  return enqueueBannerLoad(config.invokeUrl, () =>
    new Promise((resolve) => {
      host.replaceChildren();

      const options = document.createElement("script");
      options.text = `atOptions = ${JSON.stringify({
        key: config.key,
        format: config.format,
        height: config.height,
        width: config.width,
        params: {},
      })};`;

      const invoke = document.createElement("script");
      invoke.src = `${config.invokeUrl}?slot=${encodeURIComponent(placementId)}`;
      invoke.async = true;
      invoke.onload = () => window.setTimeout(resolve, 120);
      invoke.onerror = () => resolve();

      host.append(options, invoke);
    }),
  );
}

function ensureNativeScript() {
  if (nativeScriptInjected) return;
  nativeScriptInjected = true;

  const invoke = document.createElement("script");
  invoke.src = NATIVE_BANNER.invokeUrl;
  invoke.async = true;
  invoke.setAttribute("data-cfasync", "false");
  document.body.appendChild(invoke);
}

function loadNativeAd(host: HTMLDivElement, placementId: string) {
  if (nativePlacementId !== null && nativePlacementId !== placementId) {
    void loadBannerAd(host, placementId, BANNER_300x250);
    return;
  }

  nativePlacementId = placementId;
  host.replaceChildren();

  const container = document.createElement("div");
  container.id = NATIVE_BANNER.containerId;

  host.appendChild(container);
  ensureNativeScript();
}

export function AdsterraDisplay({
  placementId,
  unitKey,
  slotType,
}: AdsterraDisplayProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const active = useAdSlotActive(slotType);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (!active) {
      host.replaceChildren();
      return;
    }

    const run = async () => {
      if (unitKey === "nativeBanner") {
        loadNativeAd(host, placementId);
        return;
      }

      const banner = bannerConfigForUnit(unitKey);
      if (banner) {
        await loadBannerAd(host, placementId, banner);
      }
    };

    void run();

    return () => {
      host.replaceChildren();
    };
  }, [active, placementId, unitKey, slotType]);

  const banner = bannerConfigForUnit(unitKey);
  const showFrame = active && banner;

  return (
    <div
      ref={hostRef}
      className="flex w-full items-center justify-center overflow-hidden [&_iframe]:max-w-full"
      style={
        showFrame
          ? { minHeight: banner.height, maxWidth: banner.width }
          : active && unitKey === "nativeBanner"
            ? { minHeight: 250, width: "100%" }
            : undefined
      }
    />
  );
}
