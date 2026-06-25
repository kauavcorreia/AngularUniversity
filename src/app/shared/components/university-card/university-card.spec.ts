import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityCard } from './university-card';

describe('UniversityCard', () => {
  let component: UniversityCard;
  let fixture: ComponentFixture<UniversityCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversityCard],
    }).compileComponents();

    fixture = TestBed.createComponent(UniversityCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
