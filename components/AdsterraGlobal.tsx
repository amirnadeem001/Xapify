"use client";

import Script from "next/script";
import {
  POPUNDER_SCRIPT_URL,
  SMARTLINK_URL,
  SOCIAL_BAR_SCRIPT_URL,
} from "@/config/adsterraScripts";

export function AdsterraGlobal() {
  return (
    <>
      <Script
        id="adsterra-popunder"
        src={POPUNDER_SCRIPT_URL}
        strategy="lazyOnload"
      />
      <Script
        id="adsterra-social-bar"
        src={SOCIAL_BAR_SCRIPT_URL}
        strategy="lazyOnload"
      />
      <span className="sr-only" data-adsterra-smartlink={SMARTLINK_URL} />
    </>
  );
}
