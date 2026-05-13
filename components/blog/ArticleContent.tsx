import { AdSlot } from "@/components/AdSlot";
import type { BlogPost } from "@/data/blogPosts";

type ArticleContentProps = {
  post: BlogPost;
  showMidAd?: boolean;
};

export function ArticleContent({ post, showMidAd = false }: ArticleContentProps) {
  const quote = post.pullQuote;
  const bullets = post.bulletPoints ?? [];

  const splitAt = Math.max(1, Math.floor(post.content.length * 0.45));
  const before = post.content.slice(0, splitAt);
  const after = post.content.slice(splitAt);

  return (
    <div className="article-body text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
      {before.map((paragraph, i) => (
        <p key={`b-${i}`} className="mb-4">
          {paragraph}
        </p>
      ))}

      {showMidAd ? (
        <div className="my-6">
          <AdSlot id="article-mid-native" type="native" />
        </div>
      ) : null}

      {quote ? (
        <blockquote className="my-6 border-l-4 border-zinc-300 bg-zinc-50 py-3 pl-4 pr-2 text-[15px] font-medium italic text-zinc-800 dark:border-zinc-600 dark:bg-zinc-900/40 dark:text-zinc-200">
          {quote}
        </blockquote>
      ) : null}

      {after.map((paragraph, i) => (
        <p key={`a-${i}`} className="mb-4">
          {paragraph}
        </p>
      ))}

      {bullets.length > 0 ? (
        <ul className="mb-4 list-disc space-y-2 pl-5 marker:text-zinc-400">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
