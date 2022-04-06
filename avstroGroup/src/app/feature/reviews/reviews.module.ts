import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReviewCreateComponent } from './review-create/review-create.component';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewCardComponent } from './review-card/review-card.component';
import { ReviewContainerComponent } from './review-container/review-container.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReviewCreateComponent,
    ReviewCardComponent,
    ReviewContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReviewsRoutingModule
  ],
  exports: [
    ReviewCardComponent,
    ReviewContainerComponent
  ]
})
export class ReviewsModule { }
