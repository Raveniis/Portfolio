import { Component, Input, input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-socials',
  imports: [MatTooltip],
  templateUrl: './socials.html',
  styleUrl: './socials.scss',
})
export class Socials {
  @Input() size!: 'small' | 'medium' | 'large';

  iconSize: string = 'text-2xl';

  ngOnInit() {
    switch (this.size) {
      case 'small':
        this.iconSize = 'text-lg';
        break;
      case 'medium':
        this.iconSize = 'text-2xl';
        break;
      case 'large':
        this.iconSize = 'text-4xl';
        break;
    }
  }
}
