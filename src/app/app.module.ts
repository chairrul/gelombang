import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MateriPage } from '../pages/materi/materi';
import { ProfilePage } from '../pages/profile/profile';
import { QuizPage } from '../pages/quiz/quiz';
import { ScorePage } from '../pages/score/score';
import { Isi1Page } from '../pages/isi1/isi1';
import { Isi2Page } from '../pages/isi2/isi2';
import { Isi3Page } from '../pages/isi3/isi3';
import { Isi4Page } from '../pages/isi4/isi4';
import { Isi5Page } from '../pages/isi5/isi5';
import { Isi6Page } from '../pages/isi6/isi6';
import { Isi7Page } from '../pages/isi7/isi7';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MateriPage,
    ProfilePage,
    QuizPage,
    ScorePage,
    Isi1Page,
    Isi2Page,
    Isi3Page,
    Isi4Page,
    Isi5Page,
    Isi6Page,
    Isi7Page,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MateriPage,
    ProfilePage,
    QuizPage,
    ScorePage,
    Isi1Page,
    Isi2Page,
    Isi3Page,
    Isi4Page,
    Isi5Page,
    Isi6Page,
    Isi7Page,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
