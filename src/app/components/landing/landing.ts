import { Component, inject } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-landing',
  imports: [MaterialModules],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

}
