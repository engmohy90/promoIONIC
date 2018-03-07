import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SelectcontactPage} from "../selectcontact/selectcontact";

/**
 * Generated class for the SendNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-new',
  templateUrl: 'send-new.html',
})
export class SendNewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendNewPage');
  }

  setBrand(brandName) {

    this.navCtrl.push('SelectcontactPage', {brandName: brandName}, {
      animate: true,
      direction: 'forward'
    });
  }

}
