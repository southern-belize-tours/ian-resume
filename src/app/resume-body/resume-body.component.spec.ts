import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBodyComponent } from './resume-body.component';

describe('ResumeBodyComponent', () => {
  let component: ResumeBodyComponent;
  let fixture: ComponentFixture<ResumeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
