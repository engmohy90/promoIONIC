import {Storage} from '@ionic/storage';
import {Contacts} from '@ionic-native/contacts';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoadingController} from "ionic-angular";

/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {
  contactsList:any;
  constructor(public http: HttpClient,public loadingCtrl: LoadingController,
              public contacts: Contacts, private storage: Storage,) {
    console.log('Hello ContactsProvider Provider');
    this.loadContacts();
  }

  loadContacts(): any {
    console.log('ContactsProvider Provider','loadContacts');
    this.storage.get('contacts').then(val => {
      if (val == null || val.length == 0) {
        this.contacts.find(['displayName', 'name', 'phoneNumbers', 'emails'], {
          filter: "",
          multiple: true,
          hasPhoneNumber: true,
          desiredFields : ["displayName","name","phoneNumbers","emails"]
        }).then((contacts) => {
          this.storage.set('contacts', contacts);
          this.contactsList = contacts;
        }, err => {
          return (err);
        });
      } else {
        this.contactsList = val;
      }
    });
  }

  public getContacts(){
    console.log('ContactsProvider Provider','getContacts');
    if(this.contactsList==null || this.contactsList.length ==0 ){
      this.loadContacts();
      let loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        content: 'Loading Please Wait...',
        duration:3000
      });
      loading.present();
      return this.contactsList;
    }else{
      return this.contactsList;

    }
  }

}

