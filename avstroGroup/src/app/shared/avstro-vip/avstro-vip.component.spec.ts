import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvstroVipComponent } from './avstro-vip.component';

describe('AstroVipComponent', () => {
  let component: AvstroVipComponent;
  let fixture: ComponentFixture<AvstroVipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvstroVipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvstroVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
