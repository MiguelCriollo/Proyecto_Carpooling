import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCenterComponent } from './body-center.component';

describe('BodyCenterComponent', () => {
  let component: BodyCenterComponent;
  let fixture: ComponentFixture<BodyCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCenterComponent]
    });
    fixture = TestBed.createComponent(BodyCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
