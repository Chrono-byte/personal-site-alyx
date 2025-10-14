import BackgroundCard from "../BackgroundCard.tsx";
import Badge from "../Badge.tsx";
import Project from "./Project.ts";
import LinkList from "../ui/LinkList.tsx";

export default function ProjectBlock(project: Project) {
  let linksBlock = null;
  if (typeof project.links == "object") {
    linksBlock = <LinkList links={project.links} />;
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
