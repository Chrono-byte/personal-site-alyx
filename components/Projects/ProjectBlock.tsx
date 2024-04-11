export default function ProjectBlock(project: { project: { title: string; date: string; description: string; } }) {
  project = project.project;

  const links = [];

  for (const link in project.links) {
    if (Object.prototype.hasOwnProperty.call(project.links, link)) {
      const element = project.links[link];

      links.push([link, element]);
    }
  }

  return (
    <div className="text-white background-card">
      <h2>{project.title}</h2>
      <p className="text-violet-300">{project.date}</p>
      <p>{project.description}</p>
      <br />
      <label>Link{links.length > 1 ? "s" : ""}:{" "}</label>
      {links.map((link) => {
        return (
          <a href={link[1]} className="text-blue-300 hover:text-blue-400">
            {link[0] + " "}
          </a>
        );
      })}
    </div>
  );
}
