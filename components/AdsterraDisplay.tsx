"use client";

import { useEffect, useRef } from "react";
import type { AdsterraUnitKey } from "@/config/adsterra";
import {
  BANNER_300x250,
  BANNER_320x50,
  BANNER_468x60,
  BANNER_728x90,
  NATIVE_BANNER,
  type BannerScriptConfig,
} from "@/config/adsterraScripts";

type AdsterraDisplayProps = {
  placementId: string;
  unitKey: AdsterraUnitKey;
};

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

function loadBannerAd(
  host: HTMLDivElement,
  placementId: string,
  config: BannerScriptConfig,
) {
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
  invoke.src = config.invokeUrl;
  invoke.async = true;

  host.append(options, invoke);
}

function loadNativeAd(host: HTMLDivElement, placementId: string) {
  host.replaceChildren();

  const invoke = document.createElement("script");
  invoke.src = NATIVE_BANNER.invokeUrl;
  invoke.async = true;
  invoke.setAttribute("data-cfasync", "false");

  const container = document.createElement("div");
  container.id = `${NATIVE_BANNER.containerPrefix}-${placementId}`;

  host.append(invoke, container);
}

export function AdsterraDisplay({ placementId, unitKey }: AdsterraDisplayProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    if (unitKey === "nativeBanner") {
      loadNativeAd(host, placementId);
      return;
    }

    const banner = bannerConfigForUnit(unitKey);
    if (banner) {
      loadBannerAd(host, placementId, banner);
    }
  }, [placementId, unitKey]);

  const banner = bannerConfigForUnit(unitKey);

  return (
    <div
      ref={hostRef}
      className="flex w-full items-center justify-center overflow-hidden [&_iframe]:max-w-full"
      style={
        banner
          ? { minHeight: banner.height, maxWidth: banner.width }
          : { minHeight: 250, width: "100%" }
      }
    />
  );
}
