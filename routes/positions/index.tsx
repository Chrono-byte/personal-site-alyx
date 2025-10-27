import { join } from "$std/path/mod.ts";
import { readContentItems, toPreview } from "../lib/content.ts";
import { define } from "../../utils.ts";
import ContentList from "../../components/content/ContentList.tsx";
import ContentListItem from "../../components/content/ContentListItem.tsx";

export default define.page(function PoliticsFeed(props) {
  const postsDir = join(Deno.cwd(), "static", "positions") + "/";
  const postData = readContentItems(postsDir);

  props.state.breadcrumb = { subdirectory: ["positions"] };

  // Sort by date reverse chronologically (newest first)
  postData.sort((a, b) => b.date.getTime() - a.date.getTime());

  const items = postData.map(toPreview);

  return (
    <ContentList
      title="Posts"
      description="A collection of articles and writings on various topics, including technology, programming, and personal experiences."
      items={items}
      itemComponent={ContentListItem}
      itemProps={{ basePath: "positions" }}
    />
  );
});
