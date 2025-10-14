import StyledPanel from "../BackgroundCard.tsx";
import TitledCard from "../TitledCard.tsx"; // 1. Import the new component
import SkillsVisual from "./CompetenciesGrid.tsx";

import { TbMail } from "@preact-icons/tb";

export default function About() {
  return (
    <div className="flex flex-col gap-y-1 md:gap-3 text-base max-w-4xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
      {/* --- INTRO --- */}
      {/* BackgroundCard is perfect for simple, untitiled content blocks. */}
      <StyledPanel>
        <p className="indent-8">
          Hi, I'm Ellie. I'm a computer science student at Indiana University
          Indianapolis with a passion for building practical, full-stack
          projects with an emphasis on reliability. I primarily work with{" "}
          <span className="text-blue-400">TypeScript</span> and{" "}
          <span className="text-blue-300">C++</span>, and I enjoy contributing
          to open-source tools that help teams move faster and improve developer
          workflows.
        </p>
      </StyledPanel>

      {/* --- QUALIFICATIONS --- */}
      {/* The SkillsVisual component is already a self-contained, styled card. */}
      <SkillsVisual />

      {/* --- SELECTED PROJECTS --- */}
      {/* 2. Replaced BackgroundCard + h3 with the new TitledCard component. */}
      <TitledCard title="Selected Projects">
        <div className="flex flex-col gap-y-3">
          <p className="indent-8">
            <strong>Oats</strong>{" "}
            <span className="text-sm text-gray-400">(Sep 2025 – Present)</span>
            <br />
            An ahead-of-time (AOT) compiler for a language inspired by
            TypeScript, with influences from Swift and Rust. It compiles to
            native executables using LLVM, targeting predictable performance and
            a small, safe runtime.
          </p>
          <p className="indent-8">
            <strong>Boiler</strong>{" "}
            <span className="text-sm text-gray-400">(Jan 2023 – Jan 2024)</span>
            <br />A TypeScript-based chat server built with Deno, leveraging
            WebSockets and REST APIs for seamless communication. It is designed
            to be easily extendable.
          </p>
        </div>
        <p className="indent-8 mt-3 italic text-gray-400">
          More projects available on the projects page.
        </p>
      </TitledCard>

      {/* --- EXTRACURRICULARS --- */}
      {/* 3. Also used TitledCard here for consistency. */}
      <TitledCard title="Robotics & Extracurriculars">
        <p className="indent-8">
          I competed in VEX Robotics for four years as a programmer and
          designer, qualifying for the Indiana State Championship in 2023. I
          programmed our robot in C++ (PROS), contributed to mechanical design,
          and helped develop open-source libraries for my team.
        </p>
      </TitledCard>

      {/* --- CONTACT --- */}
      <StyledPanel title="Get In Touch">
        <div className="flex items-center gap-2">
          <TbMail className="text-fuchsia-50 text-lg" />
          <p>
            I'm always open to discussing new projects or opportunities. Feel
            free to{" "}
            <a
              className="email text-blue-400 underline hover:text-blue-300"
              href="mailto:hello@unknownhost.name"
            >
              send me an email
            </a>
            .
          </p>
        </div>
      </StyledPanel>
    </div>
  );
}
