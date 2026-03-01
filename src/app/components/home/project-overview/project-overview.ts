import { Component } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-overview',
  imports: [MaterialModules, RouterOutlet, RouterLink],
  templateUrl: './project-overview.html',
  styleUrl: './project-overview.scss',
})
export class ProjectOverview {

}
