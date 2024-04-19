import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

import ProjectBlock from "../components/Projects/ProjectBlock.tsx";
import projectsData from "../static/projects.json" with { type: "json" };

type Project = {
  title: string;
  date: string;
  description: string;
  links: Record<string, string | undefined>;
};

export default function Home() {
  return (
    <div class="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["projects"]} />

      <div class="flex justify-center items-center">
        <div class="gap-3 justify-center md:flex-nowrap md:max-w-6xl">
          <div class="flex flex-col ml-14 mr-14 gap-3 shrink text-sm justify-center md:gap-x-3">
            {projectsData.map((project) => (
              <ProjectBlock {...project as Project} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
