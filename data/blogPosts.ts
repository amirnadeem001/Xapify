export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  content: string[];
  tags: string[];
  commentsCount: number;
  pullQuote?: string;
  bulletPoints?: string[];
  authorBio?: string;
  authorAvatarSeed?: string;
};

const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const loremParagraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere, lacus ut fermentum tincidunt, lectus nibh pulvinar risus, vitae dignissim ligula sem vel lacus. Curabitur id urna at elit lacinia pharetra non vel erat.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
];

const defaultBullets = [
  "Suspendisse potenti. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
  "Phasellus euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum magna nisl eget tortor.",
  "Mauris interdum fringilla augue, vitae sagittis eros dignissim in. Donec vel metus velit.",
];

const defaultQuote =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.";

const defaultAuthorBio =
  "The author covers courts, policy, and culture with a focus on clear explainers and primary sources. Based in the Pacific Northwest.";

function post(
  base: Omit<
    BlogPost,
    "content" | "tags" | "pullQuote" | "bulletPoints" | "authorBio" | "authorAvatarSeed"
  > & {
    tags: string[];
    content?: string[];
    pullQuote?: string;
    bulletPoints?: string[];
    authorBio?: string;
    authorAvatarSeed?: string;
  },
): BlogPost {
  return {
    content: base.content ?? loremParagraphs,
    pullQuote: base.pullQuote ?? defaultQuote,
    bulletPoints: base.bulletPoints ?? defaultBullets,
    authorBio: base.authorBio ?? defaultAuthorBio,
    authorAvatarSeed: base.authorAvatarSeed ?? `author-${base.id}`,
    id: base.id,
    slug: base.slug,
    title: base.title,
    category: base.category,
    author: base.author,
    date: base.date,
    image: base.image,
    imageAlt: base.imageAlt,
    excerpt: base.excerpt,
    tags: base.tags,
    commentsCount: base.commentsCount,
  };
}

export const featuredPost: BlogPost = post({
  id: "featured-1",
  slug: "economic-growth-is-essential-so-is-resilience",
  title: "Economic Growth Is Essential. So Is Resilience",
  excerpt:
    "Balancing expansion with preparedness helps communities weather shocks while still investing in long-term prosperity.",
  category: "Features",
  author: "Xapify Tips",
  date: "May 20, 2023",
  image: img("hero-econ", 1200, 640),
  imageAlt: "Speaker presenting economic ideas at a conference",
  tags: ["Economy", "Policy", "Resilience"],
  commentsCount: 42,
});

