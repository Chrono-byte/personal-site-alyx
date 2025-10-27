import { join } from "$std/path/mod.ts";
import { readContentItems, toPreview } from "../lib/content.ts";
import { define } from "../../utils.ts";
import ContentList from "../../components/content/ContentList.tsx";
import ContentListItem from "../../components/content/ContentListItem.tsx";

export default define.page(function PostsFeed(ctx) {
  const postsDir = join(Deno.cwd(), "static", "md") + "/";
  const postData = readContentItems(postsDir);

  // Sort by date reverse chronologically (newest first)
  postData.sort((a, b) => b.date.getTime() - a.date.getTime());

  ctx.state.breadcrumb = { subdirectory: ["posts"] };

  const items = postData.map(toPreview);

  return (
    <ContentList
      title="Posts"
      description="A collection of articles and writings on various topics, including technology, programming, and personal experiences."
      items={items}
      itemComponent={ContentListItem}
    />
  );
});
