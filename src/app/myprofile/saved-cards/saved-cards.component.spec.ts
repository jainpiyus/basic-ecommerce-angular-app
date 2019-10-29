import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCardsComponent } from './saved-cards.component';

describe('SavedCardsComponent', () => {
  let component: SavedCardsComponent;
  let fixture: ComponentFixture<SavedCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
