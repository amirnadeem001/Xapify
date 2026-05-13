"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#", label: "Features", hasChevron: true },
  { href: "#", label: "Mega Menu", hasChevron: true },
  { href: "#", label: "Documentation", hasChevron: true },
  { href: "#", label: "Download This Template" },
];

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" strokeLinecap="round" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      className="ml-0.5 inline-block h-3.5 w-3.5 opacity-60"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
        <button
          type="button"
          className="rounded-md p-2 text-zinc-700 transition hover:bg-zinc-100 hover:text-blue-600 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-blue-400 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <MenuIcon />
        </button>

        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-tight text-zinc-900 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        >
          <span className="text-blue-600 dark:text-blue-400">X</span>
          apify.
        </Link>



        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <button
            type="button"
            className="rounded-md p-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            className="rounded-md p-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            onClick={toggleTheme}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>


    </header>
  );
}
