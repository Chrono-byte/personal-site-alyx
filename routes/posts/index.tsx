import { join } from "$std/path/mod.ts";
import { readContentItems, toPreview } from "../lib/content.ts";
import { define } from "../../utils.ts";
import ContentList from "../../components/ContentList.tsx";
import PostListItem from "../../components/Posts/PostListItem.tsx";

export default define.page(function PostsFeed() {
  const postsDir = join(Deno.cwd(), "static", "md") + "/";
  const postData = readContentItems(postsDir);

  // Sort by date reverse chronologically (newest first)
  postData.sort((a, b) => b.date.getTime() - a.date.getTime());

  const items = postData.map(toPreview);

  return (
    <ContentList
      title="Posts"
      description="A collection of articles and writings on various topics, including technology, programming, and personal experiences."
      items={items}
      renderItem={(post) => (
        <PostListItem
          key={post.slug}
          slug={post.slug}
          title={post.title}
          date={post.date}
          summary={post.summary}
          tags={post.tags}
        />
      )}
    />
  );
});
