import fs from "node:fs";

type Project = {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  links?: {
    [key: string]: string;
  };
};

type newProject = {
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

let data: Project[] = JSON.parse(fs.readFileSync("projects.json", "utf-8"));

// Function to convert the data to the new format
function convertData(project: Project): newProject {
  return {
    title: project.title,
    date: {
      start: project.startDate,
      end: project.endDate,
    },
    description: project.description,
    links: project.links,
  } as newProject;
}

// Convert the data
data = data.map(convertData);

fs.writeFileSync("projects.json", JSON.stringify(data, null, 2));
