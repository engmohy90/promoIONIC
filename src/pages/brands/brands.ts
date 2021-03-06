import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the BrandsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-new',
  templateUrl: 'brands.html',
})
export class BrandsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandsPage');
  }

  setBrand(brandName) {

    this.navCtrl.push('ContactsPage', {brandName: brandName}, {
      animate: true,
      direction: 'forward'
    });
  }

}
