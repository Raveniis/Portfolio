const projects: Project[] = [
  {
    title: 'Portfolio',
    sub_title: 'Personal Project',
    url: './pictures/Forger.webp',
    description:
      'This project is a personal portfolio showcasing my skills, experience, and past projects, highlighting my growth, capabilities, and the work I’ve completed across different areas.',
    technologies: [
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg', name: 'Angular' },
      { icon: './icons/Tailwind.svg', name: 'Tailwind' },
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', name: 'Express' },
    ],
  },
  {
    title: 'ITrack',
    sub_title: 'Capstone Project',
    url: './pictures/Forger.webp',
    description: `Vivamus vel neque et justo finibus imperdiet eu eu magna. Nulla suscipit sagittis fermentum. Nulla vitae sem a lectus elementum volutpat nec vitae
        libero. Duis a sapien placerat, sollicitudin turpis nec, luctus est. Phasellus auctor malesuada sem, vel pretium erat sollicitudin ac. Nunc commodo
        placerat dui et ultricies. In id posuere est, suscipit condimentum velit.`,
    technologies: [
      { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg', name: 'Angular' },
      { icon: './icons/Laravel.png', name: 'Laravel' },
      {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        name: 'SCSS',
      },
    ],
  },
];

export default projects;
