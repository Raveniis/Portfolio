import { Component, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import { TrackSectionDirective } from '../../../directives/track-section';
import experiences from '../../../data/experience';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience',
  imports: [MaterialModules, TrackSectionDirective, CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective;

  protected experiences = experiences
  get trackElement() {
    return this.section?.el.nativeElement;
  }
}
