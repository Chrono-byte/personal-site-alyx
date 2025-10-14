import StyledPanel from "../BackgroundCard.tsx";
import TitledCard from "../TitledCard.tsx";
import SkillsVisual from "./CompetenciesGrid.tsx";

import { TbMail } from "@preact-icons/tb";

interface PostPreview {
  name: string;
  title: string;
  date: Date;
  summary: string;
}

export default function About({ postPreview }: { postPreview: PostPreview }) {
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
          Hiii! I'm{" "}
          <span className="text-green-400">Ellie</span>. I'm a software
          developer and computer science student at{" "}
          <span className="text-rose-400">
            Indiana University Indianapolis
          </span>. I love creating cozy and interesting things with code. I find
          joy in using languages like{" "}
          <span className="text-blue-500">TypeScript</span>,{" "}
          <span className="text-blue-400">C++</span>, and{" "}
          <span className="text-red-400">Rust</span> to bring new ideas to life.
        </p>
      </StyledPanel>

      {/* --- SELECTED PROJECTS --- */}
      <TitledCard title="My Latest Post">
        <div className="flex flex-col gap-y-3">
          <p className="indent-8">
            <strong className="text-yellow-400">{postPreview.name}</strong>{" "}
            <span className="text-sm text-gray-400">
              ({postPreview.date.toLocaleDateString()})
            </span>
            <br />
            {postPreview.summary}
          </p>
        </div>
        <p className="indent-8 mt-3 italic text-gray-400">
          I have a few other things on my{" "}
          <a href="/projects" className="link font-extrabold">
            projects page
          </a>.
        </p>
      </TitledCard>

      {/* --- QUALIFICATIONS --- */}
      <SkillsVisual />

      {/* --- EXTRACURRICULARS --- */}
      <TitledCard title="Other Adventures">
        <p className="indent-8">
          I spent four years doing{" "}
          <span className="text-rose-600">VEX Robotics</span>{" "}
          as a programmer and designer. My team and I made it to the{" "}
          <span className="text-yellow-400">Indiana State Championship</span>
          {" "}
          in 2023! I got to program our robot in{" "}
          <span className="text-blue-300">C++</span>{" "}
          (PROS) and help out with the mechanical side of things.
        </p>
      </TitledCard>

      {/* --- CONTACT --- */}
      <StyledPanel title="Let's Connect">
        <div className="flex items-center gap-2">
          <TbMail className="text-fuchsia-50 text-lg" />
          <p>
            I'm always open to making new friends and collaborating. You can
            reach me at:{"  "}
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
