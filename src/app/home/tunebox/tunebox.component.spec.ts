import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuneboxComponent } from './tunebox.component';

describe('TuneboxComponent', () => {
  let component: TuneboxComponent;
  let fixture: ComponentFixture<TuneboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuneboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuneboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
