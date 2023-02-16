import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowSliceComponent } from './yellow-slice.component';

describe('YellowSliceComponent', () => {
  let component: YellowSliceComponent;
  let fixture: ComponentFixture<YellowSliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YellowSliceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YellowSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
