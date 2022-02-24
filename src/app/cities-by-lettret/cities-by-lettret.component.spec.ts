import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesByLettretComponent } from './cities-by-lettret.component';

describe('CitiesByLettretComponent', () => {
  let component: CitiesByLettretComponent;
  let fixture: ComponentFixture<CitiesByLettretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesByLettretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesByLettretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
