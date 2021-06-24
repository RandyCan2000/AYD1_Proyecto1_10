import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire'
import { AngularFireStorageModule } from '@angular/fire/storage'

import { ImagePicker } from '@ionic-native/image-picker/ngx'

export const firebaseConfig = {
  apiKey: "AIzaSyBvuyqxBOsBiBPu9lTG6dIXtlEPkd_FktU",
  authDomain: "ayd1proyecto1.firebaseapp.com",
  projectId: "ayd1proyecto1",
  storageBucket: "ayd1proyecto1.appspot.com",
  messagingSenderId: "974745675441",
  appId: "1:974745675441:web:531a081bc9cd3630f86490",
  measurementId: "G-0D0ZTYCN6E"
};

//plugin para cargar imagenes desde el teléfono

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    ImagePicker
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
