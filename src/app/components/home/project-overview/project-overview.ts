import { Component, inject, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import { TrackSectionDirective } from '../../../directives/track-section';
import { ScrollViewService } from '../../../services/scroll-view.service';
import projects from '../../../data/projects.data';
import { Utils } from '../../../utils/utils';

@Component({
  selector: 'app-project-overview',
  imports: [MaterialModules, TrackSectionDirective],
  templateUrl: './project-overview.html',
  styleUrl: './project-overview.scss',
})
export class ProjectOverview {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective;

  private scrollService = inject(ScrollViewService);
  private utils = inject(Utils)

  get trackElement() {
    return this.section?.el.nativeElement;
  }

  ngAfterViewInit() {
    this.scrollService.observeElement(this.trackElement);
  }

  celebrate() {
    this.utils.openSnackbar('You\'re Already Here!! 🎉🎉', 'Dismiss')
  }

  navigate() {
    //a placeholder for now
  }

  protected projects: Project[] = projects;
}
