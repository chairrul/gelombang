import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MateriPage } from '../materi/materi';
import { ProfilePage } from '../profile/profile';
import { QuizPage } from '../quiz/quiz';
import { ScorePage } from '../score/score';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  splash = true;
  homePage = HomePage;

  constructor(public navCtrl: NavController) {

  }

   loadFirst() {
      this.navCtrl.push(MateriPage,{
      })
    }

    loadLogin() {
      this.navCtrl.push(LoginPage,{
      })
    }

    loadSignup() {
      this.navCtrl.push(SignupPage,{
      })
    }

    loadSecond() {
      this.navCtrl.push(QuizPage,{
      })
    }

    loadThird() {
      this.navCtrl.push(ScorePage,{
      })
    }

    loadFourth() {
      this.navCtrl.push(ProfilePage,{
      })
    }

  ionViewDidLoad() {
    setTimeout(() => {
    this.splash = false;
    }, 4000);
  }

}