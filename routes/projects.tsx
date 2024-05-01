import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

import ProjectBlock from "../components/Projects/ProjectBlock.tsx";
import projectsData from "../static/projects.json" with { type: "json" };

interface Project {
  title: string;
  date: {
    start: string;
    end: string;
  };
  description: string;
  links?: {
    [key: string]: string;
  };
};

export default function Home() {
  return (
    <div className="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["projects"]} />

      <div className="flex justify-center items-center">
        <div className="gap-3 justify-center md:flex-nowrap md:max-w-6xl">
          <div className="flex flex-col ml-14 mr-14 gap-3 shrink text-sm justify-center md:gap-x-3">
            {projectsData.map((project: Project) => (
              <ProjectBlock {...project}/>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
