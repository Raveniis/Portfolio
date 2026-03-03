import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import { RouterLink } from '@angular/router';
import navigationLinks from '../../data/navigationLinks';

@Component({
  selector: 'app-header',
  imports: [MaterialModules, RouterLink],
  templateUrl: './header.html',
})
export class Header {
  @Output() onToggleSidenav = new EventEmitter<void>();
  navigationLinks = navigationLinks;
  
  ngOnInit() {
    const savedTheme = sessionStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.darkMode = true;
      document.body.classList.add('dark');
    } else if (savedTheme === 'light') {
      this.darkMode = false;
      document.body.classList.remove('dark');
    }
  }

  darkMode: boolean = true;

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
    sessionStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
  }
}
