import { join } from "$std/path/mod.ts";
import { HttpError } from "fresh";
import { readMarkdownFile } from "../lib/content.ts";
import { define } from "../../utils.ts";
import ContentPage from "../../components/content/ContentPage.tsx";

export default define.page(
  function PostPage(props) {
    const slug = props.params.slug;
    const filePath = join(Deno.cwd(), "static", "md", `${slug}.md`);

    props.state.breadcrumb = { subdirectory: ["posts"], fileID: `${slug}.md` };

    try {
      const result = readMarkdownFile(filePath);
      return (
        <ContentPage
          content={result.content}
          metadata={result.metadata}
        />
      );
    } catch (err) {
      console.error("Failed to read markdown file", filePath, err);
      throw new HttpError(404);
    }
  },
);
