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

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts, public loadingCtrl: LoadingController,) {
    this.initializeItems();
  }

  initializeItems() {
    // alert('initialze Items');
    this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], {filter: "", multiple: true,hasPhoneNumber:true}).then((contacts) => {
      this.items = contacts;
    }, err => {
      alert(err);
    });
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      // alert('before: '+this.filteredContacts);
      this.filteredContacts = this.items.filter((item) => {
        // alert('item: '+item.toString());
        // alert('name: ' + item.displayName);
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
