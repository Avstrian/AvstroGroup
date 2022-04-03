import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceConfirmComponent } from './insurance-confirm.component';

describe('InsuranceConfirmComponent', () => {
  let component: InsuranceConfirmComponent;
  let fixture: ComponentFixture<InsuranceConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
