import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import BackgroundCard from "../../components/BackgroundCard.tsx";

import { join } from "$std/path/mod.ts";

// Metadata used when interpreting metadata from the de-metafied file
interface Metadata {
  "name": string; // This is used as the file name without the extension
  "id": string; // This is used as the file name in the breadcrumb header
  "date": Date; // This is used to display the last edited date

  "title": string; // This is used as the title of the post
  "tags": string[]; // This is used to categorize the post

  "summary": string; // This is used to display a summary of the post
}

export default function Home() {
  // prepare posts directory path
  const postsDir = join(Deno.cwd(), "static", "md") + "/";
  // get all posts
  const posts = [...Deno.readDirSync(postsDir)].filter((p) =>
    p.isFile && p.name.endsWith(".md")
  );

  const postElements = [];

  for (const post of posts) {
    const postContent = Deno.readTextFileSync(join(postsDir, post.name));
    const metadata: Partial<Metadata> = {};

    const metadataBlock = postContent.match(/^---\n(.*?)\n---\n/s);

    if (!metadataBlock) {
      throw new Error(`Post ${post.name} is missing metadata block`);
    }

    const metadataLines = metadataBlock[1].split("\n");

    for (const line of metadataLines) {
      const [key, value] = line.split(": ");

      // check type of value
      if (key && key == "tags") {
        (metadata as Partial<Metadata>).tags = JSON.parse(value);
      } else if (key && key == "date") {
        (metadata as Partial<Metadata>).date = new Date(value);
      } else if (key && typeof value == "string") {
        // assign unknown keys into metadata safely
        (metadata as Record<string, unknown>)[key] = value;
      }

      // add the post name without the extension to metadata
      (metadata as Record<string, unknown>)["name"] = post.name.replace(
        ".md",
        "",
      );
    }

    if (metadata.name && metadata.title) {
      postElements.push(
        (
          <BackgroundCard key={metadata.name}>
            <p className="font-bold">
              <a href={`/posts/${metadata.name}`}>{metadata.title}</a>
            </p>

            <p>{metadata.date?.toLocaleDateString()}</p>

            <p>{metadata.summary}</p>
          </BackgroundCard>
        ),
      );
    }
  }

  return (
    <div className="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["posts"]} />

      <div className="flex justify-center items-center">
        <div className="md:flex-nowrap md:max-w-6xl">
          <div className="flex flex-col gap-3 md:gap-x-3">
            {postElements}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
