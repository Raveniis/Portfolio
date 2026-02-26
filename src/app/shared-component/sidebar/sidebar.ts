import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Output() onToggleSidenav = new EventEmitter<void>();

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }
}
