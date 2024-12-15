import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFormTemplateDrivenComponent } from './detail-form-template-driven.component';

describe('DetailFormTemplateDrivenComponent', () => {
  let component: DetailFormTemplateDrivenComponent;
  let fixture: ComponentFixture<DetailFormTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFormTemplateDrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFormTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
