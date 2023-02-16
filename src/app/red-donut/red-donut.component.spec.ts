import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedDonutComponent } from './red-donut.component';

describe('RedDonutComponent', () => {
  let component: RedDonutComponent;
  let fixture: ComponentFixture<RedDonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedDonutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
