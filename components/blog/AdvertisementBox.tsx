type AdvertisementBoxProps = {
  label?: string;
};

export function AdvertisementBox({
  label = "Responsive Advertisement",
}: AdvertisementBoxProps) {
  return (
    <div
      className="flex min-h-[90px] items-center justify-center rounded border border-dashed border-zinc-300 bg-zinc-100/80 px-4 py-6 text-center text-xs font-medium uppercase tracking-wide text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-400"
      role="region"
      aria-label={label}
    >
      {label}
    </div>
  );
}
