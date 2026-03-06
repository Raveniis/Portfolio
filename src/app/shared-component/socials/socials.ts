import { Component, inject, Input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { MaterialModules } from '../../../modules/module';
import { CommonModule } from '@angular/common';
import { Utils } from '../../services/utils';

type SocialType = 'link' | 'text';

interface Social {
  type: SocialType;
  name: string;
  icon: string;
  url?: string;
  text?: string;
}

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

  private utils = inject(Utils)

  iconSize: string = 'text-2xl';
  iconGap: string = 'gap-2';

  socials: Social[] = [
    {
      type: 'link',
      name: 'LinkedIn',
      icon: 'mdi mdi-linkedin',
      url: 'https://www.linkedin.com/in/ravenis/',
    },
    {
      type: 'link',
      name: 'GitHub',
      icon: 'mdi mdi-github',
      url: 'https://github.com/Raveniis',
    },
    {
      type: 'link',
      name: 'Email',
      icon: 'mdi mdi-email',
      url: 'mailto:ravenlegarde@gmail.com',
    },
    {
      type: 'text',
      name: '09275049530',
      icon: 'mdi mdi-phone',
      text: '09275049530',
    },
  ];

  copyOnClick(text: string) {
    this.utils.copyTextToClipboard(text)
  }

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
