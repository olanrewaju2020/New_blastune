import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarTrackComponent } from './similar-track.component';

describe('SimilarTrackComponent', () => {
  let component: SimilarTrackComponent;
  let fixture: ComponentFixture<SimilarTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
