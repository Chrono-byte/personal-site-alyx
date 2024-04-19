type Project = {
  title: string;
  date: string;
  description: string;
  links: Record<string, string | undefined>;
};

export default function ProjectBlock(project: Project) {
  let linksBlock = <></>;
  if (typeof project.links == "object") {
    linksBlock = (
      <>
        <br />
        <label class="font-bold">Link{Object.entries(project.links).length > 1 ? "s" : ""}:{" "}</label>{" "}
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
      <p class="text-violet-300 font-bold">{project.date}</p>
      <p>{project.description}</p>
      {linksBlock}
    </div>
  );
}
