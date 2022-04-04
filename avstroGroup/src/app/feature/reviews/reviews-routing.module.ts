import { RouterModule, Routes } from "@angular/router";
import { ReviewCreateComponent } from "./review-create/review-create.component";


//TODO: ADD AN AUTH GUARD TO PROFILE PAGE
const routes: Routes = [
  {
    path: 'review',
    component: ReviewCreateComponent
  }
]

export const ReviewsRoutingModule = RouterModule.forChild(routes);