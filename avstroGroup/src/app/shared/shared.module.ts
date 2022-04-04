import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { AvstroVipComponent } from './avstro-vip/avstro-vip.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CalculatorComponent,
    AvstroVipComponent,
    AddMoneyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CalculatorComponent,
    AvstroVipComponent,
    AddMoneyComponent
  ]
})
export class SharedModule { }
