import { PageProps } from "$fresh/server.ts";
import path from "node:path";

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import MarkdownBlock from "../../islands/MarkdownBlock.tsx";
import BackgroundCard from "../../components/BackgroundCard.tsx";

import fourohfor from "../_404.tsx";

export default function Home(props: PageProps & { params: { slug: string } }) {
  // get the slug from the URL
  const { slug } = props.params;

  // verify that the slug exists in our md store
  const postsDir = path.join(Deno.cwd(), "static/md") + "/";
  const posts = Deno.readDirSync(postsDir);

  // is the slug in the posts directory?
  let postExists = false;
  for (const post of posts) {
    if (post.name == `${slug}.md`) {
      postExists = true;
      break;
    }
  }

  if (!postExists) {
    return fourohfor();
  }

  return (
    <div className="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["posts"]} fileID={`${slug}.md`} />

      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-3 px-3 justify-center md:flex-nowrap md:gap-x-3 md:w-fit">
          <BackgroundCard>
            <MarkdownBlock src={`md/${slug}.md`} />
          </BackgroundCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
