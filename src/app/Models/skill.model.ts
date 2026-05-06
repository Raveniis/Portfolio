interface TechStack {
  category: 'frontend' | 'backend' | 'database' | 'tools';
  skills: Skill[];
}

interface Skill {
  src: string;
  name: string;
}
