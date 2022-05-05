import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeStreamingComponent } from './free-streaming.component';

describe('FreeStreamingComponent', () => {
  let component: FreeStreamingComponent;
  let fixture: ComponentFixture<FreeStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
