import { PageProps } from "$fresh/server.ts";
import path from "node:path";

import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import MarkdownBlock from "../../islands/MarkdownBlock.tsx";
import BackgroundCard from "../../components/BackgroundCard.tsx";

import fourohfor from "../_404.tsx";

export default function Home(props: PageProps & { params: { slug: string } }) {
  const { slug } = props.params;

  // verify that the slug exists in our md store
  if (
    !Deno.readTextFileSync(
      path.join(Deno.cwd(), "static/positions") + "/" + `${slug}.md`,
    )
  ) return fourohfor();

  return (
    <div className="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["positions"]} fileID={`${slug}.md`} />

      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-3 px-3 justify-center md:flex-nowrap md:gap-x-3 md:w-fit">
          <BackgroundCard className="md:max-w-screen-2xl">
            <MarkdownBlock src={`positions/${slug}.md`} />
          </BackgroundCard>
        </div>
      </div>

      <Footer />
    </div>
  );
}
