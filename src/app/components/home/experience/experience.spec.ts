import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiences } from './experience';

describe('Experiences', () => {
  let component: Experiences;
  let fixture: ComponentFixture<Experiences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experiences],
    }).compileComponents();

    fixture = TestBed.createComponent(Experiences);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
