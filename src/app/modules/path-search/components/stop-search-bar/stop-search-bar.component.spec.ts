import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopSearchBarComponent } from './stop-search-bar.component';

describe('StopSearchBarComponent', () => {
  let component: StopSearchBarComponent;
  let fixture: ComponentFixture<StopSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StopSearchBarComponent]
    });
    fixture = TestBed.createComponent(StopSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
