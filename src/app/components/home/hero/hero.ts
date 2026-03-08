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
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective;

  introduction = `Hi! I'm an aspiring Full-Stack Web Developer who enjoys building web applications while continuously learning new technologies to be incorporated in the application. I have experience in using Angular and Laravel Framework in created a web application. I have also experience using React Native and MERN stack in creating a full web and mobile application. I enjoy building applications, learning new tools, and incorporating solid architecture to build something that would actually scale. I'm eager to grow my skills and career as a Full Stack Developer.`;
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
