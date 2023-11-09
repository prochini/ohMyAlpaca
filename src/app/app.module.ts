import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({ "projectId": "ohmyalpaca-e5554", "appId": "1:58194086457:web:4a4ff9138a11b727435be8", "storageBucket": "ohmyalpaca-e5554.appspot.com", "apiKey": "AIzaSyDzp-XI95JKhpu22Bq5GjaOeGJ1swgPnPc", "authDomain": "ohmyalpaca-e5554.firebaseapp.com", "messagingSenderId": "58194086457", "measurementId": "G-RCKM1Y4WL7" })),
    provideFirestore(() => getFirestore()),
    SliderModule,
    ButtonModule,
    CardModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
