import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { FirestoreModule } from '@angular/fire/firestore';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { environment } from 'src/environments/environment';

import { AppState } from './store/app.state';
import { SettingsState } from './store/settings/settings.state';
import { UserState } from './store/user/user.state';

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
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
    FirestoreModule,

    NgxsModule.forRoot([AppState, SettingsState, UserState], {
      developmentMode: !environment.production
    }),
    NgxsFormPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({ key: 'settings' }),
    NgxsResetPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
