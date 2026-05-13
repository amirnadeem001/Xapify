import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";
import { blogHref } from "@/components/blog/paths";

type PostCardProps = {
  post: BlogPost;
};

export function PostCard({ post }: PostCardProps) {
  const href = blogHref(post.slug);
  return (
    <article className="group flex flex-col gap-4 rounded-lg border border-zinc-200/80 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-900 sm:flex-row sm:items-stretch">
      <Link
        href={href}
        className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-md sm:aspect-auto sm:h-36 sm:w-44 md:h-40 md:w-52"
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 208px"
          className="object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-95"
        />
        <span className="absolute left-2 top-2 rounded bg-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
          {post.category}
        </span>
      </Link>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
        <h2 className="text-lg font-bold leading-snug text-zinc-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 md:text-xl">
          <Link
            href={href}
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {post.title}
          </Link>
        </h2>
        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {post.excerpt}
        </p>
        <p className="mt-auto text-xs text-zinc-500 dark:text-zinc-500">
          By{" "}
          <span className="font-medium text-blue-600 dark:text-blue-400">
            {post.author}
          </span>
          <span className="mx-1.5 text-zinc-300 dark:text-zinc-600" aria-hidden>
            •
          </span>
          <time dateTime={post.date} className="text-zinc-500">
            {post.date}
          </time>
        </p>
      </div>
    </article>
  );
}
