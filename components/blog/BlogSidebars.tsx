import Image from "next/image";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import {
  labels,
  latestReviews,
  mainTags,
  popularPosts,
  randomPosts,
  recentComments,
} from "@/data/blogPosts";
import { blogHref } from "@/components/blog/paths";
import { SidebarWidget } from "@/components/blog/SidebarWidget";
import { SmallPostCard } from "@/components/blog/SmallPostCard";
import { SocialButtons } from "@/components/blog/SocialButtons";

export type BlogPageVariant = "home" | "article";

function SidebarAd({
  id,
  variant,
}: {
  id: string;
  variant: BlogPageVariant;
}) {
  return (
    <AdSlot
      id={id}
      type="sidebar"
      className={variant === "article" ? "max-w-full lg:max-w-[300px]" : ""}
    />
  );
}

function PopularHighlight() {
  const [lead, ...rest] = popularPosts;
  if (!lead) return null;
  return (
    <div className="space-y-4">
      <Link
        href={blogHref(lead.slug)}
        className="group relative block overflow-hidden rounded-md border border-zinc-200/80 dark:border-zinc-800"
      >
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={lead.image}
            alt={lead.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 240px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 p-3">
            <h3 className="text-sm font-bold leading-snug text-white transition group-hover:text-blue-200">
              {lead.title}
            </h3>
            <time
              dateTime={lead.date}
              className="mt-1 block text-[11px] text-white/80"
            >
              {lead.date}
            </time>
          </div>
        </div>
      </Link>
      <ul className="space-y-3">
        {rest.slice(0, 2).map((p) => (
          <li key={p.id}>
            <SmallPostCard post={p} compact />
          </li>
        ))}
      </ul>
    </div>
  );
}

function LabelsList() {
  return (
    <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {labels.map((label) => (
        <li key={label}>
          <Link
            href="#"
            className="flex items-center justify-between py-2 text-sm font-medium text-zinc-800 transition hover:text-blue-600 dark:text-zinc-200 dark:hover:text-blue-400"
          >
            {label}
            <span className="text-zinc-300 dark:text-zinc-600" aria-hidden>
              ›
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function CommentsList() {
  return (
    <ul className="space-y-4">
      {recentComments.map((c) => (
        <li key={c.id} className="flex gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700">
            <Image
              src={`https://picsum.photos/seed/${c.avatarSeed}/96/96`}
              alt={`${c.user} avatar`}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">
              {c.user}
            </p>
            <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              {c.snippet}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function TagCloud() {
  return (
    <div className="flex flex-wrap gap-2">
      {mainTags.map((t) => (
        <Link
          key={t.label}
          href="#"
          className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 transition hover:border-blue-200 hover:bg-blue-100 dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300 dark:hover:bg-blue-900/60"
        >
          {t.label}{" "}
          <span className="text-blue-500/80 dark:text-blue-400/80">
            ({t.count})
          </span>
        </Link>
      ))}
    </div>
  );
}

function SubscribeCard() {
  return (
    <div className="overflow-hidden rounded-md border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black text-white shadow-inner">
      <div className="relative aspect-video w-full">
        <Image
          src="https://picsum.photos/seed/subscribe-video/640/360"
          alt="Video still promoting the Xapify newsletter"
          fill
          sizes="(max-width: 1024px) 100vw, 300px"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/35">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-zinc-900 shadow-lg ring-2 ring-white/40 transition hover:scale-105 focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Play promotional video"
          >
            <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-current" aria-hidden>
              <path d="M8 5v14l11-7-11-7z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="text-sm font-semibold leading-snug">
          Subscribe for weekly picks
        </p>
        <a
          href="#"
          className="shrink-0 rounded-full bg-emerald-500 p-2 text-white shadow transition hover:bg-emerald-400"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M20.5 12.2c0 4.5-3.7 8.2-8.2 8.2-1.4 0-2.8-.4-4-1.1L4 20l1.8-4.1c-.8-1.2-1.3-2.7-1.3-4.2 0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2zm-8.2-6.8c-3.8 0-6.8 3.1-6.8 6.8 0 1.3.4 2.5 1 3.5l-.6 1.4 1.5-.4c1 .6 2.2.9 3.4.9 3.8 0 6.8-3.1 6.8-6.8 0-3.8-3.1-6.8-6.8-6.8z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function BlogLeftSidebar({ variant = "home" }: { variant?: BlogPageVariant }) {
  return (
    <aside className="order-2 flex flex-col gap-6 md:order-2 md:col-start-2 md:row-start-1 lg:order-1 lg:col-start-1 lg:row-start-1">
      <SidebarWidget title="Popular Posts">
        <PopularHighlight />
      </SidebarWidget>
      <SidebarAd
        id={variant === "article" ? "article-sidebar-left" : "sidebar-left-popular"}
        variant={variant}
      />
      <SidebarWidget title="Labels">
        <LabelsList />
      </SidebarWidget>
    </aside>
  );
}

export function BlogRightSidebar({ variant = "home" }: { variant?: BlogPageVariant }) {
  const showReviewsAd = variant === "home";

  return (
    <aside className="order-3 flex flex-col gap-6 md:order-2 md:col-start-2 md:row-start-2 lg:order-3 lg:col-start-3 lg:row-start-1">
      <SidebarWidget title="Random Posts">
        <div className="grid grid-cols-2 gap-3">
          {randomPosts.map((p) => (
            <SmallPostCard key={p.id} post={p} variant="grid" />
          ))}
        </div>
      </SidebarWidget>
      <SidebarWidget title="Follow Us">
        <SocialButtons />
      </SidebarWidget>
      <SidebarAd
        id={
          variant === "article"
            ? "article-sidebar-right-follow"
            : "sidebar-right-follow"
        }
        variant={variant}
      />
      <SidebarWidget title="Popular Posts">
        <ul className="space-y-4">
          {popularPosts.slice(0, 4).map((p) => (
            <li key={`r-${p.id}`}>
              <SmallPostCard post={p} compact />
            </li>
          ))}
        </ul>
      </SidebarWidget>
      <SidebarWidget title="Latest Reviews">
        <div className="grid grid-cols-2 gap-3">
          {latestReviews.map((p) => (
            <SmallPostCard key={`rev-${p.id}`} post={p} variant="grid" />
          ))}
        </div>
      </SidebarWidget>
      {showReviewsAd ? (
        <SidebarAd id="sidebar-right-reviews" variant={variant} />
      ) : null}
      <SidebarWidget title="Subscribe Us">
        <SubscribeCard />
      </SidebarWidget>
      <SidebarWidget title="Comments">
        <CommentsList />
      </SidebarWidget>
      <SidebarWidget title="Main Tags">
        <TagCloud />
      </SidebarWidget>
    </aside>
  );
}

export function BlogThreeColumnLayout({
  main,
  variant = "home",
}: {
  main: React.ReactNode;
  variant?: BlogPageVariant;
}) {
  return (
    <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-6 px-4 pb-12 pt-2 sm:px-6 md:grid-cols-2 lg:grid-cols-[240px_minmax(0,1fr)_300px]">
      <BlogLeftSidebar variant={variant} />
      <div
        id="main-content"
        className="order-1 min-w-0 md:order-1 md:col-start-1 md:row-start-1 lg:order-2 lg:col-start-2 lg:row-start-1"
      >
        {main}
      </div>
      <BlogRightSidebar variant={variant} />
    </div>
  );
}
