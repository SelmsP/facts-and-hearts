import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaHistory } from './trivia-history';

describe('TriviaHistory', () => {
  let component: TriviaHistory;
  let fixture: ComponentFixture<TriviaHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriviaHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(TriviaHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
