import { ContactsProvider } from './../../providers/contacts/contacts';
import {Component} from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {SharePage} from "../share/share";
import {Contacts} from '@ionic-native/contacts';

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
  items=[]; // all contacts
  filteredContacts=[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private contacts: Contacts,
       public loadingCtrl: LoadingController,
      public _contacts:ContactsProvider) {
        this.items = this._contacts.getcontacts()
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;

    if (val && val.trim() != '') {

      this.filteredContacts = this.items.filter((item) => {

        let contactName = item.displayName;
        if(contactName && contactName!=''){
          return contactName.toLowerCase().indexOf(val.trim().toLowerCase()) !== -1
        }else{
          return false;
        }
      });
      alert('after: '+this.filteredContacts);
    }
  }

  send(item) {
    this.navCtrl.push(SharePage, {person:item}, {
      animate: true,
      direction: 'forward'
    });

  }



}
