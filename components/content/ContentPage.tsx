import type { FunctionalComponent } from "preact";
import BackgroundCard from "../BackgroundCard.tsx";
import MarkdownBlock from "./MarkdownBlock.tsx";
import type { Metadata } from "../../routes/lib/posts.ts";

type ContentPageProps = {
  content: string;
  metadata: Metadata;
};

const ContentPage: FunctionalComponent<ContentPageProps> = (
  { content, metadata },
) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-wrap gap-3 px-3 justify-center md:flex-nowrap md:gap-x-3 md:w-fit">
        <BackgroundCard className="md:max-w-screen-2xl w-full">
          <MarkdownBlock markdown={content} metadata={metadata} />
        </BackgroundCard>
      </div>
    </div>
  );
};

export default ContentPage;
