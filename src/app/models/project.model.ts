interface Technology {
  icon: string | null;
  name: string;
}

interface Project {
  title: string;
  sub_title: string;
  description: string;
  technologies: Technology[];
}
