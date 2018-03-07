import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ContactsProvider} from "../../providers/contacts/contacts";

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  items = []; // all contacts
  filteredContacts = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public _contacts: ContactsProvider,
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');

  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter ContactsPage');
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading Please Wait...',
      duration:3000
    });
    loading.present();
  }

  filterContacts(ev: any) {
    if(this.items==null || this.items.length==0){
      console.log('filterContacts','No Items To Filter');
      this.items = this._contacts.getContacts();
    }else{
      console.log('filterContacts items: ',this.items);
    }
    // Reset items back to all of the items
    // this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;

    if (val && val.trim() != '') {

      this.filteredContacts = this.items.filter((item) => {
        let contactName = item.displayName;
        if (contactName && contactName != '') {
          return contactName.toLowerCase().indexOf(val.trim().toLowerCase()) !== -1
        } else {
          return false;
        }
      });
      console.log('filterContacts',this.filteredContacts);
    }
  }

  selectContact(item) {
    this.navCtrl.push('SharePage', {person: item}, {
      animate: true,
      direction: 'forward'
    });

  }

}
