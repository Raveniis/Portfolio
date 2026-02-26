import { Component, signal } from '@angular/core';
import skills from '../../../data/skills';


@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = signal<Skill[]>(skills);

  ngOnInit() {
    console.log(this.skills());
  }
}
