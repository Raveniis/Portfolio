import { Component } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [MaterialModules, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {}
