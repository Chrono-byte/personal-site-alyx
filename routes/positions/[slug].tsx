import { join } from "$std/path/mod.ts";
import { HttpError } from "fresh";
import { readMarkdownFile } from "../lib/content.ts";
import { define } from "../../utils.ts";
import ContentPage from "../../components/content/ContentPage.tsx";

export default define.page(function PostPage(props) {
  const slug = props.params.slug;
  const filePath = join(Deno.cwd(), "static", "positions", `${slug}.md`);

  props.state.breadcrumb = {
    subdirectory: ["positions"],
    fileID: `${slug}.md`,
  };

  try {
    const fileInfo = Deno.statSync(filePath);
    if (!fileInfo.isFile) {
      throw new HttpError(418, "I'm a teapot");
    }

    const result = readMarkdownFile(filePath);
    return <ContentPage content={result.content} metadata={result.metadata} />;
  } catch (err) {
    console.error("Error processing markdown file:", filePath, err);
    throw new HttpError(404);
  }
});
