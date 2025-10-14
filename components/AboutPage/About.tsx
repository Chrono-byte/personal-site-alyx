import StyledPanel from "../BackgroundCard.tsx";
import TitledCard from "../TitledCard.tsx"; // 1. Import the new component
import SkillsVisual from "./CompetenciesGrid.tsx";
import type { PostPreview } from "../../routes/index.tsx";

import { TbMail } from "@preact-icons/tb";

export default function About({ latestPost }: { latestPost?: PostPreview }) {
  return (
    <div className="flex flex-col gap-y-1 md:gap-3 text-base max-w-4xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
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

      {/* --- INTRO --- */}
      <StyledPanel>
        <p className="indent-8">
          Hi there! I'm{" "}
          <span className="text-green-400">Ellie</span>, a software developer
          and computer science student at{" "}
          <span className="text-rose-400">
            Indiana University Indianapolis
          </span>. I focus on building tools and programs that empower weird new
          ideas. My current projects include an ahead-of-time compiler inspired
          by <span className="text-blue-500">TypeScript</span>, with some{" "}
          <span className="text-red-400">Rust</span> and{"  "}
          <span className="text-orange-400">Swift</span>-esque additions. I
          enjoy leveraging languages like{" "}
          <span className="text-blue-500">TypeScript</span>,{" "}
          <span className="text-blue-400">C++</span>, and{" "}
          <span className="text-red-400">Rust</span>{" "}
          to create innovative solutions that are just for fun.
        </p>
      </StyledPanel>

      {/* --- LATEST POST --- */}
      {latestPost && (
        <TitledCard title="Latest from the Blog">
          <h3 className="text-xl font-semibold">{latestPost.title}</h3>
          <p className="text-sm text-gray-400 mb-2">
            {latestPost.date.toLocaleDateString()}
          </p>
          <p className="text-gray-300">{latestPost.summary}</p>
          <a
            href={`/posts/${latestPost.name}`}
            className="text-sky-400 hover:text-sky-500 mt-2 inline-block font-bold"
          >
            Read more &rarr;
          </a>
        </TitledCard>
      )}

      {/* --- SELECTED PROJECTS --- */}
      <TitledCard title="Selected Projects">
        <div className="flex flex-col gap-y-3">
          <p className="indent-8">
            <strong className="text-yellow-400">Oats</strong>{" "}
            <span className="text-sm text-gray-400">
              (Sep 2025 – Present)
            </span>
            <br />
            An ahead-of-time (AOT) compiler for a language inspired by{" "}
            <span className="text-blue-400">TypeScript</span>, with influences
            from <span className="text-orange-400">Swift</span> and{" "}
            <span className="text-red-400">Rust</span>. It compiles to native
            executables using{" "}
            <span className="text-purple-400">LLVM</span>, targeting predictable
            performance and a small, safe runtime.
          </p>
          <p className="indent-8">
            <strong className="text-yellow-400">Boiler</strong>{" "}
            <span className="text-sm text-gray-400">
              (Jan 2023 – Jan 2024)
            </span>
            <br />A <span className="text-blue-400">TypeScript</span>
            -based chat server built with{" "}
            <span className="text-blue-300">Deno</span>, leveraging WebSockets
            and REST APIs for seamless communication. It is designed to be
            easily extendable.
          </p>
        </div>
        <p className="indent-8 mt-3 italic text-gray-400">
          Additional projects are listed on the{" "}
          <a href="/projects" className="link font-extrabold">
            projects page
          </a>.
        </p>
      </TitledCard>

      {/* --- QUALIFICATIONS --- */}
      <SkillsVisual />

      {/* --- EXTRACURRICULARS --- */}
      <TitledCard title="Robotics & Extracurriculars">
        <p className="indent-8">
          I competed in <span className="text-rose-600">VEX Robotics</span>{" "}
          for four years as a programmer and designer, qualifying for the{" "}
          <span className="text-yellow-400">Indiana State</span>{" "}
          <span className="[text-shadow:_1px_1px_0px_rgb(0_0_0_/_50%)] text-blue-300">
            Championship
          </span>{" "}
          in 2023. I programmed our robot in{" "}
          <span className="text-blue-300">C++</span>{" "}
          (PROS), contributed to mechanical design, and helped develop
          open-source libraries for my team.
        </p>
      </TitledCard>

      {/* --- CONTACT --- */}
      <StyledPanel title="Get In Touch">
        <div className="flex items-center gap-2">
          <TbMail className="text-fuchsia-50 text-lg" />
          <p>
            Open to collaboration and opportunities. Contact:{"  "}
            <a
              className="link"
              href="mailto:hello@unknownhost.name"
            >
              <span className="font-extrabold">hello@unknownhost.name</span>
            </a>
            .
          </p>
        </div>
      </StyledPanel>
    </div>
  );
}
