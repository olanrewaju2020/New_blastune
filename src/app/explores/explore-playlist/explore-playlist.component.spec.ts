import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePlaylistComponent } from './explore-playlist.component';

describe('ExplorePlaylistComponent', () => {
  let component: ExplorePlaylistComponent;
  let fixture: ComponentFixture<ExplorePlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorePlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
