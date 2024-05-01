import Project from "./Project.ts";

export default function ProjectBlock(project: Project) {
  let linksBlock = <></>;
  if (typeof project.links == "object") {
    linksBlock = (
      <>
        <br />
        <label class="font-bold">
          Link{Object.entries(project.links).length > 1 ? "s" : ""}:{" "}
        </label>{" "}
        {Object.entries(project.links).map(([name, link]) => (
          <a class="text-blue-300 hover:text-blue-400" href={link}>
            {name}
            {" "}
          </a>
        ))}
      </>
    );
  }

  return (
    <div class="text-white background-card">
      <h1 class="font-bold">{project.title}</h1>
      <p class="text-violet-300 font-bold pb-1.5 pl-3">
        {project.date.start} - {project.date.end}
      </p>
      <p>{project.description}</p>
      {linksBlock}
    </div>
  );
}
