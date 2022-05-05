import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploressComponent } from './exploress.component';

describe('ExploressComponent', () => {
  let component: ExploressComponent;
  let fixture: ComponentFixture<ExploressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
