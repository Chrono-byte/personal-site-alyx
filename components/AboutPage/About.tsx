import type { FunctionalComponent } from "preact";
import ProfileCard from "./ProfileCard.tsx";
import AboutContent from "./AboutContent.tsx";
import { PostPreview } from "../../routes/lib/posts.ts";

type AboutProps = {
  postPreviews: PostPreview[];
};

const About: FunctionalComponent<AboutProps> = ({ postPreviews }) => {
  return (
    <div className="w-full">
      <div className="md:flex md:items-start md:gap-6">
        <aside className="md:w-max hidden md:block">
          <ProfileCard />
        </aside>

        <main className="md:flex-1">
          <AboutContent postPreviews={postPreviews} />
        </main>
      </div>
    </div>
  );
};

export default About;
