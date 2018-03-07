import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {LoginPage} from '../pages/login/login';
import {MainPage} from "../pages/main/main";
import {SharePage} from "../pages/share/share";
import {IonicStorageModule} from '@ionic/storage';
import {Contacts} from '@ionic-native/contacts';
import {AuthProvider} from '../providers/auth/auth';
import {HttpClientModule} from "@angular/common/http";
import {ContactsProvider} from '../providers/contacts/contacts';

// import {TabsPage} from "../pages/tabs/tabs";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MainPage,
    SharePage,
    // TabsPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['sqlite']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    // TabsPage,
    MainPage,
    SharePage
  ],
  providers: [
    StatusBar,
    Contacts,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ContactsProvider
  ]
})
export class AppModule {
}
