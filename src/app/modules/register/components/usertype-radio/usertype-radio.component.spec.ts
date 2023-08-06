import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypeRadioComponent } from './usertype-radio.component';

describe('UsertypeRadioComponent', () => {
  let component: UsertypeRadioComponent;
  let fixture: ComponentFixture<UsertypeRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsertypeRadioComponent]
    });
    fixture = TestBed.createComponent(UsertypeRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
