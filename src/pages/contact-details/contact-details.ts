import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SharePage} from "../share/share";
import {NgForm} from "@angular/forms";

/**
 * Generated class for the ContactDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {

  registerCredentials = {
    phone: "",
    email: "",
    fristname: "",
    lastname: ""
  }
  person: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.get('person');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailsPage');
  }

  saveDetails(form: NgForm) {
    this.navCtrl.push('SharePage', {person: this.registerCredentials}, {
      animate: true,
      direction: 'forward'
    });

  }

}
