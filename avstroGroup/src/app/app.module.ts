import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from './feature/pages/pages.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { InsuranceModule } from './feature/insurance/insurance.module';
import { InsuranceRoutingModule } from './feature/insurance/insurance-routing.module';
import { ReviewsModule } from './feature/reviews/reviews.module';
import { ReviewsRoutingModule } from './feature/reviews/reviews-routing.module';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    InsuranceRoutingModule,
    ReviewsRoutingModule,
    RouterModule,
    HttpClientModule,
    AuthModule,
    PagesModule,
    InsuranceModule,
    ReviewsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => {
        return () => authService.authenticate();
      },
      deps: [AuthService],
      multi: true,
    }
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
