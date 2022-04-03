import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePayComponent } from './insurance-pay.component';

describe('InsurancePayComponent', () => {
  let component: InsurancePayComponent;
  let fixture: ComponentFixture<InsurancePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
