import BackgroundCard from "../BackgroundCard.tsx";
import Badge from "../Badge.tsx";
import Project from "./Project.ts";

export default function ProjectBlock(project: Project) {
  let linksBlock = null;
  if (typeof project.links == "object") {
    linksBlock = (
      <div className="mt-3">
        <label className="font-bold mr-2">
          Link{Object.entries(project.links).length > 1 ? "s" : ""}:
        </label>
        <div className="inline-flex gap-3 flex-wrap">
          {Object.entries(project.links).map(([name, link]) => (
            <a
              key={name}
              className="text-blue-300 hover:text-blue-400 underline-offset-2 hover:underline"
              href={link}
              rel="noopener noreferrer"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <BackgroundCard className="hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-gray-100 text-base">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          <Badge className="text-xs">
            {project.date.start} - {project.date.end}
          </Badge>
        </div>
      </div>

      <p className="mt-2 text-gray-300 text-sm">{project.description}</p>

      {linksBlock}
    </BackgroundCard>
  );
}
