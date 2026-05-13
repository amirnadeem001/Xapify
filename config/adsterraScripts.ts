/** Adsterra script keys and invoke URLs from adsterra-ad-units.md */

export type BannerScriptConfig = {
  kind: "banner";
  key: string;
  format: "iframe";
  width: number;
  height: number;
  invokeUrl: string;
};

export type NativeScriptConfig = {
  kind: "native";
  invokeUrl: string;
  containerId: string;
};

export const BANNER_728x90: BannerScriptConfig = {
  kind: "banner",
  key: "949367cfb02c4078ee12ab56869d9ae0",
  format: "iframe",
  width: 728,
  height: 90,
  invokeUrl:
    "https://www.highperformanceformat.com/949367cfb02c4078ee12ab56869d9ae0/invoke.js",
};

export const BANNER_320x50: BannerScriptConfig = {
  kind: "banner",
  key: "e9b758a8411aa349b52fb342bbd82017",
  format: "iframe",
  width: 320,
  height: 50,
  invokeUrl:
    "https://www.highperformanceformat.com/e9b758a8411aa349b52fb342bbd82017/invoke.js",
};

export const BANNER_300x250: BannerScriptConfig = {
  kind: "banner",
  key: "28c04621d35016464500c187bdca389e",
  format: "iframe",
  width: 300,
  height: 250,
  invokeUrl:
    "https://www.highperformanceformat.com/28c04621d35016464500c187bdca389e/invoke.js",
};

export const BANNER_468x60: BannerScriptConfig = {
  kind: "banner",
  key: "32d123e6d1b9e3c34e8dbcfeb8717c1e",
  format: "iframe",
  width: 468,
  height: 60,
  invokeUrl:
    "https://www.highperformanceformat.com/32d123e6d1b9e3c34e8dbcfeb8717c1e/invoke.js",
};

export const NATIVE_BANNER: NativeScriptConfig = {
  kind: "native",
  invokeUrl:
    "https://pl29433215.profitablecpmratenetwork.com/2888bf2ec32e4dd287370e8a0f3478e9/invoke.js",
  containerId: "container-2888bf2ec32e4dd287370e8a0f3478e9",
};

export const POPUNDER_SCRIPT_URL =
  "https://pl29433214.profitablecpmratenetwork.com/66/26/ad/6626ad75e9b90ff27886c1125179c244.js";

export const SOCIAL_BAR_SCRIPT_URL =
  "https://pl29433217.profitablecpmratenetwork.com/f9/4c/18/f94c18eb05aa3f31bd448051a38c784c.js";

export const SMARTLINK_URL =
  "https://www.profitablecpmratenetwork.com/jy445ifax?key=3aa101b5cb3dbb0fc9a2ed47a4535c55";
