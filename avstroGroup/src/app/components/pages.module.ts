import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { InsuranceOverviewComponent } from './home/insurance-overview/insurance-overview.component';



@NgModule({
  declarations: [
    HomePageComponent,
    PageNotFoundPageComponent,
    InsuranceOverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
