import { Component, inject, Input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { MaterialModules } from '../../../modules/module';
import { CommonModule } from '@angular/common';
import { Utils } from '../../utils/utils';
import socials from '../../data/socials.data';
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

  private utils = inject(Utils);

  iconSize: string = 'text-2xl';
  iconGap: string = 'gap-2';

  socials = socials;

  copyOnClick(text: string) {
    this.utils.copyTextToClipboard(text);
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
