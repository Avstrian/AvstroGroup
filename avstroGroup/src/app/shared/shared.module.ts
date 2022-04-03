import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { AvstroVipComponent } from './avstro-vip/avstro-vip.component';



@NgModule({
  declarations: [
    CalculatorComponent,
    AvstroVipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponent,
    AvstroVipComponent
  ]
})
export class SharedModule { }
