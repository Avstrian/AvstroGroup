import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceOverviewComponent } from './insurance-overview/insurance-overview.component';
import { InsuranceCreateComponent } from './insurance-create/insurance-create.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { InsuranceRoutingModule } from './insurance-routing.module';
import { RouterModule } from '@angular/router';
import { InsuranceConfirmComponent } from './insurance-confirm/insurance-confirm.component';
import { InsurancePayComponent } from './insurance-pay/insurance-pay.component';



@NgModule({
  declarations: [
    InsuranceOverviewComponent,
    InsuranceCreateComponent,
    InsuranceDetailsComponent,
    InsuranceConfirmComponent,
    InsurancePayComponent
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    RouterModule
  ],
  exports: [
    InsuranceOverviewComponent
  ]
})
export class InsuranceModule { }
