import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";
import { blogHref } from "@/components/blog/paths";

type HeroPostProps = {
  post: BlogPost;
};

export function HeroPost({ post }: HeroPostProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-6 pt-4 sm:px-6 sm:pb-8 sm:pt-6">
      <Link href={blogHref(post.slug)} className="block">
        <article className="group relative overflow-hidden rounded-lg border border-zinc-200/80 bg-white shadow-sm transition hover:border-blue-200 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-900">
          <div className="relative aspect-[21/9] min-h-[220px] w-full sm:min-h-[280px] md:min-h-[320px]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 sm:p-8 md:gap-3">
              <span className="inline-flex w-fit rounded bg-blue-600 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
                {post.category}
              </span>
              <h1 className="max-w-3xl text-balance text-2xl font-bold leading-tight text-white drop-shadow-sm sm:text-3xl md:text-4xl">
                {post.title}
              </h1>
              <p className="text-sm text-white/85">
                By <span className="font-medium">{post.author}</span>
                <span className="mx-2 text-white/50" aria-hidden>
                  •
                </span>
                <time dateTime={post.date}>{post.date}</time>
              </p>
            </div>
          </div>
        </article>
      </Link>
    </section>
  );
}
