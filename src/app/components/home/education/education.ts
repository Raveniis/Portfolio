import { Component, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import education from '../../../data/education';
import { TrackSectionDirective } from '../../../directives/track-section';

@Component({
  selector: 'app-education',
  imports: [MaterialModules, TrackSectionDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective

  get trackElement() {
    return this.section?.el.nativeElement;
  }
  
  educations: Education[] = education;
}
