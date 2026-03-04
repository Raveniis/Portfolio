import { Component, EventEmitter, Output } from '@angular/core';
import navigationLinks from '../../data/navigationLinks';
import { MaterialModules } from '../../../modules/module';
import { Subscription } from 'rxjs';
import { ScrollView } from '../../services/scroll-view.service';

@Component({
  selector: 'app-sidebar',
  imports: [MaterialModules],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Output() onToggleSidenav = new EventEmitter<void>();
  navigationLinks = navigationLinks;
  activeSection: string = '';
  subscription: Subscription;

  constructor(private scrollViewService: ScrollView) {
    this.subscription = this.scrollViewService.currentSection$.subscribe((currentSection) => {
      this.activeSection = currentSection;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }
}
