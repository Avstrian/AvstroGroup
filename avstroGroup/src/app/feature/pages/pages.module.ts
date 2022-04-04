import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { AddMoneyPageComponent } from './add-money-page/add-money-page.component';
import { ReviewsModule } from '../reviews/reviews.module';



@NgModule({
  declarations: [
    HomePageComponent,
    PageNotFoundPageComponent,
    AboutPageComponent,
    AddMoneyPageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReviewsModule
  ]
})
export class PagesModule { }
