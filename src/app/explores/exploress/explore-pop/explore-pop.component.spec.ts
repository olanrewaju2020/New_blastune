import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePopComponent } from './explore-pop.component';

describe('ExplorePopComponent', () => {
  let component: ExplorePopComponent;
  let fixture: ComponentFixture<ExplorePopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorePopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
