import fs from "node:fs";
import { parse } from "npm:date-fns";

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
}

const data: Project[] = JSON.parse(fs.readFileSync("projects.json", "utf-8"));

// Function to get the end date from the "date" field
function getEndDate(project: Project): Date {
  return project.date.end === "Present"
    ? new Date()
    : parse(project.date.end, "MMMM yyyy", new Date());
}

// Sort the data
data.sort((a, b) => getEndDate(b).getTime() - getEndDate(a).getTime());

// Write the sorted data back to the file
fs.writeFileSync("projects.json", JSON.stringify(data, null, 2));
