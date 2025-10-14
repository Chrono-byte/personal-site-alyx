import type { FunctionalComponent } from "preact";
import ProfileCard from "./ProfileCard.tsx";
import StyledPanel from "../BackgroundCard.tsx";
import TitledCard from "../content/TitledCard.tsx";
import { TbMail } from "@preact-icons/tb";
import ContentListItem from "../content/ContentListItem.tsx";
import { PostPreview } from "../../routes/lib/posts.ts";

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

const IntroSection: FunctionalComponent = () => (
  <StyledPanel>
    <p className="indent-8">
      Hello! I'm{" "}
      <span className="text-green-400 font-semibold">Ellie</span>, a software
      developer and computer science student at{" "}
      <span className="text-rose-400 font-semibold">
        Indiana University Indianapolis
      </span>. I enjoy building creative and meaningful projects with code. My
      favorite tools include{" "}
      <span className="text-blue-500 font-semibold">TypeScript</span>,{" "}
      <span className="text-blue-400 font-semibold">C++</span>, and{" "}
      <span className="text-red-400 font-semibold">Rust</span>, which I use to
      turn ideas into reality.
    </p>
  </StyledPanel>
);

const LatestPostSection: FunctionalComponent<{ postPreviews: PostPreview[] }> =
  (
    { postPreviews },
  ) => {
    return (
      <TitledCard title="My Latest Posts">
        {postPreviews.map((post) => (
          <ContentListItem
            key={post.name}
            slug={post.name}
            title={post.title}
            date={post.date}
            summary={post.summary}
            tags={post.tags}
          />
        ))}
        <p className="indent-8 mt-3 italic text-gray-400">
          I have a few other things on my{" "}
          <a href="/projects" className="link font-extrabold">projects page</a>.
        </p>
      </TitledCard>
    );
  };

const ExtracurricularsSection: FunctionalComponent = () => (
  <TitledCard title="Other Adventures">
    <p className="indent-8">
      I spent four years doing{" "}
      <span className="text-rose-600 font-semibold">VEX Robotics</span>{" "}
      as a programmer and designer. My team and I made it to the{" "}
      <span className="text-yellow-400 font-semibold">
        Indiana State Championship
      </span>{" "}
      in 2023! I got to program our robot in{" "}
      <span className="text-blue-300 font-semibold">C++</span>{" "}
      (PROS) and help out with the mechanical side of things.
    </p>
  </TitledCard>
);

const ContactSection: FunctionalComponent = () => (
  <StyledPanel title="Let's Connect">
    <div className="flex items-center gap-2">
      <TbMail className="text-fuchsia-50 text-lg" />
      <p>
        I'm always open to making new friends and collaborating. You can reach
        me at:{" "}
        <a className="link" href="mailto:hello@unknownhost.name">
          <span className="font-semibold">hello@unknownhost.name</span>
        </a>.
      </p>
    </div>
  </StyledPanel>
);

const About: FunctionalComponent<AboutProps> = ({ postPreviews }) => {
  return (
    <div className="w-full">
      {/* CSS Grid Layout */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
        {/* Profile Card - spans columns on the left */}
        <div className="col-span-12 md:col-span-4 lg:col-span-5 order-1">
          <ProfileCard />
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
