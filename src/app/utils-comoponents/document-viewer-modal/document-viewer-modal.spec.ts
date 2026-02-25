import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentViewerModal } from './document-viewer-modal';

describe('DocumentViewerModal', () => {
  let component: DocumentViewerModal;
  let fixture: ComponentFixture<DocumentViewerModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentViewerModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentViewerModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
