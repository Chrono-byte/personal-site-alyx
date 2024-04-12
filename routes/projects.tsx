import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

import ProjectBlock from "../components/Projects/ProjectBlock.tsx";
import projectsData from "../static/projects.json" with { type: "json" };

type Project = {
  title: string;
  date: string;
  description: string;
  links: object | undefined;
};

export default function Home() {
  return (
    <div class="flex-col px-4 pt-4 md:px-36 md:pt-4">
      <Header subdirectory={["projects"]} />

      <div class="flex justify-center items-center">
        <div class="flex flex-col ml-14 mr-14 gap-1 md:gap-3 shrink text-sm md:max-w-screen-xl [text-shadow:_1px_1px_0_rgb(0_0_0_/_100%)]">
          {projectsData.map((project) => (
            <ProjectBlock {...project as Project} />))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
