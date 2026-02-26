import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModules } from '../../../modules/module';

@Component({
  selector: 'app-header',
  imports: [MaterialModules],
  templateUrl: './header.html',
})
export class Header {
  @Output() onToggleSidenav = new EventEmitter<void>();

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
