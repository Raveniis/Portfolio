import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import navigationLinks from '../../data/navigationLinks';
import { ScrollView } from '../../services/scroll-view.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [MaterialModules],
  templateUrl: './header.html',
})
export class Header {
  @Output() onToggleSidenav = new EventEmitter<void>();
  navigationLinks = navigationLinks;
  activeSection: string = '';
  subscription: Subscription;
  darkMode: boolean = true;

  constructor(private scrollViewService: ScrollView) {
    this.subscription = this.scrollViewService.currentSection$.subscribe((currentSection) => {
      console.log('Current section:', currentSection);
      this.activeSection = currentSection;
    });
  }

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
    sessionStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
  }
}
