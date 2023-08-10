import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopDropdownMenuComponent } from './stop-dropdown-menu.component';

describe('StopDropdownMenuComponent', () => {
  let component: StopDropdownMenuComponent;
  let fixture: ComponentFixture<StopDropdownMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StopDropdownMenuComponent]
    });
    fixture = TestBed.createComponent(StopDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
