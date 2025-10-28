import type { FunctionalComponent } from "preact";
import { PostPreview } from "../../routes/lib/posts.ts";
import ProfileCard from "./ProfileCard.tsx";
import {
  ContactSection,
  ExtracurricularsSection,
  IntroSection,
  LatestPostSection,
} from "./AboutContent.tsx";

import Clock from "../../islands/Clock.tsx";

type AboutProps = {
  postPreviews: PostPreview[];
};

const InlineStyles: FunctionalComponent = () => (
  <style>
    {`
			.link {
				color: #38bdf8; /* Tailwind's sky-400 */
				text-decoration: underline;
				transition: color 0.2s ease;
			}
			.link:hover {
				color: #0ea5e9; /* Tailwind's sky-500 */
			}
			`}
  </style>
);

const About: FunctionalComponent<AboutProps> = ({ postPreviews }) => {
  return (
    <div className="w-full">
      {/* CSS Grid Layout */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
        {/* Profile Card - spans columns on the left */}
        <div className="col-span-12 md:col-span-4 lg:col-span-5 order-1">
          <ProfileCard />
          <Clock />
        </div>

        {/* Main Content Sections - flow in the remaining space */}
        <div className="col-span-12 md:col-span-8 lg:col-span-7 order-2 space-y-4 md:space-y-6">
          <InlineStyles />
          <IntroSection />
          <LatestPostSection postPreviews={postPreviews} />
          {/* <SkillsVisual /> */}
          <ExtracurricularsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default About;
