import { Component, inject, ViewChild } from '@angular/core';
import skills from '../../../data/skills.data';
import { TrackSectionDirective } from '../../../directives/track-section';
import { ScrollViewService } from '../../../services/scroll-view.service';
import { MaterialModules } from '../../../../modules/module';

@Component({
  selector: 'app-skills',
  imports: [TrackSectionDirective, MaterialModules],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective;
  private scrollService = inject(ScrollViewService);
  private observer!: IntersectionObserver;

  get trackElement() {
    return this.section?.el.nativeElement;
  }

  ngAfterViewInit() {
    this.scrollService.observeElement(this.trackElement);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  protected skills: Skill[] = skills;
}
