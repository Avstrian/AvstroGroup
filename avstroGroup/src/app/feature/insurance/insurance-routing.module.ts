import { RouterModule, Routes } from "@angular/router";
import { InsuranceConfirmComponent } from "./insurance-confirm/insurance-confirm.component";
import { InsuranceCreateComponent } from "./insurance-create/insurance-create.component";
import { InsuranceDeleteComponent } from "./insurance-delete/insurance-delete.component";
import { InsuranceDetailsComponent } from "./insurance-details/insurance-details.component";
import { InsurancePayComponent } from "./insurance-pay/insurance-pay.component";


//TODO add guards
const routes: Routes = [
  {
    path: 'insurances/create',
    component: InsuranceCreateComponent
  },
  {
    path: 'confirm',
    component: InsuranceConfirmComponent
  },
  {
    path: 'insurances/pay',
    component: InsurancePayComponent
  },
  {
    path: 'insurances/delete',
    component: InsuranceDeleteComponent
  },
  {
    path: 'insurances/:insuranceId',
    component: InsuranceDetailsComponent
  },
]

export const InsuranceRoutingModule = RouterModule.forChild(routes);
