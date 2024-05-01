import * as fs from 'node:fs';

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

// Load the data
const data: Project[] = JSON.parse(fs.readFileSync('projects.json', 'utf-8'));

// Function to randomize the order of the data
const randomizeOrder = (array: Project[]): Project[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Randomize the data
const randomizedData = randomizeOrder(data);

// Write the randomized data back to the file
fs.writeFileSync('projects.json', JSON.stringify(randomizedData, null, 2));
