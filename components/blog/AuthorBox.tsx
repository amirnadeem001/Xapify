import Image from "next/image";
import type { BlogPost } from "@/data/blogPosts";

type AuthorBoxProps = {
  post: BlogPost;
};

export function AuthorBox({ post }: AuthorBoxProps) {
  const seed = post.authorAvatarSeed ?? `author-${post.id}`;
  return (
    <section
      className="mt-8 flex gap-4 rounded-lg border border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-900/30"
      aria-labelledby={`author-${post.id}`}
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
        <Image
          src={`https://picsum.photos/seed/${seed}/128/128`}
          alt={`${post.author} portrait`}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0">
        <h2
          id={`author-${post.id}`}
          className="text-sm font-bold text-zinc-900 dark:text-white"
        >
          About {post.author}
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {post.authorBio}
        </p>
      </div>
    </section>
  );
}
