import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { MaterialModules } from "../../../modules/module";
import { SafeUrlPipe } from '../../pipes/safe-url-pipe';

@Component({
  selector: 'app-document-viewer-modal',
  imports: [MatDialogContent, MatButtonModule, MaterialModules, SafeUrlPipe],
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

  downloadDocument() {
    const link = document.createElement('a');
    link.href = this.data.url;
    link.download = this.data.title;
    link.click();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
