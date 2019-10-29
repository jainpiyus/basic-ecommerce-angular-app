import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsRatingComponent } from './reviews-rating.component';

describe('ReviewsRatingComponent', () => {
  let component: ReviewsRatingComponent;
  let fixture: ComponentFixture<ReviewsRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
