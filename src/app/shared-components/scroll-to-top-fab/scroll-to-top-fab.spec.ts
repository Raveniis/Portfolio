import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollToTopFAB } from './scroll-to-top-fab';

describe('ScrollToTopFAB', () => {
  let component: ScrollToTopFAB;
  let fixture: ComponentFixture<ScrollToTopFAB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollToTopFAB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollToTopFAB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
