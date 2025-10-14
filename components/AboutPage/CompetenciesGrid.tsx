// file: src/islands/CompetenciesGrid.tsx

// A more detailed data structure to represent the new design
type SkillEntry = {
  name: string;
  tags: string[];
};

type CompetencyCategory = {
  title: string;
  skills: SkillEntry[];
};

const competenciesData: CompetencyCategory[] = [
  {
    title: "Software Development",
    skills: [
      {
        name: "Systems Programming",
        tags: [
          "Rust",
          "C++",
          "Concurrency",
          "Safety",
          "Compiler Design",
          "CLI",
          "FFI",
        ],
      },
      {
        name: "Full-Stack Development",
        tags: ["Frontend", "Backend", "API Design", "Database Integration"],
      },
      {
        name: "Deno & Deno Fresh",
        tags: ["Island Architecture", "SSR", "TypeScript", "Vite"],
      },
      {
        name: "TypeScript",
        tags: ["Type Safety", "Static Typing", "Tooling"],
      },
    ],
  },
  {
    title: "Infrastructure & Deployment",
    skills: [
      {
        name: "Linux Administration & Networking",
        tags: [
          "CI/CD Pipelines",
          "DevOps",
          "Fedora",
          "KVM",
          "Linux Systems",
          "Zsh",
        ],
      },
      {
        name: "Containerization & Orchestration",
        tags: ["DevOps Practices", "Podman", "Proxmox", "Docker"],
      },
    ],
  },
];

import StyledPanel from "../../components/BackgroundCard.tsx";
import Badge from "../../components/ui/Badge.tsx";

export default function CompetenciesGrid() {
  return (
    <StyledPanel>
      <h3 className="mb-4 text-lg font-semibold text-gray-100">
        Education & Areas of Focus
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
            <ul className="mt-2 flex flex-col gap-y-3 pl-4 border-l border-gray-600 list-none">
              {category.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-100">{skill.name}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                    {skill.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </StyledPanel>
  );
}
