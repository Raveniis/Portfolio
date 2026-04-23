import { Component, inject, ViewChild } from '@angular/core';
import { MaterialModules } from '../../../../modules/module';
import { DocumentViewerModal } from '../../../modals/document-viewer-modal/document-viewer-modal';
import { MatDialog } from '@angular/material/dialog';
import { Socials } from '../../../shared-components/socials/socials';
import { TrackSectionDirective } from '../../../directives/track-section';
import { ScrollViewService } from '../../../services/scroll-view.service';
import heroData from '../../../data/hero.data';

@Component({
  selector: 'app-hero',
  imports: [MaterialModules, Socials, TrackSectionDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  @ViewChild(TrackSectionDirective) section!: TrackSectionDirective;
  private dialog = inject(MatDialog);
  private scrollService = inject(ScrollViewService);

  get trackElement() {
    return this.section?.el.nativeElement;
  }

  ngAfterViewInit() {
    this.scrollService.observeElement(this.trackElement);
  }

  protected heroData: Hero = heroData;

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
