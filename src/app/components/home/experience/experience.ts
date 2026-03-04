import { Component, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import { TrackSectionDirective } from '../../../directives/track-section';

@Component({
  selector: 'app-experience',
  imports: [MaterialModules, TrackSectionDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective;

  get trackElement() {
    return this.section?.el.nativeElement;
  }
}
