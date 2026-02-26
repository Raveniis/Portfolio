import { Component, inject } from '@angular/core';
import { MaterialModules } from '../../../modules/module';
// import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DocumentViewerModal } from '../../utils-comoponents/document-viewer-modal/document-viewer-modal';

@Component({
  selector: 'app-landing',
  imports: [MaterialModules],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  readonly dialog = inject(MatDialog);

  viewDocument() {
    this.dialog.open(DocumentViewerModal, {
      width: '100vw',
      height: '100vh',
      minWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'mat-dialog-fullscreen',
      data: {
        title: 'Resume',
        url: './public/documents/document.pdf',
      },
    });
  }
}
