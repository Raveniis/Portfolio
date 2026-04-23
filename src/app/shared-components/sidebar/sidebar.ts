import { Component, EventEmitter, inject, Output } from '@angular/core';
import navigationLinks from '../../data/navigationLinks.data';
import { MaterialModules } from '../../../modules/module';
import { Subscription } from 'rxjs';
import { ScrollViewService } from '../../services/scroll-view.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [MaterialModules, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Output() onToggleSidenav = new EventEmitter<void>();
  private scrollViewService = inject(ScrollViewService);

  private subscription: Subscription;

  navigationLinks = navigationLinks;
  activeSection: string = '';

  constructor() {
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
