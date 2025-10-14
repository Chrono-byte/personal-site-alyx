import { join } from "$std/path/mod.ts";
import { HttpError, PageProps } from "fresh";
import { readMarkdownFile } from "../lib/content.ts";
import { define } from "../../utils.ts";
import ContentPage from "../../components/ContentPage.tsx";

export default define.page(function PositionPage(props: PageProps) {
  const slug = props.params.slug;
  const filePath = join(Deno.cwd(), "static", "positions", `${slug}.md`);

  try {
    const result = readMarkdownFile(filePath);
    return <ContentPage content={result.content} metadata={result.metadata} />;
  } catch (err) {
    console.error("Failed to read markdown file", filePath, err);
    throw new HttpError(404);
  }
});
