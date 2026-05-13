import Link from "next/link";

type BreadcrumbProps = {
  category: string;
};

export function Breadcrumb({ category }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-3 text-xs font-medium text-blue-600 dark:text-blue-400"
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="transition hover:underline">
            Home
          </Link>
        </li>
        <li className="text-zinc-400" aria-hidden>
          ›
        </li>
        <li className="text-zinc-600 dark:text-zinc-400">{category}</li>
      </ol>
    </nav>
  );
}
