import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { defaultFirebase, FIREBASE_PROVIDERS } from 'angularfire2';
import {DiabetesTrackerService} from "../providers/diabetes-tracker-service";
import {WeekOverviewPage} from "../pages/week-overview/week-overview";
import {DayInputPage} from "../pages/day-input/day-input";

const COMMON_CONFIG = {
  apiKey: "AIzaSyBtDxMbK1gLaLn7Ads5Y1mpMcw40oSoRAo",
  authDomain: "diabetes-tracker-bc574.firebaseapp.com",
  databaseURL: "https://diabetes-tracker-bc574.firebaseio.com",
  storageBucket: "diabetes-tracker-bc574.appspot.com",
  messagingSenderId: "676652794186"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    WeekOverviewPage,
    DayInputPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    WeekOverviewPage,
    DayInputPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FIREBASE_PROVIDERS,
    defaultFirebase(COMMON_CONFIG),
    DiabetesTrackerService
  ]
})
export class AppModule {}
