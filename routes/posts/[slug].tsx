import { join } from "$std/path/mod.ts";
import MarkdownBlock from "../../components/MarkdownBlock.tsx";
import BackgroundCard from "../../components/BackgroundCard.tsx";
import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import { HttpError, PageProps } from "fresh";
import type { Metadata } from "../../components/MarkdownBlock.tsx";
import { define } from "../../utils.ts";

export default define.page(function PostPage(props: PageProps) {
  const slug = props.params.slug;
  const filePath = join(Deno.cwd(), "static", "md", `${slug}.md`);

  let markdown = "";
  const metadata: Metadata = {};

  try {
    markdown = Deno.readTextFileSync(filePath);

    const metadataBlock = markdown.match(/^---\n(.*?)\n---\n/s);
    let markdownBody = markdown;

    if (metadataBlock) {
      const lines = metadataBlock[1].split("\n");
      for (const line of lines) {
        const [key, ...rest] = line.split(": ");
        const value = rest.join(": ");
        if (!key) continue;
        if (key === "tags") {
          try {
            metadata[key] = JSON.parse(value);
          } catch {
            metadata[key] = value;
          }
        } else {
          metadata[key] = value;
        }
      }
      markdownBody = markdown.slice(metadataBlock[0].length);
    }

    markdown = markdownBody;
  } catch (err) {
    console.error("Failed to read markdown file", filePath, err);
    throw new HttpError(404);
  }

  return (
    <div className="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["posts"]} fileID={`${slug}.md`} />

      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-3 px-3 justify-center md:flex-nowrap md:gap-x-3 md:w-fit">
          <BackgroundCard className="md:max-w-screen-2xl">
            <MarkdownBlock markdown={markdown} metadata={metadata} />
          </BackgroundCard>
        </div>
      </div>

      <Footer />
    </div>
  );
});
