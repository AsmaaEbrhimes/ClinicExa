import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteDataDoctor } from './complete-data-doctor';

describe('CompleteDataDoctor', () => {
  let component: CompleteDataDoctor;
  let fixture: ComponentFixture<CompleteDataDoctor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompleteDataDoctor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteDataDoctor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
