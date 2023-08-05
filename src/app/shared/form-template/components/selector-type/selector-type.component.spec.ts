import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTypeComponent } from './selector-type.component';

describe('SelectorTypeComponent', () => {
  let component: SelectorTypeComponent;
  let fixture: ComponentFixture<SelectorTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorTypeComponent]
    });
    fixture = TestBed.createComponent(SelectorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
