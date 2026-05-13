# Adsterra Ad Units Integration Guide

This document contains the Adsterra ad unit placement map and all ad scripts/links provided for the Next.js blogging website.

---

## Unit → Placement Map

| Adsterra Unit | Where It Goes |
|---|---|
| `728x90_1` | Homepage hero banner, footer banner, article header **desktop** |
| `320x50_1` | Homepage hero/footer mobile, article header **mobile** |
| `300x250_1` | All sidebar slots **home + article** |
| `NativeBanner_1` | Homepage in-feed ads, article mid/end/author native slots |
| `Popunder_1` | Site-wide — `components/AdsterraGlobal.tsx` |
| `Smartlink_1` | Site-wide — `AdsterraGlobal.tsx` |
| `SocialBar_1` | Site-wide — `AdsterraGlobal.tsx` |
| `468x60_1`, `160x300_1`, `160x600_1` | Registered in config, not used by default. Available via `unit` prop override. |

---

## Ad Unit Codes

### 1. `728x90_1`

**Use for:** Homepage hero banner, footer banner, article header desktop.

```html
<script>
  atOptions = {
    'key' : '949367cfb02c4078ee12ab56869d9ae0',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/949367cfb02c4078ee12ab56869d9ae0/invoke.js"></script>
```

---

### 2. `320x50_1`

**Use for:** Homepage hero/footer mobile, article header mobile.

```html
<script>
  atOptions = {
    'key' : 'e9b758a8411aa349b52fb342bbd82017',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/e9b758a8411aa349b52fb342bbd82017/invoke.js"></script>
```

---

### 3. `300x250_1`

**Use for:** Sidebar slots on homepage and article detail pages.

```html
<script>
  atOptions = {
    'key' : '28c04621d35016464500c187bdca389e',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/28c04621d35016464500c187bdca389e/invoke.js"></script>
```

---

### 4. `NativeBanner_1`

**Use for:** Homepage in-feed ads, article mid-content, article end, and author/native ad slots.

```html
<script async="async" data-cfasync="false" src="https://pl29433215.profitablecpmratenetwork.com/2888bf2ec32e4dd287370e8a0f3478e9/invoke.js"></script>
<div id="container-2888bf2ec32e4dd287370e8a0f3478e9"></div>
```

---

### 5. `Popunder_1`

**Use for:** Site-wide global script inside `components/AdsterraGlobal.tsx`.

```html
<script src="https://pl29433214.profitablecpmratenetwork.com/66/26/ad/6626ad75e9b90ff27886c1125179c244.js"></script>
```

---

### 6. `Smartlink_1`

**Use for:** Site-wide smart link inside `AdsterraGlobal.tsx` or specific CTA/link placement.

```txt
https://www.profitablecpmratenetwork.com/jy445ifax?key=3aa101b5cb3dbb0fc9a2ed47a4535c55
```

---

### 7. `SocialBar_1`

**Use for:** Site-wide global script inside `AdsterraGlobal.tsx`.

```html
<script src="https://pl29433217.profitablecpmratenetwork.com/f9/4c/18/f94c18eb05aa3f31bd448051a38c784c.js"></script>
```

---

### 8. `468x60_1`

**Use for:** Optional banner placement via `unit` prop override.

```html
<script>
  atOptions = {
    'key' : '32d123e6d1b9e3c34e8dbcfeb8717c1e',
    'format' : 'iframe',
    'height' : 60,
    'width' : 468,
    'params' : {}
  };
</script>
<script src="https://www.highperformanceformat.com/32d123e6d1b9e3c34e8dbcfeb8717c1e/invoke.js"></script>
```

---

## Recommended Implementation Notes

- Keep `Popunder_1`, `SocialBar_1`, and `Smartlink_1` in a global component like `AdsterraGlobal.tsx`.
- Use responsive rendering for `728x90_1` and `320x50_1` so desktop and mobile users receive the correct ad size.
- Do not overload the first screen with too many ads. It can hurt user experience and may reduce engagement.
- Use `300x250_1` mainly for sidebar cards and article-side placements.
- Use `NativeBanner_1` between content sections where it feels natural, not after every paragraph.

