import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {
    this.initializeItems();
  }

  initializeItems() {

    // find all contacts
    const options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    let filter: ContactFieldType[] = ["displayName", "emails", "phoneNumbers", 'photos'];
    this.contacts.find(filter, options).then(contacts => {
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
}
