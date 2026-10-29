import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPlaceholder } from './empty-placeholder';

describe('EmptyPlaceholder', () => {
  let component: EmptyPlaceholder;
  let fixture: ComponentFixture<EmptyPlaceholder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyPlaceholder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyPlaceholder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
