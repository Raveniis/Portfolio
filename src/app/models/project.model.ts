interface Technology {
  icon: string | null;
  name: string;
}

interface Project {
  title: string;
  sub_title: string;
  url: undefined | string;
  description: string;
  technologies: Technology[];
  link: null | string;
}
