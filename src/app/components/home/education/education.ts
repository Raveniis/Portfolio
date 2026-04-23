import { Component, inject, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import education from '../../../data/education';
import { TrackSectionDirective } from '../../../directives/track-section';
import { ScrollViewService } from '../../../services/scroll-view.service';

@Component({
  selector: 'app-education',
  imports: [MaterialModules, TrackSectionDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective
  private scrollService = inject(ScrollViewService);

  get trackElement() {
    return this.section?.el.nativeElement;
  }

  ngAfterViewInit() {
    this.scrollService.observeElement(this.trackElement);
  }
  
  protected educations: Education[] = education;
}
