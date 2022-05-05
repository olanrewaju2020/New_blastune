import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSelectComponent } from './hot-select.component';

describe('HotSelectComponent', () => {
  let component: HotSelectComponent;
  let fixture: ComponentFixture<HotSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
