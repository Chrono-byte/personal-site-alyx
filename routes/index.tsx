// file: src/pages/Home.tsx

import { define } from "../utils.ts";
import ProfileCard from "../components/AboutPage/ProfileCard.tsx";
import About from "../components/AboutPage/About.tsx";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import { join } from "$std/path/mod.ts";
import type { Metadata } from "../components/MarkdownBlock.tsx";

export type PostPreview = {
  name: string;
  date: Date;
  title?: string;
  summary?: string;
};

// Helper to get the latest post
function getLatestPost(): PostPreview | undefined {
  const postsDir = join(Deno.cwd(), "static", "md");
  const posts = [...Deno.readDirSync(postsDir)]
    .filter((p) => p.isFile && p.name.endsWith(".md"))
    .map((p) => {
      const content = Deno.readTextFileSync(join(postsDir, p.name));
      type MetadataWithSummary = Metadata & { summary?: string };
      const metadata: Partial<MetadataWithSummary> = {};
      const metadataBlock = content.match(/^---\n(.*?)\n---\n/s);
      if (metadataBlock) {
        const lines = metadataBlock[1].split("\n");
        for (const line of lines) {
          const [key, ...rest] = line.split(": ");
          const value = rest.join(": ");
          if (key === "date") {
            metadata.date = value;
          }
          if (key === "title") {
            metadata.title = value;
          }
          if (key === "summary") {
            metadata.summary = value;
          }
        }
      }
      return {
        name: p.name.replace(".md", ""),
        date: metadata.date ? new Date(metadata.date) : new Date(0),
        title: metadata.title,
        summary: (metadata as MetadataWithSummary).summary,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts[0];
}

export default define.page(function Home() {
  const latestPost = getLatestPost();
  return (
    // This root container must be a flex column that grows to fill the body.
    <div className="flex-1 flex flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header />

      <div className="flex-1 min-h-0 flex justify-center py-0">
        <div className="flex flex-wrap gap-4 px-4 justify-center md:gap-6 md:px-6 md:flex-nowrap">
          <ProfileCard />
          <About latestPost={latestPost} />
        </div>
      </div>

      <Footer />
    </div>
  );
});
