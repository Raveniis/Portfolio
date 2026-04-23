import { Component, inject, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import { TrackSectionDirective } from '../../../directives/track-section';
import experiences from '../../../data/experience';
import { CommonModule } from '@angular/common';
import { ScrollViewService } from '../../../services/scroll-view.service';

@Component({
  selector: 'app-experience',
  imports: [MaterialModules, TrackSectionDirective, CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective;
  private scrollService = inject(ScrollViewService);

  get trackElement() {
    return this.section?.el.nativeElement;
  }
  
  ngAfterViewInit() {
    this.scrollService.observeElement(this.trackElement);
  }

  protected experiences: Experience[] = experiences;
}
  