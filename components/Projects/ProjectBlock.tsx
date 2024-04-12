type Project = {
  title: string;
  date: string;
  description: string;
  links: object | undefined;
};

export default function ProjectBlock(project: Project) {
  let linksBlock = <></>;
  if (typeof project.links == "object") {
    linksBlock = (
      <>
        <br />
        <label>Link{Object.entries(project.links).length > 1 ? "s" : ""}:{" "}</label>{" "}
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
    <div className="text-white background-card">
      <h1>{project.title}</h1>
      <p className="text-violet-300">{project.date}</p>
      <p>{project.description}</p>
      {linksBlock}
    </div>
  );
}
