import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCircleComponent } from './green-circle.component';

describe('GreenCircleComponent', () => {
  let component: GreenCircleComponent;
  let fixture: ComponentFixture<GreenCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenCircleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
