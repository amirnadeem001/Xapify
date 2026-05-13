"use client";

type ShareButtonsProps = {
  title: string;
  url: string;
};

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);

  const items = [
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      className: "bg-[#1877F2] hover:bg-[#1664d8]",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
          <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H7V12h3.5V9.5c0-3.45 2-5.35 5.1-5.35 1.48 0 3 .26 3 .26v3.3h-1.7c-1.67 0-2.2 1.04-2.2 2.1V12h3.75l-.6 3.9h-3.15V22A10 10 0 0022 12z" />
        </svg>
      ),
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}`,
      className: "bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700",
      icon: (
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden>
          <path d="M18.244 3H20.5l-6.98 7.99L22 21h-5.11l-4-4.7L6.8 21H3l7.47-8.55L3 3h5.13l3.6 4.25L18.244 3z" />
        </svg>
      ),
    },
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${text}%20${encoded}`,
      className: "bg-emerald-600 hover:bg-emerald-500",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
          <path d="M20.5 12.2c0 4.5-3.7 8.2-8.2 8.2-1.4 0-2.8-.4-4-1.1L4 20l1.8-4.1c-.8-1.2-1.3-2.7-1.3-4.2 0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2zm-8.2-6.8c-3.8 0-6.8 3.1-6.8 6.8 0 1.3.4 2.5 1 3.5l-.6 1.4 1.5-.4c1 .6 2.2.9 3.4.9 3.8 0 6.8-3.1 6.8-6.8 0-3.8-3.1-6.8-6.8-6.8z" />
        </svg>
      ),
    },
    {
      label: "Share on Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${encoded}&description=${text}`,
      className: "bg-[#BD081C] hover:bg-[#a00718]",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8-.11-.79-.21-2 .04-2.86l1.18-5.01s-.3-.6-.3-1.48c0-1.38.8-2.41 1.8-2.41.85 0 1.26.64 1.26 1.4 0 .85-.54 2.12-.82 3.3-.23.98.5 1.78 1.48 1.78 1.78 0 3.15-1.88 3.15-4.58 0-2.39-1.72-4.06-4.18-4.06-2.85 0-4.52 2.14-4.52 4.35 0 .86.33 1.79.74 2.29.08.1.09.19.07.29l-.28 1.12c-.05.18-.14.22-.33.13-1.24-.58-2.02-2.4-2.02-3.87 0-3.15 2.29-6.05 6.6-6.05 3.46 0 6.15 2.47 6.15 5.77 0 3.44-2.17 6.21-5.19 6.21-1.01 0-1.96-.53-2.29-1.15l-.66 2.52c-.24.92-.89 2.07-1.32 2.77 1 .31 2.06.48 3.16.48 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "Share by email",
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Read: ${url}`)}`,
      className: "bg-zinc-500 hover:bg-zinc-600",
      icon: (
        <svg
          className="h-4 w-4 fill-none stroke-current"
          viewBox="0 0 24 24"
          strokeWidth="2"
          aria-hidden
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      ),
    },
    {
      label: "More sharing options",
      href: "#",
      className: "bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600",
      icon: (
        <span className="text-lg font-bold leading-none" aria-hidden>
          +
        </span>
      ),
    },
  ];

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex h-9 min-w-9 items-center justify-center rounded px-3 text-white shadow-sm transition focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${item.className}`}
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
