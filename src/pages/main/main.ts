import {Component} from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {SharePage} from "../share/share";
import {ContactFieldType, ContactFindOptions, Contacts} from '@ionic-native/contacts';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  searchQuery: string = '';
  items: any[];
   contactsfound = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts,public loadingCtrl: LoadingController,) {
    this.initializeItems();
  }

  initializeItems() {
  alert('initialze items');
  let loading = this.loadingCtrl.create({
  spinner: 'bubbles',
  content: 'Loading Please Wait...',

});
  loading.present();
    // find all contacts
    const options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    let filter: ContactFieldType[] = ["displayName", "emails", "phoneNumbers", 'photos'];
    this.contacts.find(filter, options).then(contacts => {
      loading.dismiss();
      this.items = contacts
      alert(contacts[0].displayName)
    });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  send(item) {
    this.navCtrl.push(SharePage, {}, {
      animate: true,
      direction: 'forward'
    });

  }

  loadContacts() {
    this.initializeItems();
  }

   findContacts(ev: any) {
    let fields: ContactFieldType[] = ['displayName'];

    const options = new ContactFindOptions();
    options.filter = "Mohy";
    options.multiple = true;
    options.hasPhoneNumber = true;

    this.contacts.find(fields, options).then((contacts) => {
      this.contactsfound = contacts;
      alert(JSON.stringify(contacts[0]));
    });

    if (this.contactsfound.length == 0) {
      this.contactsfound.push({displayName: 'No Contacts found'});
    }

  }
}
