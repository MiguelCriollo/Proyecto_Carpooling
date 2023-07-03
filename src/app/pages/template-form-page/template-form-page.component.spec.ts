import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormPageComponent } from './template-form-page.component';

describe('TemplateFormPageComponent', () => {
  let component: TemplateFormPageComponent;
  let fixture: ComponentFixture<TemplateFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateFormPageComponent]
    });
    fixture = TestBed.createComponent(TemplateFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});