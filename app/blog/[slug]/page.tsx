import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailPage } from "@/components/blog/BlogDetailPage";
import {
  blogPosts,
  getAdjacentPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/blogPosts";

function siteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Not found | Xapify" };
  }
  const base = siteUrl();
  return {
    title: `${post.title} | Xapify`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    alternates: {
      canonical: `${base}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }
  const related = getRelatedPosts(post);
  const { prev, next } = getAdjacentPosts(slug);
  const shareUrl = `${siteUrl()}/blog/${post.slug}`;

  return (
    <BlogDetailPage
      post={post}
      related={related}
      prev={prev}
      next={next}
      shareUrl={shareUrl}
    />
  );
}
