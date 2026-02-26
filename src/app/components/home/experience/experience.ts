import { Component } from '@angular/core';
import { MatCard, MatCardHeader } from '@angular/material/card';
import { MaterialModules } from '../../../../modules/module';

@Component({
  selector: 'app-experience',
  imports: [MaterialModules],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  darkMode = true;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
