import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceOverviewComponent } from './insurance-overview/insurance-overview.component';
import { InsuranceCreateComponent } from './insurance-create/insurance-create.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { InsuranceRoutingModule } from './insurance-routing.module';
import { RouterModule } from '@angular/router';
import { InsuranceConfirmComponent } from './insurance-confirm/insurance-confirm.component';
import { InsurancePayComponent } from './insurance-pay/insurance-pay.component';
import { InsuranceDeleteComponent } from './insurance-delete/insurance-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InsuranceOverviewComponent,
    InsuranceCreateComponent,
    InsuranceDetailsComponent,
    InsuranceConfirmComponent,
    InsurancePayComponent,
    InsuranceDeleteComponent
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InsuranceOverviewComponent
  ]
})
export class InsuranceModule { }
