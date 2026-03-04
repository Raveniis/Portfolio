import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[trackSection]',
})
export class TrackSectionDirective {
  constructor(public el: ElementRef) {}
}
