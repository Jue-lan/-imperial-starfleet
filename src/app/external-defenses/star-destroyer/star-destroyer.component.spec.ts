import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarDestroyerComponent } from './../star-destroyer/star-destroyer.component';

describe('StarDestroyerComponent', () => {
  let component: StarDestroyerComponent;
  let fixture: ComponentFixture<StarDestroyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarDestroyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarDestroyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
