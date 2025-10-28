import type { FunctionalComponent } from "preact";
import StyledPanel from "../BackgroundCard.tsx";
import TitledCard from "../content/TitledCard.tsx";
import { TbMail } from "@preact-icons/tb";
import ContentListItem from "../content/ContentListItem.tsx";
import { PostPreview } from "../../routes/lib/posts.ts";

const IntroSection: FunctionalComponent = () => (
  <StyledPanel>
    <p className="indent-8">
      Hello! I'm{" "}
      <span className="text-green-400 font-semibold">Ellie</span>, a software
      developer and computer science student at{" "}
      <span className="text-rose-400 font-semibold">
        Indiana University Indianapolis
      </span>. I enjoy building creative and meaningful projects with code. My
      favorite languages include{" "}
      <span className="text-blue-500 font-semibold">TypeScript</span>,{" "}
      <span className="text-blue-400 font-semibold">C++</span>, and{" "}
      <span className="text-red-400 font-semibold">Rust</span>. When I'm not
      coding, I participate and manage the Overwatch eSports program at{" "}
      <span className="text-rose-400 font-semibold">
        IUI
      </span>, for which I built a custom scheduling platform to help keep
      everything organized.
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
  <TitledCard title="Adventures">
    <p className="indent-8">
      For current career info, check out my{" "}
      <a
        href="https://www.linkedin.com/in/ellie-gummere/"
        className="link font-extrabold"
      >
        LinkedIn
      </a>. It's kept up to date.
    </p>
    <p className="indent-8">
      I spent four years doing{" "}
      <span className="text-rose-600 font-semibold">VEX Robotics</span>{" "}
      as a programmer and designer. My team and I made it to the{" "}
      <span className="text-yellow-400 font-semibold">
        Indiana State Championship
      </span>{" "}
      in 2023! I got to program our robot in{" "}
      <span className="text-blue-300 font-semibold">C++</span>{" "}
      (PROS) and help out with the mechanical side of things. I designed major
      systems of our robot, following research and brainstorming sessions with
      my team.
    </p>
  </TitledCard>
);

const ContactSection: FunctionalComponent = () => (
  <StyledPanel title="Let's Connect">
    <div className="flex items-start gap-4">
      <TbMail size={24} className="text-sky-400 shrink-0 mt-1" />
      <p>
        I'm always open to making new friends and collaborating. You can reach
        me at:{" "}
        <a className="link" href="mailto:ellie.gummere@unknownhost.name">
          <span className="font-semibold">ellie.gummere@unknownhost.name</span>
        </a>.
      </p>
    </div>
  </StyledPanel>
);

export {
  ContactSection,
  ExtracurricularsSection,
  IntroSection,
  LatestPostSection,
};
