import Image from "next/image";
import { AdSlot, ResponsiveBannerAd } from "@/components/AdSlot";
import type { BlogPost } from "@/data/blogPosts";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { getArticleAdPlan } from "@/components/blog/articleAdPlan";
import { AuthorBox } from "@/components/blog/AuthorBox";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { BlogThreeColumnLayout } from "@/components/blog/BlogSidebars";
import { CommentBoxPlaceholder } from "@/components/blog/CommentBoxPlaceholder";
import { Footer } from "@/components/blog/Footer";
import { Header } from "@/components/blog/Header";
import { PostNavigation } from "@/components/blog/PostNavigation";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { ShareButtons } from "@/components/blog/ShareButtons";

type BlogDetailPageProps = {
  post: BlogPost;
  related: BlogPost[];
  prev: BlogPost | null;
  next: BlogPost | null;
  shareUrl: string;
};

export function BlogDetailPage({
  post,
  related,
  prev,
  next,
  shareUrl,
}: BlogDetailPageProps) {
  const { showMidAd, showAuthorAd } = getArticleAdPlan(post.content.length);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-900 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <BlogThreeColumnLayout
        variant="article"
        main={
          <article className="rounded-lg border border-zinc-200/80 bg-white p-4 shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <Breadcrumb category={post.category} />
            <h1 className="text-balance text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
              {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
                <Image
                  src={`https://picsum.photos/seed/${post.authorAvatarSeed ?? `author-${post.id}`}/72/72`}
                  alt={`${post.author} avatar`}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <p>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  by {post.author}
                </span>
                <span className="mx-2 text-zinc-300 dark:text-zinc-600" aria-hidden>
                  •
                </span>
                <time dateTime={post.date}>{post.date}</time>
              </p>
              <span
                className="inline-flex items-center gap-1 rounded border border-zinc-200 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                title="Comment count (demo)"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z" />
                </svg>
                {post.commentsCount}
              </span>
            </div>

            <ResponsiveBannerAd id="article-header" className="mt-5" />

            <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover"
              />
            </div>

            <div className="mt-6">
              <ArticleContent post={post} showMidAd={showMidAd} />
            </div>

            <div className="mt-6">
              <AdSlot id="article-end-native" type="native" />
            </div>

            <p className="mt-6 text-xs leading-relaxed">
              <span className="font-bold text-zinc-900 dark:text-white">Tags: </span>
              {post.tags.map((tag, i) => (
                <span key={tag}>
                  {i > 0 ? (
                    <span className="text-zinc-400" aria-hidden>
                      ,{" "}
                    </span>
                  ) : null}
                  <a
                    href="#"
                    className="font-medium text-blue-600 transition hover:underline dark:text-blue-400"
                  >
                    {tag}
                  </a>
                </span>
              ))}
            </p>

            <ShareButtons title={post.title} url={shareUrl} />

            <AuthorBox post={post} />

            {showAuthorAd ? (
              <div className="mt-8">
                <AdSlot id="article-author-native" type="native" />
              </div>
            ) : null}

            <RelatedPosts posts={related} />

            <CommentBoxPlaceholder />

            <PostNavigation prev={prev} next={next} />
          </article>
        }
      />
      <Footer />
    </div>
  );
}
