import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";
import { blogHref } from "@/components/blog/paths";

type SmallPostCardProps = {
  post: BlogPost;
  compact?: boolean;
  variant?: "row" | "grid";
};

export function SmallPostCard({
  post,
  compact,
  variant = "row",
}: SmallPostCardProps) {
  const href = blogHref(post.slug);

  if (variant === "grid") {
    return (
      <article className="group overflow-hidden rounded-md border border-zinc-200/80 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <Link href={href} className="relative block aspect-[4/3] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 50vw, 150px"
            className="object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
          />
        </Link>
        <div className="p-2.5">
          <h3 className="text-xs font-semibold leading-snug text-zinc-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            <Link
              href={href}
              className="line-clamp-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {post.title}
            </Link>
          </h3>
          <time
            dateTime={post.date}
            className="mt-1 block text-[10px] text-zinc-500 dark:text-zinc-500"
          >
            {post.date}
          </time>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex gap-3">
      <Link
        href={href}
        className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md sm:h-[72px] sm:w-[72px]"
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="72px"
          className="object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
        />
      </Link>
      <div className="min-w-0 flex-1">
        <h3
          className={`font-semibold leading-snug text-zinc-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 ${compact ? "text-sm" : "text-[15px]"}`}
        >
          <Link
            href={href}
            className="line-clamp-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {post.title}
          </Link>
        </h3>
        <time
          dateTime={post.date}
          className="mt-1 block text-xs text-zinc-500 dark:text-zinc-500"
        >
          {post.date}
        </time>
      </div>
    </article>
  );
}
