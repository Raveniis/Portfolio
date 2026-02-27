import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import education from '../../../data/education';

@Component({
  selector: 'app-education',
  imports: [MaterialModules],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class EducationComponent {
  educations: Education[] = education;
}
