import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";
import { blogHref } from "@/components/blog/paths";

type PostNavigationProps = {
  prev: BlogPost | null;
  next: BlogPost | null;
};

export function PostNavigation({ prev, next }: PostNavigationProps) {
  return (
    <nav
      className="mt-10 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-sm font-semibold dark:border-zinc-800 sm:flex-row sm:justify-between"
      aria-label="Post navigation"
    >
      <div className="min-w-0 flex-1">
        {prev ? (
          <Link
            href={blogHref(prev.slug)}
            className="inline-flex max-w-full flex-col gap-0.5 text-blue-600 transition hover:underline dark:text-blue-400"
          >
            <span className="inline-flex items-center gap-1">
              <span aria-hidden className="text-zinc-400">
                ‹
              </span>
              Previous Post
            </span>
            <span className="line-clamp-2 text-left text-xs font-normal text-zinc-500 dark:text-zinc-400">
              {prev.title}
            </span>
          </Link>
        ) : (
          <span className="text-zinc-400">No previous post</span>
        )}
      </div>
      <div className="min-w-0 flex-1 sm:text-right">
        {next ? (
          <Link
            href={blogHref(next.slug)}
            className="inline-flex max-w-full flex-col items-end gap-0.5 text-blue-600 transition hover:underline dark:text-blue-400 sm:ml-auto"
          >
            <span className="inline-flex items-center gap-1">
              Next Post
              <span aria-hidden className="text-zinc-400">
                ›
              </span>
            </span>
            <span className="line-clamp-2 text-right text-xs font-normal text-zinc-500 dark:text-zinc-400">
              {next.title}
            </span>
          </Link>
        ) : (
          <span className="text-zinc-400">No next post</span>
        )}
      </div>
    </nav>
  );
}
