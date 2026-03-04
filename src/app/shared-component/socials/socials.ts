import { Component, Input, input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { MaterialModules } from '../../../modules/module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-socials',
  imports: [MatTooltip, MaterialModules, CommonModule],
  templateUrl: './socials.html',
  styleUrl: './socials.scss',
})
export class Socials {
  @Input() size!: 'small' | 'medium' | 'large';
  @Input() isResponsive: boolean = false;
  @Input() isColorFixed: boolean = false;

  iconSize: string = 'text-2xl';
  iconGap: string = 'gap-2';

  socials = [
    {
      name: 'LinkedIn',
      icon: 'mdi mdi-linkedin',
      url: 'https://www.linkedin.com/in/ravenis/',
    },
    {
      name: 'GitHub',
      icon: 'mdi mdi-github',
      url: 'https://github.com/Raveniis',
    },
    {
      name: 'Email',
      icon: 'mdi mdi-email',
      url: 'mailto:ravenlegarde@gmail.com',
    },
  ];

  ngOnInit() {
    switch (this.size) {
      case 'small':
        this.iconSize = 'text-lg';
        break;
      case 'medium':
        this.iconSize = 'text-2xl';
        break;
      case 'large':
        this.iconSize = 'text-3xl';
        break;
    }
  }
}
