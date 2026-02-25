import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { MaterialModules } from "../../../modules/module";

@Component({
  selector: 'app-document-viewer-modal',
  imports: [MatDialogContent, MatButtonModule, MaterialModules, MatDialogTitle],
  templateUrl: './document-viewer-modal.html',
  styleUrl: './document-viewer-modal.scss',
})
export class DocumentViewerModal {
  data = inject(MAT_DIALOG_DATA);
  constructor(private dialogRef: MatDialogRef<DocumentViewerModal>) {

  }

  ngOnInit() {
    console.log(this.data);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
