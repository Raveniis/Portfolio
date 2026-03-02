import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-overview',
  imports: [MaterialModules, RouterLink],
  templateUrl: './project-overview.html',
  styleUrl: './project-overview.scss',
})
export class ProjectOverview {}
