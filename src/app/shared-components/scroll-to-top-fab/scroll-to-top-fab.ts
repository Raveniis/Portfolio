import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-scroll-to-top-fab',
  imports: [MatMiniFabButton, MatIcon, CommonModule],
  templateUrl: './scroll-to-top-fab.html',
  styleUrl: './scroll-to-top-fab.scss',
})
export class ScrollToTopFAB {
  @Input() hideFAB!: boolean
  @Output() onScrollToTop = new EventEmitter<void>()

  scrollToTop() {
    this.onScrollToTop.emit()
  }

}
