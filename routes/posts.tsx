import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import BackgroundCard from "../components/BackgroundCard.tsx";

import path from "node:path";

// Metadata used when interpreting metadata from the de-metafied file
interface Metadata {
  "id": string; // This is used as the file name in the breadcrumb header
  "date": string | Date; // This is used to display the last edited date

  "title": string; // This is used as the title of the post
  "tags": string[] | string; // This is used to categorize the post
}

export default function Home() {
  // prepare posts directory path
  const postsDir = path.join(Deno.cwd(), "static/md") + "/";

  // get all posts
  const posts = Deno.readDirSync(postsDir);

  // create array of posts
  const postsArray = [];
  for (const post of posts) {
    postsArray.push(post);
  }

  const postElements = postsArray.map((post, i) => {
    const postContent = ``;
    const metadata: Partial<Metadata> = {};

    const metadataBlock = postContent.match(/^---\n(.*?)\n---\n/s);

    if (metadataBlock) {
      const metadataLines = metadataBlock[1].split("\n");

      for (const line of metadataLines) {
        const [key, value] = line.split(": ");
        if (key && value) {
          metadata[key as keyof Metadata] = value;
        }
      }
    }

    return (
      <BackgroundCard>
      </BackgroundCard>
    );
  });

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
