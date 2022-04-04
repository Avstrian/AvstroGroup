import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoneyPageComponent } from './add-money-page.component';

describe('AddMoneyPageComponent', () => {
  let component: AddMoneyPageComponent;
  let fixture: ComponentFixture<AddMoneyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoneyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
