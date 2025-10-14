// file: src/islands/CompetenciesGrid.tsx

// A more detailed data structure to represent the new design
type SkillEntry = {
  name: string;
  level: "Expert" | "Advanced";
  tags: string[];
};

type CompetencyCategory = {
  title: string;
  skills: SkillEntry[];
};

const competenciesData: CompetencyCategory[] = [
  {
    title: "Systems & Language Work",
    skills: [
      {
        name: "Rust & Systems Programming",
        level: "Expert",
        tags: ["rust", "systems", "concurrency", "safety", "ffi", "cli"],
      },
      {
        name: "TypeScript (Language & Tooling)",
        level: "Expert",
        tags: ["typing", "tsc", "compiler-api", "safety", "utility-types"],
      },
    ],
  },
  {
    title: "Systems & Infra Tooling",
    skills: [
      {
        name: "Linux, Shell, & Networking",
        level: "Advanced",
        tags: ["bash", "posix", "debian", "tcp/ip", "devops", "ci/cd"],
      },
    ],
  },
];

import StyledPanel from "../../components/BackgroundCard.tsx";
import Badge from "../../components/Badge.tsx";

export default function CompetenciesGrid() {
  return (
    <StyledPanel>
      <h3 className="mb-4 text-lg font-semibold text-violet-400">
        Education & Key Competencies
      </h3>

      {/* Education Section */}
      <div>
        <h4 className="font-semibold text-gray-200">Education</h4>
        <p className="mt-1 text-gray-300">
          Indiana University Indianapolis
          <br />
          <span className="text-sm">Bachelor's degree, Computer Science</span>
          <br />
          <span className="text-sm text-gray-400">(Aug 2023 — May 2027)</span>
        </p>
      </div>

      {/* Skills Sections */}
      <div className="mt-6 flex flex-col gap-y-6">
        {competenciesData.map((category) => (
          <div key={category.title}>
            <h4 className="font-semibold text-gray-200">{category.title}</h4>
            <div className="mt-2 flex flex-col gap-y-3 pl-4 border-l border-gray-600">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-100">{skill.name}</span>
                    <Badge variant="level" level={skill.level}>
                      {skill.level}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                    {skill.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledPanel>
  );
}
