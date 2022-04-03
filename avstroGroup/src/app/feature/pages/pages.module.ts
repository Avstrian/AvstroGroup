import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutPageComponent } from './about-page/about-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    PageNotFoundPageComponent,
    AboutPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
