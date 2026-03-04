import { Component, inject, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import { DocumentViewerModal } from '../../../utils-comoponents/document-viewer-modal/document-viewer-modal';
import { MatDialog } from '@angular/material/dialog';
import { Socials } from '../../../shared-component/socials/socials';
import { TrackSectionDirective } from '../../../directives/track-section';

@Component({
  selector: 'app-hero',
  imports: [MaterialModules, Socials, TrackSectionDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective

  get trackElement() {
    return this.section?.el.nativeElement;
  }

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
