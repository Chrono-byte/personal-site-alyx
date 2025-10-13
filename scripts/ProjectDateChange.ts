import fs from "node:fs";

type OldProject = {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  links?: Record<string, string>;
};

type NewProject = {
  title: string;
  date: {
    start: string;
    end: string;
  };
  description: string;
  links?: Record<string, string>;
};

const oldData: OldProject[] = JSON.parse(
  fs.readFileSync("projects.json", "utf-8"),
);

function convertData(project: OldProject): NewProject {
  return {
    title: project.title,
    date: {
      start: project.startDate,
      end: project.endDate,
    },
    description: project.description,
    links: project.links,
  };
}

const newData: NewProject[] = oldData.map(convertData);

fs.writeFileSync("projects.json", JSON.stringify(newData, null, 2));
