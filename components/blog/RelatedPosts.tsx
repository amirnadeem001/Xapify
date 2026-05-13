import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blogPosts";
import { blogHref } from "@/components/blog/paths";

type RelatedPostsProps = {
  posts: BlogPost[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className="mt-10" aria-labelledby="related-heading">
      <h2
        id="related-heading"
        className="border-b-2 border-zinc-900 pb-2 text-sm font-bold uppercase tracking-wide text-zinc-900 dark:border-white dark:text-white"
      >
        Related Posts
      </h2>
      {posts.length === 0 ? (
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          No other posts in this category yet.
        </p>
      ) : (
        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.id}>
              <article className="group overflow-hidden rounded-md border border-zinc-200/80 bg-white shadow-sm transition hover:border-blue-200 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-blue-900">
                <Link
                  href={blogHref(p.slug)}
                  className="relative block aspect-[16/10] w-full overflow-hidden"
                >
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="p-3">
                  <h3 className="text-sm font-bold leading-snug text-zinc-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    <Link href={blogHref(p.slug)}>{p.title}</Link>
                  </h3>
                  <time
                    dateTime={p.date}
                    className="mt-1 block text-[11px] text-zinc-500"
                  >
                    {p.date}
                  </time>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
