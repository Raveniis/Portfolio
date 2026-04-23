import { Component, inject } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Maintenance {
  title: string;
  message: string;
}

@Component({
  selector: 'app-maintenance-modal',
  imports: [MaterialModules],
  templateUrl: './maintenance-modal.html',
  styleUrl: './maintenance-modal.scss',
})
export class MaintenanceModal {
  data: Maintenance = inject(MAT_DIALOG_DATA);
}
