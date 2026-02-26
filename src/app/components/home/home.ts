import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Experience } from './experience/experience';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-home',
  imports: [Hero, Experience, Skills],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