export const blogPosts: BlogPost[] = [
  featuredPost,
  post({
    id: "1",
    slug: "what-my-mother-taught-me-about-black-conservatives",
    title: "What My Mother Taught Me About Black Conservatives",
    excerpt:
      "Personal lessons on civic engagement, tradition, and finding common ground across generations and political language.",
    category: "Opinion",
    author: "Jordan Ellis",
    date: "May 18, 2023",
    image: img("post-mother", 960, 600),
    imageAlt: "Family photo album on a wooden table",
    tags: ["Opinion", "Family", "Politics"],
    commentsCount: 18,
  }),
  post({
    id: "2",
    slug: "teachers-nurses-and-child-care-workers-have-had-enough",
    title: "Teachers, Nurses, and Child-Care Workers Have Had Enough",
    excerpt:
      "Essential caregivers are organizing for better pay and safer conditions. Here is what their movement signals for policy.",
    category: "Policy",
    author: "Morgan Lee",
    date: "May 17, 2023",
    image: img("post-care", 960, 600),
    imageAlt: "Educator writing on a whiteboard in a classroom",
    tags: ["Labor", "Policy", "Care"],
    commentsCount: 56,
  }),
  post({
    id: "3",
    slug: "the-perfect-candidate-for-a-fallen-party",
    title: "The Perfect Candidate for a Fallen Party",
    excerpt:
      "When institutions lose trust, voters look for authenticity. We unpack the traits that resonate in turbulent cycles.",
    category: "Politics",
    author: "Alex Rivera",
    date: "May 16, 2023",
    image: img("post-party", 960, 600),
    imageAlt: "Town hall meeting with audience seated in rows",
    tags: ["Elections", "Parties", "Trust"],
    commentsCount: 31,
  }),
  post({
    id: "4",
    slug: "heres-how-we-can-work-towards-care-equality",
    title:
      "Here’s How We Can Work Towards Care Equality For Leading A Peaceful Life",
    excerpt:
      "Care work is infrastructure. These community models show how shared responsibility can lighten individual burdens.",
    category: "Lifestyle",
    author: "Samira Khan",
    date: "May 15, 2023",
    image: img("post-care-eq", 960, 600),
    imageAlt: "Neighbors sharing a meal outdoors",
    tags: ["Lifestyle", "Care", "Community"],
    commentsCount: 12,
  }),
  post({
    id: "5",
    slug: "raiders-latest-blown-lead-mcdaniels",
    title:
      "Latest blown lead for Raiders signals enough is enough of McDaniels",
    excerpt:
      "A late collapse reignites questions about coaching stability and whether the roster’s window is closing faster than expected.",
    category: "Sports",
    author: "Chris Nolan",
    date: "May 14, 2023",
    image: img("post-raiders", 960, 600),
    imageAlt: "American football stadium under evening lights",
    tags: ["NFL", "Raiders", "Analysis"],
    commentsCount: 204,
  }),
  post({
    id: "6",
    slug: "short-novels-you-can-read-in-a-weekend",
    title: "You Can Read Any of These Short Novels in a Weekend",
    excerpt:
      "Compact narratives with big emotional payoffs—our editors pick eight titles you can finish before Monday morning.",
    category: "Culture",
    author: "Taylor Brooks",
    date: "May 13, 2023",
    image: img("post-novels", 960, 600),
    imageAlt: "Stack of paperback books beside reading glasses",
    tags: ["Books", "Culture", "Reading"],
    commentsCount: 9,
  }),
  post({
    id: "7",
    slug: "the-most-important-amicus-brief-in-the-history-of-the-world",
    title: "The Most Important Amicus Brief in the History of the World",
    excerpt:
      "Court filings rarely go viral. This one did—here is why its arguments matter beyond the headline case.",
    category: "Law",
    author: "Priya Shah",
    date: "May 12, 2023",
    image: img("post-amicus", 1200, 700),
    imageAlt: "Courthouse columns in soft morning light",
    tags: ["Bitcoin", "Business", "Drones", "Economy"],
    commentsCount: 24,
    authorBio:
      "Priya Shah writes about appellate practice, regulatory capture, and how legal filings shape public debate.",
    pullQuote:
      "The brief reframes a technical question as a story about accountability—something readers and judges can hold onto.",
    bulletPoints: [
      "Amicus briefs can signal coalition strength without adding new parties to the docket.",
      "Clear narrative structure helps clerks map arguments to precedent quickly.",
      "Hyperlinks and citations should be stable; broken references undermine credibility.",
    ],
  }),
  post({
    id: "8",
    slug: "economic-growth-and-resilience-roundtable",
    title: "Economic Growth Is Essential. So Is Resilience",
    excerpt:
      "Growth without buffers invites fragility. Leaders are rethinking metrics to include preparedness and inclusion.",
    category: "Business",
    author: "Xapify Tips",
    date: "May 11, 2023",
    image: img("post-econ-2", 960, 600),
    imageAlt: "City skyline with construction cranes",
    tags: ["Business", "Economy", "Risk"],
    commentsCount: 37,
  }),
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPost | null;
  next: BlogPost | null;
} {
  const idx = blogPosts.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? blogPosts[idx - 1]! : null,
    next: idx < blogPosts.length - 1 ? blogPosts[idx + 1]! : null,
  };
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const same = blogPosts.filter(
    (p) => p.id !== post.id && p.category === post.category,
  );
  return same.slice(0, limit);
}

export const mainFeedPosts = blogPosts.filter((p) => p.id !== featuredPost.id);

export const popularPosts = blogPosts
  .filter((p) => p.id !== featuredPost.id)
  .slice(0, 5);

export const randomPosts = [
  blogPosts[2]!,
  blogPosts[4]!,
  blogPosts[6]!,
  blogPosts[1]!,
];

export const latestReviews = [
  blogPosts[5]!,
  blogPosts[3]!,
  blogPosts[7]!,
  blogPosts[2]!,
];

export const labels = [
  "Business",
  "Fashion",
  "Food",
  "Games",
  "Lifestyle",
  "Sports",
  "Technology",
  "Travel",
];

export const mainTags: { label: string; count: number }[] = [
  { label: "Bitcoin", count: 4 },
  { label: "Business", count: 10 },
  { label: "Fashion", count: 5 },
  { label: "Food", count: 8 },
  { label: "Lifestyle", count: 12 },
  { label: "Sports", count: 6 },
  { label: "Technology", count: 9 },
  { label: "Travel", count: 4 },
];

export type CommentItem = {
  id: string;
  user: string;
  snippet: string;
  avatarSeed: string;
};

export const recentComments: CommentItem[] = [
  {
    id: "c1",
    user: "Avery",
    snippet: "This breakdown helped me understand the tradeoffs…",
    avatarSeed: "av1",
  },
  {
    id: "c2",
    user: "Riley",
    snippet: "Would love a follow-up on regional data next week.",
    avatarSeed: "av2",
  },
  {
    id: "c3",
    user: "Quinn",
    snippet: "Clear writing and strong sourcing. Thank you!",
    avatarSeed: "av3",
  },
];
