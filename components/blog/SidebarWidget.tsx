type SidebarWidgetProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function SidebarWidget({
  title,
  children,
  className = "",
}: SidebarWidgetProps) {
  return (
    <section
      className={`rounded-lg border border-zinc-200/80 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 ${className}`}
    >
      <h2 className="border-b border-zinc-200 pb-2 text-sm font-bold uppercase tracking-wide text-zinc-900 dark:border-zinc-800 dark:text-white">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
