import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { FirestoreModule } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule, HeaderComponent, FooterComponent} from './shared';

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
    FooterComponent, 
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    FirestoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
