import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplaylistsComponent } from './aplaylists.component';

describe('PlaylistComponent', () => {
  let component: AplaylistsComponent;
  let fixture: ComponentFixture<AplaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplaylistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
