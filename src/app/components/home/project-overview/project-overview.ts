import { Component, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import { RouterLink } from '@angular/router';
import { TrackSectionDirective } from '../../../directives/track-section';

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
@Component({
  selector: 'app-project-overview',
  imports: [MaterialModules, RouterLink, TrackSectionDirective],
  templateUrl: './project-overview.html',
  styleUrl: './project-overview.scss',
})
export class ProjectOverview {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective;

  projects: Project[] = [
    {
      title: 'Portfolio',
      sub_title: 'Personal Project',
      description: `Vivamus vel neque et justo finibus imperdiet eu eu magna. Nulla suscipit sagittis fermentum. Nulla vitae sem a lectus elementum volutpat nec vitae
        libero. Duis a sapien placerat, sollicitudin turpis nec, luctus est. Phasellus auctor malesuada sem, vel pretium erat sollicitudin ac. Nunc commodo
        placerat dui et ultricies. In id posuere est, suscipit condimentum velit.`,
      technologies: [
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg', name: 'Angular' },
        { icon: './icons/Tailwind.svg', name: 'Tailwind' },
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', name: 'Firebase' },
      ],
    },
    {
      title: 'ITrack',
      sub_title: 'Capstone Project',
      description: `Vivamus vel neque et justo finibus imperdiet eu eu magna. Nulla suscipit sagittis fermentum. Nulla vitae sem a lectus elementum volutpat nec vitae
        libero. Duis a sapien placerat, sollicitudin turpis nec, luctus est. Phasellus auctor malesuada sem, vel pretium erat sollicitudin ac. Nunc commodo
        placerat dui et ultricies. In id posuere est, suscipit condimentum velit.`,
      technologies: [
        { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg', name: 'Angular' },
        { icon: './icons/Tailwind.svg', name: 'Tailwind' },
        { icon: './icons/Laravel.png', name: 'Laravel' },
        {
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
          name: 'SCSS',
        },
      ],
    },
  ];
  get trackElement() {
    return this.section?.el.nativeElement;
  }
}
