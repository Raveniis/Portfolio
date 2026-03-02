import { Component, inject } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import { DocumentViewerModal } from '../../../utils-comoponents/document-viewer-modal/document-viewer-modal';
import { MatDialog } from '@angular/material/dialog';
import { Socials } from '../../../shared-component/socials/socials';

@Component({
  selector: 'app-hero',
  imports: [MaterialModules, Socials],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
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
        url: './documents/document.pdf#toolbar=0',
      },
    });
  }
}
