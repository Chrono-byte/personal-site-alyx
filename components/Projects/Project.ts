interface Project {
  id?: string;
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

export default Project;
