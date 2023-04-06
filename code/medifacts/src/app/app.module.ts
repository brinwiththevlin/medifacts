import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { FirestoreModule } from '@angular/fire/firestore';
import { PostsPageModule } from './posts/posts.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { RouterModule } from '@angular/router';
// import {IonicModule, IonicRouteStrategy} from '@ionic/angular'

import { AppRoutingModule } from './app-routing.module';
import { PostsPage } from './posts/posts.component';
import { RegisterPage } from './registerlogin/register.component';
import { AppComponent } from './app.component';
import { RegisterLoginPageModule } from './registerlogin/registerlogin.module';
//Import posts component
import { HeaderComponent } from './shared';
import { FooterComponent } from './shared';
import { SharedModule } from './shared';
import { ProfilePageModule } from './profile/profile.module';
import { ProfilePage } from './profile/profile.component';
const firebaseConfig = {
  apiKey: "AIzaSyD4HRv7UFkvIIkRK-g9KIYnxJ1CZIJ7lVs",
  authDomain: "medifacts-f4306.firebaseapp.com",
  projectId: "medifacts-f4306",
  storageBucket: "medifacts-f4306.appspot.com",
  messagingSenderId: "323298476501",
  appId: "1:323298476501:web:addb856d93978229953d5c",
  measurementId: "G-4FGGVVJKQF"
};

@NgModule({
  declarations: [
    AppComponent,
    PostsPage,
   FooterComponent,
   HeaderComponent,
   ProfilePage,
   RegisterPage

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    FirestoreModule,
    PostsPageModule,
    ProfilePageModule,
    RouterModule.forRoot([
      {path: 'posts', component: PostsPageModule},
      {path: 'registerlogin', component: RegisterLoginPageModule},
      {path: 'profile', component: ProfilePageModule}
    ]),
    SharedModule,

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
    
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
