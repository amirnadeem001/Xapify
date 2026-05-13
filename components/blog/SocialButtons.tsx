type SocialNetwork = "facebook" | "twitter" | "youtube" | "instagram";

const items: { id: SocialNetwork; label: string; href: string; className: string }[] =
  [
    {
      id: "facebook",
      label: "Facebook",
      href: "#",
      className:
        "bg-[#1877F2] hover:bg-[#1664d8] focus-visible:ring-[#1877F2]",
    },
    {
      id: "twitter",
      label: "X (Twitter)",
      href: "#",
      className:
        "bg-sky-500 hover:bg-sky-600 focus-visible:ring-sky-500",
    },
    {
      id: "youtube",
      label: "YouTube",
      href: "#",
      className:
        "bg-red-600 hover:bg-red-700 focus-visible:ring-red-600",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "#",
      className:
        "bg-gradient-to-br from-pink-500 via-rose-500 to-amber-500 hover:opacity-95 focus-visible:ring-pink-500",
    },
  ];

function Icon({ id }: { id: SocialNetwork }) {
  switch (id) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H7V12h3.5V9.5c0-3.45 2-5.35 5.1-5.35 1.48 0 3 .26 3 .26v3.3h-1.7c-1.67 0-2.2 1.04-2.2 2.1V12h3.75l-.6 3.9h-3.15V22A10 10 0 0022 12z" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M18.244 3H20.5l-6.98 7.99L22 21h-5.11l-4-4.7L6.8 21H3l7.47-8.55L3 3h5.13l3.6 4.25L18.244 3z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16 4.7 12 4.7 12 4.7h0s-4 0-6.1.2c-.4 0-1.2 0-1.9.9-.6.6-.8 2-.8 2S3 9.6 3 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.6.7 2 .8 1.4.1 6.1.2 6.1.2s4 0 6.1-.2c.4 0 1.2 0 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2zM10 14.6V8.9l5.2 2.85-5.2 2.85z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 17a5.5 5.5 0 01-5-5.5zm0 2A3.5 3.5 0 1012 8a3.5 3.5 0 00-3.5 3.5zM17.5 6.3a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
        </svg>
      );
    default:
      return null;
  }
}

export function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map((s) => (
        <a
          key={s.id}
          href={s.href}
          className={`flex items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-white shadow-sm transition focus-visible:outline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 ${s.className}`}
        >
          <Icon id={s.id} />
          <span className="sr-only">{s.label}</span>
        </a>
      ))}
    </div>
  );
}
