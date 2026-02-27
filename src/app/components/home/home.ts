import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';
import { EducationComponent } from './education/education';

@Component({
  selector: 'app-home',
  imports: [Hero, Experience, Skills, EducationComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
