import { AdSlot } from "@/components/AdSlot";
import { BlogThreeColumnLayout } from "@/components/blog/BlogSidebars";
import { Footer } from "@/components/blog/Footer";
import { Header } from "@/components/blog/Header";
import { HeroPost } from "@/components/blog/HeroPost";
import { MainFeed } from "@/components/blog/MainFeed";
import { featuredPost, mainFeedPosts } from "@/data/blogPosts";

export function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-900 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <HeroPost post={featuredPost} />
      <div className="mx-auto w-full max-w-7xl space-y-3 px-4 pb-2 sm:px-6">
        <AdSlot id="hero-banner" type="banner" />
        <AdSlot id="hero-banner-mobile" type="mobile" />
      </div>
      <BlogThreeColumnLayout main={<MainFeed posts={mainFeedPosts} />} />
      <div className="mx-auto w-full max-w-7xl space-y-3 px-4 pt-2 pb-6 sm:px-6">
        <AdSlot id="footer-banner" type="footer" />
        <AdSlot id="footer-banner-mobile" type="mobile" />
      </div>
      <Footer />
    </div>
  );
}
