import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicVideoComponent } from './music-video.component';

describe('MusicVideoComponent', () => {
  let component: MusicVideoComponent;
  let fixture: ComponentFixture<MusicVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
