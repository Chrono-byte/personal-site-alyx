import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

import ProjectBlock from "../components/Projects/ProjectBlock.tsx";
import projectsData from "../static/projects.json" with { type: "json" };

type Project = {
  title: string;
  date: string;
  description: string;
  links: string[][];
};

// convert every project in projectsData to a Project object
// then pass it to ProjectBlock

for (const project in projectsData) {
  if (Object.prototype.hasOwnProperty.call(projectsData, project)) {
    const element = projectsData[project];

    const projectObject: Project = {
      title: element.title,
      date: element.date,
      description: element.description,
      links: element.links ? element.links : []
    };

    projectsData[project] = projectObject;
  }
}

export default function Home() {
  return (
    <div class="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["projects"]} />

      <div class="flex justify-center items-center">
        <div class="flex flex-col ml-14 mr-14 gap-1 md:gap-3 shrink text-sm md:max-w-screen-xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
          {projectsData.map((project) => (
            <ProjectBlock {...project} />))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
