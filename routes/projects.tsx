import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

import ProjectBlock from "../components/Projects/ProjectBlock.tsx";
import projectsData from "../static/projects.json" with { type: "json"};

export default function Home() {
  return (
    <div class="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["projects"]} />

      <div class="flex flex-col gap-1 md:gap-3 shrink text-sm [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
        {projectsData.projects.map((project) => (
          <ProjectBlock project={project} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
