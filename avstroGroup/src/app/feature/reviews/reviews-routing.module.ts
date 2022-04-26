import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { ReviewCreateComponent } from "./review-create/review-create.component";

const routes: Routes = [
  {
    path: 'review',
    canActivate: [AuthGuard],
    component: ReviewCreateComponent
  }
]

export const ReviewsRoutingModule = RouterModule.forChild(routes);