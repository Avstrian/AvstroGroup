import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDeleteComponent } from './insurance-delete.component';

describe('InsuranceDeleteComponent', () => {
  let component: InsuranceDeleteComponent;
  let fixture: ComponentFixture<InsuranceDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
