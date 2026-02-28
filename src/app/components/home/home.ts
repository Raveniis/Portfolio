import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { EducationComponent } from './education/education';
import { ProjectOverview } from './project-overview/project-overview';

@Component({
  selector: 'app-home',
  imports: [Hero, Experience, Skills, EducationComponent, ProjectOverview],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
