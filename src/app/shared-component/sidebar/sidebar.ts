import { Component, EventEmitter, Output } from '@angular/core';
import navigationLinks from '../../data/navigationLinks';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Output() onToggleSidenav = new EventEmitter<void>();
  navigationLinks = navigationLinks;

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }
}
