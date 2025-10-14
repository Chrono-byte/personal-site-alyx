import type { FunctionalComponent } from "preact";
import ProfileCard from "./ProfileCard.tsx";
import AboutContent, { PostPreview } from "./AboutContent.tsx";

type AboutProps = {
  postPreview: PostPreview;
};

const About: FunctionalComponent<AboutProps> = ({ postPreview }) => {
  return (
    <div className="w-full">
      <div className="md:flex md:items-start md:gap-6">
        <aside className="md:w-max hidden md:block">
          <ProfileCard />
        </aside>

        <main className="md:flex-1">
          <AboutContent postPreview={postPreview} />
        </main>
      </div>
    </div>
  );
};

export default About;
