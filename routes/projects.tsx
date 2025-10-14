import { define } from "../utils.ts";

import ProjectBlock from "../components/Projects/ProjectBlock.tsx";
import projectsData from "../static/projects.json" with { type: "json" };

import Project from "../components/Projects/Project.ts";
import StyledPanel from "../components/BackgroundCard.tsx";

// Helper: parse the end date; treat "Present" as the most recent
function endDateValue(end: string) {
  if (!end) return -Infinity;
  if (end.toLowerCase().includes("present")) return Infinity;
  // Try to parse Month Year pairs like "September 2025"
  const parsed = Date.parse(end);
  if (!isNaN(parsed)) return parsed;
  // Fallback: try to parse as year-only
  const year = parseInt(end.slice(-4));
  if (!isNaN(year)) return new Date(year, 0).getTime();
  return 0;
}

const projects: Project[] = (projectsData as Project[]).slice().sort((a, b) => {
  const aVal = endDateValue(a.date.end);
  const bVal = endDateValue(b.date.end);
  return bVal - aVal; // descending: newest first
});

// deno-lint-ignore no-explicit-any
export function handler(ctx: any) {
  ctx.state.breadcrumb = { subdirectory: ["projects"] };
  return ctx.render();
}

export default define.page(function Projects() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <StyledPanel className="mb-4">
          <h1 className="text-lg font-semibold text-gray-100">
            Selected Projects
          </h1>
          <p className="mt-2 text-gray-300 text-sm">
            Curated projects and experiments in systems programming, language
            design, and developer tooling. Ordered by recent activity.
          </p>
        </StyledPanel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, idx) => (
            <ProjectBlock key={project.id ?? idx} {...project} />
          ))}
        </div>
      </div>
    </>
  );
});
