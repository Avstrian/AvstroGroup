import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { InsuranceCreateComponent } from "./insurance-create/insurance-create.component";
import { InsuranceDeleteComponent } from "./insurance-delete/insurance-delete.component";
import { InsuranceDetailsComponent } from "./insurance-details/insurance-details.component";
import { InsurancePayComponent } from "./insurance-pay/insurance-pay.component";


//TODO add guards
const routes: Routes = [
  {
    path: 'insurances/create',
    canActivate: [AuthGuard],
    component: InsuranceCreateComponent
  },
  {
    path: 'insurances/pay',
    canActivate: [AuthGuard],
    component: InsurancePayComponent
  },
  {
    path: 'insurances/delete/:id',
    canActivate: [AuthGuard],
    component: InsuranceDeleteComponent
  },
  {
    path: 'insurances/:insuranceId',
    canActivate: [AuthGuard],
    component: InsuranceDetailsComponent
  },
]

export const InsuranceRoutingModule = RouterModule.forChild(routes);
