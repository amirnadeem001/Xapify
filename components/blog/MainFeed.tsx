"use client";

import { Fragment, useMemo, useState } from "react";
import { AdSlot } from "@/components/AdSlot";
import type { BlogPost } from "@/data/blogPosts";
import { PostCard } from "@/components/blog/PostCard";

const PAGE_SIZE = 4;

type MainFeedProps = {
  posts: BlogPost[];
};

export function MainFeed({ posts }: MainFeedProps) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  const shown = useMemo(() => posts.slice(0, visible), [posts, visible]);

  return (
    <div className="flex flex-col gap-5">
      {shown.map((post, index) => (
        <Fragment key={post.id}>
          <PostCard post={post} />
          {(index + 1) % 3 === 0 ? (
            <AdSlot
              id={`feed-native-${Math.floor((index + 1) / 3)}`}
              type="native"
            />
          ) : null}
        </Fragment>
      ))}
      {visible < posts.length ? (
        <button
          type="button"
          className="w-full rounded-md bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600"
          onClick={() =>
            setVisible((v) => Math.min(v + PAGE_SIZE, posts.length))
          }
        >
          Load More
        </button>
      ) : null}
    </div>
  );
}
