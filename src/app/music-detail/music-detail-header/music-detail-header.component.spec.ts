import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDetailHeaderComponent } from './music-detail-header.component';

describe('MusicDetailHeaderComponent', () => {
  let component: MusicDetailHeaderComponent;
  let fixture: ComponentFixture<MusicDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicDetailHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
