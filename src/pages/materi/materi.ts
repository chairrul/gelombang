import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Isi1Page } from '../isi1/isi1';
import { Isi2Page } from '../isi2/isi2';
import { Isi3Page } from '../isi3/isi3';
import { Isi4Page } from '../isi4/isi4';
import { Isi5Page } from '../isi5/isi5';
import { Isi6Page } from '../isi6/isi6';
import { Isi7Page } from '../isi7/isi7';
/**
 * Generated class for the MateriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-materi',
  templateUrl: 'materi.html',
})
export class MateriPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
     loadIsi1() {
      this.navCtrl.push(Isi1Page,{
      })
    }

    loadIsi2() {
      this.navCtrl.push(Isi2Page,{
      })
    }

    loadIsi3() {
      this.navCtrl.push(Isi3Page,{
      })
    }

    loadIsi4() {
      this.navCtrl.push(Isi4Page,{
      })
    }

    loadIsi5() {
      this.navCtrl.push(Isi5Page,{
      })
    }

    loadIsi6() {
      this.navCtrl.push(Isi6Page,{
      })
    }

    loadIsi7() {
      this.navCtrl.push(Isi7Page,{
      })
    }

}
