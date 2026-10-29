import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-placeholder',
  imports: [CommonModule],
  templateUrl: './empty-placeholder.html'
})

export class EmptyPlaceholder {
  @Input() message: string = 'No data available.'
  @Input() icon: string | undefined 
}
