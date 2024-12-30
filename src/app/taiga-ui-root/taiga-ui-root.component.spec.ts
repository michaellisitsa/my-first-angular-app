import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaigaUiRootComponent } from './taiga-ui-root.component';

describe('TaigaUiRootComponent', () => {
  let component: TaigaUiRootComponent;
  let fixture: ComponentFixture<TaigaUiRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaigaUiRootComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaigaUiRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
