import { Component, signal, ViewChild } from '@angular/core';
import skills from '../../../data/skills';
import { TrackSectionDirective } from '../../../directives/track-section';

@Component({
  selector: 'app-skills',
  imports: [TrackSectionDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective

  get trackElement() {
    return this.section?.el.nativeElement;
  }
  
  skills = signal<Skill[]>(skills);
}
