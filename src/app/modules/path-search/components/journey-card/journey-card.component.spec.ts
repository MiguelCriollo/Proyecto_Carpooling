import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyCardComponent } from './journey-card.component';

describe('JourneyCardComponent', () => {
  let component: JourneyCardComponent;
  let fixture: ComponentFixture<JourneyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JourneyCardComponent]
    });
    fixture = TestBed.createComponent(JourneyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
