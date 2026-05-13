import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Contact Us" },
  { href: "#", label: "RTL Version" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-800 bg-zinc-900 text-zinc-200 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-3">
            <p className="text-xl font-bold text-white">
              <span className="text-blue-400">X</span>apify.
            </p>
            <p className="text-sm leading-relaxed text-zinc-400">
              About Us: Xapify is a magazine-style demo publication showcasing
              clean typography, structured sidebars, and responsive layouts built
              with modern web tooling—no backend required.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-blue-600"
              aria-label="Facebook"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H7V12h3.5V9.5c0-3.45 2-5.35 5.1-5.35 1.48 0 3 .26 3 .26v3.3h-1.7c-1.67 0-2.2 1.04-2.2 2.1V12h3.75l-.6 3.9h-3.15V22A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-sky-500"
              aria-label="X"
            >
              <span className="sr-only">X</span>
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden>
                <path d="M18.244 3H20.5l-6.98 7.99L22 21h-5.11l-4-4.7L6.8 21H3l7.47-8.55L3 3h5.13l3.6 4.25L18.244 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-red-600"
              aria-label="YouTube"
            >
              <span className="sr-only">YouTube</span>
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                <path d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16 4.7 12 4.7 12 4.7h0s-4 0-6.1.2c-.4 0-1.2 0-1.9.9-.6.6-.8 2-.8 2S3 9.6 3 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.6.7 2 .8 1.4.1 6.1.2 6.1.2s4 0 6.1-.2c.4 0 1.2 0 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2zM10 14.6V8.9l5.2 2.85-5.2 2.85z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-pink-600"
              aria-label="Instagram"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 17a5.5 5.5 0 01-5-5.5zm0 2A3.5 3.5 0 1012 8a3.5 3.5 0 00-3.5 3.5zM17.5 6.3a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 bg-zinc-950 py-4 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-zinc-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Xapify. All rights reserved.</p>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {footerLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="transition hover:text-blue-400"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
