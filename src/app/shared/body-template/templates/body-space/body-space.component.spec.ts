import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySpaceComponent } from './body-space.component';

describe('BodySpaceComponent', () => {
  let component: BodySpaceComponent;
  let fixture: ComponentFixture<BodySpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodySpaceComponent]
    });
    fixture = TestBed.createComponent(BodySpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
