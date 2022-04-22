import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { ReviewCreateComponent } from "./review-create/review-create.component";


//TODO: ADD AN AUTH GUARD TO PROFILE PAGE
const routes: Routes = [
  {
    path: 'review',
    canActivate: [AuthGuard],
    component: ReviewCreateComponent
  }
]

export const ReviewsRoutingModule = RouterModule.forChild(routes);