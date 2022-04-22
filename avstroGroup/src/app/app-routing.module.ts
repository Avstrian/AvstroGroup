import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AboutPageComponent } from './feature/pages/about-page/about-page.component';
import { AddMoneyPageComponent } from './feature/pages/add-money-page/add-money-page.component';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
import { PageNotFoundPageComponent } from './feature/pages/page-not-found-page/page-not-found-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'add',
    canActivate: [AuthGuard],
    component: AddMoneyPageComponent
  },
  {
    path: '**',
    component: PageNotFoundPageComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
