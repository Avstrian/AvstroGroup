import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

import { AngularFireModule } from "@angular/fire/compat"
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { AngularFirestoreModule } from "@angular/fire/compat/firestore"
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'

import { environment } from 'src/environments/environment';



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
    PagesModule,
    AuthModule,
    InsuranceModule,
    ReviewsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }
