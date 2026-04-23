import { Component, inject, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import { RouterLink } from '@angular/router';
import { TrackSectionDirective } from '../../../directives/track-section';
import { ScrollViewService } from '../../../services/scroll-view.service';
import projects from '../../../data/projects.data';

@Component({
  selector: 'app-project-overview',
  imports: [MaterialModules, RouterLink, TrackSectionDirective],
  templateUrl: './project-overview.html',
  styleUrl: './project-overview.scss',
})
export class ProjectOverview {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective;
  private scrollService = inject(ScrollViewService);

  get trackElement() {
    return this.section?.el.nativeElement;
  }

  ngAfterViewInit() {
    this.scrollService.observeElement(this.trackElement);
  }

  protected projects = projects;
}
