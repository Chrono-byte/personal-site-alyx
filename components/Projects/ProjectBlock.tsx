type Project = {
  title: string;
  date: string;
  description: string;
  links: string[][];
};

export default function ProjectBlock(project: Project) {
  return (
    <div className="text-white background-card">
      <h1>{project.title}</h1>
      <p className="text-violet-300">{project.date}</p>
      <p>{project.description}</p>
      <br />
      <label>Link{project.links.length > 1 ? "s" : ""}:{" "}</label>{" "}
      {project.links.map((link) => <a class="text-blue-300 hover:text-blue-400" href={link[1]}>{link[0]}</a>)}
    </div>
  );
}
