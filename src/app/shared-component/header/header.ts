import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModules } from '../../../modules/module';

@Component({
  selector: 'app-header',
  imports: [MaterialModules],
  templateUrl: './header.html',
})
export class Header {
  @Output() onToggleSidenav = new EventEmitter<void>();

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }
}
